'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/facilities", label: "Our Home" },
  { href: "/testimonials", label: "Stories" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname().split("/")[1] || "";
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setShowMenu(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = showMenu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showMenu]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled || showMenu
          ? "border-b border-border bg-white/95 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="container-site">
        <div className="flex h-[4.5rem] items-center justify-between gap-4 md:h-[5.25rem]">
          <Link
            href="/"
            className="relative z-10 flex shrink-0 items-center gap-3"
            aria-label="Penda Home Care LLC, Maricopa, AZ — home"
          >
            <Image
              src="/logo_full_on_white_clr_03.png"
              alt="Penda Home Care LLC"
              width={200}
              height={48}
              className="h-10 w-auto md:h-12"
              priority
            />
            <span className="hidden border-l border-border pl-3 text-sm font-medium leading-tight text-muted sm:block">
              Maricopa, AZ
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {navLinks.map((link) => {
              const active = pathname === link.href.replace("/", "");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[1.05rem] transition-colors hover:text-primary ${
                    active
                      ? "font-semibold text-primary underline decoration-2 underline-offset-8"
                      : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link href="/schedule" className="btn-secondary !py-2.5 !px-4 text-[0.95rem]">
              Schedule a Consultation
            </Link>
            <Link href="tel:5204577645" className="btn-primary !py-2.5 !px-4 text-[0.95rem]">
              Call Now
            </Link>
          </div>

          <button
            type="button"
            className="relative z-10 flex h-11 w-11 items-center justify-center rounded-lg border border-border lg:hidden"
            aria-expanded={showMenu}
            aria-controls="mobile-menu"
            aria-label={showMenu ? "Close menu" : "Open menu"}
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? (
              <Image src="/cross_icon.svg" alt="" width={18} height={18} aria-hidden="true" />
            ) : (
              <Image src="/hamburger_icon.svg" alt="" width={22} height={22} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {showMenu && (
        <div
          id="mobile-menu"
          className="fixed inset-0 top-[4.5rem] z-40 overflow-y-auto bg-white px-5 pb-10 pt-4 shadow-lg md:top-[5.25rem] lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3.5 text-lg text-foreground hover:bg-primary-soft"
                onClick={() => setShowMenu(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <Link href="/schedule" className="btn-secondary w-full" onClick={() => setShowMenu(false)}>
              Schedule a Consultation
            </Link>
            <Link href="tel:5204577645" className="btn-primary w-full" onClick={() => setShowMenu(false)}>
              Call (520) 457-7645
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
