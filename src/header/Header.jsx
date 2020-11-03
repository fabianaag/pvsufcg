import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Header.css";

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
            <a href="#">Manipulação de dados com jupyter</a>
            <a href="#">
              <FontAwesomeIcon icon={["fab", "github"]} />
              <i className="fab fa-github"></i>
              Artefatos Github oshe
            </a>
          </section>
        </section>
      </section>
    </section>
  );
}

export default Header;
