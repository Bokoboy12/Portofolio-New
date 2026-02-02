import { Link } from "react-router-dom";

import "./navbar.css";

export default function Navbar() {
  return (
    <section id="header">
      <nav className="navbar">
        <div className="nav-links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/aboutPage">About</Link>
            </li>
            <li>
              <Link to="/typePage">Project</Link>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
}
