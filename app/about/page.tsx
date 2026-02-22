"use client";

import { useEffect, useRef } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, Award, Users, Zap, Building2, Target, Sparkles, Shield, ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AboutPage() {
  const heroRef = useRef<HTMLElement>(null)
  const storyRef = useRef<HTMLElement>(null)
  const valuesRef = useRef<HTMLElement>(null)
  const teamRef = useRef<HTMLElement>(null)

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We are committed to delivering exceptional quality in every project. Our team ensures meticulous attention to detail, premium materials, and superior craftsmanship to guarantee maximum client satisfaction and lasting results.',
      highlights: ['Premium Quality Materials', 'Attention to Detail', 'Superior Craftsmanship'],
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in building strong partnerships with our clients. By working closely with stakeholders across industries, we understand unique requirements and deliver solutions that align with shared goals and vision.',
      highlights: ['Client-Centric Approach', 'Open Communication', 'Partnership Building'],
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and modern construction techniques. Our team continuously updates skills and adopts innovative solutions to ensure efficient project execution and stay ahead in the industry.',
      highlights: ['Latest Technologies', 'Modern Techniques', 'Continuous Learning'],
    },
    {
      icon: CheckCircle2,
      title: 'Integrity',
      description: 'Honesty and transparency form the foundation of our business relationships. We maintain ethical practices, provide accurate project estimates, and ensure clear communication throughout every project phase.',
      highlights: ['Transparent Pricing', 'Ethical Practices', 'Honest Communication'],
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Our clients trust us for consistent, dependable service delivery. With over a decade of experience, we have built a reputation for meeting deadlines, honoring commitments, and delivering projects on time and within budget.',
      highlights: ['On-Time Delivery', 'Budget Compliance', 'Consistent Quality'],
    },
    {
      icon: Target,
      title: 'Customer Focus',
      description: 'Every decision we make is driven by customer satisfaction. We listen to client needs, provide customized solutions, and go the extra mile to ensure complete satisfaction with our work and services.',
      highlights: ['Customized Solutions', 'Responsive Support', '100% Satisfaction'],
    },
  ]

  const teamHighlights = [
    { 
      icon: Building2, 
      title: 'Engineers', 
      description: 'Skilled professionals with diverse industrial experience',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300&h=300&fit=crop',
    },
    { 
      icon: Target, 
      title: 'Architects', 
      description: 'Creative designers focused on functional excellence',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=300&h=300&fit=crop',
    },
    { 
      icon: Sparkles, 
      title: 'Project Managers', 
      description: 'Experts ensuring timely project completion',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=300&fit=crop',
    },
    { 
      icon: Shield, 
      title: 'Skilled Workforce', 
      description: 'Trained laborers delivering quality workmanship',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=300&h=300&fit=crop',
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations - no opacity to prevent loading issues
      gsap.from(".about-hero-badge", {
        y: 20,
        duration: 0.8,
        ease: "power3.out",
      })

      gsap.from(".about-hero-title", {
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      })

      gsap.from(".about-hero-desc", {
        y: 20,
        duration: 0.8,
        delay: 0.4,
        ease: "power3.out",
      })

      gsap.from(".about-hero-stats", {
        y: 20,
        duration: 0.8,
        delay: 0.6,
        ease: "power3.out",
      })

      // Story section animations - removed opacity to prevent loading issues
      gsap.from(".story-image", {
        x: -40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: storyRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      })

      gsap.from(".story-content", {
        x: 40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: storyRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      })

      // Values section animations - removed opacity animation to prevent loading issues
      gsap.from(".values-title", {
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: valuesRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })

      // Value cards - no opacity animation to ensure they're always visible
      gsap.from(".value-card", {
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".values-grid",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      })

      // Stats animations - removed opacity to prevent loading issues
      gsap.from(".stat-item", {
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      })

      // Team section animations - removed opacity to prevent loading issues
      gsap.from(".team-title", {
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: teamRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })

      gsap.from(".team-card", {
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".team-grid",
          start: "top 85%",
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
      <section ref={heroRef} className="relative w-full min-h-[70vh] flex items-center py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-secondary/30" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <div className="about-hero-badge inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full w-fit font-medium">
                <Building2 className="w-4 h-4" />
                Established 2014
              </div>
              
              <h1 className="about-hero-title text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
                Building Excellence,{' '}
                <span className="text-accent">Delivering Trust</span>
              </h1>
              
              <p className="about-hero-desc text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
                INFRATECH INDIA is a leading contracting and trading company, specializing in providing comprehensive services to commercial organizations since 2014.
              </p>

              <div className="about-hero-stats grid grid-cols-3 gap-6 pt-6 border-t border-border">
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-accent">10+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-accent">100+</div>
                  <div className="text-sm text-muted-foreground">Projects Done</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-accent">50+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop"
                  alt="INFRATECH INDIA Construction Excellence"
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-xl border border-border max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section ref={storyRef} className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image */}
            <div className="story-image relative h-80 sm:h-96 lg:h-full lg:min-h-[500px] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?w=800&h=600&fit=crop"
                alt="INFRATECH INDIA team at work"
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            {/* Content */}
            <div className="story-content flex flex-col gap-6">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Our Story
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Since our establishment in 2014, INFRATECH INDIA has successfully supported clients across a wide range of industries, including construction, manufacturing, hospitality, IT, entertainment, and education. Our commitment to excellence is reflected in our ability to deliver top-tier services.
                </p>
              </div>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                We have forged valuable partnerships with a diverse range of industries. Our portfolio includes esteemed clients such as Larsen & Toubro, Yakult-Danone, TDI, CBRE, Kamani Auditorium, PSRI Hospital, and Amity, among others. These collaborations have enriched our experience.
              </p>

              <div className="space-y-3 pt-4">
                <h3 className="text-xl font-semibold text-foreground">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide comprehensive turnkey solutions for interior & building construction, including water proofing, electrical and other allied services. We deliver customized solutions to meet the unique needs of our clients.
                </p>
              </div>

              <Link href="/contact">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold w-fit mt-4">
                  Get in Touch
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 values-title">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide our decisions and actions every single day, ensuring we deliver excellence in every project.
            </p>
          </div>

          <div className="values-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="value-card bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:border-accent/50 transition-all duration-300 group"
              >
                {/* Value Header with Icon */}
                <div className="relative h-32 bg-gradient-to-br from-accent/20 via-accent/10 to-transparent flex items-center justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-accent" />
                  </div>
                </div>
                
                {/* Value Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{value.description}</p>
                  
                  {/* Highlights */}
                  <div className="space-y-2">
                    {value.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>  

      {/* CTA Section */}
      <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-y border-border bg-accent/5">
        <div className="container mx-auto max-w-7xl text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Let's discuss how our expertise can bring your construction and interior project to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                Get in Touch
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
      </section>

      <Footer />
    </main>
  )
}
