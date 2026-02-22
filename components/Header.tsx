'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 animate-slide-down">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-foreground hover:opacity-80 transition">
          <Image
            src="/logo.png"
            alt="INFRATECH INDIA"
            width={60}
            height={60}
          />
          <span className="hidden sm:inline font-bold text-lg text-[#ee961b]">INFRATECH</span>
          <span className="hidden sm:inline font-bold text-lg">INDIA</span>

        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a href="tel:+917838737843">
            <Button variant="outline" size="sm" className="hover:bg-secondary transition">
              +91 7838737843
            </Button>
          </a>
          <Link href="/contact">
            <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 transition">
              Get a Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 hover:bg-secondary rounded-lg transition"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5 text-foreground" />
          ) : (
            <Menu className="w-5 h-5 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background animate-slide-down">
          <nav className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 rounded-lg text-foreground hover:bg-secondary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-2">
              <a href="tel:+917838737843" className="flex-1">
                <Button variant="outline" size="sm" className="w-full">
                  Call Us
                </Button>
              </a>
              <Link href="/contact" className="flex-1">
                <Button size="sm" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Get Quote
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>
    </header>
  )
}
