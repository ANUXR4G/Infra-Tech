'use client'

import { useEffect, useRef, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, Building2, Globe, ArrowRight, Send, CreditCard, ExternalLink } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ContactPage() {
  const heroRef = useRef<HTMLElement>(null)
  const contactInfoRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 7838737843',
      subtext: '+91 8595613305',
      link: 'tel:+917838737843',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@infratechindia.in',
      subtext: 'infratechin@gmail.com',
      link: 'mailto:info@infratechindia.in',
    },
    {
      icon: MapPin,
      title: 'Registered Office',
      details: 'E69, Ground Floor, Jasola',
      subtext: 'New Delhi - 110025, India',
      link: 'https://maps.google.com/?q=Jasola+New+Delhi',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: 'Monday - Saturday',
      subtext: '9:00 AM - 6:00 PM IST',
      link: null,
    },
  ]

  const offices = [
    {
      type: 'Registered Office',
      address: 'E69, Ground Floor, Jasola, New Delhi, Pincode 110025, India',
      phone: '+91 8595613305, +91 7838737843',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop',
    },
    {
      type: 'Corporate Office',
      address: '#278 A, Ground Floor, Main Road Okhla, New Delhi, Pincode 110025, India',
      phone: '+91 8595613305, +91 7838737843',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=250&fit=crop',
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations - no opacity to prevent loading issues
      gsap.from(".contact-hero-badge", {
        y: 20,
        duration: 0.8,
        ease: "power3.out",
      })

      gsap.from(".contact-hero-title", {
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      })

      gsap.from(".contact-hero-desc", {
        y: 20,
        duration: 0.8,
        delay: 0.4,
        ease: "power3.out",
      })

      gsap.from(".contact-hero-cta", {
        y: 20,
        duration: 0.8,
        delay: 0.6,
        ease: "power3.out",
      })

      // Contact info cards animations
      gsap.from(".contact-card", {
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactInfoRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })

      // Office cards animations
      gsap.from(".office-card", {
        y: 30,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".offices-section",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })

      // Form animations
      gsap.from(".form-section", {
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section - Enhanced */}
      <section ref={heroRef} className="relative w-full min-h-[60vh] flex items-center py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-secondary/30" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="contact-hero-badge inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full font-medium mb-6">
              <Mail className="w-4 h-4" />
              Get in Touch
            </div>

            <h1 className="contact-hero-title text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6">
              Let's Build{' '}
              <span className="text-accent">Something Great</span>
            </h1>
            
            <p className="contact-hero-desc text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Have a project in mind? We'd love to hear from you. Reach out to us and let's discuss how INFRATECH INDIA can bring your vision to life.
            </p>

            <div className="contact-hero-cta flex flex-wrap gap-4 justify-center">
              <a href="tel:+917838737843">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us Now
                </Button>
              </a>
              <a href="mailto:info@infratechindia.in">
                <Button size="lg" variant="outline" className="font-semibold">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      
      {/* Company Details + Contact Form Section - Side by Side */}
      <section ref={formRef} className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Side - Company Details */}
            <div className="form-section space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Company Information
                </h2>
                <p className="text-muted-foreground">
                  INFRATECH INDIA - Your trusted partner for construction and interior solutions since 2014.
                </p>
              </div>

              {/* GSTIN, Website, Banker Cards */}
              <div className="space-y-4">
                <div className="bg-card p-5 rounded-xl border border-border hover:border-accent/50 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">GSTIN</span>
                      <p className="font-bold text-foreground text-lg">07AWCPA8065H1ZN</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-5 rounded-xl border border-border hover:border-accent/50 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Globe className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <span className="text-sm text-muted-foreground">Website</span>
                      <a 
                        href="https://www.infratechindia.in" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 font-bold text-accent text-lg hover:underline"
                      >
                        www.infratechindia.in
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-5 rounded-xl border border-border hover:border-accent/50 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ICICI_Bank_Logo.svg/100px-ICICI_Bank_Logo.svg.png"
                        alt="ICICI Bank"
                        width={32}
                        height={32}
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Banker</span>
                      <p className="font-bold text-foreground text-lg">ICICI Bank</p>
                      <p className="text-sm text-muted-foreground">New Friends Colony Branch</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">Quick Contact</h3>
                <div className="space-y-3">
                  <a href="tel:+917838737843" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors">
                    <Phone className="w-5 h-5 text-accent" />
                    <span>+91 7838737843</span>
                  </a>
                  <a href="tel:+918595613305" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors">
                    <Phone className="w-5 h-5 text-accent" />
                    <span>+91 8595613305</span>
                  </a>
                  <a href="mailto:info@infratechindia.in" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors">
                    <Mail className="w-5 h-5 text-accent" />
                    <span>info@infratechindia.in</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="form-section">
              <div className="bg-card rounded-2xl border border-border p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                  Send us a Message
                </h2>
                <p className="text-muted-foreground mb-6">
                  Fill out the form below and our team will get back to you soon.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {submitted && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                      Thank you for your message! We'll get back to you soon.
                    </div>
                  )}

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition"
                    />
                  </div>

                  {/* Email & Phone Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition"
                      />
                    </div>
                  </div>

                  {/* Service Type */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Service Interested In</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition"
                    >
                      <option value="">Select a service</option>
                      <option value="turnkey-contracting">Turnkey Contracting Services</option>
                      <option value="furniture-trading">Commercial Furniture Trading</option>
                      <option value="construction">Construction & Engineering</option>
                      <option value="customization">Customizable Solutions</option>
                      <option value="consultancy">Consultancy Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      rows={4}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Find Us</h2>
            <p className="text-muted-foreground">Located in the heart of New Delhi</p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.0!2d77.28!3d28.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sJasola%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="INFRATECH INDIA Location"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
