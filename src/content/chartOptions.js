import Highcharts from "highcharts";

var categories = [
  "17 ou menos",
  "18 a 20",
  "21 a 29",
  "30 a 39",
  "40 a 49",
  "Acima de 50 anos",
];

export const idadeEGeneroAmbosOptions = {
  chart: {
    type: "column",
  },
  title: {
    text: "Distribuição quantidade de alunos por Gênero e Idade",
  },
  colors: ["#008969", "#7ba05b", "#800080", "#b02877"],
  subtitle: {
    text: "",
  },
  xAxis: {
    categories: [
      "17 anos ou menos",
      "18 a 20 anos",
      "21 a 29 anos",
      "30 a 39 anos",
      "40 a 49 anos",
      "Acima de 50 anos",
    ],
    title: {
      text: null,
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: "Quantidade de alunos",
      align: "high",
    },
    labels: {
      overflow: "justify",
    },
  },
  tooltip: {
    valueSuffix: " alunos",
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true,
      },
    },
  },
  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "top",
    x: -40,
    y: 60,
    floating: true,
    borderWidth: 1,
    backgroundColor:
      Highcharts.defaultOptions.legend.backgroundColor || "#FFFFFF",
    shadow: true,
  },
  credits: {
    enabled: false,
  },
  series: [
    {
      name: "Homens 2018",
      data: ["", 5, 30, 7, 1, 1],
    },
    {
      name: "Homens 2019",
      data: [4, 2, 22, 1, "", ""],
    },
    {
      name: "Mulheres 2018",
      data: ["", 10, 42, 4, 3, ""],
    },
    {
      name: "Mulheres 2019",
      data: [3, 14, 50, 6, "", 1],
    },
  ],
};

export const idadeEGenero2018Options = {
  chart: {
    type: "bar",
  },
  title: {
    text: "Distribuição de Alunos por Idade e Gênero - 2018",
  },
  subtitle: {
    text: "",
  },
  accessibility: {
    point: {
      valueDescriptionFormat: "{index}. Age {xDescription}, {value}%.",
    },
  },
  xAxis: [
    {
      categories: categories,
      reversed: false,
      labels: {
        step: 1,
      },
      accessibility: {
        description: "Age (male)",
      },
    },
    {
      // mirror axis on right side
      opposite: true,
      reversed: false,
      categories: categories,
      linkedTo: 0,
      labels: {
        step: 1,
      },
      accessibility: {
        description: "Age (female)",
      },
    },
  ],
  yAxis: {
    title: {
      text: null,
    },
    labels: {
      formatter: function () {
        return Math.abs(this.value);
      },
    },
    accessibility: {
      description: "",
    },
  },

  plotOptions: {
    series: {
      stacking: "normal",
    },
  },
  colors: ["#0f7f7f", "#800080", "#72b1b0", "#993399"],
  tooltip: {
    formatter: function () {
      return `
              <b>Faixa etária: ${this.point.category}</b>
              <br/>
              Quantidades de alunos (${this.series.name}): ${Math.abs(
        this.point.y
      )}
            `;
    },
  },

  series: [
    {
      name: "Homens",
      data: [-0, -5, -30, -7, -1, -1],
    },
    {
      name: "Mulheres",
      data: [0, 10, 42, 4, 3, 0],
    },
  ],
};

export const idadeEGenero2019Options = {
  chart: {
    type: "bar",
  },
  title: {
    text: "Distribuição de Alunos por Idade e Gênero - 2019",
  },
  subtitle: {
    text: "",
  },
  accessibility: {
    point: {
      valueDescriptionFormat: "{index}. Age {xDescription}, {value}%.",
    },
  },
  xAxis: [
    {
      categories: categories,
      reversed: false,
      labels: {
        step: 1,
      },
      accessibility: {
        description: "Age (male)",
      },
    },
    {
      // mirror axis on right side
      opposite: true,
      reversed: false,
      categories: categories,
      linkedTo: 0,
      labels: {
        step: 1,
      },
      accessibility: {
        description: "Age (female)",
      },
    },
  ],
  yAxis: {
    title: {
      text: null,
    },
    labels: {
      formatter: function () {
        return Math.abs(this.value);
      },
    },
    accessibility: {
      description: "",
    },
  },

  plotOptions: {
    series: {
      stacking: "normal",
    },
  },
  colors: ["#0f7f7f", "#800080", "#72b1b0", "#993399"],
  tooltip: {
    formatter: function () {
      return `
              <b>Faixa etária: ${this.point.category}</b>
              <br/>
              Quantidades de alunos (${this.series.name}): ${Math.abs(
        this.point.y
      )}
            `;
    },
  },

  series: [
    {
      name: "Homens",
      data: [-4, -2, -22, -1, -0, -0],
    },
    {
      name: "Mulheres",
      data: [3, 14, 50, 6, 0, 1],
    },
  ],
};

export const etnias2018Options = {
  chart: {
    type: "item",
  },
  title: {
    text: "Distribuição das Etnias - 2018",
  },

  subtitle: {
    text: "Tamanho dos grupos categorizados Autodeclaração Étnico-Racial",
  },

  legend: {
    labelFormat: '{name} <span style="opacity: 0.4">{y}</span>',
  },

  series: [
    {
      name: "Estudantes",
      keys: ["name", "y", "color", "label"],
      data: [
        ["Indígena", 5, "#964B00", "INDÍGENA"],
        ["Amarelo(a)", 9, "#FFBB00", "AMARELO(A)"],
        ["Preto(a)", 18, "#00000", "PRETO(A)"],
        ["Branco(a)", 19, "#EABD9D", "BRANCO(A)"],
        ["Pardo(a)", 52, "#C77A58", "PARDO(A)"],
      ],
      dataLabels: {
        enabled: true,
        format: "{point.label}",
      },

      // Circular options
      center: ["50%", "88%"],
      size: "170%",
      startAngle: -100,
      endAngle: 100,
    },
  ],
};

export const etnias2019Options = {
  chart: {
    type: "item",
  },
  title: {
    text: "Distribuição das Etnias - 2019",
  },

  subtitle: {
    text: "Tamanho dos grupos categorizados Autodeclaração Étnico-Racial",
  },

  legend: {
    labelFormat: '{name} <span style="opacity: 0.4">{y}</span>',
  },

  series: [
    {
      name: "Estudantes",
      keys: ["name", "y", "color", "label"],
      data: [
        ["Indígena", 1, "#964B00", "INDÍGENA"],
        ["Amarelo(a)", 2, "#FFBB00", "AMARELO(A)"],
        ["Preto(a)", 11, "#00000", "PRETO(A)"],
        ["Branco(a)", 39, "#EABD9D", "BRANCO(A)"],
        ["Pardo(a)", 50, "#C77A58", "PARDO(A)"],
      ],
      dataLabels: {
        enabled: true,
        format: "{point.label}",
      },

      // Circular options
      center: ["50%", "88%"],
      size: "170%",
      startAngle: -100,
      endAngle: 100,
    },
  ],
};

export const dimensaoFamiliarOptions = {
  chart: {
    type: "column",
  },

  title: {
    text: "Distribuição dos Alunos com relação aos filhos",
  },
  colors: ["#5e5e5e", "#0f7f7f", "#8ecd82", "#ffbf00"],

  legend: {
    align: "right",
    verticalAlign: "middle",
    layout: "vertical",
  },

  xAxis: {
    categories: ["Alunos 2018", "Alunos 2019", ""],
    labels: {
      x: -10,
    },
  },

  yAxis: {
    allowDecimals: false,
    title: {
      text: "Quantidade de Alunos",
    },
  },

  series: [
    {
      name: "Sem filho",
      data: [78, 97],
    },
    {
      name: "Um filho ",
      data: [18, 4],
    },
    {
      name: "Dois filhos",
      data: [6, 2],
    },
    {
      name: "Três filhos ou mais",
      data: [1, 0],
    },
  ],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          legend: {
            align: "center",
            verticalAlign: "bottom",
            layout: "horizontal",
          },
          yAxis: {
            labels: {
              align: "left",
              x: 0,
              y: -5,
            },
            title: {
              text: null,
            },
          },
          subtitle: {
            text: null,
          },
          credits: {
            enabled: false,
          },
        },
      },
    ],
  },
};

export const rendaFamiliarOptions = {
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
