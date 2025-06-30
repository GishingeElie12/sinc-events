"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on pathname change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 py-4 px-6 md:px-12 transition-all duration-300 ${
        isScrolled ? "glassmorphism py-3" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link
          href="/"
          className="text-lg font-mono font-semibold tracking-tight hover:opacity-80 transition-opacity"
        >
          Gishinge Elie
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className="flex flex-col justify-center items-center w-6 h-6 space-y-1.5">
            <span
              className={`block h-px w-6 bg-foreground transform transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-foreground transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-px w-6 bg-foreground transform transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="/" isActive={pathname === "/"}>
            Home
          </NavLink>
          
          <NavLink href="/KnowMe" isActive={pathname === "/KnowMe"}>
            Get to Know Me
          </NavLink>
        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-background flex flex-col justify-center items-center z-40 transition-transform duration-500 ease-in-out">
          <nav className="flex flex-col items-center space-y-8 text-2xl font-light">
            <Link href="/" className="hover:opacity-80" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            
            <Link href="/KnowMe" className="hover:opacity-80" onClick={() => setIsMenuOpen(false)}>
              Get to Know Me
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLink = ({
  href,
  children,
  isActive,
}: {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
}) => (
  <Link
    href={href}
    className={`relative font-light hover:opacity-80 transition-all ${
      isActive ? "font-normal" : ""
    }`}
  >
    {children}
    <span
      className={`absolute -bottom-1 left-0 w-full h-px bg-foreground transform origin-left transition-transform duration-300 ${
        isActive ? "scale-x-100" : "scale-x-0"
      }`}
    />
  </Link>
);

export default Navbar;
