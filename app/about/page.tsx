"use client";
"use client";

import { useEffect, useRef } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { CheckCircle2, Award, Users, Zap } from 'lucide-react'
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
      description: 'We are committed to delivering exceptional quality in every project we undertake.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working closely with clients and teams to achieve shared goals and vision.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Embracing modern technologies and techniques to improve efficiency and outcomes.',
    },
    {
      icon: CheckCircle2,
      title: 'Integrity',
      description: 'Operating with transparency and honesty in all our business relationships.',
    },
  ]

  const team = [
    { name: 'John Smith', role: 'CEO & Founder', image: '/hero-construction.jpg' },
    { name: 'Sarah Johnson', role: 'Chief Architect', image: '/about-construction.jpg' },
    { name: 'Michael Chen', role: 'Project Manager', image: '/quality-construction.jpg' },
    { name: 'Emily Davis', role: 'Lead Engineer', image: '/project1-residences.jpg' },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from(".about-hero-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(".about-hero-desc", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
      })

      // Story section animations
      gsap.from(".story-image", {
        x: -80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: storyRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      })

      gsap.from(".story-content", {
        x: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: storyRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      })

      // Values section animations
      gsap.from(".values-title", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: valuesRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })

      gsap.from(".value-card", {
        y: 60,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".values-grid",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })

      // Stats animations
      gsap.from(".stat-item", {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })

      // Team section animations
      gsap.from(".team-title", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: teamRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })

      gsap.from(".team-card", {
        y: 80,
        opacity: 0,
        rotation: 5,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".team-grid",
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
            <h1 className="about-hero-title text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              About InfraTech
            </h1>
            <p className="about-hero-desc text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Transforming visions into reality with 30+ years of construction excellence and innovation.
            </p>
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
                src="/about-construction.jpg"
                alt="InfraTech team working on construction"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="story-content flex flex-col gap-6">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Our Story
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Founded in 1994, InfraTech has grown from a small local contractor to a leading construction company. Our journey has been marked by continuous innovation, unwavering commitment to quality, and a passion for building spaces that inspire and endure.
                </p>
              </div>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                With over 30 years of experience, we have successfully completed more than 300 projects across residential, commercial, and industrial sectors. Our team of skilled professionals brings together expertise, creativity, and dedication to every project.
              </p>

              <div className="space-y-3 pt-4">
                <h3 className="text-xl font-semibold text-foreground">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide exceptional construction services that exceed client expectations, enhance communities, and create sustainable spaces that inspire. We are dedicated to building not just structures, but lasting relationships with our clients.
                </p>
              </div>
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
              These principles guide our decisions and actions every single day.
            </p>
          </div>

          <div className="values-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="value-card bg-card p-6 rounded-2xl border border-border hover:shadow-lg hover:border-accent/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: '30+', label: 'Years of Experience' },
              { number: '300+', label: 'Completed Projects' },
              { number: '500+', label: 'Team Members' },
              { number: '100%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <div
                key={index}
                className="stat-item flex flex-col gap-2"
              >
                <div className="text-4xl sm:text-5xl font-bold text-accent">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 team-title">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Leadership Team
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the experienced professionals leading InfraTech forward.
            </p>
          </div>

          <div className="team-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="team-card bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                  <p className="text-sm text-accent mt-1 font-semibold">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-y border-border">
        <div className="container mx-auto max-w-7xl text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Let's discuss how our expertise can bring your construction project to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
              Get in Touch
            </Button>
            <Button size="lg" variant="outline" className="font-semibold">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
