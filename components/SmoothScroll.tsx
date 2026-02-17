"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize smooth scroll behavior
    const ctx = gsap.context(() => {
      // Set up scroll-triggered animations for common elements
      gsap.utils.toArray<HTMLElement>(".animate-on-scroll").forEach((el) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Fade-in animations
      gsap.utils.toArray<HTMLElement>(".gsap-fade-in").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Slide-up animations
      gsap.utils.toArray<HTMLElement>(".gsap-slide-up").forEach((el) => {
        gsap.from(el, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Scale-in animations
      gsap.utils.toArray<HTMLElement>(".gsap-scale-in").forEach((el) => {
        gsap.from(el, {
          scale: 0.8,
          opacity: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Stagger children animations
      gsap.utils.toArray<HTMLElement>(".gsap-stagger-children").forEach((container) => {
        const children = container.children;
        gsap.from(children, {
          y: 40,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Parallax effect for images
      gsap.utils.toArray<HTMLElement>(".gsap-parallax").forEach((el) => {
        gsap.to(el, {
          yPercent: -20,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

    }, mainRef);

    // Refresh ScrollTrigger on resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      ctx.revert();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={mainRef} className="smooth-scroll-container">
      {children}
    </div>
  );
}
