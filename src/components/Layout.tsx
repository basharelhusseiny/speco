"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { navLinks, contact } from "@/lib/content";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "./SocialIcons";

function Logo({
  tone,
  className,
}: {
  tone: "dark" | "light";
  className?: string;
}) {
  const variant = tone === "light" ? "orange" : "white";
  return (
    <picture>
      <source
        srcSet={`/assets/logo/speco-logo-${variant}.webp`}
        type="image/webp"
      />
      <img
        src={`/assets/logo/speco-logo-${variant}.png`}
        alt="SPECO Building Technology"
        width={832}
        height={194}
        className={className ?? "h-8 md:h-9 w-auto"}
      />
    </picture>
  );
}

/** Scroll top on route change; jump to #hash when present. */
function ScrollManager() {
  const pathname = usePathname();
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const el = document.getElementById(window.location.hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "auto", block: "start" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function Layout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [tone, setTone] = useState<"dark" | "light">("dark");
  const [overHero, setOverHero] = useState(true);
  const pathname = usePathname();

  // Track which section sits under the header: hero = transparent; otherwise
  // solid, dark or light to match, with the logo colour swapped to suit.
  useEffect(() => {
    let raf = 0;
    const measure = () => {
      const sections = document.querySelectorAll<HTMLElement>("[data-tone]");
      const probe = 72;
      for (const s of sections) {
        const r = s.getBoundingClientRect();
        if (r.top <= probe && r.bottom > probe) {
          setTone(s.dataset.tone === "light" ? "light" : "dark");
          setOverHero(s.hasAttribute("data-hero"));
          break;
        }
      }
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  useEffect(() => setMenuOpen(false), [pathname]);
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) =>
      e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (to: string) =>
    to === "/"
      ? pathname === "/"
      : (pathname ?? "") === to || (pathname ?? "").startsWith(`${to}/`);

  const solid = !overHero;
  const headerText =
    solid && tone === "light" ? "text-body-dark" : "text-white";
  const linkIdle =
    solid && tone === "light"
      ? "text-body-dark/70 hover:text-body-dark"
      : "text-white/75 hover:text-white";

  return (
    <div className="flex min-h-screen flex-col bg-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:bg-speco focus:px-4 focus:py-2 focus:font-heading focus:text-sm focus:font-semibold focus:uppercase focus:text-ink"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300 ${
          menuOpen
            ? "border-b border-white/[0.08] bg-[#0A0A0A]"
            : solid
              ? tone === "light"
                ? "border-b border-black/[0.08] bg-white/95 backdrop-blur-md shadow-xs"
                : "border-b border-white/[0.08] bg-ink/90 backdrop-blur-md shadow-xs"
              : "bg-transparent"
        }`}
      >
        <div className="container-x flex h-16 items-center justify-between md:h-20">
          {/* Logo permanently visible */}
          <Link
            href="/"
            aria-label="SPECO Building Technology — home"
            className="flex items-center py-2 transition-opacity duration-200 hover:opacity-90"
          >
            <Logo tone={menuOpen ? "dark" : solid ? tone : "dark"} />
          </Link>

          <nav
            aria-label="Primary"
            className={`hidden items-center gap-1 lg:flex ${headerText}`}
          >
            {navLinks.map((l) => {
              const active = isActive(l.to);
              return (
                <Link
                  key={l.to}
                  href={l.to}
                  className={`relative px-3.5 py-2 font-heading text-[14px] font-semibold uppercase tracking-[0.06em] transition-colors duration-200 ${
                    active ? "text-speco" : linkIdle
                  }`}
                >
                  {l.label}
                  {active && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-speco" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href="/contact"
              className="inline-flex h-10 items-center bg-speco px-5 font-heading text-[13px] font-semibold uppercase tracking-[0.08em] text-ink transition-all duration-200 hover:bg-speco-dark hover:shadow-md hover:shadow-speco/25 active:scale-95"
            >
              Get a Quote
            </Link>
          </div>

          <button
            type="button"
            className={`flex h-10 w-10 items-center justify-center rounded-sm border transition-colors lg:hidden ${
              menuOpen
                ? "border-white/20 bg-white/[0.08] text-white hover:border-speco hover:text-speco"
                : solid && tone === "light"
                  ? "border-black/15 bg-black/[0.04] text-body-dark hover:border-speco hover:text-speco-dark"
                  : "border-white/15 bg-white/[0.04] text-white hover:border-speco hover:text-speco"
            }`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile full-screen modern drawer menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col bg-[#0A0A0A] pt-20 lg:hidden"
          role="dialog"
          aria-label="Menu"
        >
          <div className="container-x flex flex-1 flex-col justify-between overflow-y-auto py-6">
            <nav aria-label="Mobile Navigation" className="space-y-2">
              {navLinks.map((l, idx) => {
                const active = isActive(l.to);
                return (
                  <Link
                    key={l.to}
                    href={l.to}
                    className={`group flex items-center justify-between rounded-sm border px-4 py-3.5 transition-all duration-200 ${
                      active
                        ? "border-speco/40 bg-speco/[0.08] text-speco"
                        : "border-white/[0.07] bg-white/[0.02] text-white hover:border-speco/40 hover:bg-white/[0.05] hover:text-speco"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="font-heading text-xs font-semibold tabular-nums text-speco">
                        0{idx + 1}
                      </span>
                      <span className="font-heading text-lg font-semibold uppercase tracking-tight">
                        {l.label}
                      </span>
                    </div>
                    <ArrowUpRight
                      className={`h-4 w-4 transition-transform duration-200 ${
                        active
                          ? "translate-x-0.5 -translate-y-0.5 text-speco"
                          : "text-white/40 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-speco"
                      }`}
                      aria-hidden="true"
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Footer Info */}
            <div className="mt-8 space-y-4 border-t border-white/[0.08] pt-6">
              <Link
                href="/contact"
                className="flex h-12 w-full items-center justify-center gap-2 bg-speco font-heading text-sm font-semibold uppercase tracking-[0.08em] text-ink transition-colors hover:bg-speco-dark"
              >
                <span>Request a Quote</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>

              <div className="flex items-center justify-between pt-2 text-xs text-body-ondark/70">
                <a
                  href={contact.phoneHref}
                  className="flex items-center gap-2 hover:text-white"
                >
                  <Phone className="h-3.5 w-3.5 text-speco" />
                  <span>{contact.phoneDisplay}</span>
                </a>
                <div className="flex items-center gap-3">
                  <a
                    href={contact.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="text-white/60 transition-colors hover:text-speco"
                  >
                    <FacebookIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-white/60 transition-colors hover:text-speco"
                  >
                    <InstagramIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="text-emerald-400 transition-colors hover:text-emerald-300"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <main id="main" className="flex-1">
        {children}
      </main>

      {/* Upgraded Architectural Footer */}
      <footer
        className="relative border-t border-white/[0.08] bg-ink"
        data-tone="dark"
      >
        {/* Subtle top orange gradient rule */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-speco/60 to-transparent" />

        <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
          <div>
            <Logo tone="dark" className="h-9 md:h-10 w-auto" />

            {/* Manufacturing Credential Badge */}
            <div className="mt-4 inline-flex items-center gap-2 rounded-xs border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider text-speco">
              <span>Juba Factory · Est. 2023</span>
            </div>

            <p className="mt-4 max-w-xs text-sm leading-[1.65] text-body-ondark/70">
              South Sudan's first local manufacturer of EPS 3D wall panels and
              prefabricated sandwich panels. Engineered here. Built faster.
            </p>

            <div className="mt-6 flex gap-2.5">
              <a
                href={contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SPECO on Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-xs border border-white/15 text-white/70 transition-all duration-200 hover:border-speco hover:bg-speco hover:text-white hover:shadow-md hover:shadow-speco/20"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SPECO on Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xs border border-white/15 text-white/70 transition-all duration-200 hover:border-speco hover:bg-speco hover:text-white hover:shadow-md hover:shadow-speco/20"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SPECO on WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-xs border border-white/15 text-white/70 transition-all duration-200 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white hover:shadow-md hover:shadow-emerald-500/20"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer — company">
            <h3 className="flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.12em] text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-speco" />
              <span>Company</span>
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  className="link-underline inline-block py-1 text-body-ondark/75 transition-colors hover:text-speco"
                  href="/about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="link-underline inline-block py-1 text-body-ondark/75 transition-colors hover:text-speco"
                  href="/gallery"
                >
                  Project Gallery
                </Link>
              </li>
              <li>
                <Link
                  className="link-underline inline-block py-1 text-body-ondark/75 transition-colors hover:text-speco"
                  href="/contact"
                >
                  Contact & Quotes
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Footer — products and services">
            <h3 className="flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.12em] text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-speco" />
              <span>Products</span>
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  className="link-underline inline-block py-1 text-body-ondark/75 transition-colors hover:text-speco"
                  href="/products/eps-panels"
                >
                  EPS 3D Wall Panels
                </Link>
              </li>
              <li>
                <Link
                  className="link-underline inline-block py-1 text-body-ondark/75 transition-colors hover:text-speco"
                  href="/products/prefab-panels"
                >
                  Sandwich Panels
                </Link>
              </li>
              <li>
                <Link
                  className="link-underline inline-block py-1 text-body-ondark/75 transition-colors hover:text-speco"
                  href="/products/prefab-panels#roofing"
                >
                  Roofing & Accessories
                </Link>
              </li>
              <li>
                <Link
                  className="link-underline inline-block py-1 text-body-ondark/75 transition-colors hover:text-speco"
                  href="/services"
                >
                  Building Services
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h3 className="flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.12em] text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-speco" />
              <span>Factory & Office</span>
            </h3>
            <ul className="mt-4 space-y-3.5 text-sm text-body-ondark/80">
              <li className="flex items-start gap-3">
                <Phone
                  className="mt-0.5 h-4 w-4 shrink-0 text-speco"
                  aria-hidden="true"
                />
                <a
                  href={contact.phoneHref}
                  className="link-underline hover:text-white"
                >
                  {contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail
                  className="mt-0.5 h-4 w-4 shrink-0 text-speco"
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${contact.email}`}
                  className="link-underline hover:text-white"
                >
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-speco"
                  aria-hidden="true"
                />
                <a
                  href={contact.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline hover:text-white"
                >
                  {contact.address}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock
                  className="mt-0.5 h-4 w-4 shrink-0 text-speco"
                  aria-hidden="true"
                />
                <span className="text-xs leading-relaxed text-body-ondark/65">
                  Mon to Fri, 8:00 AM — 5:00 PM
                  <br />
                  Sat, 9:00 AM — 1:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.08]">
          <div className="container-x flex flex-col items-center justify-between gap-2 py-4 sm:flex-row text-xs text-white/50">
            <p>© 2026 SPECO Building Technology. All rights reserved.</p>
            <p className="font-mono text-[11px] text-white/40">
              Built by Local Hands · Juba, South Sudan
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Action Cluster: Facebook + Phone Call + WhatsApp */}
      <div className="fixed bottom-5 right-4 sm:right-6 z-30 flex flex-col items-center gap-2.5 sm:gap-3">
        {/* Direct Call Floating Button */}
        <a
          href={contact.phoneHref}
          aria-label="Call SPECO Factory Direct"
          className="group relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-speco text-white shadow-lg shadow-speco/30 transition-all duration-300 hover:bg-speco-dark hover:scale-110 active:scale-95"
        >
          <Phone className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
          <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-xs border border-white/10 bg-black/85 px-2.5 py-1 text-xs font-heading font-medium text-white shadow-md backdrop-blur-md transition-opacity group-hover:block">
            Call Direct
          </span>
        </a>

        {/* Facebook Floating Button */}
        <a
          href={contact.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow SPECO on Facebook"
          className="group relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-lg shadow-[#1877F2]/25 transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <FacebookIcon className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-xs border border-white/10 bg-black/85 px-2.5 py-1 text-xs font-heading font-medium text-white shadow-md backdrop-blur-md transition-opacity group-hover:block">
            Facebook
          </span>
        </a>

        {/* WhatsApp Floating Button */}
        <a
          href={contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with SPECO on WhatsApp"
          className="group relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <WhatsAppIcon className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-xs border border-white/10 bg-black/85 px-2.5 py-1 text-xs font-heading font-medium text-white shadow-md backdrop-blur-md transition-opacity group-hover:block">
            WhatsApp
          </span>
        </a>
      </div>

      <ScrollManager />
    </div>
  );
}
