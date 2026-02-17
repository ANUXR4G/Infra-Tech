"use client";

import { useEffect, useRef } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Hammer, PaintBucket, HomeIcon, Wrench } from 'lucide-react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ServicesPage() {
  const heroRef = useRef<HTMLElement>(null)
  const servicesRef = useRef<HTMLElement>(null)
  const services = [
    {
      icon: HomeIcon,
      title: 'Building Renovation',
      description:
        'Complete structural transformations with modern building techniques for optimal durability and aesthetics. We specialize in modernizing existing structures while maintaining their historical significance.',
      image: '/hero-construction.jpg',
    },
    {
      icon: PaintBucket,
      title: 'Interior Finishing',
      description:
        'Professional interior design and finishing services to bring your vision to life with attention to detail. From concept to completion, we handle all aspects of interior work.',
      image: '/about-construction.jpg',
    },
    {
      icon: Hammer,
      title: 'Roofing Solutions',
      description:
        'Expert roofing installation and repair services using premium materials for long-lasting protection. We offer warranties and maintenance programs for peace of mind.',
      image: '/quality-construction.jpg',
    },
    {
      icon: Wrench,
      title: 'Foundation Repair',
      description:
        'Specialized foundation solutions to ensure structural integrity and prevent future complications. Our team uses advanced diagnostic tools for accurate assessments.',
      image: '/project1-residences.jpg',
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from(".services-hero-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(".services-hero-desc", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
      })

      // Services grid animations
      gsap.from(".service-item", {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })

      // CTA section animations
      gsap.from(".cta-content", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cta-section",
          start: "top 80%",
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
            <h1 className="services-hero-title text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Our Professional Services
            </h1>
            <p className="services-hero-desc text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We offer a comprehensive range of construction services tailored to your specific needs and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section ref={servicesRef} className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-item group"
              >
                <div className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg hover:border-accent/50 transition-all duration-300 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8 flex flex-col gap-4 flex-grow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition">
                        <service.icon className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground">{service.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    <Button className="bg-accent text-accent-foreground hover:bg-accent/90 w-fit font-semibold mt-4">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-accent/5 border-y border-border">
        <div className="cta-content container mx-auto max-w-7xl text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Transform Your Project?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Contact us today for a free consultation and discover how our services can meet your construction needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="font-semibold">
              View Projects
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
