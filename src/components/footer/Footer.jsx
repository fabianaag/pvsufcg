import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython } from "@fortawesome/free-brands-svg-icons";


function Footer(...props) {
  return (
    <footer className="footer">
        <section className="links">
          <FontAwesomeIcon icon={faPython} />
        </section>
      <p className="copyright">&copy; Fabiana Gomes</p>
    </footer>
  );
}

export default Footer;
