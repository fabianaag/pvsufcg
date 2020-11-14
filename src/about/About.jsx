import React from "react";

function About(props) {
  return (
    <section className="about">
      <h2>Sobre o TCC</h2>

      <p>
        Isso, aquilo e aquilo outro, motivaram a pesquisa que busca entender o
        perfil do aluno que participa do{" "}
        <a href="http://www.ufcg.edu.br/~pvs/" target="_blank" rel="noopener noreferrer">
          PVS - Pré-Vestibular Solidário
        </a>
        .
      </p>

      <p>
        Para isso foi feito o acompanhamento dos alunos que participaram do
        curso nos anos de 2018 e 2019. Mais de 200 alunos responderam os
        formulários para que pudéssemos ter uma visão melhor do perfil do aluno.
      </p>

      <p>
        Acho que vale a pena repetir algumas coisas que estão no documento do
        TCC.
      </p>
    </section>
  );
}

export default About;
