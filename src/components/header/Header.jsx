import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Header.css";
import { faGithub, faPython } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Header(...props) {
  useEffect(() => {}, []);

  return (
    <>
    <section className="header">
      <Link to="/">TCC | Fabiana Alves | UFCG</Link>

      <section>
        <Link to="/sobre">Sobre</Link>
        <section className="dropdown">
          <button className="dropbtn">Recursos</button>
          <section className="dropdown-content">
            <a href="https://github.com/fabianaag/TCC/tree/master/notebooks" target="_blank" rel="noreferrer noopener">
              <FontAwesomeIcon icon={faPython} />&nbsp;
              Manipulação de dados
            </a>
            <a href="https://github.com/fabianaag/TCC/tree/master/dados"  target="_blank" rel="noreferrer noopener">
              <FontAwesomeIcon icon={faGithub} />&nbsp;
              Artefatos Github
            </a>
          </section>
        </section>
      </section>
    </section>
    <header className="header-image">
      <section>
        <h1>
          Análise do perfil dos alunos que buscam o Pré-Vestibular Solidário da <br/> Universidade Federal de Campina Grande
        </h1>
        <h3>Trabalho de Conclusão de Curso</h3>

      </section>
      
    </header>
    </>
  );
}

export default Header;
