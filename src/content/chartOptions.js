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

export const anoDeConclusaoOptions = {
  chart: {
    type: "areaspline",
  },

  title: {
    text: "Ano de Conclusão do Ensino Médio <br>dos alunos do PVS/CG",
  },

  colors: ["#008969", "#00498b"],

  yAxis: {
    title: {
      text: "Quantidade de Alunos",
    },
  },

  xAxis: {
    accessibility: {
      rangeDescription: "",
    },
  },

  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "middle",
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false,
      },
      pointStart: 1999,
    },
  },

  series: [
    {
      name: "Alunos 2019",
      data: [0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 4, 0, 2, 0, 3, 4, 17, 32, 19, 18],
    },
    {
      name: "Alunos 2018",
      data: [1, 0, 2, 0, 0, 0, 2, 3, 1, 2, 3, 3, 0, 1, 1, 2, 5, 27, 27, 17],
    },
  ],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 1000,
        },
        chartOptions: {
          legend: {
            layout: "horizontal",
            align: "center",
            verticalAlign: "bottom",
          },
        },
      },
    ],
  },
};

export const escolhaCursoOptions = {
  chart: {
    type: "bar",
  },
  title: {
    text: "Fatores que influenciam na escolha do curso",
  },
  colors: ["#000080", "#ff8668", "#9ad4b3"],
  subtitle: {
    text: "",
  },
  xAxis: {
    categories: [
      "<b>Aptidões pessoais",
      "<b>Possibilidade de realização pessoal",
      "<b>Disponibilidade de vaga no mercado de trabalho",
      "<b>Por indicação em teste vocacional",
      "<b>Influência de familiares e/ou terceiros",
      "<b>Baixa Concorrência pela vaga",
      "<b>Possibilidades salariais",
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
    valueSuffix: " Alunos",
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
    y: 150,
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
      name: "Alunos de 2018",
      data: [43, 47, 3, 3, 4, 1, 2],
    },
    {
      name: "Alunos de 2019",
      data: [35, 64, 4, "", "", "", ""],
    },
  ],
};

const text2018 =
  "Matemática Matemática Matemática Matemática Engenharia_Elétrica Engenharia_Elétrica Engenharia_Elétrica Engenharia_Elétrica Engenharia_Civil Engenharia_Civil Engenharia_Civil Engenharia_Química Engenharia_Química Ciência_da_Computação Ciência_da_Computação Ciência_da_Computação Ciência_da_Computação Arquitetura_e_Urbanismo Arquitetura_e_Urbanismo Arquitetura_e_Urbanismo Engenharia_Mecânica Engenharia_Mecânica Engenharia_Mecânica Engenharia_Mecânica Design Engenharia_de_Alimentos Química Química Química Estatística Engenharia_de_Materias Metereologia Física Engenharia_de_produção Engenharia_Agrícola Medicina Medicina Medicina Medicina Medicina Ciências_Biológicas Ciências_Biológicas Ciências_Biológicas Ciências_Biológicas Ciências_Biológicas Ciências_Biológicas Odontologia Odontologia Odontologia Farmácia Farmácia Medicina_Veterinária Medicina_Veterinária Fisioterapia Fisioterapia Enfermagem Enfermagem Enfermagem Enfermagem Nutrição Nutrição Nutrição Psicologia Psicologia Educação_Física Educação_Física História História História História Letras Letras Letras Letras Letras Letras Letras Direito Direito Direito Direito Direito Direito Direito Administração Administração Administração Administração Administração Administração Administração Administração Pedagogia Pedagogia Pedagogia Pedagogia Comunicação_Social Comunicação_Social Geografia Geografia Geografia Arte_e_Mídia Ciências_Contábeis Ciência_Sociais";
const lines = text2018.split(/[,\\. ]+/g),
  data = Highcharts.reduce(
    lines.map((el) => el.replaceAll("_", " ")),
    function (arr, word) {
      var obj = Highcharts.find(arr, function (obj) {
        return obj.name === word;
      });
      if (obj) {
        obj.weight += 1;
      } else {
        obj = {
          name: word,
          weight: 1,
        };
        arr.push(obj);
      }
      return arr;
    },
    []
  );

export const cursosEscolhidos2018Options = {
  accessibility: {
    screenReaderSection: {
      beforeChartFormat:
        "<h5>{chartTitle}</h5>" +
        "<div>{chartSubtitle}</div>" +
        "<div>{chartLongdesc}</div>" +
        "<div>{viewTableButton}</div>",
    },
  },
  colors: [
    "#00008b",
    "#00008b",
    "#00008b",
    "#00008b",
    "#00008b",
    "#00008b",
    "#00008b",
    "#00008b",
    "#00008b",
    "#00008b",
    "#00008b",
    "#00008b",
    "#00008b",
    "#00008b",
    "#00008b",
    "#00008b",
    "#006400",
    "#006400",
    "#006400",
    "#006400",
    "#006400",
    "#006400",
    "#006400",
    "#006400",
    "#006400",
    "#006400",
    "#a51b0b",
    "#a51b0b",
    "#a51b0b",
    "#a51b0b",
    "#a51b0b",
    "#a51b0b",
    "#a51b0b",
    "#a51b0b",
    "#a51b0b",
    "#a51b0b",
  ],
  series: [
    {
      type: "wordcloud",
      data: data,
      name: "Quantidade de alunos",
    },
  ],
  title: {
    text: "Cursos escolhidos dos Alunos PVS - 2018",
  },
};

const text =
  "Direito Direito Direito Direito Direito Direito Direito Direito Direito Medicina Medicina Medicina Medicina Medicina Medicina Medicina Medicina Medicina Psicologia Psicologia Psicologia Psicologia Psicologia Psicologia Psicologia  Fisioterapia Fisioterapia Fisioterapia Fisioterapia Enfermagem Enfermagem Enfermagem Educação_Física Educação_Física Educação_Física Educação_Física Educação_Física Biomedicina Medicina_Veterinária Podologia Odontologia Odontologia Odontologia Odontologia Odontologia Odontologia Odontologia Agronomia Ciências_Contabeis Administração Administração Administração Administração Administração Administração Farmácia Farmácia Farmácia Farmácia Radiologia Letras Letras Letras Letras Letras Letras Letras Letras Letras Letras História História História Engenharia_Civil Engenharia_Civil Engenharia_Civil Engenharia_Civil Engenharia_Elétrica Engenharia_Elétrica Ciências_Biológicas Ciências_Biológicas Matématica Matématica Matématica Matématica Matématica Matématica Geografia Geografia Arquitetura_Urbanismo Física Pedagogia Ciências_Socias Ciências_Socias Design Ciência_da_Computação Ciência_da_Computação Arte_e_Mídia Arte_e_Mídia Serviço_Social Ciências_Econômicas ";

const lines2019 = text.split(/[,\\. ]+/g),
  data2019 = Highcharts.reduce(
    lines2019.map((el) => el.replaceAll("_", " ")),
    function (arr, word) {
      var obj = Highcharts.find(arr, function (obj) {
        return obj.name === word;
      });
      if (obj) {
        obj.weight += 1;
      } else {
        obj = {
          name: word,
          weight: 1,
        };
        arr.push(obj);
      }
      return arr;
    },
    []
  );

export const cursosEscolhidos2019Options = {
  accessibility: {
    screenReaderSection: {
      beforeChartFormat:
        "<h5>{chartTitle}</h5>" +
        "<div>{chartSubtitle}</div>" +
        "<div>{chartLongdesc}</div>" +
        "<div>{viewTableButton}</div>",
    },
  },
  series: [
    {
      type: "wordcloud",
      data: data2019,
      name: "Quantidade de alunos",
    },
  ],

  colors: [
    "#a51b0b",
    "#006400",
    "#006400",
    "#006400",
    "#006400",
    "#006400",
    "#006400",
    "#006400",
    "#006400",
    "#006400",
    "#00008b",
    "#a51b0b",
    "#00008b",
    "#006400",
    "#006400",
    "#a51b0b",
    "#a51b0b",
    "#00008b",
    "#00008b",
    "#006400",
    "#00008b",
    "#a51b0b",
    "#00008b",
    "#00008b",
    "#a51b0b",
    "#a51b0b",
    "#00008b",
    "#00008b",
    "#a51b0b",
    "#a51b0b",
    "#a51b0b",
  ],
  title: {
    text: "Cursos Escolhidos dos Alunos do PVS - 2019",
  },
};

export const experienciaComPCOptions = {
  chart: {
    type: "column",
  },

  title: {
    text: "Experiência com relação ao uso do Computador",
  },
  colors: ["#c8a2c8", "#000080", "#ff8668", "#9ad4b3"],
  subtitle: {
    text: "Experiência dos alunos PVS/CG com relação ao uso do computador ",
  },

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
      name: "Tem muita experiência",
      data: [6, 3],
    },
    {
      name: "Tem experiência",
      data: [52, 32],
    },
    {
      name: "Tem alguma noção",
      data: [44, 67],
    },
    {
      name: "Não domina",
      data: [1, 1],
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

export const dominioLinguaOptions = {
  chart: {
    type: "column",
  },

  title: {
    text: "Domínio da Língua Estrangeira",
  },
  colors: ["#c8a2c8", "#000080", "#ff8668", "#9ad4b3"],
  subtitle: {
    text: "Domínio dos alunos com relação a Língua estrangeira",
  },

  legend: {
    align: "right",
    verticalAlign: "middle",
    layout: "vertical",
  },

  xAxis: {
    categories: ["2018", "2019", ""],
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
      name: "Sim, Inglês",
      data: [10, 3],
    },
    {
      name: "Sim, Espanhol",
      data: [9, 8],
    },
    {
      name: "Não Domina",
      data: [84, 92],
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

export const experienciaEnemOptions = {
  chart: {
    type: "column",
  },

  title: {
    text: "Experiência na prova do ENEM",
  },
  colors: ["#c8a2c8", "#000080", "#ff8668", "#9ad4b3"],
  subtitle: {
    text: "Quantidade de vezes que o aluno realizou o ENEM",
  },

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
      name: "Sim, 1 vez",
      data: [37, 15],
    },
    {
      name: "Sim, 2 vezes",
      data: [40, 54],
    },
    {
      name: "Sim, 3 vezes ou mais",
      data: [15, 26],
    },
    {
      name: "Não, primeira vez",
      data: [11, 8],
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

export const aprovadosSuperiorOptions = {
  chart: {
    type: "bar",
  },
  title: {
    text: "Aprovados em Intituições de Ensino Superior ",
  },
  colors: ["#c8a2c8", "#000080"],
  subtitle: {
    text:
      "Na amostragem de 2018 tivemos 29 alunos aprovados, já na amostragem de 2019 tivemos 21 alunos aprovados",
  },
  xAxis: {
    categories: ["UFCG", "UEPB", "IFPB", "UFPB", "UNIFACISA", "CESREI"],
    title: {
      text: null,
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: "Quantidade de Alunos",
      align: "high",
    },
    labels: {
      overflow: "justify",
    },
  },
  tooltip: {
    valueSuffix: " Alunos",
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
    x: -30,
    y: 120,
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
      name: "2018",
      data: [18, 9, 0, 1, 0, 1],
    },
    {
      name: "2019",
      data: [8, 11, 1, 0, 1, 0],
    },
  ],
};

export const ingressoInteresseOptions = {
  chart: {
    type: "column",
  },
  title: {
    text: "Ingresso e Curso de Interesse",
  },
  subtitle: {
    text: "Alunos do Pré vestibular Solidário -  2018",
  },
  colors: ["#c8a2c8", "#000080"],
  xAxis: {
    categories: ["2018", "2019"],
    crosshair: true,
  },
  yAxis: {
    min: 0,
    title: {
      text: "Quantidade de alunos",
    },
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat:
      '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:"><b>{point.y} </b></td></tr>',
    footerFormat: "</table>",
    shared: true,
    useHTML: true,
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },
  series: [
    {
      name: "Ingresso em outro curso",
      data: [12, 5],
    },
    {
      name: "Ingresso no curso de interesse",
      data: [17, 16],
    },
  ],
};

export const dedicacaoOptions = {
  chart: {
    type: "column",
  },

  title: {
    text: "Dedicação Total ou Parcial",
  },
  colors: ["#c8a2c8", "#9ad4b3"],
  subtitle: {
    text:
      "Relação de alunos que possuem dedicação total aos estudos pois não trabalham e <br> os alunos que possuem dedicação parcial por conta do trabalho",
  },

  legend: {
    align: "right",
    verticalAlign: "middle",
    layout: "vertical",
  },

  xAxis: {
    categories: ["Alunos 2018", "Alunos 2019"],
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
      name: "Alunos que trabalham",
      data: [29, 16],
    },
    {
      name: "Alunos que não trabalham",
      data: [74, 87],
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
              y: 50,
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


