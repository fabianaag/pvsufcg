import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import HighchartsItem from "highcharts/modules/item-series";
import HighchartsCloud from "highcharts/modules/wordcloud";
import React from "react";

import {
  idadeEGeneroAmbosOptions,
  idadeEGenero2018Options,
  idadeEGenero2019Options,
  etnias2018Options,
  etnias2019Options,
  dimensaoFamiliarOptions,
  rendaFamiliarOptions,
  anoDeConclusaoOptions,
  escolhaCursoOptions,
  cursosEscolhidos2018Options,
  cursosEscolhidos2019Options,
  experienciaComPCOptions,
  experienciaEnemOptions,
  aprovadosSuperiorOptions,
  ingressoInteresseOptions,
  dedicacaoOptions,
  dominioLinguaOptions
} from "./chartOptions";

import "./Content.css";
import { getPublicPath } from "../utils";

function Content(...props) {
  return (
    <main className="content">
      <h1>Dimensão Alcance</h1>
      <hr />
      <h2>Alcance dos Bairros</h2>
      <p>O município de Campina grande possui 49 bairros, em 2018 o projeto alcançou 31 bairros
            e  o distrito de São José da Mata  o que  representa um alcance de 65.3%. já em 2019 o alcance 
            foi de 32 bairros e os distritos de São josé da Mata e Galante, representando 67.3% de alcance. </p>
      <section className="images">
        <section>
          <h4>2018</h4>
          <img
            src={getPublicPath("images/bairros_2018_macro.png")}
            alt="Alcance Bairros 2018"
          />
        <p></p>
        </section>
        <section>
          <h4>2019</h4>
          <img
            src={getPublicPath("images/bairros_2019_macro.png")}
            alt="Alcance Bairros 2019"
            style={{ width: "110%" }}
          />
         <p></p>
        </section>
      </section>
      

      <h1>Dimensão Pessoal</h1>
      <hr />
      <p> A faixa etária predominante é de 21 a 29 anos (69.9%), e a maioria dos alunos é do gênero feminino (64.5%).
        Ao que se refere à raça ou etnia declaradas, é possível  observar a predominância dos alunos autodeclarados pardos 
        com 50.4 % do alunado no ano de 2018 e 48.6% no ano de 2019, ao considerarmos os alunos autodeclarados pretos, pardos
        e indígenas  temos  72.8% de representatividade desse grupo em  2018 e 60.2% em 2019.<p>Isso mostra uma
        representatividade importante tendo em vista que a deficiência de ensino básico que se apresenta para essa população
        em maior frequência do que a população branca os diferencia em relação ao acesso à Universidade. </p> 
        Para o alunado autodeclarado branco a representatividade é de 19% no ano de 2018 e 38% no ano de 2019, as etnias menos representadas
        pelo alunado foram as dos autodeclarados amarela e indígena que juntos representam 13% em 2018 e 2.8% em 2019.
        <p>Com relação ao estado Civil, majoritariamente o alunado consiste em alunos solteiros, com percentual de 85.4% nos dois anos.</p>

        
</p>  
        <h4> Distribuição Idades e Gênero</h4>
        <section className="images">
        <section>
          <img
            src={getPublicPath("images/genero_e_idade.png")}
            alt="Gênero e Idade 2018 e 2019"
            height="400"
          />
        </section>
        <p></p>
        <HighchartsReact
          highcharts={Highcharts}
          options={idadeEGeneroAmbosOptions}
        />
      </section>
      <p></p>
      <section className="images">
        <HighchartsReact
          highcharts={Highcharts}
          options={idadeEGenero2018Options}
        />

        <HighchartsReact
          highcharts={Highcharts}
          options={idadeEGenero2019Options}
        />
      </section>
      <p></p>
      <p></p>
      <h4> Distribuição das Etnias</h4>
      <section className="images">
        <HighchartsReact
          highcharts={HighchartsItem(Highcharts)}
          options={etnias2018Options}
        />

        <HighchartsReact
          highcharts={HighchartsItem(Highcharts)}
          options={etnias2019Options}
        />
      </section>
      <p></p>
      <p></p>
      <h4> Distribuição do Estado Civil dos Alunos</h4>
      <section className="images">
        <img
          src={getPublicPath("images/estado_civil_alunos.png")}
          alt="Gênero e Idade Unido"
          style={{ width: "60%" }}
        />
      </section>
      <p></p>
      <p></p>
      <h1>Dimensão Familiar</h1>
      <hr />
      <p>A análise desses dados permitiu observar que o PVS/CG é composto por alunos em sua maioria  sem filhos, 
        78% no ano de 2018 e 97% em 2019, além disso, considerando o gênero dos alunos o resultado 
        é o mesmo, ou seja, a maioria não tem filhos.

        <p>Diante das rendas declaradas pelos alunos, todos se enquadram na categoria de baixa renda, 
          tendo em vista que o cadastro único classificam famílias/pessoa como de baixa renda aquelas que ganham até 3
          salários mínimos mensal total.
</p>
</p>
      <section className="images">
        <HighchartsReact
          highcharts={Highcharts}
          options={dimensaoFamiliarOptions}
        />
        <HighchartsReact
          highcharts={Highcharts}
          options={rendaFamiliarOptions}
        />
      </section>

      <h1>Dimensão Escolar</h1>
      <hr />
      <p> O alunado do PVS/CG concluíram o ensino médio em diversas escolas de Campina Grande,
         26 escolas diferentes em 2018 e 45 em 2019. Dessas escolas, houveram 4 privadas, o Educacional Santa Cecília,
         o Colégio alfredo Dantas, o Espaço Educacional Carmela Veloso e a Escola Santo Onofre. Com relação às escolas que
        se fizeram presentes nos dois anos, foram contabilizadas 10 escolas são elas: Escola Normal, Estadual da Prata, Monte Carmelo,
        Estadual Severino Cabral, Estadual Raul Córdula, Estadual Nenzinha Cunha Lima, Estadual José Miguel Leão, Estadual Solon de Lucena, 
        Estadual Otávia Silveira e Estadual Félix Araújo. Isso ocorre, possivelmente, pelo fato de serem escolas estaduais com maior número 
        de alunos na cidade, já o aumento no número de escolas do ano de 2018 para 2019 se deu pela grande repercussão do projeto nas redes sociais,
        escolas e meios de comunicação.</p>
        <p> O PVS/CG recebe alunos que terminaram o ensino médio em diversos anos,
          desde alunos que concluíram nos anos de 1999 até os anos de 2019, porém foi observado
          que a maioria do alunado de 2018 e 2019 terminaram o ensino médio recentemente, assim temos 67% 
          do alunado de 2018 tendo terminado o ensino médio nos anos de 2016, 2017 e 2018 e temos 69% do alunado 
          de 2019 que concluíram nos anos de 2017, 2018 e 2019.
</p>
      <section className="images escolas">
        <img
          src={getPublicPath("images/alunos_por_escola_2018.png")}
          alt="Alunos por Escola 2018"
        />
        <img
          src={getPublicPath("images/alunos_por_escola_2019.png")}
          alt="Alunos por Escola 2019"
        />
      </section>

      <section className="images">
        <HighchartsReact
          highcharts={Highcharts}
          options={anoDeConclusaoOptions}
        />
      </section>

      <h1>Dimensão Interesses</h1>
      <hr />
      <p> A maioria dos alunos dos anos de 2018 e 2019 responderam “Realização pessoal” como
         o fator que mais influencia com 54% das respostas, seguido por julgarem ter aptidões
        pessoais com 38%, os demais responderam  como fator a disponibilidade de vaga no mercado 
        de trabalho, possibilidade salarial, influência de familiares ou terceiros e por indicação de testes vocacionais.</p>

        <p>A diversidade de interesses reflete-se também  nos cursos desejados pelo alunado, 
          sendo ainda mais visível nos dados de 2018, mesmo assim ainda é possível encontrar
          alguns padrões, como os cursos de Letras e Direito que aparecem como um dos três cursos
          mais desejados em ambos os anos, No ano de 2018 temos como cursos de destaque, ou seja, 
          mais desejados pelos alunos, os cursos de Administração, Letras e Direito, já no ano de 2019
          temos os cursos de Letras,  Direito e Medicina.</p>

          <p>No que diz respeito a experiência com relação ao computador, no ano de 2018 a maioria dos alunos se intitulam 
            como tendo experiência com relação ao uso do computador com o percentual de 50.4%  e  42.7 % como apenas possuam
            alguma noção com relação ao uso do computador, já no ano de 2019 a maioria se intitulam como apenas possuam alguma noção,
            com percentual de 65%, enquanto que os que se intitulam como tendo experiência tem o percentual de 31%, segundo pesquisa
            recente devido a pandemia 40% dos alunos de escolas públicas não possuem computador em casa, já nas escolas do total
            de escolas públicas, 81% delas têm laboratórios de informática, mas somente 59% deles são usados.</p>

            <p>Com relação à língua estrangeira, a maioria do alunado não dominam nenhuma língua estrangeira, alcançando
               um percentual de 89% em 2019.</p>
      <section className="images">
        <HighchartsReact
          highcharts={Highcharts}
          options={escolhaCursoOptions}
        />
        <HighchartsReact
          highcharts={Highcharts}
          options={experienciaComPCOptions}
        />
      </section>
      <section className="images">
        <HighchartsReact
          highcharts={Highcharts}
          options={dominioLinguaOptions}
        />
      </section>

      <section className="images">
        <HighchartsReact
          highcharts={HighchartsCloud(Highcharts)}
          options={cursosEscolhidos2018Options}
        />

        <HighchartsReact
          highcharts={HighchartsCloud(Highcharts)}
          options={cursosEscolhidos2019Options}
        />
      </section>

      <section className="images"></section>

      <h1>Dimensão Desempenho</h1>
      <hr />
      <p></p>
      <p> O aluno que busca o PVS/CG, em sua maioria, já teve experiência com a prova do Enem, 
        isso porque 89.3% já realizaram a prova ao menos 1 vez no ano de 2018  e 92.1% no ano de 2019
        e apenas 10.7% em 2018 e 7.9% em 2019 dos alunos ainda não haviam realizado a prova. Isso pode 
        ser justificado pelo fato de alguns alunos ainda estarem concluindo o ensino médio em conjunto com o PVS/CG.</p>

       <p>Com relação ao índice de aprovação dos alunos, o percentual em 2018 foi de 28.1% e em 2019 foi de 20.4%. 
         o que por um lado um teve um aumento no percentual de aprovação o outro teve um aumento nos alunos aprovados
          nos cursos de real interesse, o que em resumo podemos afirmar que a cada ano o alunado conquista mais seus objetivos.
          Ao observar para quais instituições os alunos estão indo, a maioria dos aprovados vão para universidades públicas.</p>

       <p>Referente ao curso de interesse dos alunos aprovados, é possível observar que em sua maioria os alunos aprovados 
         conseguem ingressar no mesmo curso que demonstrou  interesse e possuem dedicação integral 
         aos estudos.</p>
      <section className="images">
        <HighchartsReact
          highcharts={Highcharts}
          options={experienciaEnemOptions}
        />
        <HighchartsReact
          highcharts={Highcharts}
          options={aprovadosSuperiorOptions}
        />
      </section>
      <p></p>
      <section className="images">
        <HighchartsReact
          highcharts={Highcharts}
          options={ingressoInteresseOptions}
        />
        <HighchartsReact highcharts={Highcharts} options={dedicacaoOptions} />
      </section>
    </main>
  );
}

export default Content;