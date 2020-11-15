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
  dominioLinguaOptions,
} from "./chartOptions";

import "./Content.css";
import { getPublicPath } from "../utils";

function Content(...props) {
  return (
    <main className="content">
      <h1>Dimensão Alcance</h1>
      <hr />
      <h2>Alcance dos Bairros</h2>
      <section className="images">
        <section>
          <h4>2018</h4>
          <img
            src={getPublicPath("images/bairros_2018_macro.png")}
            alt="Alcance Bairros 2018"
          />
        </section>
        <section>
          <h4>2019</h4>
          <img
            src={getPublicPath("images/bairros_2019_macro.png")}
            alt="Alcance Bairros 2019"
            style={{ width: "110%" }}
          />
        </section>
      </section>
      <section className="images">
        <section>
          <img
            src={getPublicPath("images/genero_e_idade.png")}
            alt="Gênero e Idade 2018 e 2019"
            height="400"
          />
        </section>
        <HighchartsReact
          highcharts={Highcharts}
          options={idadeEGeneroAmbosOptions}
        />
      </section>

      <h1>Dimensão Pessoal</h1>
      <hr />
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

      <section className="images">
        <img
          src={getPublicPath("images/estado_civil_alunos.png")}
          alt="Gênero e Idade Unido"
          style={{ width: "60%" }}
        />
      </section>

      <h1>Dimensão Familiar</h1>
      <hr />
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
