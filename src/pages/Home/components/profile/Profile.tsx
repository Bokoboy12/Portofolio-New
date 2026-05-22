// import svg and svg
import { useRef } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import dataImage from "../../../../assets/image";
import "./Profile.css";

function Profile() {
  const skillRef = useRef<HTMLDivElement | null>(null);

  useIntersectionObserver({
    ref: skillRef,
    threshold: 0.3,
    className: "show",
  });

  return (
    <section id="profile" className="section">
      <div className="container" ref={skillRef}>
        <div className="profile-container">
          <div className="frame">
            <img srcSet={dataImage.heroImage} alt="Profile" />
          </div>
        </div>

        <div className="profile-info">
          <h1>Hi, I'm Boy.</h1>
          <h2>Web Developer & Creative design learner</h2>
          <p>
            Frontend - focused Web Developer with a strong interest in creating
            interactive and high-performance web interfaces. Proficient with
            React.js and TypeScript, as well as integrating REST API.
            {/* and applying Core Web Vitals principles (LCP, INP, CLS) to improve user
            experience. Enjoys designing dynamic components with clean structure
            and scalable patterns. */}
          </p>

          <div className="profile-links">
            <a href="/CV.pdf" download className="cv-btn">
              Download CV
            </a>

            <a
              href="https://github.com/Bokoboy12"
              target="_blank"
              rel="noopener noreferrer"
              className="git-btn"
            >
              My Github
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
