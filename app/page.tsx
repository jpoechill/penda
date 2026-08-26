'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SectionHeading from "./components/SectionHeading";
import CtaBanner from "./components/CtaBanner";
import ReviewCta from "./components/ReviewCta";

const services = [
  {
    title: "Comfortable Living Spaces",
    description:
      "Thoughtfully arranged rooms with cozy furnishings and natural light—spaces that feel personal, private, and truly like home.",
    icon: "/svg/sofa.svg",
  },
  {
    title: "Accessibility for All",
    description:
      "Wide pathways, grab bars, and mobility-friendly layouts so everyday movement feels safer and more independent.",
    icon: "/svg/wheelchair.svg",
  },
  {
    title: "Safety and Security",
    description:
      "Attentive supervision and emergency readiness give families peace of mind that help is close when it’s needed.",
    icon: "/svg/lock.svg",
  },
  {
    title: "Transportation Services",
    description:
      "Reliable, accessible transportation arranged so residents can stay connected to appointments, errands, and community life.",
    icon: "/svg/van.svg",
  },
  {
    title: "Medication Management",
    description:
      "Careful coordination and timely support so medications are taken safely according to each person’s care plan.",
    icon: "/svg/pill.svg",
  },
  {
    title: "Prepared Meals",
    description:
      "Fresh, balanced meals with dietary accommodations—heart-healthy, low-sodium, diabetic-friendly, and customized options.",
    icon: "/img/cook.jpeg",
  },
];

const benefits = [
  {
    title: "Safety without losing independence",
    description:
      "Support with daily living so your loved one can stay as independent as possible—while you know they’re looked after.",
  },
  {
    title: "Comfort that feels familiar",
    description:
      "A small private home setting with warm hospitality, not an institutional feel. Everyday life, with care built in.",
  },
  {
    title: "Dignity in every interaction",
    description:
      "Caregivers who listen, respect preferences, and treat each resident like family—because personalized care starts with respect.",
  },
  {
    title: "Peace of mind for families",
    description:
      "Clear communication and dependable routines help you focus on being a daughter, son, or spouse—not carrying every care task alone.",
  },
];

const steps = [
  {
    step: "01",
    title: "Reach out",
    description: "Call or schedule a consultation. Share what your loved one needs and what matters most to your family.",
  },
  {
    step: "02",
    title: "Visit our home",
    description: "Tour the residence, meet the care team, and see whether the atmosphere feels right.",
  },
  {
    step: "03",
    title: "Plan care together",
    description: "We tailor support around daily routines, preferences, and wellness goals—always with dignity first.",
  },
  {
    step: "04",
    title: "Settle in with support",
    description: "From the first day, we help with the transition so your loved one feels welcomed and secure.",
  },
];

export default function Home() {
  const [videoReady, setVideoReady] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (!videoReady) return;
    const timer = setTimeout(() => setShowVideo(true), 1000);
    return () => clearTimeout(timer);
  }, [videoReady]);

  return (
    <main>
      <Header />

      {/* 1. Hero */}
      <section className="relative isolate min-h-[88vh] overflow-hidden pt-20 md:min-h-[92vh]">
        <div className="absolute inset-0">
          {!showVideo && (
            <Image
              src="/img/cover_03.jpg"
              alt="Warm, welcoming living space at Penda Home Care"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          )}
          <video
            src="/video/penda_walkthrough_website.mp4"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              showVideo ? "opacity-100" : "opacity-0"
            }`}
            autoPlay
            loop
            muted
            playsInline
            onCanPlayThrough={() => setVideoReady(true)}
            aria-hidden={!showVideo}
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#025176]/88 via-[#025176]/55 to-[#025176]/25"
            aria-hidden="true"
          />
        </div>

        <div className="container-site relative flex min-h-[88vh] flex-col justify-end pb-16 pt-32 md:min-h-[92vh] md:justify-center md:pb-24 md:pt-28">
          <div className="max-w-2xl animate-fade-up">
            <p className="font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Penda Home Care LLC
            </p>
            <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-white/85">
              Maricopa, Arizona
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.15] tracking-tight text-white sm:text-5xl md:text-6xl">
              Care that helps your loved one live safely and comfortably at home
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/90 md:text-xl">
              Personalized assisted living in a warm private home in Maricopa, AZ—where dignity,
              independence, and everyday comfort come first.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/schedule" className="btn-on-dark">
                Schedule a Care Consultation
              </Link>
              <Link href="/services" className="btn-ghost-on-dark">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Introduction */}
      <section className="section-pad bg-surface" aria-labelledby="intro-heading">
        <div className="container-site">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                Who we are
              </p>
              <h2
                id="intro-heading"
                className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
              >
                A small Maricopa, AZ home dedicated to personal, heartfelt care
              </h2>
              <p className="mt-5 prose-care">
                Our mission at Penda Home Care LLC is to embody the love and care that “Penda”
                represents. We offer a home-like experience where respect, loyalty, and integrity
                guide everything we do.
              </p>
              <p className="mt-4 prose-care">
                Based in Maricopa, Arizona, we provide personalized support tailored to each
                person’s needs—so seniors can live with comfort, safety, and meaningful connection
                right here in our local community.
              </p>
              <Link href="/about" className="btn-secondary mt-8">
                Learn more about us
              </Link>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl lg:order-none">
              <Image
                src="/img/who_we_are.png"
                alt="Family and caregivers sharing a warm moment together at home"
                fill
                className="object-cover object-right"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services overview */}
      <section className="section-pad bg-[var(--warm-wash)]" aria-labelledby="services-heading">
        <div className="container-site">
          <SectionHeading
            id="services-heading"
            eyebrow="Our care"
            title="Support designed for everyday life"
            description="From safe living spaces to meals and medication support, we help with the essentials that keep daily life steady and dignified."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="card-quiet transition duration-300 hover:border-primary/40">
                <div className="mb-4 flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-primary-soft">
                  <Image
                    src={service.icon}
                    alt=""
                    width={48}
                    height={48}
                    className={service.icon.endsWith(".svg") ? "h-7 w-7" : "h-full w-full object-cover"}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-muted">{service.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/services" className="btn-primary">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Benefits */}
      <section className="section-pad bg-surface" aria-labelledby="benefits-heading">
        <div className="container-site">
          <SectionHeading
            id="benefits-heading"
            eyebrow="Why families choose Penda"
            title="Care that supports clients—and the people who love them"
            description="Whether you’re seeking support for yourself or for a parent, we focus on the outcomes that matter most: safety, comfort, independence, and peace of mind."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-2xl border-l-4 border-accent bg-[var(--warm-wash)] px-6 py-6 md:px-8"
              >
                <h3 className="font-display text-xl font-semibold text-foreground">{benefit.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-muted">{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How care begins */}
      <section className="section-pad bg-primary-soft/60" aria-labelledby="how-heading">
        <div className="container-site">
          <SectionHeading
            id="how-heading"
            eyebrow="Getting started"
            title="How care begins"
            description="Starting care should feel clear and calm. Here’s what the first steps typically look like."
          />
          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((item) => (
              <li key={item.step} className="card-quiet">
                <span className="font-display text-3xl font-semibold text-primary/40">{item.step}</span>
                <h3 className="mt-3 font-display text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-muted">{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 6. Review */}
      <section className="section-pad bg-surface" aria-label="Google review">
        <div className="container-site">
          <ReviewCta />
        </div>
      </section>

      {/* 7. Final CTA */}
      <CtaBanner />

      <Footer />
    </main>
  );
}
