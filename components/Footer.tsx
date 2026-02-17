"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Hammer,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const scrollToTopRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate footer sections on scroll
      gsap.from(".footer-section", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate social icons
      gsap.from(".social-icon", {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".social-icons-container",
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate footer links
      gsap.from(".footer-link", {
        x: -20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: 0 },
      ease: "power3.inOut",
    });
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "Building Renovation", href: "/services" },
    { name: "Interior Finishing", href: "/services" },
    { name: "Roofing Solutions", href: "/services" },
    { name: "Foundation Repair", href: "/services" },
    { name: "Commercial Construction", href: "/services" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer
      ref={footerRef}
      className="w-full bg-secondary/40 border-t border-border"
    >
      {/* Newsletter Section */}
      <div className="w-full bg-accent/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="footer-section flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-muted-foreground">
                Get the latest updates on our projects and construction news.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-72 bg-background border-border"
              />
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {/* Company Info */}
            <div className="footer-section">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <Hammer className="w-5 h-5 text-accent-foreground" />
                </div>
                <span className="text-2xl font-bold text-foreground">
                  InfraTech
                </span>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Building excellence since 1994. We transform visions into
                reality with innovative construction solutions and unwavering
                commitment to quality.
              </p>
              <div className="social-icons-container flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="social-icon w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4 className="text-lg font-bold text-foreground mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="footer-link text-muted-foreground hover:text-accent transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h4 className="text-lg font-bold text-foreground mb-6">
                Our Services
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      href={service.href}
                      className="footer-link text-muted-foreground hover:text-accent transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h4 className="text-lg font-bold text-foreground mb-6">
                Contact Us
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Address</p>
                    <p className="text-muted-foreground text-sm">
                      123 Construction Ave, New York, NY 10001
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Phone</p>
                    <p className="text-muted-foreground text-sm">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Email</p>
                    <p className="text-muted-foreground text-sm">
                      info@InfraTech.com
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border py-6 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} InfraTech. All rights reserved.
              Building the future, one project at a time.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                Terms of Service
              </Link>
              <button
                ref={scrollToTopRef}
                onClick={scrollToTop}
                className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
