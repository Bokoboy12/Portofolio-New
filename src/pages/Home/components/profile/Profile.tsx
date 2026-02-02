// import svg and svg
import dataImage from "../../../../assets/image";
import "./Profile.css";

function Profile() {
  return (
    <section id="profile" className="section">
      <div className="container">
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
              Download Resume
            </a>

            <a href="/CV.pdf" download className="git-btn">
              My Github
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
