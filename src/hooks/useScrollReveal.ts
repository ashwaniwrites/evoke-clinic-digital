import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RevealOptions extends gsap.AnimationVars {
  delay?: number;
  [key: string]: any;
}

export const useScrollReveal = (options: RevealOptions = {}) => {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      // 1. Standard Fade-Up Elements
      const items = element.querySelectorAll(".reveal-item:not([data-reveal]), [data-reveal='fade']");
      if (items.length > 0) {
        gsap.fromTo(
          Array.from(items),
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 1, stagger: 0.15,
            delay: options.delay || 0, ease: "power3.out",
            scrollTrigger: { trigger: element, start: "top 85%", toggleActions: "play reverse play reverse" }
          }
        );
      }

      // 2. Creative Lift & Rotate (3D Typography / Cards)
      const liftItems = element.querySelectorAll("[data-reveal='lift']");
      if (liftItems.length > 0) {
        gsap.fromTo(
          Array.from(liftItems),
          { opacity: 0, y: 80, rotateX: -15, transformOrigin: "bottom center" },
          {
            opacity: 1, y: 0, rotateX: 0, duration: 1.2, stagger: 0.15,
            delay: options.delay || 0, ease: "back.out(1.2)",
            scrollTrigger: { trigger: element, start: "top 80%", toggleActions: "play reverse play reverse" }
          }
        );
      }

      // 3. Creative Blur Focus (High-end Text)
      const blurItems = element.querySelectorAll("[data-reveal='blur']");
      if (blurItems.length > 0) {
        gsap.fromTo(
          Array.from(blurItems),
          { opacity: 0, filter: "blur(12px)", scale: 0.95 },
          {
            opacity: 1, filter: "blur(0px)", scale: 1, duration: 1.5, stagger: 0.2,
            delay: options.delay || 0, ease: "power2.out",
            scrollTrigger: { trigger: element, start: "top 85%", toggleActions: "play reverse play reverse" }
          }
        );
      }

      // 4. Zoom / Scale Down (Images & Media)
      const zoomItems = element.querySelectorAll("[data-reveal='zoom']");
      if (zoomItems.length > 0) {
        gsap.fromTo(
          Array.from(zoomItems),
          { opacity: 0, scale: 1.15, transformOrigin: "center center" },
          {
            opacity: 1, scale: 1, duration: 1.4, stagger: 0.15,
            delay: options.delay || 0, ease: "power2.out",
            scrollTrigger: { trigger: element, start: "top 85%", toggleActions: "play reverse play reverse" }
          }
        );
      }

      // 5. Scrubbing Parallax Effect
      const parallaxItems = element.querySelectorAll("[data-parallax]");
      parallaxItems.forEach((item) => {
        const speed = parseFloat(item.getAttribute("data-parallax") || "0.2");
        gsap.fromTo(
          item, 
          { y: `-${speed * 100}px` }, 
          { 
            y: `${speed * 100}px`, 
            ease: "none",
            scrollTrigger: {
              trigger: item.parentElement || element,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5 // Smooth scrubbing tied to Lenis scroll
            }
          }
        );
      });

    }, ref);

    return () => ctx.revert();
  }, [options]);

  return ref;
};
