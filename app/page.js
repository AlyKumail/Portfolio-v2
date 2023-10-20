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
    const fadeUp = gsap.utils.toArray(".animate-fade-up");
    const fadeRight = document.querySelectorAll(".animate-fade-right");
    const fadeLeft = document.querySelectorAll(".animate-fade-left");

    fadeUp.forEach((element, i) => {
      gsap.from(element, {
        opacity: 0,
        y: 50,
        duration: 1,

        scrollTrigger: {
          trigger: element,
          start: "top 95%",
          end: "bottom 95%",
          toggleActions: "play none play reverse",
          once: false,
        },
      });
    });

    fadeRight.forEach((element) => {
      gsap.from(element, {
        opacity: 0,
        x: -50,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          end: "bottom top", // End the animation when the top of the element hits the top of the viewport

          toggleActions: "play none play reverse",
          once: false,
        },
      });
    });

    fadeLeft.forEach((element) => {
      gsap.from(element, {
        opacity: 0,
        x: 50,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          end: "bottom top", // End the animation when the top of the element hits the top of the viewport

          toggleActions: "play none play reverse",
          once: false,
        },
      });
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
          <span className="email-text">
            <a href="mailto:alykumayl@gmail.com">alykumayl@gmail.com</a>
          </span>
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
              <div className="other-project animate-fade-up drop-shadow-md px-8 py-7 rounded-md  hover:-translate-y-1">
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
                  Freelance project where I used regular HTML,CSS & JS. It have
                  many Frontend interactions like Sidebar toggle and many more.
                  Other screens : <br></br>{" "}
                  <a
                    style={{ color: "royalblue" }}
                    href="https://alex-gamble.vercel.app/weight-tracking-entry.html"
                    className="underline"
                  >
                    Screen1
                  </a>{" "}
                  <a
                    style={{ color: "royalblue" }}
                    href="https://alex-gamble.vercel.app/dashboard-meals.html"
                    className="underline"
                  >
                    Screen2
                  </a>{" "}
                  <a
                    style={{ color: "royalblue" }}
                    href="https://alex-gamble.vercel.app/sign-up.html"
                    className="underline"
                  >
                    Signup
                  </a>{" "}
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
              <div className="other-project animate-fade-up drop-shadow-md px-8 py-7 rounded-md hover:-translate-y-1">
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
                  Freelance project where I build a landing page for an RFID
                  company.{" "}
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
              <div className="other-project animate-fade-up drop-shadow-md px-8 py-7 rounded-md hover:-translate-y-1">
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
                  A landing page for a dating app, I have used few simple
                  animations using css keyframes.{" "}
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
              <div className="other-project animate-fade-up drop-shadow-md px-8 py-7 rounded-md hover:-translate-y-1">
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
                  Freelance project where I build a landing page for a startup
                  i.e. fxdx , they have gone through after changes but the first
                  one was build by me{" "}
                </p>
                <div className="tech-used flex items-center my-2 gap-3">
                  <div className="tech-used-img">
                    <div className="tech-img-container">
                      <img className="tech-img" src="react.svg" alt="" />
                    </div>
                    <span className="tech-name">React</span>
                  </div>
                  <div className="tech-used-img">
                    <div className="tech-img-container">
                      <img className="tech-img" src="js.svg" alt="" />
                    </div>
                    <span className="tech-name">Javascript</span>
                  </div>
                  <div className="tech-used-img">
                    <div className="tech-img-container">
                      <img className="tech-img" src="css.svg" alt="" />
                    </div>
                    <span className="tech-name">CSS</span>
                  </div>
                </div>
              </div>
              <div className="other-project animate-fade-up drop-shadow-md px-8 py-7 rounded-md hover:-translate-y-1">
                <header className="flex mb-2 items-center justify-end gap-4 ">
                  <a className="relative code flex items-end gap-1" href="#">
                    {" "}
                    <img src="github-light.svg" alt="" />
                    <span style={{ width: "80px" }} className="project-private">
                      Repo is private
                    </span>
                  </a>
                  <a
                    target="_blank"
                    className="flex items-end gap-1"
                    href="https://codera.app/schools/"
                  >
                    {" "}
                    <img src="share.svg" alt="" /> <span></span>
                  </a>
                </header>
                <h5 className="mb-1">Codera Schools - Landing Page</h5>
                <p className="mb-2">
                  Freelance project where I developed Landing Page for a startup
                  i.e. Codera, I have used regular HTML, CSS & JS. And GSAP for
                  animations{" "}
                </p>
                <div className="tech-used flex items-center my-2 gap-3">
                  <div className="tech-used-img">
                    <div className="tech-img-container">
                      <img className="tech-img" src="react.svg" alt="" />
                    </div>
                    <span className="tech-name">React</span>
                  </div>
                  <div className="tech-used-img">
                    <div className="tech-img-container">
                      <img className="tech-img" src="js.svg" alt="" />
                    </div>
                    <span className="tech-name">Javascript</span>
                  </div>
                  <div className="tech-used-img">
                    <div className="tech-img-container">
                      <img className="tech-img" src="css.svg" alt="" />
                    </div>
                    <span className="tech-name">CSS</span>
                  </div>
                </div>
              </div>
              <div className="other-project animate-fade-up drop-shadow-md px-8 py-7 rounded-md hover:-translate-y-1">
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
                  Freelance project where I build a landing page using React.{" "}
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

              <div className="other-project animate-fade-up drop-shadow-md px-8 py-7 rounded-md hover:-translate-y-1">
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
                  Freelance project having dashboard screens. Here are its
                  different screens : <br></br>
                  <a
                    style={{ color: "royalblue" }}
                    href="https://load-guard.vercel.app/company.html"
                    className="underline"
                  >
                    Company
                  </a>{" "}
                  <a
                    style={{ color: "royalblue" }}
                    href="https://load-guard.vercel.app/results.html"
                    className="underline"
                  >
                    Results
                  </a>{" "}
                  <a
                    style={{ color: "royalblue" }}
                    href="https://load-guard.vercel.app/homepagefree.html"
                    className="underline"
                  >
                    Home
                  </a>{" "}
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

              <div className="other-project animate-fade-up drop-shadow-md px-8 py-7 rounded-md hover:-translate-y-1">
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
                      <img className="tech-img" src="react.svg" alt="" />
                    </div>
                    <span className="tech-name">React</span>
                  </div>
                  <div className="tech-used-img">
                    <div className="tech-img-container">
                      <img className="tech-img" src="ts.svg" alt="" />
                    </div>
                    <span className="tech-name">Typescript</span>
                  </div>
                  <div className="tech-used-img">
                    <div className="tech-img-container">
                      <img className="tech-img" src="css.svg" alt="" />
                    </div>
                    <span className="tech-name">CSS</span>
                  </div>
                </div>
              </div>
              <div className="other-project animate-fade-up drop-shadow-md px-8 py-7 rounded-md hover:-translate-y-1">
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
