gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// === SMOOTH SCROLLING ===
ScrollSmoother.create({
  wrapper: "#smooth-wrapper",  // wrapper div around content
  content: "#smooth-content",  // main scrollable content
  smooth: 1.5,
  effects: true
});

// === HOME ANIMATIONS ===
gsap.from(".home_h1", {
  scrollTrigger: {
    trigger: "#home",
    start: "top center",
  },
  y: 100,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".home_p", {
  scrollTrigger: {
    trigger: "#home",
    start: "top center+=100",
  },
  y: -50,
  opacity: 0,
  duration: 1.2,
  delay: 0.3,
  ease: "power3.out"
});

gsap.from(".home_h2", {
  scrollTrigger: {
    trigger: "#home",
    start: "top center+=150",
  },
  scale: 0.7,
  opacity: 0,
  duration: 1.2,
  delay: 0.5,
  ease: "elastic.out(1, 0.6)"
});

// === ABOUT SECTION ===
const container = document.querySelector(".about-container");
const clickBox = document.querySelector(".click-box");
const closeBtn = document.querySelector(".close-btn");

// Animate click-box on scroll
gsap.from("#about .click-box", {
  scrollTrigger: {
    trigger: "#about",
    start: "top 80%",
  },
  scale: 0.5,
  opacity: 0,
  duration: 1,
  ease: "back.out(1.7)"
});

clickBox.addEventListener("click", () => {
  // Hide click-box with animation
  gsap.to(clickBox, {
    opacity: 0,
    scale: 0,
    duration: 0.5,
    ease: "power2.inOut",
    onComplete: () => {
      clickBox.style.display = "none"; // fully remove from view
    }
  });

  // Show about content
  container.classList.add("active");
  gsap.fromTo(".about-text",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" });
});

closeBtn.addEventListener("click", () => {
  gsap.to(".about-text", {
    opacity: 0,
    y: 50,
    duration: 0.5,
    ease: "power2.in",
    onComplete: () => {
      container.classList.remove("active");
// Show click-box again when closing
  clickBox.style.display = "block";
  gsap.fromTo(clickBox, 
    { opacity: 0, scale: 0 }, 
    { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" }
  );
    }
  })
  

  
});


// === WORKS SCROLLING CARDS ===
// === WORKS SCROLLING CARDS ===
const scrollsection = document.querySelector(".vertical-section");
const scrollItem = scrollsection.querySelectorAll(".scrollitem");

// Run different logic based on screen width
ScrollTrigger.matchMedia({
  // Desktop only
  "(min-width: 1025px)": function () {
    // initial position
    scrollItem.forEach((item, index) => {
      if (index !== 0) {
        gsap.set(item, { yPercent: 100 });
      }
    });

    // timeline for scaling & sliding
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: scrollsection,
        pin: true,
        start: "top top",
        end: () => `+=${scrollItem.length * 150}%`,
        scrub: 1,
        invalidateOnRefresh: true,
      },
      defaults: { ease: "none" },
    });

    scrollItem.forEach((item, index) => {
      timeline.to(item, {
        scale: 0.9,
        borderRadius: "10px",
      });
      if (scrollItem[index + 1]) {
        timeline.to(scrollItem[index + 1], { yPercent: 0 }, "<");
      }
    });
  },

  // Mobile & tablet (≤ 1024px)
  "(max-width: 1024px)": function () {
    // Just stack them normally, no GSAP scroll effect
    gsap.set(scrollItem, { clearProps: "all" });
  }
});

 gsap.utils.toArray(".illustration-card img").forEach((img) => {
            gsap.fromTo(
                img,
                { scale: 0.8, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: img,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });


// === CONTACT SECTION ===
gsap.from("#contact h1", {
  scrollTrigger: {
    trigger: "#contact",
    start: "top 80%",
  },
  y: 100,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

gsap.from("#contact img", {
  scrollTrigger: {
    trigger: "#contact",
    start: "top 70%",
  },
  scale: 0.5,
  opacity: 0,
  duration: 1.2,
  ease: "back.out(1.7)"
});

gsap.from("#contact h2", {
  scrollTrigger: {
    trigger: "#contact",
    start: "top 60%",
  },
  y: 80,
  opacity: 0,
  duration: 1,
  delay: 0.3,
  ease: "power3.out"
});

gsap.from(".social-media a", {
  scrollTrigger: {
    trigger: ".social-media",
    start: "top 70%",
  },
  opacity: 0,
  y: 50,
  stagger: 0.2,
  duration: 0.8,
  ease: "power3.out"
});
