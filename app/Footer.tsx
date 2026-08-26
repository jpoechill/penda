import Image from "next/image";
import Link from "next/link";
import { GOOGLE_REVIEW_URL } from "./lib/site";

const footerLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/facilities", label: "Our Home" },
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
            <Link href="/" aria-label="Penda Home Care LLC home">
              <Image
                src="/logo_full_on_dark_clr_02.png"
                alt="Penda Home Care LLC"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-white/80">
              Personalized assisted living in a warm private home—helping seniors live safely,
              comfortably, and with dignity.
            </p>
            <p className="mt-4">
              <Link
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-white underline-offset-4 hover:underline"
              >
                Leave a Google review for Penda Home Care LLC
              </Link>
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold">Visit &amp; call</h2>
            <address className="mt-4 not-italic text-white/85 leading-relaxed">
              40968 W. Portis Drive
              <br />
              Maricopa, AZ 85138
              <br />
              <br />
              <a href="tel:5204577645" className="hover:text-white underline-offset-4 hover:underline">
                Phone: (520) 457-7645
              </a>
              <br />
              <span>Fax: (520) 423-3363</span>
              <br />
              <a
                href="mailto:pendacare2023@gmail.com"
                className="hover:text-white underline-offset-4 hover:underline"
              >
                pendacare2023@gmail.com
              </a>
            </address>
            <p className="mt-4 text-sm text-white/70">
              Serving local families and nearby communities
              {/* TODO: Confirm exact service area / counties with the care team */}
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
                href="https://www.facebook.com/profile.php?id=61568741845327"
                aria-label="Penda Home Care LLC on Facebook"
              >
                <Image src="/social-facebook.svg" alt="" width={36} height={36} aria-hidden="true" />
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/pendahomecare"
                aria-label="Penda Home Care LLC on Instagram"
              >
                <Image src="/social-instagram.svg" alt="" width={36} height={36} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/15 pt-8 text-sm text-white/65 md:flex-row md:items-center md:justify-between">
          <p>Penda Home Care LLC © {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
