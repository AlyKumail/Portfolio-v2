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
  useEffect(() => {
    const reveals = gsap.utils.toArray(".tools-container");
    console.log("reveals", reveals);
    reveals.forEach((item, i) => {
      ScrollTrigger.create({
        trigger: item,
        toggleClass: "active",
        start: "top 85%",
        end: "top 5%",
        markers: true,
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
        <IntroCentered></IntroCentered>
        <div className="tools flex flex-col items-center justify-start py-12">
          <h3 className="mb-8">Tools & Technologies</h3>
          <section className="tools-container">
            <div className="tools-wrapper flex items-center gap-3">
              <img className="tools-noise" src="noise.gif" alt="" />
              <div className="tools-wrapper-title">Frontend</div>
              <div className="tool-item flex items-end gap-1">
                <img src="ts.svg" alt="" />
                <span>Typescript ,</span>
              </div>
              <div className="tool-item flex items-end gap-1">
                <img src="react.svg" alt="" />
                <span>React.js ,</span>
              </div>
              <div className="tool-item flex items-end gap-1">
                <img src="nextjs.svg" alt="" />
                <span>Next.js ,</span>
              </div>
              <div className="tool-item flex items-end gap-1">
                <img src="redux.svg" alt="" />
                <span>Redux.js ,</span>
              </div>
              <div className="tool-item flex items-end gap-1">
                <img src="tailwind.svg" alt="" />
                <span>Tailwind ,</span>
              </div>
              <div className="tool-item flex items-end gap-1">
                <img src="js.svg" alt="" />
                <span>Javascript ,</span>
              </div>
              <div className="tool-item flex items-end gap-1">
                <img src="css.svg" alt="" />
                <span>CSS ,</span>
              </div>
              <div className="tool-item flex items-end gap-1">
                <img src="html.svg" alt="" />
                <span>HTML ,</span>
              </div>
              <div className="tool-item flex items-end gap-1">
                <img src="bootstrap.svg" alt="" />
                <span>Bootstrap ,</span>
              </div>

              <div className="tool-item flex items-end gap-1">
                <img src="mui.svg" alt="" />
                <span>MaterialUI </span>
              </div>
              <div className="tool-item flex items-end gap-1">
                <img src="sass.svg" alt="" />
                <span>SASS ,</span>
              </div>
              <div className="tool-item flex items-end gap-1">
                <img src="less.svg" alt="" />
                <span>Less ,</span>
              </div>
            </div>
          </section>
          <section className="tools-container">
            <div className="tools-wrapper  flex items-center gap-3">
              <img className="tools-noise" src="noise.gif" alt="" />
              <div className="tools-wrapper-title">Backend</div>
              <div className="tool-item flex items-end gap-1">
                <img src="node.svg" alt="" />
                <span>Node.js ,</span>
              </div>
              <div className="tool-item flex items-end gap-1">
                <img src="express.svg" alt="" />
                <span>Express.js ,</span>
              </div>
              <div className="tool-item flex items-end gap-1">
                <img src="mongo.svg" alt="" />
                <span>MongoDB ,</span>
              </div>
              <div className="tool-item flex items-end gap-1">
                <img src="firebase.svg" alt="" />
                <span>Firebase ,</span>
              </div>
              <div className="tool-item flex items-end gap-1">
                <img src="graphql.svg" alt="" />
                <span>GraphQL ,</span>
              </div>
              <div className="tool-item flex items-end gap-1">
                <img src="mysql.svg" alt="" />
                <span>MySql ,</span>
              </div>
              <div className="tool-item flex items-end gap-1">
                <img src="postgre.svg" alt="" />
                <span>PostgreSQL ,</span>
              </div>
              <div className="tool-item flex items-end gap-1">
                <img src="redis.svg" alt="" />
                <span>Redis ,</span>
              </div>
              <div className="tool-item flex items-end gap-1">
                <img src="socket.svg" alt="" />
                <span>Socket.io </span>
              </div>
            </div>
          </section>
          <section className="tools-container">
            <div className="tools-wrapper  flex items-center gap-3">
              <img className="tools-noise" src="noise.gif" alt="" />
              <div className="tools-wrapper-title">Others</div>
              <div className="tool-item flex items-end gap-1">
                <img src="vscode.svg" alt="" />
                <span>VSCode ,</span>
              </div>
              <div className="tool-item flex items-end gap-1">
                <img src="git.svg" alt="" />
                <span>Git ,</span>
              </div>
              <div className="tool-item flex items-end gap-1">
                <img src="github.svg" alt="" />
                <span>Github ,</span>
              </div>
              <div className="tool-item flex items-end gap-1">
                <img src="bitbucket.svg" alt="" />
                <span>Bitbucket ,</span>
              </div>
              <div className="tool-item flex items-end gap-1">
                <img src="jira.svg" alt="" />
                <span>Jira ,</span>
              </div>
              <div className="tool-item flex items-end gap-1">
                <img src="figma.svg" alt="" />
                <span>Figma ,</span>
              </div>
              <div className="tool-item flex items-end gap-1">
                <img src="docker.svg" alt="" />
                <span>Docker ,</span>
              </div>
              <div className="tool-item flex items-end gap-1">
                <img src="npm.svg" alt="" />
                <span>npm ,</span>
              </div>
              <div className="tool-item flex items-end gap-1">
                <img src="webpack.svg" alt="" />
                <span>Webpack </span>
              </div>
              <div className="tool-item flex items-end gap-1">
                <img src="eslint.svg" alt="" />
                <span>ESLint </span>
              </div>
            </div>
          </section>
        </div>
        {/* <Glitches></Glitches> */}
      </div>
    </>
  );
}
