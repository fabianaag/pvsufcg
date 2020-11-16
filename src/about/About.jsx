import React from "react";

function About(props) {
  return (
    <section className="about">
      <h2>Sobre o TCC</h2>

      <p>
        A presente pesquisa procura investigar qual o perfil dos alunos que buscam o Projeto 
{" "}
        <a href="http://www.ufcg.edu.br/~pvs/" target="_blank" rel="noopener noreferrer">
          PVS - Pré-Vestibular Solidário
        </a>
        {" "} da Universidade Federal de Campina Grande. O PVS/CG é um programa vinculado à Pró-Reitora de Pesquisa e Extensão 
        da UFCG com objetivo de contribuir para a construção de políticas sociais afirmativas, viabilizando a ampliação das condições de acesso de jovens 
        e adultos de baixa renda na educação superior, especialmente de afro-descendentes e indígenas. O programa busca ajudar os alunos que desejam ingressar
         no ensino superior através de aulas gratuitas preparatórias para o Enem.
        
      </p>

      <p>
         Para a coleta dos dados, foi aplicado um questionário socioeconômico, bem como dados já coletados nas fichas de inscrições. A partir dos resultados com
         base na análise dos dados, usando ciência de dados e visualização de dados, será verificado o perfil do aluno que busca o programar e tentar contribuir
         sugerindo melhorias para o PVS/CG.
        
      </p>
      Para isso foi feito o acompanhamento dos alunos que participaram do
        curso nos anos de 2018 e 2019. Mais de 200 alunos responderam os
        formulários para que pudéssemos ter uma visão melhor do perfil do aluno.
      <p>
        
      </p>
    </section>
  );
}

export default About;
