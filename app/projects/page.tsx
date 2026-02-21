"use client";

import { useEffect, useRef } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { Building2, Factory, Landmark, Hotel, GraduationCap, ArrowRight, CheckCircle2 } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ProjectsPage() {
  const heroRef = useRef<HTMLElement>(null)
  const clientsRef = useRef<HTMLElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  const clientLogos = [
    { name: 'Larsen & Toubro', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Larsen_%26_Toubro_logo.svg/200px-Larsen_%26_Toubro_logo.svg.png' },
    { name: 'CBRE', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/CBRE_Group_logo.svg/200px-CBRE_Group_logo.svg.png' },
    { name: 'Amity University', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Amity_University_logo.svg/200px-Amity_University_logo.svg.png' },
    { name: 'Le Meridien', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Le_M%C3%A9ridien_logo.svg/200px-Le_M%C3%A9ridien_logo.svg.png' },
    { name: 'ICICI Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ICICI_Bank_Logo.svg/200px-ICICI_Bank_Logo.svg.png' },
    { name: 'Yakult', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Yakult_logo.svg/200px-Yakult_logo.svg.png' },
    { name: 'SAB Miller', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/SABMiller_logo.svg/200px-SABMiller_logo.svg.png' },
    { name: 'Kempinski', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Kempinski_Logo.svg/200px-Kempinski_Logo.svg.png' },
  ]

  const clientCategories = [
    {
      icon: Building2,
      title: 'Infrastructure & Construction',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop',
      clients: [
        'Larsen & Toubro Ltd.',
        'J. Kumar Infra Projects Pvt. Ltd.',
        'Today Homes and Infrastructure Pvt. Ltd.',
        'Pratibha Industries Ltd.',
        'CBRE (India)',
        'SMS Limited, Nagpur',
      ],
    },
    {
      icon: Factory,
      title: 'Factories & Manufacturing',
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&h=300&fit=crop',
      clients: [
        'Yakult Danone India Pvt. Ltd., Sonepat',
        'Sab Miller India Ltd.',
        'Nifco India Pvt. Ltd., IMT Manesar',
      ],
    },
    {
      icon: Landmark,
      title: 'Auditoriums, Malls & Commercial',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
      clients: [
        'Kamani Auditorium, New Delhi',
        'Ambience Mall, Vasant Kunj',
        'DJT Financial Services Pvt. Ltd., Noida',
      ],
    },
    {
      icon: Hotel,
      title: 'Hotels & Hospitals',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
      clients: [
        'Kempinski, New Delhi',
        'Le Meridien, Gurgaon',
        'PSRI Hospital, Sheikh Sarai',
        'Paras Hospital, Darbhanga',
      ],
    },
    {
      icon: GraduationCap,
      title: 'Educational Institutions',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop',
      clients: [
        'Amity University, Noida',
        'Global International School',
        'IBU, Kishanganj, Bihar',
      ],
    },
  ]

  const featuredClients = [
    { name: 'Larsen & Toubro', category: 'Infrastructure', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Larsen_%26_Toubro_logo.svg/150px-Larsen_%26_Toubro_logo.svg.png' },
    { name: 'Yakult-Danone', category: 'Manufacturing', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Yakult_logo.svg/150px-Yakult_logo.svg.png' },
    { name: 'CBRE India', category: 'Real Estate', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/CBRE_Group_logo.svg/150px-CBRE_Group_logo.svg.png' },
    { name: 'Kempinski', category: 'Hospitality', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Kempinski_Logo.svg/150px-Kempinski_Logo.svg.png' },
    { name: 'Amity University', category: 'Education', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Amity_University_logo.svg/150px-Amity_University_logo.svg.png' },
    { name: 'Le Meridien', category: 'Healthcare', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Le_M%C3%A9ridien_logo.svg/150px-Le_M%C3%A9ridien_logo.svg.png' },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations - no opacity to prevent loading issues
      gsap.from(".projects-hero-badge", {
        y: 20,
        duration: 0.8,
        ease: "power3.out",
      })

      gsap.from(".projects-hero-title", {
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      })

      gsap.from(".projects-hero-desc", {
        y: 20,
        duration: 0.8,
        delay: 0.4,
        ease: "power3.out",
      })

      gsap.from(".featured-client", {
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.6,
        ease: "power3.out",
      })

      // Client categories animations
      gsap.from(".client-category", {
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: clientsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })

      // Stats section animations
      gsap.from(".stat-box", {
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".stats-grid",
          start: "top 85%",
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

      // Auto-scrolling carousel
      if (carouselRef.current) {
        const carousel = carouselRef.current
        const scrollWidth = carousel.scrollWidth / 2
        
        gsap.to(carousel, {
          x: -scrollWidth,
          duration: 20,
          ease: "none",
          repeat: -1,
        })
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section - Enhanced */}
      <section ref={heroRef} className="relative w-full min-h-[70vh] flex items-center py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-secondary/30" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="projects-hero-badge inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full font-medium mb-6">
              <Building2 className="w-4 h-4" />
              Our Portfolio
            </div>

            <h1 className="projects-hero-title text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6">
              Trusted by{' '}
              <span className="text-accent">Industry Leaders</span>
            </h1>
            
            <p className="projects-hero-desc text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Over the years, INFRATECH INDIA has successfully completed numerous projects, forging valuable partnerships with prestigious clients across diverse industries.
            </p>
          </div>

          {/* Featured Clients Grid with Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {featuredClients.map((client, index) => (
              <div
                key={index}
                className="featured-client bg-card/80 backdrop-blur-sm p-4 rounded-xl border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="h-12 flex items-center justify-center mb-2">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={80}
                    height={40}
                    className="object-contain max-h-10 grayscale hover:grayscale-0 transition-all duration-300"
                    unoptimized
                  />
                </div>
                <div className="font-semibold text-foreground text-xs mb-1">{client.name}</div>
                <div className="text-xs text-accent">{client.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Carousel Section */}
      <section className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30 overflow-hidden">
        <div className="container mx-auto max-w-7xl mb-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Our Esteemed Clients</h2>
            <p className="text-muted-foreground">
              We've had the privilege of working with leading organizations across multiple sectors
            </p>
          </div>
        </div>
        
        {/* Auto-scrolling Logo Carousel */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-secondary/30 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-secondary/30 to-transparent z-10" />
          
          <div ref={carouselRef} className="flex gap-12 items-center">
            {/* Double the logos for seamless loop */}
            {[...clientLogos, ...clientLogos].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-card p-6 rounded-xl border border-border hover:border-accent/50 transition-all duration-300"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={60}
                  className="object-contain h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Why Our Clients Trust Us
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Since 2014, we have successfully supported clients across a wide range of industries, delivering excellence in every project.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Construction', icon: '🏗️' },
                  { label: 'Manufacturing', icon: '🏭' },
                  { label: 'Hospitality', icon: '🏨' },
                  { label: 'IT & Technology', icon: '💻' },
                  { label: 'Entertainment', icon: '🎭' },
                  { label: 'Education', icon: '🎓' },
                  { label: 'Healthcare', icon: '🏥' },
                  { label: 'Real Estate', icon: '🏠' },
                ].map((industry, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border hover:border-accent/50 transition-all">
                    <span className="text-xl">{industry.icon}</span>
                    <span className="text-foreground font-medium">{industry.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-2xl border border-border p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">What Sets Us Apart</h3>
              <div className="space-y-4">
                {[
                  'Consistent delivery of high-quality services',
                  'Experienced team with diverse industrial expertise',
                  'Customized solutions tailored to unique needs',
                  'Timely project completion',
                  'Cost-effective and transparent pricing',
                  'Long-term partnership approach',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-y border-border bg-accent/5">
        <div className="cta-content container mx-auto max-w-7xl text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Let's Discuss Your Next Project
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Join our list of satisfied clients. Our experienced team is ready to turn your vision into reality with quality craftsmanship and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="font-semibold">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
