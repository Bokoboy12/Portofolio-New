import SvgList from "../../../../assets/svg";
import "./CardList.css";

function CardList() {
  return (
    <section className="section border">
      <div className="card">
        <div className="carousel-container">
          <div className="card-container">
            <div className="svg">
              <img srcSet={SvgList.htmlLogo} alt="HTML" />
              <p>HTML</p>
            </div>

            <div className="svg">
              <img srcSet={SvgList.cssLogo} alt="CSS" />
              <p>CSS</p>
            </div>

            <div className="svg">
              <img srcSet={SvgList.jsLogo} alt="JavaScript" />
              <p>JavaScript</p>
            </div>

            <div className="svg">
              <img srcSet={SvgList.reactLogo} alt="React" />
              <p>React</p>
            </div>

            <div className="svg">
              <img srcSet={SvgList.tsLogo} alt="TypeScript" />
              <p>TypeScript</p>
            </div>

            <div className="svg">
              <img srcSet={SvgList.bootstrapLogo} alt="TypeScript" />
              <p>Bootstrap</p>
            </div>

            <div className="svg">
              <img srcSet={SvgList.tailwindLogo} alt="TypeScript" />
              <p>Tailwind</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardList;
