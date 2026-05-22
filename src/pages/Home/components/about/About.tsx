import { useState } from "react";
import { useRef } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

// data image
import dataImage from "../../../../assets/image";
import "./About.css";

function About() {
  const [expanded, setExpanded] = useState(false);

  const skillRef = useRef<HTMLDivElement | null>(null);
  useIntersectionObserver({
    ref: skillRef,
    threshold: 0.3,
    className: "show",
  });

  return (
    <section className="section" id="about">
      <div className="about" ref={skillRef}>
        <h1>About Me</h1>
        <div className="about-container">
          <div className="about-me-wrapper">
            <div className={`about-me ${expanded ? "expanded" : ""}`}>
              <p>
                Hello! My name is Boyke Adam, an Informatics Engineering
                graduate with about a year of experience in website development
                using HTML, CSS, and JavaScript. I'm currently exploring the
                React library using Typscript. I'm able to work both
                independently and collaboratively, adapt quickly to new
                challenges, and always focus on creating innovative and
                impactful digital solutions. I enjoy the process of developing
                modern and efficient web applications while ensuring a smooth
                and meaningful user experience.
              </p>
              <p>
                I also leverage AI-powered tools to streamline development
                workflows, helping projects move faster and more efficiently
                without sacrificing quality. I pay close attention to Core Web
                Vitals such as LCP, INP, and CLS to ensure optimal performance
                and a smooth user experience. With a strong attention to detail,
                influenced by my hobby of drawing, I’m meticulous in crafting
                clean interfaces, precise layouts, and polished visual elements.
              </p>
              <p>
                In 2024, I collaborated with the Faculty of Agriculture and the
                Faculty of Electrical Engineering in developing a smart
                greenhouse system based on a web application as part of an
                internship program. I was responsible for the frontend
                development, focusing on designing and implementing the system's
                UI and UX using the Laravel framework (Livewire) and Bootstrap
                to deliver a fast, interactive, and real-time user interface.
              </p>
            </div>
            {/* See more */}
            <button
              className="see-more-btn"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "See less" : "See more..."}
            </button>
          </div>

          {/* Skill */}
          <div className="about-skill">
            <div className="about-img">
              <img srcSet={dataImage.aboutImage} alt="Boyke Adam" />
            </div>
            <h2>My Skill</h2>
            <div className="box-skill">
              <ul>
                <li className="skill">HTML</li>
                <li className="skill">CSS</li>
                <li className="skill">Bootstrap</li>
                <li className="skill">Tailwind CSS</li>
                <li className="skill">JavaScript</li>
                <li className="skill">React</li>
                <li className="skill">TypeScript</li>
                <li className="skill">Rest API</li>
                <li className="skill">Core Web Vitals</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
