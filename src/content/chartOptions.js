import Highcharts from 'highcharts';

var pieColors = (function () {
    var colors = [],
      base = Highcharts.getOptions().colors[0],
      i;
  
    for (i = 0; i < 10; i += 1) {
      // Start out with a darkened base color (negative brighten), and end
      // up with a much brighter color
      colors.push(Highcharts.color(base).brighten((i - 3) / 7).get());
    }
    return colors;
  }());
  

export const alunosPorRendaOptions = {
  chart: {
    type: "column",
    options3d: {
      enabled: true,
      alpha: 15,
      beta: 15,
      viewDistance: 25,
      depth: 40,
    },
  },

  title: {
    text: "Distribuição de Alunos por Renda Familiar",
  },

  xAxis: {
    categories: ["2018", "2019"],
    labels: {
      skew3d: true,
      style: {
        fontSize: "16px",
      },
    },
  },

  yAxis: {
    allowDecimals: false,
    min: 0,
    title: {
      text: "Quantidade de alunos",
      skew3d: true,
    },
  },

  tooltip: {
    headerFormat: "<b>{point.key}</b><br>",
    pointFormat:
      '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}',
  },

  colors: ["#ffd700", "#8ecd82", "#0f7f7f", "#5e5e5e", "#7a1b20"],

  plotOptions: {
    column: {
      stacking: "pyramid",
      depth: 40,
    },
  },

  series: [
    {
      name: "Acima de 3 salários mínimos",
      data: [0, 0],
      stack: "renda",
    },
    {
      name: "2 a 3 salários mínimos",
      data: [17, 2],
      stack: "renda",
    },
    {
      name: "1 a 2 salários mínimos",
      data: [37, 56],
      stack: "renda",
    },
    {
      name: "Até 1 salário mínimo",
      data: [49, 42],
      stack: "renda",
    },
    {
      name: "Nenhuma renda",
      data: [0, 3],
      stack: "renda",
    },
  ],
};

export const anoDeConclusaoOptions = {
  chart: {
    type: "timeline",
  },
  accessibility: {
    screenReaderSection: {
      beforeChartFormat:
        "<h5>{chartTitle}</h5>" +
        "<div>{typeDescription}</div>" +
        "<div>{chartSubtitle}</div>" +
        "<div>{chartLongdesc}</div>" +
        "<div>{viewTableButton}</div>",
    },
    point: {
      valueDescriptionFormat: "{index}. {point.label}. {point.description}.",
    },
  },
  xAxis: {
    visible: false,
  },
  yAxis: {
    visible: false,
  },
  title: {
    text: "Ano de Conclusão do Ensino Médio <br>dos alunos do PVS 2019",
  },

  colors: [
    "#4185F3",
    "#4185F3",
    "#4185F3",
    "#4185F3",
    "#4185F3",
    "#427CDD",
    "#427CDD",
    "#406AB2",
    "#406AB2",
    "#3E5A8E",
    "#3E5A8E",
    "#3B4A68",
    "#3B4A68",
    "#363C46",
    "#363C46",
  ],
  series: [
    {
      data: [
        {
          name: "2007",
          label: "2 Alunos ",
        },
        {
          name: "2008",
          label: "2 Alunos ",
        },
        {
          name: "2010",
          label: "4 Alunos ",
        },
        {
          name: "2006",
          label: "3 Alunos ",
        },
        {
          name: "2007",
          label: "1 Aluno ",
        },
        {
          name: "2008",
          label: "2 Alunos ",
        },
        {
          name: "2009",
          label: "3 Alunos ",
        },
        {
          name: "2010",
          label: "3 Alunos ",
        },
        {
          name: "2012",
          label: "1 Aluno  ",
        },
        {
          name: "2013",
          label: "1 Aluno ",
        },
        {
          name: "2014",
          label: "2 Alunos ",
        },
        {
          name: "2015",
          label: "5 Alunos ",
        },
        {
          name: "2016",
          label: "27 Alunos ",
        },
        {
          name: "2017",
          label: "33 Alunos ",
        },
        {
          name: "2018 ",
          label: "17 Alunos ",
        },
      ],
    },
  ],
};

export const aprovadosEnsinoSuperiorOptions = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: "pie",
  },
  title: {
    text: "Aprovados em Intituições de Ensino Superior ",
  },
  subtitle: {
    text: "Na amostragem de 2018 tivemos 29 alunos aprovados",
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
  },
  accessibility: {
    point: {
      valueSuffix: "%",
    },
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      colors: pieColors,
      dataLabels: {
        enabled: true,
        format: "<b>{point.name}</b><br>{point.percentage:.1f} %",
        distance: -50,
        filter: {
          property: "percentage",
          operator: ">",
          value: 4,
        },
      },
    },
  },
  series: [
    {
      name: "Parcela",
      data: [
        { name: "UEPB", y: 11 },
        { name: "UFCG", y: 8 },
        { name: "IFPB", y: 1 },
        { name: "FACISA", y: 1 },
      ],
    },
  ],
};
