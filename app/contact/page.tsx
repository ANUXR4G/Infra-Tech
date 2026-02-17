'use client'

import { useEffect, useRef, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
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
      details: '+1 (555) 123-4567',
      subtext: 'Mon-Fri, 9am-6pm EST',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@InfraTech.com',
      subtext: 'We reply within 24 hours',
    },
    {
      icon: MapPin,
      title: 'Address',
      details: '123 Construction Ave',
      subtext: 'New York, NY 10001',
    },
    {
      icon: Clock,
      title: 'Hours',
      details: 'Monday - Friday',
      subtext: '9:00 AM - 6:00 PM EST',
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from(".contact-hero-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(".contact-hero-desc", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
      })

      // Contact info cards animations
      gsap.from(".contact-card", {
        y: 60,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactInfoRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })

      // Form animations
      gsap.from(".form-title", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })

      gsap.from(".form-container", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })

      gsap.from(".form-field", {
        x: -30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".form-container",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 text-center">
            <h1 className="contact-hero-title text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Get in Touch
            </h1>
            <p className="contact-hero-desc text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section ref={contactInfoRef} className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="contact-card bg-card p-6 rounded-2xl border border-border hover:shadow-lg hover:border-accent/50 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">{info.title}</h3>
                <p className="text-foreground font-semibold">{info.details}</p>
                <p className="text-sm text-muted-foreground">{info.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section ref={formRef} className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12 form-title">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Send us a Message
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Fill out the form below and our team will get back to you soon.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="form-container bg-card rounded-2xl border border-border p-8 sm:p-10 space-y-6"
          >
            {submitted && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}

            {/* Name */}
            <div className="form-field">
              <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition"
              />
            </div>

            {/* Email */}
            <div className="form-field">
              <label className="block text-sm font-semibold text-foreground mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition"
              />
            </div>

            {/* Phone */}
            <div className="form-field">
              <label className="block text-sm font-semibold text-foreground mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 123-4567"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition"
              />
            </div>

            {/* Service Type */}
            <div className="form-field">
              <label className="block text-sm font-semibold text-foreground mb-2">Service Interested In</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition"
              >
                <option value="">Select a service</option>
                <option value="building-renovation">Building Renovation</option>
                <option value="interior-finishing">Interior Finishing</option>
                <option value="roofing">Roofing Solutions</option>
                <option value="foundation">Foundation Repair</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div className="form-field">
              <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                rows={5}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="form-field">
              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  )
}
