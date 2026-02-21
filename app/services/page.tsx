"use client";

import { useEffect, useRef } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Building2, 
  Sofa, 
  HardHat, 
  Settings, 
  MessageSquare, 
  Wrench,
  Zap,
  Droplets,
  CheckCircle2,
  ArrowRight
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ServicesPage() {
  const heroRef = useRef<HTMLElement>(null)
  const servicesRef = useRef<HTMLElement>(null)

  const mainServices = [
    {
      icon: Building2,
      title: 'Turnkey Contracting Services',
      description: 'Complete project management from design to execution. We handle interior and building construction, electrical works, and deliver turnkey solutions.',
      features: ['Interior & Building Construction', 'Electrical Works', 'Complete Project Management', 'Design to Execution'],
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=300&fit=crop',
    },
    {
      icon: Sofa,
      title: 'Commercial Furniture Trading',
      description: 'High-quality furniture solutions for commercial spaces. From institutional furniture to customized office setups, we provide comprehensive solutions.',
      features: ['Institutional Furniture', 'Office & Modular Furniture', 'Metal Almirahs & Safes', 'Customized Solutions'],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=300&fit=crop',
    },
    {
      icon: HardHat,
      title: 'Construction & Engineering',
      description: 'Specialized construction services for various commercial sectors with expert engineering solutions and professional project planning.',
      features: ['Commercial Construction', 'Engineering Solutions', 'Project Planning', 'Quality Workmanship'],
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500&h=300&fit=crop',
    },
    {
      icon: Settings,
      title: 'Customizable Solutions',
      description: 'Tailored interior designs and construction plans to meet your unique requirements. Bespoke furniture and personalized structural designs.',
      features: ['Tailored Interior Designs', 'Bespoke Furniture', 'Custom Construction Plans', 'Personalized Designs'],
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=500&h=300&fit=crop',
    },
    {
      icon: MessageSquare,
      title: 'Consultancy Services',
      description: 'Expert advice and strategic support in construction and interior projects. Cost-effective solutions for optimal space utilization.',
      features: ['Expert Consultation', 'Strategic Planning', 'Space Optimization', 'Cost-Effective Solutions'],
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&h=300&fit=crop',
    },
  ]

  const additionalServices = [
    { 
      icon: Wrench, 
      title: 'Water Proofing', 
      description: 'Professional waterproofing solutions for buildings',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop',
    },
    { 
      icon: Zap, 
      title: 'Electrical Services', 
      description: 'Complete electrical installation and maintenance',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=250&fit=crop',
    },
    { 
      icon: Droplets, 
      title: 'Bathroom Fittings', 
      description: 'Quality sanitaryware and bathroom solutions',
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=250&fit=crop',
    },
    { 
      icon: Building2, 
      title: 'Allied Services', 
      description: 'Comprehensive construction support services',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=250&fit=crop',
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations - no opacity to prevent loading issues
      gsap.from(".services-hero-badge", {
        y: 20,
        duration: 0.8,
        ease: "power3.out",
      })

      gsap.from(".services-hero-title", {
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      })

      gsap.from(".services-hero-desc", {
        y: 20,
        duration: 0.8,
        delay: 0.4,
        ease: "power3.out",
      })

      gsap.from(".services-hero-cta", {
        y: 20,
        duration: 0.8,
        delay: 0.6,
        ease: "power3.out",
      })

      // Services grid animations
      gsap.from(".service-item", {
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })

      // Additional services animation
      gsap.from(".additional-service", {
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".additional-services-section",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })

      // CTA section animations
      gsap.from(".cta-content", {
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cta-section",
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
          <div className="absolute top-10 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="services-hero-badge inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full font-medium mb-6">
              <Settings className="w-4 h-4" />
              Comprehensive Solutions
            </div>

            <h1 className="services-hero-title text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6">
              Products & Services{' '}
              <span className="text-accent">Tailored for You</span>
            </h1>
            
            <p className="services-hero-desc text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              At INFRATECH INDIA, we provide comprehensive turnkey solutions for interior & building construction, commercial furniture trading, and expert consultancy services to meet your unique needs.
            </p>

            <div className="services-hero-cta flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                  Request a Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/projects">
                <Button size="lg" variant="outline" className="font-semibold">
                  View Our Clients
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Grid Section */}
      <section ref={servicesRef} className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Core Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Delivering excellence across construction, trading, and consultancy
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className="service-item group"
              >
                <div className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl hover:border-accent/50 transition-all duration-300 h-full">
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-accent/20 backdrop-blur-sm flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    </div>
                  </div>
                  
                  {/* Service Content */}
                  <div className="p-6">
                    <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm text-foreground">
                          <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Why Choose INFRATECH INDIA?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                With over a decade of experience and a commitment to excellence, we deliver quality services that exceed expectations.
              </p>
              
              <div className="space-y-4">
                {[
                  'Skilled team of engineers, architects, and managers',
                  'Continuous training on latest industry tools',
                  'Customized solutions for unique client needs',
                  'Proven track record with prestigious clients',
                  'Timely project completion guaranteed',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link href="/contact">
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                    Get Free Consultation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '10+', label: 'Years Experience', icon: '📅' },
                { number: '100+', label: 'Projects Completed', icon: '🏗️' },
                { number: '50+', label: 'Happy Clients', icon: '🤝' },
                { number: '100%', label: 'Quality Assured', icon: '⭐' },
              ].map((stat, index) => (
                <div key={index} className="bg-card p-6 rounded-2xl border border-border text-center hover:shadow-lg hover:border-accent/50 transition-all duration-300">
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Consultation', description: 'Understanding your requirements and project vision', icon: '💬' },
              { step: '02', title: 'Planning', description: 'Detailed project planning and resource allocation', icon: '📋' },
              { step: '03', title: 'Execution', description: 'Professional implementation with quality control', icon: '🔨' },
              { step: '04', title: 'Delivery', description: 'Timely handover with complete satisfaction', icon: '🎯' },
            ].map((process, index) => (
              <div key={index} className="bg-card p-6 rounded-2xl border border-border hover:shadow-lg hover:border-accent/50 transition-all duration-300 text-center relative">
                <div className="absolute top-4 right-4 text-4xl font-bold text-accent/20">{process.step}</div>
                <div className="text-3xl mb-4">{process.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{process.title}</h3>
                <p className="text-sm text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-accent/5 border-y border-border">
        <div className="cta-content container mx-auto max-w-7xl text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Contact us today for a free consultation and discover how our comprehensive services can meet your construction and interior needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                Get Free Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="font-semibold">
                Learn About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
