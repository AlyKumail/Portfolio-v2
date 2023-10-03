import React from "react";

import { PT_Serif, Playfair_Display, Kavivanar } from "next/font/google";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const pt_serif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const kavivnar = Kavivanar({
  subsets: ["latin"],
  weight: "400",
});

const IntroCentered = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.from(containerRef.current, {
      y: 25, // Slide up by 50px
      opacity: 0, // Start with opacity 0 (fade in)
      duration: 1.5, // Animation duration
      ease: "power3.easeIn", // Easing function
    });
  }, []);

  return (
    <main
      ref={containerRef}
      className="IntroCentered flex flex-col items-center justify-center text-white w-1/2 mx-auto text-center mt-9"
    >
      <h1 className=" title">I BUILD WEB INTERFACES !</h1>
      <p className={`${kavivnar.className} name  `}>Ali Kumail</p>
      <p className=" description">
        I am self taught Frontend Web Developer , I had learnt a lot of the
        processes, concepts and theories of Frontend Development through online
        courses, reading blogs and by applying these to projects in my spare
        time. I am also passionate about Blockchain/Web3 revolution.
      </p>
      <div className="btn-container">
        <span className="btn-bg"></span>
        <a href="myresume.pdf" download="AliKumail.pdf">
          <button className="btn"> Resume</button>
        </a>
      </div>
    </main>
  );
};

export default IntroCentered;
