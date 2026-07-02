import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function setHtmlTimeline() {
  // 1. Landing Page Fade Out on Scroll
  gsap.timeline({
    scrollTrigger: {
      trigger: ".landing-section",
      start: "top top",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  })
  .to(".landing-container", { opacity: 0, y: "30%", duration: 1 }, 0);

  // 2. About Section entrance/fade out
  gsap.timeline({
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 60%",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  })
  .fromTo(".about-headline", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
  .fromTo(".ab-card", { opacity: 0, y: 40 }, { opacity: 1, y: 0, stagger: 0.15, duration: 1.5 }, "-=0.5")
  .fromTo(".ab-status", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 }, "-=0.5");

  // 3. What I Do Section scroll trigger
  gsap.timeline({
    scrollTrigger: {
      trigger: ".whatIDO",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  })
  .fromTo(".what-box h2", { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1 })
  .fromTo(".what-content", { opacity: 0, y: 50 }, { opacity: 1, y: 0, stagger: 0.2, duration: 1 }, "-=0.5");
}

export function setAllTimeline() {
  const careerTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".career-section",
      start: "top 30%",
      end: "100% center",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });

  careerTimeline
    .fromTo(
      ".career-timeline",
      { maxHeight: "10%" },
      { maxHeight: "100%", duration: 0.5 },
      0
    )
    .fromTo(
      ".career-timeline",
      { opacity: 0 },
      { opacity: 1, duration: 0.1 },
      0
    )
    .fromTo(
      ".career-info-box",
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, stagger: 0.1, duration: 0.5 },
      0
    )
    .fromTo(
      ".career-dot",
      { animationIterationCount: "infinite" },
      {
        animationIterationCount: "1",
        delay: 0.3,
        duration: 0.1,
      },
      0
    );

  if (window.innerWidth > 1024) {
    careerTimeline.fromTo(
      ".career-section",
      { y: 0 },
      { y: "10%", duration: 0.5, delay: 0.2 },
      0
    );
  }
}

export function setCharTimeline(..._args: any[]) {
  // Unused legacy placeholder to satisfy character model typescript exports
}
