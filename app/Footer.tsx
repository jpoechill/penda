import Image from "next/image";
import Link from "next/link";
import { homeLocations } from "./lib/facilities";
import {
  GOOGLE_REVIEW_URL,
  LICENSE_CAPACITY,
  LICENSE_NUMBER,
  LICENSE_TYPE,
  SITE_EMAIL,
  SITE_FAX,
  SITE_NAME,
  SITE_PHONE,
  SITE_PHONE_TEL,
  SITE_SOCIAL,
} from "./lib/site";

const footerLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/facilities/portis", label: "W. Portis" },
  { href: "/facilities/santa-monica", label: "W. Santa Monica" },
  { href: "/testimonials", label: "Stories" },
  { href: "/schedule", label: "Schedule a Visit" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white" role="contentinfo">
      <div className="container-site py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link
              href="/"
              aria-label={`${SITE_NAME} home`}
              className="mx-auto flex w-fit justify-center"
            >
              <Image
                src="/penda_mark.png"
                alt={SITE_NAME}
                width={160}
                height={160}
                className="h-24 w-auto md:h-28 lg:h-32"
              />
            </Link>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-white/80">
              Penda Home Care is committed to providing a safe, comfortable, and welcoming home
              where residents receive individualized care and attention.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/75">
              {LICENSE_TYPE}
              <br />
              ADHS License No. {LICENSE_NUMBER}
              <br />
              Licensed Capacity: {LICENSE_CAPACITY} Residents
            </p>
            <p className="mt-4">
              <Link
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-white underline-offset-4 hover:underline"
              >
                Leave a Google review for {SITE_NAME}
              </Link>
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold">Visit &amp; call</h2>
            <address className="mt-4 not-italic text-white/85 leading-relaxed">
              {homeLocations.map((home, index) => (
                <span key={home.id}>
                  {index > 0 && (
                    <>
                      <br />
                      <br />
                    </>
                  )}
                  <Link
                    href={home.path}
                    className="hover:text-white underline-offset-4 hover:underline"
                  >
                    {home.street}
                  </Link>
                  <br />
                  {home.cityLine}
                </span>
              ))}
              <br />
              <br />
              <a
                href={`tel:${SITE_PHONE_TEL}`}
                className="hover:text-white underline-offset-4 hover:underline"
              >
                Phone: {SITE_PHONE}
              </a>
              <br />
              <span>Fax: {SITE_FAX}</span>
              <br />
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="hover:text-white underline-offset-4 hover:underline"
              >
                {SITE_EMAIL}
              </a>
            </address>
            <p className="mt-4 text-sm text-white/70">
              Serving Maricopa, AZ and nearby communities
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold">Explore</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/85 underline-offset-4 transition hover:text-white hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-3">
              <Link href="/schedule" className="btn-on-dark !py-2.5 !px-4 text-sm">
                Schedule a Care Consultation
              </Link>
            </div>
            <div className="mt-6 flex items-center gap-5">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={SITE_SOCIAL.facebook}
                aria-label={`${SITE_NAME} on Facebook`}
              >
                <Image src="/social-facebook.svg" alt="" width={36} height={36} aria-hidden="true" />
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={SITE_SOCIAL.instagram}
                aria-label={`${SITE_NAME} on Instagram`}
              >
                <Image src="/social-instagram.svg" alt="" width={36} height={36} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/15 pt-8 text-sm text-white/65 md:flex-row md:items-center md:justify-between">
          <p>
            {SITE_NAME} © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
