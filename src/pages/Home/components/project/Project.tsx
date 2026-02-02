import dataImage from "../../../../assets/image";
import "./Project.css";

function Project() {
  return (
    <section className="section">
      <div className="project">
        <h1>Latest Project</h1>
       
        <div className="project-list">
          <div className="project-card">
            <img srcSet={dataImage.pradaImage} alt="" />
            <div className="project-info">
              <h2>Intern FrontEnd Web Dev</h2>
              <div className="project-meta">
                <span className="company">PT Prada Seven</span>
                <span className="year">2024</span>
              </div>
            </div>
            <button>lihat detail</button>
          </div>

          <div className="project-card">
            <img srcSet={dataImage.pradaImage} alt="" />
            <div className="project-info">
              <h2>Prada Seven Website</h2>
              <div className="project-meta">
                <span className="company">PT Prada Seven</span>
                <span className="year">2024</span>
              </div>
            </div>
            <button>lihat detail</button>
          </div>
          
          <div className="project-card">
            <img srcSet={dataImage.pradaImage} alt="" />
            <div className="project-info">
              <h2>Prada Seven Website</h2>
              <div className="project-meta">
                <span className="company">PT Prada Seven</span>
                <span className="year">2024</span>
              </div>
            </div>
            <button>lihat detail</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
