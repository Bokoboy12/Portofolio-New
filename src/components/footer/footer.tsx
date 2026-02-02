import "./footer.css";

function Footer() {
  return (
    <section className="section">
      <footer className="footer">
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
                <strong>boykeadam08@gmail.com</strong>
              </div>
            </li>

            <li>
              <span className="icon">📍</span>
              <div>
                <small>Address</small>
                <strong>
                  Jl. Pasirluyu Sel. No.133, RT.9/RW.3, Pasirluyu, Kec. Regol,
                  Kota Bandung, Jawa Barat 40254
                </strong>
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
