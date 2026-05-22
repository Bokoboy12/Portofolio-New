import { useRef } from "react";
import { useIntersectionObserver } from "../../pages/Home/hooks/useIntersectionObserver";

import "./footer.css";

function Footer() {
  const skillRef = useRef<HTMLDivElement | null>(null);

  useIntersectionObserver({
    ref: skillRef,
    threshold: 0.3,
    className: "show",
  });

  return (
    <section className="section">
      <footer className="footer" ref={skillRef}>
        <div className="footer-content">
          <h2>Get in Touch</h2>
          <p>For business and partnership inquiry please contact me below!</p>

          <ul className="contact-list">
            <li>
              <span className="icon">📞</span>
              <div>
                <small>Phone</small>
                <strong>0853-1871-7519</strong>
              </div>
            </li>

            <li>
              <span className="icon">✉️</span>
              <div>
                <small>Email</small>
                <strong>boykeadam09@gmail.com</strong>
              </div>
            </li>

            <li>
              <span className="icon">📍</span>
              <div>
                <small>Address</small>
                <strong>Kota Bandung, Jawa Barat</strong>
              </div>
            </li>
          </ul>
        </div>
        <div className="footer-ornament" />
      </footer>
    </section>
  );
}

export default Footer;
