import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import HighchartsTimeline from 'highcharts/modules/timeline';

import React from "react";

import {
  alunosPorRendaOptions,
  anoDeConclusaoOptions,
  aprovadosEnsinoSuperiorOptions,
} from "./chartOptions";

import "./Content.css";

function Content(...props) {
  return (
    <main className="content">
      {/* Titulo parcial */}
      <h2>Visualizações</h2>
      {/* Texto temporário */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <HighchartsReact
          highcharts={Highcharts}
          options={alunosPorRendaOptions}
        />
        <HighchartsReact
          highcharts={Highcharts}
          options={aprovadosEnsinoSuperiorOptions}
        />
      </div>
      <HighchartsReact 
          highcharts={HighchartsTimeline(Highcharts)}
          options={anoDeConclusaoOptions} />
    
      <section style={{ display: "flex", justifyContent: "space-evenly" }}>
        <img src="https://picsum.photos/id/237/400/300" alt="Mock" />
        <img src="https://picsum.photos/id/69/400/300" alt="Mock" />
      </section>
    </main>
  );
}

export default Content;
