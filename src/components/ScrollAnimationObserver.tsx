
import { useEffect } from "react";

const ScrollAnimationObserver = () => {
  useEffect(() => {
    // Function to handle intersection with viewport
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    };

    // Create observer with options
    const observerOptions: IntersectionObserverInit = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 0.1, // 10% of the element needs to be visible
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Target all elements with the 'reveal' class
    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    // Clean up observer on unmount
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return null; // This component doesn't render anything
};

export default ScrollAnimationObserver;
