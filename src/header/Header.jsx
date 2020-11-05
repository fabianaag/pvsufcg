import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Header.css";
import { faGithub, faPython } from "@fortawesome/free-brands-svg-icons";

function Header(...props) {
  useEffect(() => {}, []);

  return (
    <section className="header">
      <a href="/">TCC | Fabiana Gomes | UFCG</a>

      <section>
        <a href="/">Sobre</a>
        <section className="dropdown">
          <button className="dropbtn">Recursos</button>
          <section className="dropdown-content">
            <a href="#alo">
              <FontAwesomeIcon icon={faPython} />&nbsp;
              Manipulação de dados com jupyter
            </a>
            <a href="#amor">
              <FontAwesomeIcon icon={faGithub} />&nbsp;
              Artefatos Github
            </a>
          </section>
        </section>
      </section>
    </section>
  );
}

export default Header;
