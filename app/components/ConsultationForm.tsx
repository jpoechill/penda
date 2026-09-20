"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import {
  type ConsultationFields,
  type FieldErrors,
  validateConsultationFields,
} from "../lib/consultation";
import { SITE_EMAIL, SITE_PHONE, SITE_PHONE_TEL } from "../lib/site";

type Status = "idle" | "submitting" | "success" | "error";

function fieldClass(hasError: boolean): string {
  return [
    "input-field font-normal",
    hasError ? "border-red-500 focus:border-red-600 focus:ring-red-200" : "",
  ]
    .filter(Boolean)
    .join(" ");
}

export default function ConsultationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [formStartedAt, setFormStartedAt] = useState(0);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setFormStartedAt(Date.now());
  }, []);

  useEffect(() => {
    if (status !== "success") return;
    successRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [status]);

  function resetTiming() {
    setFormStartedAt(Date.now());
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const draft = {
      name: data.get("name"),
      contact: data.get("contact"),
      availability: data.get("availability"),
      referral: data.get("referral"),
      notes: data.get("notes"),
    };

    const { errors } = validateConsultationFields(draft);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setStatus("error");
      setErrorMessage(Object.values(errors)[0] || "Please fix the highlighted fields.");
      return;
    }

    setFieldErrors({});
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...draft,
          company: data.get("company"),
          formStartedAt,
        }),
      });

      const payload = (await response.json().catch(() => ({}))) as {
        error?: string;
        fieldErrors?: FieldErrors;
      };

      if (!response.ok) {
        setStatus("error");
        if (payload.fieldErrors) setFieldErrors(payload.fieldErrors);
        setErrorMessage(
          payload.error || "Something went wrong. Please try again or call us.",
        );
        return;
      }

      form.reset();
      resetTiming();
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again or call us.");
    }
  }

  if (status === "success") {
    return (
      <div
        ref={successRef}
        className="mt-10 rounded-3xl border border-border bg-[var(--warm-wash)] p-6 md:p-10"
        role="status"
        tabIndex={-1}
      >
        <h2 className="font-display text-2xl font-semibold text-foreground">
          Request received
        </h2>
        <p className="mt-3 prose-care">
          Thank you. We’ll follow up soon to schedule your care consultation.
          Prefer to talk now?{" "}
          <a href={`tel:${SITE_PHONE_TEL}`} className="font-semibold text-primary hover:underline">
            Call {SITE_PHONE}
          </a>
          .
        </p>
        <button
          type="button"
          className="btn-secondary mt-6"
          onClick={() => {
            setStatus("idle");
            setFieldErrors({});
            setErrorMessage("");
            resetTiming();
          }}
        >
          Submit another request
        </button>
      </div>
    );
  }

  const disabled = status === "submitting";

  function clearFieldError(key: keyof ConsultationFields) {
    if (!fieldErrors[key]) return;
    setFieldErrors((prev) => {
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }

  return (
    <form
      className="relative mt-10 rounded-3xl border border-border bg-[var(--warm-wash)] p-6 md:p-10"
      onSubmit={onSubmit}
      noValidate
    >
      {/* Honeypot  -  hidden from people, visible to simple bots */}
      <div className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden="true">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="block font-semibold text-foreground">
          Name <span className="text-primary">*</span>
          <input
            type="text"
            name="name"
            required
            maxLength={80}
            autoComplete="name"
            className={fieldClass(Boolean(fieldErrors.name))}
            placeholder="Jane Smith"
            disabled={disabled}
            aria-invalid={Boolean(fieldErrors.name)}
            onChange={() => clearFieldError("name")}
          />
          {fieldErrors.name && (
            <span className="mt-1 block text-sm font-normal text-red-700">{fieldErrors.name}</span>
          )}
        </label>
        <label className="block font-semibold text-foreground">
          Email or phone <span className="text-primary">*</span>
          <input
            type="text"
            name="contact"
            required
            maxLength={120}
            autoComplete="email"
            className={fieldClass(Boolean(fieldErrors.contact))}
            placeholder="email@example.com or (520) 555-0123"
            disabled={disabled}
            aria-invalid={Boolean(fieldErrors.contact)}
            onChange={() => clearFieldError("contact")}
          />
          {fieldErrors.contact && (
            <span className="mt-1 block text-sm font-normal text-red-700">
              {fieldErrors.contact}
            </span>
          )}
        </label>
      </div>

      <label className="mt-5 block font-semibold text-foreground">
        What is your availability?
        <input
          type="text"
          name="availability"
          maxLength={200}
          className={fieldClass(Boolean(fieldErrors.availability))}
          placeholder="e.g. Weekday mornings, or specific dates"
          disabled={disabled}
          aria-invalid={Boolean(fieldErrors.availability)}
          onChange={() => clearFieldError("availability")}
        />
        {fieldErrors.availability && (
          <span className="mt-1 block text-sm font-normal text-red-700">
            {fieldErrors.availability}
          </span>
        )}
      </label>

      <label className="mt-5 block font-semibold text-foreground">
        How did you hear about us?
        <input
          type="text"
          name="referral"
          maxLength={120}
          className={fieldClass(Boolean(fieldErrors.referral))}
          placeholder="Friend, search, social media…"
          disabled={disabled}
          aria-invalid={Boolean(fieldErrors.referral)}
          onChange={() => clearFieldError("referral")}
        />
        {fieldErrors.referral && (
          <span className="mt-1 block text-sm font-normal text-red-700">{fieldErrors.referral}</span>
        )}
      </label>

      <label className="mt-5 block font-semibold text-foreground">
        Anything else we should know?
        <textarea
          name="notes"
          rows={4}
          maxLength={1500}
          className={`${fieldClass(Boolean(fieldErrors.notes))} resize-y`}
          placeholder="Share a bit about the care you’re looking for (optional)"
          disabled={disabled}
          aria-invalid={Boolean(fieldErrors.notes)}
          onChange={() => clearFieldError("notes")}
        />
        {fieldErrors.notes && (
          <span className="mt-1 block text-sm font-normal text-red-700">{fieldErrors.notes}</span>
        )}
      </label>

      <p className="mt-4 text-sm text-muted">
        Your request is emailed to {SITE_EMAIL}. Prefer to talk now?{" "}
        <a href={`tel:${SITE_PHONE_TEL}`} className="font-semibold text-primary hover:underline">
          Call {SITE_PHONE}
        </a>
        .
      </p>

      {status === "error" && errorMessage && !Object.keys(fieldErrors).length && (
        <p className="mt-4 text-sm font-medium text-red-700" role="alert">
          {errorMessage}
        </p>
      )}

      <button type="submit" className="btn-primary mt-6 w-full md:w-auto" disabled={disabled}>
        {status === "submitting" ? "Sending…" : "Request a Consultation"}
      </button>
    </form>
  );
}
