"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/Button";

const MENU_ANIMATION_MS = 300;

const navLinks = [
  { href: "/", label: "Početna" },
  { href: "/menu", label: "Menu" },
  { href: "/o-nama", label: "O nama" },
  { href: "/galerija", label: "Galerija" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

type MenuState = "entering" | "open" | "exiting";

function NavLink({
  href,
  label,
  onClick,
  mobile = false,
}: {
  href: string;
  label: string;
  onClick?: () => void;
  mobile?: boolean;
}) {
  const pathname = usePathname();
  const isActive =
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={`block font-medium tracking-widest uppercase transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
        mobile
          ? "py-3 text-sm"
          : "py-2 text-sm lg:py-0 lg:text-xs"
      } ${
        isActive
          ? "text-gold"
          : mobile
            ? "text-primary hover:text-gold"
            : "text-secondary hover:text-primary"
      }`}
    >
      {label}
    </Link>
  );
}

function MobileMenu({
  isOpen,
  onClose,
  onVisibilityChange,
}: {
  isOpen: boolean;
  onClose: () => void;
  onVisibilityChange: (visible: boolean) => void;
}) {
  const [mounted, setMounted] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const [menuState, setMenuState] = useState<MenuState>("entering");
  const exitTimerRef = useRef<number | null>(null);

  function clearExitTimer() {
    if (exitTimerRef.current !== null) {
      window.clearTimeout(exitTimerRef.current);
      exitTimerRef.current = null;
    }
  }

  function finishExit() {
    clearExitTimer();
    setIsRendered(false);
    onVisibilityChange(false);
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      clearExitTimer();
      setIsRendered(true);
      setMenuState("entering");
      onVisibilityChange(true);
      return;
    }

    if (!isRendered) return;

    setMenuState("exiting");
    clearExitTimer();
    exitTimerRef.current = window.setTimeout(finishExit, MENU_ANIMATION_MS);

    return clearExitTimer;
  }, [isOpen, isRendered, onVisibilityChange]);

  function handleAnimationEnd(event: React.AnimationEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget) return;

    if (menuState === "entering") {
      setMenuState("open");
      return;
    }

    if (menuState === "exiting") {
      finishExit();
    }
  }

  if (!mounted || !isRendered) return null;

  return createPortal(
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Mobilni izbornik"
      aria-hidden={menuState === "exiting"}
      data-menu-state={menuState}
      onAnimationEnd={handleAnimationEnd}
      className="mobile-menu-panel fixed inset-x-0 bottom-0 top-14 z-[90] flex flex-col overflow-y-auto bg-background px-4 pb-8 pt-6 lg:hidden"
    >
      <ul className="flex flex-col">
        {navLinks.map((link) => (
          <li
            key={link.href}
            className="border-b border-border-subtle last:border-b-0"
          >
            <NavLink
              href={link.href}
              label={link.label}
              onClick={onClose}
              mobile
            />
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Button href="/kontakt" className="w-full" onClick={onClose}>
          Rezerviraj stol
        </Button>
      </div>
    </div>,
    document.body,
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuVisible) return;

    const scrollY = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY);
    };
  }, [isMenuVisible]);

  const closeMenu = () => setIsOpen(false);
  const isMenuActive = isOpen || isMenuVisible;

  return (
    <>
      <header className="sticky top-0 z-[100] border-b border-border-subtle bg-background/95 backdrop-blur-sm">
        <nav
          className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 lg:h-16 lg:px-8"
          aria-label="Glavna navigacija"
        >
          <Link
            href="/"
            className="font-playfair text-xl tracking-wide text-primary transition-colors duration-200 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:text-2xl"
          >
            Noir Kafić
          </Link>

          <ul className="hidden shrink-0 items-center gap-6 lg:flex xl:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavLink href={link.href} label={link.label} />
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button href="/kontakt" className="px-6 py-3">
              Rezerviraj stol
            </Button>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-none text-primary transition-colors duration-200 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isMenuActive}
            aria-controls="mobile-menu"
            aria-label={isMenuActive ? "Zatvori izbornik" : "Otvori izbornik"}
          >
            {isMenuActive ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </nav>
      </header>

      <MobileMenu
        isOpen={isOpen}
        onClose={closeMenu}
        onVisibilityChange={setIsMenuVisible}
      />
    </>
  );
}
