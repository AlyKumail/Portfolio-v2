import React from "react";

const Projects = () => {
  return (
    <section className="projects-container pt-12">
      <h3 className="mb-8 text-center">Projects</h3>
      <div className="project flex items-start">
        <div className="project-left w-1/2 py-9 px-12 pl-16 ">
          <div className="project-details animate-fade-right">
            <h4 className="mb-1">Banking App</h4>
            <p>
              Figma to HTML, CSS & Javascript freelance project. It consist of
              multiple modals on different pages and is fully mobile responsive.
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
            <div className="project-links flex items-center gap-12 mt-9">
              <a className="code flex items-end gap-1" href="#">
                {" "}
                <img src="github-light.svg" alt="" /> <span>Code</span>
                <span className="project-private">Repo is private</span>
              </a>
              <a
                target="_blank"
                className="flex items-end gap-1"
                href="https://banking-app-web-html.vercel.app/"
              >
                {" "}
                <img src="desktop.svg" alt="" /> <span>Demo</span>
              </a>
            </div>
          </div>
        </div>
        <div className="project-right flex flex-col w-1/2 py-9 ">
          <img
            className="projectImg animate-fade-up"
            src="banking1.png"
            alt=""
          />
          <img
            className="projectImg animate-fade-up"
            src="banking2.png"
            alt=""
          />
          <img
            className="projectImg animate-fade-up"
            src="banking3.png"
            alt=""
          />
        </div>
      </div>
      <div className="project flex flex-row-reverse items-start">
        <div className="project-left w-1/2 py-9 px-12 pl-16 ">
          <div className="project-details animate-fade-left  ">
            <h4 className="mb-1">Banking App</h4>
            <p>
              Figma to HTML, CSS & Javascript freelance project. It consist of
              multiple modals on different pages and is fully mobile responsive.
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
            <div className="project-links flex items-center gap-12 mt-9">
              <a className="code flex items-end gap-1" href="#">
                {" "}
                <img src="github-light.svg" alt="" /> <span>Code</span>
                <span className="project-private">Repo is private</span>
              </a>
              <a
                target="_blank"
                className="flex items-end gap-1"
                href="https://banking-app-web-html.vercel.app/"
              >
                {" "}
                <img src="desktop.svg" alt="" /> <span>Demo</span>
              </a>
            </div>
          </div>
        </div>
        <div className="project-right flex flex-col w-1/2 py-9 ">
          <img
            className="projectImg animate-fade-up"
            src="banking1.png"
            alt=""
          />
          <img
            className="projectImg animate-fade-up"
            src="banking2.png"
            alt=""
          />
          <img
            className="projectImg animate-fade-up"
            src="banking3.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
