"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import { useEffect, useRef } from "react";
import IntroCentered from "./components/IntroCentered";
import "./font";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Glitches from "./components/Glitches";
import Socials from "./components/Socials";
import Tools from "./components/Tools";
import Projects from "./components/Projects";

import Tilt from "react-parallax-tilt";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const reveals = gsap.utils.toArray(".tools-container");
    const projectDetails = document.querySelectorAll(".project-details");
    const projectImages = document.querySelectorAll(".projectImg");

    reveals.forEach((item, i) => {
      ScrollTrigger.create({
        trigger: item,
        toggleClass: "active",
        start: "top 85%",
        end: "top 5%",
        onToggle: (self) => {
          if (self.isActive) {
            gsap.to(item.querySelector("::before"), {
              opacity: 1,
              duration: 1,
              ease: "power2.out",
            });
          }
        },
      });
    });

    projectDetails.forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, x: -25 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%", // Adjust this value based on your design
            end: "center center",
            scrub: true,
            // markers: true,
          },
        }
      );
    });

    projectImages.forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 100,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%", // Adjust this value based on your design
            end: "top 30%",
            scrub: true,
          },
        }
      );
    });
    // console.log(projectTextRef);

    // gsap.to(projectTextRef, {
    //   scrollTrigger: {
    //     trigger: projectTextRef,
    //     toggleClass: "fixed",
    //     start: "top 55%",
    //     end: "top 5%",
    //     markers: true,
    //     // Add other ScrollTrigger options here
    //   },
    // });
  }, []);

  return (
    <>
      <div className="contianer pt-5">
        <img className="noise" src="noise.gif" alt="" />
        <Socials></Socials>
        <div className="email flex flex-col gap-3">
          {" "}
          <span className="email-text">alykumayl@gmail.com</span>
          <span className="vertical-line"></span>
        </div>
        <Navbar></Navbar>
        <div className="wrapper">
          <IntroCentered></IntroCentered>
          <Tools></Tools>
          <Projects></Projects>
          <section className="other-projects-container pb-8">
            <h3 className="mb-16 text-center">
              Other Projects
              {/* <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              class="absolute top-2/3 left-0 h-[0.28em] w-full fill-secondary/50 -z-10"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg> */}
            </h3>

            <div className="other-projects grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="other-project drop-shadow-md px-8 py-7 rounded-md  hover:-translate-y-1">
                <header className="flex mb-2 items-center justify-end gap-3">
                  <a
                    className="code flex items-end gap-1"
                    href="https://github.com/AlyKumail/alex-gamble"
                  >
                    {" "}
                    <img src="github-light.svg" alt="" />
                  </a>
                  <a
                    target="_blank"
                    className="flex items-end gap-1"
                    href="https://alex-gamble.vercel.app/"
                  >
                    {" "}
                    <img src="share.svg" alt="" /> <span></span>
                  </a>
                </header>
                <h5 className="mb-1">Alex Gamble</h5>
                <p className="mb-2">
                  Lorem ipsum dolor sit amet consectetur. Ultrices venenatis
                  luctus ut risus pharetra. Et egestas tortor fusce sapien
                  blandit viverra{" "}
                </p>
                <div className="tech-used flex items-center my-2 gap-3">
                  <div className="tech-used-img">
                    <div className="tech-img-container">
                      <img className="tech-img" src="html.svg" alt="" />
                    </div>
                    <span className="tech-name">HTML</span>
                  </div>
                  <div className="tech-used-img">
                    <div className="tech-img-container">
                      <img className="tech-img" src="css.svg" alt="" />
                    </div>
                    <span className="tech-name">CSS</span>
                  </div>
                  <div className="tech-used-img">
                    <div className="tech-img-container">
                      <img className="tech-img" src="js.svg" alt="" />
                    </div>
                    <span className="tech-name">Javascript</span>
                  </div>
                </div>
              </div>
              <div className="other-project drop-shadow-md px-8 py-7 rounded-md hover:-translate-y-1">
                <header className="flex mb-2 items-center justify-end gap-3">
                  <a
                    className="code flex items-end gap-1"
                    href="https://github.com/AlyKumail/Makamat-Landing-Page"
                  >
                    {" "}
                    <img src="github-light.svg" alt="" />
                  </a>
                  <a
                    target="_blank"
                    className="flex items-end gap-1"
                    href="https://makm-alykumail.vercel.app/"
                  >
                    {" "}
                    <img src="share.svg" alt="" /> <span></span>
                  </a>
                </header>
                <h5 className="mb-1">Makamat Landing Page</h5>
                <p className="mb-2">
                  Lorem ipsum dolor sit amet consectetur. Ultrices venenatis
                  luctus ut risus pharetra. Et egestas tortor fusce sapien
                  blandit viverra{" "}
                </p>
                <div className="tech-used flex items-center my-2 gap-3">
                  <div className="tech-used-img">
                    <div className="tech-img-container">
                      <img className="tech-img" src="html.svg" alt="" />
                    </div>
                    <span className="tech-name">HTML</span>
                  </div>
                  <div className="tech-used-img">
                    <div className="tech-img-container">
                      <img className="tech-img" src="css.svg" alt="" />
                    </div>
                    <span className="tech-name">CSS</span>
                  </div>
                  <div className="tech-used-img">
                    <div className="tech-img-container">
                      <img className="tech-img" src="js.svg" alt="" />
                    </div>
                    <span className="tech-name">Javascript</span>
                  </div>
                </div>
              </div>
              <div className="other-project drop-shadow-md px-8 py-7 rounded-md hover:-translate-y-1">
                <header className="flex mb-2 items-center justify-end gap-3">
                  <a
                    className="code flex items-end gap-1"
                    href="https://github.com/AlyKumail/Syldit-Landing-Page"
                  >
                    {" "}
                    <img src="github-light.svg" alt="" />
                  </a>
                  <a
                    target="_blank"
                    className="flex items-end gap-1"
                    href="https://syldit-alykumail.vercel.app/"
                  >
                    {" "}
                    <img src="share.svg" alt="" /> <span></span>
                  </a>
                </header>
                <h5 className="mb-1">Syldit Landing Page</h5>
                <p className="mb-2">
                  Lorem ipsum dolor sit amet consectetur. Ultrices venenatis
                  luctus ut risus pharetra. Et egestas tortor fusce sapien
                  blandit viverra{" "}
                </p>
                <div className="tech-used flex items-center my-2 gap-3">
                  <div className="tech-used-img">
                    <div className="tech-img-container">
                      <img className="tech-img" src="html.svg" alt="" />
                    </div>
                    <span className="tech-name">HTML</span>
                  </div>
                  <div className="tech-used-img">
                    <div className="tech-img-container">
                      <img className="tech-img" src="css.svg" alt="" />
                    </div>
                    <span className="tech-name">CSS</span>
                  </div>
                  <div className="tech-used-img">
                    <div className="tech-img-container">
                      <img className="tech-img" src="js.svg" alt="" />
                    </div>
                    <span className="tech-name">Javascript</span>
                  </div>
                </div>
              </div>
              <div className="other-project drop-shadow-md px-8 py-7 rounded-md hover:-translate-y-1">
                <header className="flex mb-2 items-center justify-end gap-3">
                  <a
                    className="code flex items-end gap-1"
                    href="https://github.com/AlyKumail/fxdx-landing"
                  >
                    {" "}
                    <img src="github-light.svg" alt="" />
                  </a>
                  <a
                    target="_blank"
                    className="flex items-end gap-1"
                    href="https://fxdx-landing.vercel.app/"
                  >
                    {" "}
                    <img src="share.svg" alt="" /> <span></span>
                  </a>
                </header>
                <h5 className="mb-1">FXDX Landing Page</h5>
                <p className="mb-2">
                  Lorem ipsum dolor sit amet consectetur. Ultrices venenatis
                  luctus ut risus pharetra. Et egestas tortor fusce sapien
                  blandit viverra{" "}
                </p>
                <div className="tech-used flex items-center my-2 gap-3">
                  <div className="tech-used-img">
                    <div className="tech-img-container">
                      <img className="tech-img" src="html.svg" alt="" />
                    </div>
                    <span className="tech-name">HTML</span>
                  </div>
                  <div className="tech-used-img">
                    <div className="tech-img-container">
                      <img className="tech-img" src="css.svg" alt="" />
                    </div>
                    <span className="tech-name">CSS</span>
                  </div>
                  <div className="tech-used-img">
                    <div className="tech-img-container">
                      <img className="tech-img" src="js.svg" alt="" />
                    </div>
                    <span className="tech-name">Javascript</span>
                  </div>
                </div>
              </div>
              <div className="other-project drop-shadow-md px-8 py-7 rounded-md hover:-translate-y-1">
                <header className="flex mb-2 items-center justify-end gap-3">
                  <a
                    className="code flex items-end gap-1"
                    href="https://github.com/AlyKumail/Colloquium"
                  >
                    {" "}
                    <img src="github-light.svg" alt="" />
                  </a>
                  <a
                    target="_blank"
                    className="flex items-end gap-1"
                    href="https://colloquium-mu.vercel.app/"
                  >
                    {" "}
                    <img src="share.svg" alt="" /> <span></span>
                  </a>
                </header>
                <h5 className="mb-1">Colloquim Landing Page</h5>
                <p className="mb-2">
                  Lorem ipsum dolor sit amet consectetur. Ultrices venenatis
                  luctus ut risus pharetra. Et egestas tortor fusce sapien
                  blandit viverra{" "}
                </p>
                <div className="tech-used flex items-center my-2 gap-3">
                  <div className="tech-used-img">
                    <div className="tech-img-container">
                      <img className="tech-img" src="html.svg" alt="" />
                    </div>
                    <span className="tech-name">HTML</span>
                  </div>
                  <div className="tech-used-img">
                    <div className="tech-img-container">
                      <img className="tech-img" src="css.svg" alt="" />
                    </div>
                    <span className="tech-name">CSS</span>
                  </div>
                  <div className="tech-used-img">
                    <div className="tech-img-container">
                      <img className="tech-img" src="js.svg" alt="" />
                    </div>
                    <span className="tech-name">Javascript</span>
                  </div>
                </div>
              </div>

              <div className="other-project drop-shadow-md px-8 py-7 rounded-md hover:-translate-y-1">
                <header className="flex mb-2 items-center justify-end gap-3 ">
                  <a
                    className="code flex items-end gap-1"
                    href="https://github.com/AlyKumail/Load-Guard"
                  >
                    {" "}
                    <img src="github-light.svg" alt="" />
                  </a>
                  <a
                    target="_blank"
                    className="flex items-end gap-1"
                    href="https://load-guard.vercel.app/"
                  >
                    {" "}
                    <img src="share.svg" alt="" /> <span></span>
                  </a>
                </header>
                <h5 className="mb-1">Load Guard</h5>
                <p className="mb-2">
                  Lorem ipsum dolor sit amet consectetur. Ultrices venenatis
                  luctus ut risus pharetra. Et egestas tortor fusce sapien
                  blandit viverra{" "}
                </p>
                <div className="tech-used flex items-center my-2 gap-3">
                  <div className="tech-used-img">
                    <div className="tech-img-container">
                      <img className="tech-img" src="html.svg" alt="" />
                    </div>
                    <span className="tech-name">HTML</span>
                  </div>
                  <div className="tech-used-img">
                    <div className="tech-img-container">
                      <img className="tech-img" src="css.svg" alt="" />
                    </div>
                    <span className="tech-name">CSS</span>
                  </div>
                  <div className="tech-used-img">
                    <div className="tech-img-container">
                      <img className="tech-img" src="js.svg" alt="" />
                    </div>
                    <span className="tech-name">Javascript</span>
                  </div>
                </div>
              </div>
              <div className="other-project drop-shadow-md px-8 py-7 rounded-md hover:-translate-y-1">
                <header className="flex mb-2 items-center justify-end gap-4 ">
                  <a
                    className="code flex items-end gap-1"
                    href="https://github.com/AlyKumail/Ignite2.0"
                  >
                    {" "}
                    <img src="github-light.svg" alt="" />
                  </a>
                  <a
                    target="_blank"
                    className="flex items-end gap-1"
                    href="https://ignite2-0-lmmz.vercel.app/"
                  >
                    {" "}
                    <img src="share.svg" alt="" /> <span></span>
                  </a>
                </header>
                <h5 className="mb-1">Ignite2.0</h5>
                <p className="mb-2">
                  Lorem ipsum dolor sit amet consectetur. Ultrices venenatis
                  luctus ut risus pharetra. Et egestas tortor fusce sapien
                  blandit viverra{" "}
                </p>
                <div className="tech-used flex items-center my-2 gap-3">
                  <div className="tech-used-img">
                    <div className="tech-img-container">
                      <img className="tech-img" src="html.svg" alt="" />
                    </div>
                    <span className="tech-name">HTML</span>
                  </div>
                  <div className="tech-used-img">
                    <div className="tech-img-container">
                      <img className="tech-img" src="css.svg" alt="" />
                    </div>
                    <span className="tech-name">CSS</span>
                  </div>
                  <div className="tech-used-img">
                    <div className="tech-img-container">
                      <img className="tech-img" src="js.svg" alt="" />
                    </div>
                    <span className="tech-name">Javascript</span>
                  </div>
                </div>
              </div>
              <div className="other-project drop-shadow-md px-8 py-7 rounded-md hover:-translate-y-1">
                <header className="flex mb-2 items-center justify-end gap-3">
                  <a
                    className="code flex items-end gap-1"
                    href="https://github.com/AlyKumail/SOL-NFT-Collection"
                  >
                    {" "}
                    <img src="github-light.svg" alt="" />
                  </a>
                  <a
                    target="_blank"
                    className="flex items-end gap-1"
                    href="https://sol-nft-collection.vercel.app/"
                  >
                    {" "}
                    <img src="share.svg" alt="" /> <span></span>
                  </a>
                </header>
                <h5 className="mb-1">The Motivational Leopards</h5>
                <p className="mb-2">
                  Lorem ipsum dolor sit amet consectetur. Ultrices venenatis
                  luctus ut risus pharetra. Et egestas tortor fusce sapien
                  blandit viverra{" "}
                </p>
                <div className="tech-used flex items-center my-2 gap-3">
                  <div className="tech-used-img">
                    <div className="tech-img-container">
                      <img className="tech-img" src="html.svg" alt="" />
                    </div>
                    <span className="tech-name">HTML</span>
                  </div>
                  <div className="tech-used-img">
                    <div className="tech-img-container">
                      <img className="tech-img" src="css.svg" alt="" />
                    </div>
                    <span className="tech-name">CSS</span>
                  </div>
                  <div className="tech-used-img">
                    <div className="tech-img-container">
                      <img className="tech-img" src="js.svg" alt="" />
                    </div>
                    <span className="tech-name">Javascript</span>
                  </div>
                </div>
              </div>
              <div className="other-project drop-shadow-md px-8 py-7 rounded-md hover:-translate-y-1">
                <header className="flex mb-2 items-center justify-end gap-3">
                  <a
                    className="code flex items-end gap-1"
                    href="https://github.com/AlyKumail/Music-Player"
                  >
                    {" "}
                    <img src="github-light.svg" alt="" />
                  </a>
                  <a
                    target="_blank"
                    className="flex items-end gap-1"
                    href="https://music-player-nu-three.vercel.app/"
                  >
                    {" "}
                    <img src="share.svg" alt="" /> <span></span>
                  </a>
                </header>
                <h5 className="mb-1">Music Player</h5>
                <p className="mb-2">
                  Lorem ipsum dolor sit amet consectetur. Ultrices venenatis
                  luctus ut risus pharetra. Et egestas tortor fusce sapien
                  blandit viverra{" "}
                </p>
                <div className="tech-used flex items-center my-2 gap-3">
                  <div className="tech-used-img">
                    <div className="tech-img-container">
                      <img className="tech-img" src="html.svg" alt="" />
                    </div>
                    <span className="tech-name">HTML</span>
                  </div>
                  <div className="tech-used-img">
                    <div className="tech-img-container">
                      <img className="tech-img" src="css.svg" alt="" />
                    </div>
                    <span className="tech-name">CSS</span>
                  </div>
                  <div className="tech-used-img">
                    <div className="tech-img-container">
                      <img className="tech-img" src="js.svg" alt="" />
                    </div>
                    <span className="tech-name">Javascript</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* <Glitches></Glitches> */}
      </div>
    </>
  );
}
