import { useState } from "react";
import { useRef } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

import Modal from "./modal/Modal";
import dataImage from "../../../../assets/image";
import "./Project.css";

function Project() {
  const [active, setActive] = useState<"a" | "b" | "c" | null>(null);
  const skillRef = useRef<HTMLDivElement | null>(null);

  useIntersectionObserver({
    ref: skillRef,
    threshold: 0.3,
    className: "show",
  });

  return (
    <section className="section" id="project">
      <div className="project" ref={skillRef}>
        <h1>Latest Project</h1>

        <div className="project-list">
          <div className="project-card">
            <img srcSet={dataImage.homeImage} alt="" />
            <div className="project-info">
              <h2>Prada Seven Website</h2>
              <div className="project-meta">
                <span className="company">Prada Indo Property</span>
                <span className="year">0ct - Des 2025</span>
              </div>
            </div>
            <button onClick={() => setActive("a")}>See Details</button>
          </div>

          <div className="project-card">
            <img srcSet={dataImage.sgh1Image} alt="" />
            <div className="project-info">
              <h2>Smart Green House Website</h2>
              <div className="project-meta">
                <span className="company">Islamic Nusantara University</span>
                <span className="year">Oct - Des 2024</span>
              </div>
            </div>
            <button onClick={() => setActive("b")}>See Details</button>
          </div>
        </div>
      </div>
      {/* Open Modal */}
      {active === "a" && (
        <Modal
          images={[
            dataImage.homeImage,
            dataImage.typeImage,
            dataImage.manfaatImage,
            dataImage.contactImage,
          ]}
          title="Prada Seven Website"
          description="Website company profile modern with responsive screen and clean design."
          onClose={() => setActive(null)}
        />
      )}
      {active === "b" && (
        <Modal
          images={[
            dataImage.sgh1Image,
            dataImage.sgh2Image,
            dataImage.aboutImage,
            dataImage.sgh4Image,
          ]}
          title="Smart Green House Website"
          description="Developing a real-time Smart Greenhouse website based on Laravel that is integrated with an IoT system for real-time monitoring of greenhouse conditions, a collaboration between the Agricultural and Electrical Engineering Study Programs"
          onClose={() => setActive(null)}
        />
      )}
    </section>
  );
}

export default Project;
