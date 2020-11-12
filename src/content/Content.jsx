import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import HighchartsItem from "highcharts/modules/item-series";

import React from "react";

import {
  idadeEGeneroAmbosOptions,
  idadeEGenero2018Options,
  idadeEGenero2019Options,
  etnias2018Options,
  etnias2019Options,
  dimensaoFamiliarOptions,
  rendaFamiliarOptions,
} from "./chartOptions";

import "./Content.css";
import { getPublicPath } from "../utils";

function Content(...props) {
  return (
    <main className="content">
      <h2>Alcance dos Bairros</h2>
      <hr />
      <section className="images">
        <section>
          <h4>2018</h4>
          <img
            src={getPublicPath('images/bairros_2018_macro.png')}
            alt="Alcance Bairros 2018"
          />
        </section>
        <section>
          <h4>2019</h4>
          <img
            src={getPublicPath('images/bairros_2019_macro.png')}
            alt="Alcance Bairros 2019"
            style={{width:"110%"}}
          />
        </section>
      </section>

      <h2>Distribuição dos Alunos por Idade e Gênero</h2>
      <hr />
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

      <h2>Distribuição das Etnias</h2>
      <hr />
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

      <h2>Estado Civil dos Alunos 2018 e 2019</h2>
      <hr />
      <center>
        <img
          src={getPublicPath("images/estado_civil_alunos.png")}
          alt="Gênero e Idade Unido"
          style={{width: "80%"}}
        />
      </center>


      <h2>Distribuição dos Alunos em Relação a Filhos</h2>
      <hr />
      <center>
        <HighchartsReact 
          highcharts={Highcharts}
          options={dimensaoFamiliarOptions} />
      </center>

      <h2>Distribuição dos Alunos em Relação a Renda Familiar</h2>
      <hr/>
      <center>
        <HighchartsReact 
          highcharts={Highcharts}
          options={rendaFamiliarOptions} />
      </center>

      <h2>Quantidade de Alunos por Escola</h2>
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
      
    </main>
  );
}

export default Content;
