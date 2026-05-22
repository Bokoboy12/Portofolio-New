import { useState } from "react";
import { FaBars } from "react-icons/fa";

import "./navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <section id="header">
      <div
        className={`sidebar-overlay ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      />
      <nav className="navbar">
        <div className={`nav-links ${open ? "show" : ""}`}>
          <FaBars className="fa-open" onClick={() => setOpen(false)} />
          <ul>
            <li>
              <a href="#profile">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#project">Project</a>
            </li>
          </ul>
        </div>
        <FaBars className="fa-close" onClick={() => setOpen(true)} />
      </nav>
    </section>
  );
}
