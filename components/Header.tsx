'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
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
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold">
            R
          </div>
          <span>InfraTech</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-accent hover:text-accent transition-colors relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <Button variant="outline" size="sm" className="hover:bg-secondary transition">
            Call us
          </Button>
          <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 transition">
            Book Now
          </Button>
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
              <Button variant="outline" size="sm" className="flex-1">
                Call us
              </Button>
              <Button size="sm" className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90">
                Book Now
              </Button>
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
