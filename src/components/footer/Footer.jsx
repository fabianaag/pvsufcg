import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

function Footer(...props) {
  return (
    <footer className="footer">
      <section className="links">
        <a
          href="https://github.com/fabianaag"
          target="_blank"
          rel="noreferrer noopener"
          title="Github"
        >
          <section>
            <FontAwesomeIcon icon={faGithub} />
          </section>
        </a>
        <a
          href="https://www.linkedin.com/in/fabiana-alves-18b701177/"
          target="_blank"
          rel="noreferrer noopener"
          title="Linkedin"
        >
          <section>
            <FontAwesomeIcon icon={faLinkedin} color="white" />
          </section>
        </a>
      </section>
      <p className="copyright">&copy; Fabiana Alves - 2020</p>
    </footer>
  );
}

export default Footer;
