"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type NavIconName = "home" | "resources" | "about" | "partners" | "download" | "manual";

const navIcons: Record<NavIconName, ReactNode> = {
  home: <><path d="m3 10 9-7 9 7" /><path d="M5 9v11h14V9" /><path d="M9 20v-6h6v6" /></>,
  resources: <><path d="M4 19V5" /><path d="M4 19h16" /><path d="m7 14 4-4 3 3 5-6" /></>,
  about: <><path d="M12 3 14.8 9.2 21 12l-6.2 2.8L12 21l-2.8-6.2L3 12l6.2-2.8L12 3Z" /></>,
  partners: <><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="10" cy="7" r="4" /><path d="M20 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
  download: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="m7 10 5 5 5-5" /><path d="M12 15V3" /></>,
  manual: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" /></>,
};

function NavIcon({ name }: { name: NavIconName }) {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {navIcons[name]}
    </svg>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Início", href: "#hero", icon: "home" },
    { name: "Principais Recursos", href: "#recursos", icon: "resources" },
    { name: "Porquê a Sysgrano?", href: "#porque", icon: "about" },
    { name: "Parcerias", href: "#parcerias", icon: "partners" },
    { name: "Download", href: "#download", icon: "download" },
    { name: "Manual de Uso", href: "#manual", icon: "manual" },
  ] as const;

  return (
    <header className="sticky top-0 z-50 w-full bg-[#89a87c] shadow-md transition-all">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="#hero" className="flex items-center gap-2 group">
          <Image
            src="/assets/logos/sysgrano_logo.png"
            alt="Logo do Sysgrano"
            width={40}
            height={40}
            className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
            priority
          />
          <span className="text-3xl font-extrabold tracking-tight">
            <span className="text-[#36471F]">Sys</span>
            <span className="text-[#562E15]">grano</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="inline-flex items-center gap-1.5 whitespace-nowrap px-2 py-2 text-sm font-medium text-[#3E3B37] hover:text-[#36471F] hover:underline underline-offset-4 transition-all duration-200 xl:px-2.5 xl:text-[15px]"
            >
              <NavIcon name={link.icon} />
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-[#3E3B37] hover:text-[#36471F] hover:bg-black/5 focus:outline-none transition-colors"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-[#89a87c] border-t border-black/10 px-4 pt-2 pb-6 space-y-1 shadow-lg animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 rounded-md px-3 py-2.5 text-base font-medium text-[#3E3B37] hover:bg-black/5 hover:text-[#36471F]"
            >
              <NavIcon name={link.icon} />
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
