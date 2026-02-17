"use client";

import { useEffect, useRef } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProjectCard from '@/components/ProjectCard'
import { Button } from '@/components/ui/button'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ProjectsPage() {
  const heroRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)

  const allProjects = [
    {
      title: 'Harbor View Residences',
      description:
        'A modern residential complex featuring sustainable design and premium amenities for an elevated living experience.',
      image: '/project1-residences.jpg',
      location: 'Honolulu, Hawaii 96063',
      date: '05/01/2023 - 12/01/2024',
      scope: 'Office Complex Development',
    },
    {
      title: 'Sunset Ridge Development',
      description:
        'Premium residential community featuring contemporary architecture and comprehensive amenities.',
      image: '/project2-development.jpg',
      location: 'Inglewood, Maine 48353',
      date: '05/01/2023 - 01/01/2025',
      scope: 'Mixed Use Residential',
    },
    {
      title: 'Downtown Commercial Complex',
      description:
        'State-of-the-art commercial development with modern office spaces and retail facilities.',
      image: '/hero-construction.jpg',
      location: 'New York, NY 10001',
      date: '03/15/2023 - 11/30/2024',
      scope: 'Commercial Development',
    },
    {
      title: 'Green Park Renovation',
      description:
        'Complete renovation of historic building with modern sustainable features and preservation efforts.',
      image: '/about-construction.jpg',
      location: 'Boston, Massachusetts 02110',
      date: '08/01/2023 - 06/30/2024',
      scope: 'Renovation & Restoration',
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from(".projects-hero-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(".projects-hero-desc", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
      })

      // Projects grid animations
      gsap.from(".project-item", {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })

      // Stats section animations
      gsap.from(".stat-box", {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".stats-grid",
          start: "top 85%",
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
            <h1 className="projects-hero-title text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Our Featured Projects
            </h1>
            <p className="projects-hero-desc text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover the excellence and innovation we bring to every construction project.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section ref={projectsRef} className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {allProjects.map((project, index) => (
              <div
                key={index}
                className="project-item"
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  location={project.location}
                  date={project.date}
                  scope={project.scope}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <div className="stats-grid grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: '50+', label: 'Completed Projects' },
              { number: '100%', label: 'Client Satisfaction' },
              { number: '$500M+', label: 'Total Value Delivered' },
            ].map((stat, index) => (
              <div
                key={index}
                className="stat-box flex flex-col gap-2"
              >
                <div className="text-4xl sm:text-5xl font-bold text-accent">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-y border-border">
        <div className="cta-content container mx-auto max-w-7xl text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Let's Discuss Your Next Project
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Our experienced team is ready to turn your vision into reality with quality craftsmanship and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
              Start Your Project
            </Button>
            <Button size="lg" variant="outline" className="font-semibold">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
