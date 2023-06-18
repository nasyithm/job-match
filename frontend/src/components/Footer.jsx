import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-dev">
        <h2>Developers</h2>
        <div className="dev-container">
          <div className="dev-detail">
            <div className="dev-name">
              <p>Nasyith Musyafa</p>
            </div>
            <Link to={"https://linkedin.com/in/nasyithm"}>LinkedIn</Link>
            <Link to={"https://github.com/nasyithm"}>GitHub</Link>
          </div>
          <div className="dev-detail">
            <div className="dev-name">
              <p>Samidin</p>
            </div>
            <Link to={"https://linkedin.com/in/samidin-samidin-46386b264"}>
              LinkedIn
            </Link>
            <Link to={"https://github.com/Anismarifah"}>GitHub</Link>
          </div>
          <div className="dev-detail">
            <div className="dev-name">
              <p>Muhammad Haikal Adzim</p>
            </div>
            <Link
              to={"https://linkedin.com/in/muhammad-haikal-adzim-a6a8a2266"}
            >
              LinkedIn
            </Link>
            <Link to={"https://github.com/muhammadhaikaladzim"}>GitHub</Link>
          </div>
          <div className="dev-detail">
            <div className="dev-name">
              <p>M.H. Ar. Royyan Fikri</p>
            </div>
            <Link to={"https://linkedin.com/in/arroyanfikri"}>LinkedIn</Link>
            <Link to={"https://github.com/arroyanfikri"}>GitHub</Link>
          </div>
        </div>
      </div>
      <p className="footer">Copyright © 2023 - Job Match</p>
    </footer>
  );
};

export default Footer;
