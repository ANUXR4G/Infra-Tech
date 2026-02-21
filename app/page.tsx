"use client";
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StatCard from '@/components/StatCard'
import ServiceCard from '@/components/ServiceCard'
import ProjectCard from '@/components/ProjectCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Hammer,
  PaintBucket,
  HomeIcon,
  Wrench,
  Play,
  Pause,
  CheckCircle2,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Page() {
  const heroRef = useRef<HTMLElement>(null)
  const servicesRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const qualityRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.muted = true // Ensure muted for autoplay policy
        videoRef.current.play().catch((error) => {
          console.error('Video play failed:', error)
        })
      }
    }
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animations
      gsap.from(".hero-title", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
      
      gsap.from(".hero-description", {
        y: 60,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      })

      gsap.from(".hero-buttons", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
        ease: "power3.out",
      })

      gsap.from(".hero-stats", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.6,
        ease: "power3.out",
      })

      gsap.from(".hero-image", {
        x: 100,
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
        ease: "power3.out",
      })

      // Services section animations
      gsap.from(".services-title", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })

      gsap.from(".service-card", {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })

      // About section animations
      gsap.from(".about-image", {
        x: -80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      })

      gsap.from(".about-content", {
        x: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      })

      // Quality section animations
      gsap.from(".quality-image", {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: qualityRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      })

      gsap.from(".quality-content", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: qualityRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      })

      gsap.from(".quality-point", {
        x: 40,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".quality-points",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })

      // Projects section animations
      gsap.from(".projects-header", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })

      gsap.from(".project-card", {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })

    })

    return () => ctx.revert()
  }, [])
  const services = [
    {
      icon: HomeIcon,
      title: 'Building Renovation',
      description:
        'Complete structural transformations with modern building techniques for optimal durability and aesthetics.',
    },
    {
      icon: PaintBucket,
      title: 'Interior Finishing',
      description:
        'Professional interior design and finishing services to bring your vision to life with attention to detail.',
    },
    {
      icon: Hammer,
      title: 'Roofing Solutions',
      description:
        'Expert roofing installation and repair services using premium materials for long-lasting protection.',
    },
    {
      icon: Wrench,
      title: 'Foundation Repair',
      description:
        'Specialized foundation solutions to ensure structural integrity and prevent future complications.',
    },
  ]

  const projects = [
    {
      title: 'Harbor View Residences',
      description:
        'A modern residential complex featuring sustainable design and premium amenities for an elevated living experience.',
      image: '/HVR.jpg',
      location: 'Honolulu, Hawaii 96063',
      date: '05/01/2023 - 12/01/2024',
      scope: 'Office Complex Development',
    },
    {
      title: 'Sunset Ridge Development',
      description:
        'Premium residential community featuring contemporary architecture and comprehensive amenities.',
      image: '/SRD.jpeg',
      location: 'Inglewood, Maine 48353',
      date: '05/01/2023 - 01/01/2025',
      scope: 'Mixed Use Residential',
    },
  ]

  const partners = ['ConstructionHub', 'Turner', 'HD', 'Parkside']
  const qualityPoints = [
    'Excellence in Every Detail',
    'Trusted Expertise, Proven Results',
    'Innovative Solutions Tailored to You',
    'Your Vision, Our Commitment',
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} id="home" className="relative w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="flex flex-col gap-6 sm:gap-8">
              <div>
                <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                  Innovative Technologies for Modern Construction
                </h1>
              </div>

              <p className="hero-description text-base sm:text-lg text-muted-foreground leading-relaxed">
                Embrace cutting-edge advancements like 3D printing, modular construction, and drones to revolutionize design, efficiency, and project delivery in the construction industry.
              </p>

              <div className="hero-buttons flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                  >
                    Get a Quote
                  </Button>
                </Link>
                <a href="tel:+917838737843">
                  <Button
                    size="lg"
                    variant="outline"
                    className="font-semibold"
                  >
                    Call Us
                  </Button>
                </a>
              </div>

              {/* Stats */}
              <div className="hero-stats grid grid-cols-3 gap-4 pt-4 sm:pt-6">
                <StatCard number="150+" label="Complete Projects" />
                <StatCard number="100+" label="Team Members" />
                <StatCard number="200+" label="Client Reviews" />
              </div>

              {/* Team Avatars */}
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-accent/20 border-2 border-background flex items-center justify-center text-xs font-semibold text-accent"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground ml-2">+30 more</span>
              </div>
            </div>

            {/* Right Image */}
            <div className="hero-image relative h-80 sm:h-96 lg:h-full lg:min-h-[500px] rounded-3xl overflow-hidden">
              <Image
                src="/heroimg.avif"
                alt="Construction workers with blueprints"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                priority
              />
              {/* Circular badge */}
              <div className="absolute bottom-6 left-6 w-20 h-20 rounded-full bg-accent/90 flex items-center justify-center text-center text-xs font-bold text-accent-foreground shadow-lg">
                <div>
                  <div className="text-lg">30</div>
                  <div className="text-xs">Winning Award</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} id="services" className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col gap-12">
            <div className="services-title">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Services Tailored to You
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
                We provide customized construction solutions designed to meet your unique needs and exceed expectations.
              </p>
            </div>

            {/* Services Grid */}
            <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {services.map((service, index) => (
                <div key={index} className="service-card">
                  <ServiceCard
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                  />
                </div>
              ))}
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center gap-2">
              {services.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === 0
                      ? 'bg-accent w-8'
                      : 'bg-border'
                  }`}
                  aria-label={`Service ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} id="about" className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-12">
            About Our Company
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
            {/* Image */}
            <div className="about-image relative h-80 sm:h-96 rounded-3xl overflow-hidden">
              <Image
                src="/about.webp"
                alt="Construction tools and blueprints"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="about-content flex flex-col gap-6">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                With 30 years of experience in the construction industry, we specialize in delivering exceptional results. Our team combines traditional craftsmanship with innovative technology to create sustainable solutions tailored to meet the unique needs of our clients.
              </p>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide exceptional construction services that exceed client expectations, enhance communities, and create spaces that inspire.
                </p>
              </div>

              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 w-fit font-semibold">
                Learn More
              </Button>
            </div>
          </div>

          {/* Partners Section */}
          <div className="border-t border-border pt-12">
            <h3 className="text-2xl font-bold text-foreground mb-8">Support Our Company</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-6 bg-secondary/50 rounded-xl border border-border hover:bg-secondary/80 transition"
                >
                  <p className="font-semibold text-foreground text-center text-sm">{partner}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section ref={qualityRef} className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Video with play button */}
            <div className="quality-image relative h-80 sm:h-96 rounded-3xl overflow-hidden bg-secondary">
              <video
                ref={videoRef}
                src="/videoplayback.mp4"
                className="w-full h-full object-cover"
                loop
                muted
                playsInline
                preload="metadata"
                poster="/quality-poster.jpg"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />
              <button 
                onClick={handleVideoClick}
                className={`absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-all duration-300 ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}
              >
                <div className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center shadow-lg hover:bg-accent hover:scale-110 transition-all duration-300">
                  {isPlaying ? (
                    <Pause className="w-6 h-6 text-accent-foreground" fill="currentColor" />
                  ) : (
                    <Play className="w-6 h-6 text-accent-foreground ml-1" fill="currentColor" />
                  )}
                </div>
              </button>
            </div>

            {/* Content */}
          <div className="quality-content flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-center">

  {/* Right Content Section - Unchanged */}
  <div className="flex flex-col gap-6 lg:gap-8 w-full lg:w-1/2">
    <div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
        Quality That Speaks for Itself
      </h2>
      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mt-4">
        Our unwavering attention to detail and commitment ensure every project reflects our dedication to excellence and client satisfaction.
      </p>
    </div>

    <div className="quality-points space-y-3">
      {qualityPoints.map((point, index) => (
        <div key={index} className="quality-point flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
          <span className="text-base text-foreground">{point}</span>
        </div>
      ))}
    </div>

    <Button className="bg-accent text-accent-foreground hover:bg-accent/90 w-fit font-semibold">
      Learn More
    </Button>
  </div>
</div>

          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section ref={projectsRef} id="projects" className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="projects-header flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                Featured Construction Projects
              </h2>
              <p className="text-base text-muted-foreground mt-3 max-w-2xl">
                Explore our portfolio of completed projects showcasing our expertise in delivering exceptional results that exceed expectations.
              </p>
            </div>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold w-fit">
              Go Project Page
            </Button>
          </div>

          {/* Projects Grid */}
          <div className="projects-grid grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
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

      <Footer />
    </main>
  )
}
