"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import IntroCentered from "./components/IntroCentered";
import "./font";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Glitches from "./components/Glitches";
import Socials from "./components/Socials";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
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
        <IntroCentered></IntroCentered>
        {/* <Glitches></Glitches> */}
      </div>
    </>
  );
}
