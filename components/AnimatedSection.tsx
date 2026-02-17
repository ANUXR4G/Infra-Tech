"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-in" | "slide-up" | "slide-left" | "slide-right" | "scale-in" | "rotate-in";
  delay?: number;
  duration?: number;
  stagger?: boolean;
}

export default function AnimatedSection({
  children,
  className = "",
  animation = "fade-in",
  delay = 0,
  duration = 0.8,
  stagger = false,
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const el = sectionRef.current;
      if (!el) return;

      const animations: Record<string, gsap.TweenVars> = {
        "fade-in": { opacity: 0 },
        "slide-up": { y: 60, opacity: 0 },
        "slide-left": { x: 60, opacity: 0 },
        "slide-right": { x: -60, opacity: 0 },
        "scale-in": { scale: 0.8, opacity: 0 },
        "rotate-in": { rotation: 10, opacity: 0, scale: 0.9 },
      };

      const fromVars = animations[animation] || animations["fade-in"];

      if (stagger && el.children.length > 0) {
        gsap.from(el.children, {
          ...fromVars,
          duration,
          delay,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      } else {
        gsap.from(el, {
          ...fromVars,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [animation, delay, duration, stagger]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
}
