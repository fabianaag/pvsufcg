(this.webpackJsonppvsufcg=this.webpackJsonppvsufcg||[]).push([[0],{22:function(e,a,t){e.exports=t(38)},27:function(e,a,t){},28:function(e,a,t){},34:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var i=t(0),o=t.n(i),n=t(20),s=t.n(n),l=(t(27),t(7)),r=t(3);var c=function(e){return o.a.createElement("section",{className:"about"},o.a.createElement("h2",null,"Sobre o TCC"),o.a.createElement("p",null,"Isso, aquilo e aquilo outro, motivaram a pesquisa que busca entender o perfil do aluno que participa do"," ",o.a.createElement("a",{href:"http://www.ufcg.edu.br/~pvs/",target:"_blank",rel:"noopener noreferrer"},"PVS - Pr\xe9-Vestibular Solid\xe1rio"),"."),o.a.createElement("p",null,"Para isso foi feito o acompanhamento dos alunos que participaram do curso nos anos de 2018 e 2019. Mais de 200 alunos responderam os formul\xe1rios para que pud\xe9ssemos ter uma vis\xe3o melhor do perfil do aluno."),o.a.createElement("p",null,"Acho que vale a pena repetir algumas coisas que est\xe3o no documento do TCC."))},d=t(4),m=t.n(d),u=t(2),g=t.n(u),b=t(10),p=t.n(b),h=t(11),E=t.n(h),A=["17 ou menos","18 a 20","21 a 29","30 a 39","40 a 49","Acima de 50 anos"],x={chart:{type:"column"},title:{text:"Distribui\xe7\xe3o quantidade de alunos por G\xeanero e Idade"},colors:["#008969","#7ba05b","#800080","#b02877"],subtitle:{text:""},xAxis:{categories:["17 anos ou menos","18 a 20 anos","21 a 29 anos","30 a 39 anos","40 a 49 anos","Acima de 50 anos"],title:{text:null}},yAxis:{min:0,title:{text:"Quantidade de alunos",align:"high"},labels:{overflow:"justify"}},tooltip:{valueSuffix:" alunos"},plotOptions:{bar:{dataLabels:{enabled:!0}}},legend:{layout:"vertical",align:"right",verticalAlign:"top",x:-40,y:60,floating:!0,borderWidth:1,backgroundColor:g.a.defaultOptions.legend.backgroundColor||"#FFFFFF",shadow:!0},credits:{enabled:!1},series:[{name:"Homens 2018",data:["",5,30,7,1,1]},{name:"Homens 2019",data:[4,2,22,1,"",""]},{name:"Mulheres 2018",data:["",10,42,4,3,""]},{name:"Mulheres 2019",data:[3,14,50,6,"",1]}]},f={chart:{type:"bar"},title:{text:"Distribui\xe7\xe3o de Alunos por Idade e G\xeanero - 2018"},subtitle:{text:""},accessibility:{point:{valueDescriptionFormat:"{index}. Age {xDescription}, {value}%."}},xAxis:[{categories:A,reversed:!1,labels:{step:1},accessibility:{description:"Age (male)"}},{opposite:!0,reversed:!1,categories:A,linkedTo:0,labels:{step:1},accessibility:{description:"Age (female)"}}],yAxis:{title:{text:null},labels:{formatter:function(){return Math.abs(this.value)}},accessibility:{description:""}},plotOptions:{series:{stacking:"normal"}},colors:["#0f7f7f","#800080","#72b1b0","#993399"],tooltip:{formatter:function(){return"\n              <b>Faixa et\xe1ria: ".concat(this.point.category,"</b>\n              <br/>\n              Quantidades de alunos (").concat(this.series.name,"): ").concat(Math.abs(this.point.y),"\n            ")}},series:[{name:"Homens",data:[-0,-5,-30,-7,-1,-1]},{name:"Mulheres",data:[0,10,42,4,3,0]}]},v={chart:{type:"bar"},title:{text:"Distribui\xe7\xe3o de Alunos por Idade e G\xeanero - 2019"},subtitle:{text:""},accessibility:{point:{valueDescriptionFormat:"{index}. Age {xDescription}, {value}%."}},xAxis:[{categories:A,reversed:!1,labels:{step:1},accessibility:{description:"Age (male)"}},{opposite:!0,reversed:!1,categories:A,linkedTo:0,labels:{step:1},accessibility:{description:"Age (female)"}}],yAxis:{title:{text:null},labels:{formatter:function(){return Math.abs(this.value)}},accessibility:{description:""}},plotOptions:{series:{stacking:"normal"}},colors:["#0f7f7f","#800080","#72b1b0","#993399"],tooltip:{formatter:function(){return"\n              <b>Faixa et\xe1ria: ".concat(this.point.category,"</b>\n              <br/>\n              Quantidades de alunos (").concat(this.series.name,"): ").concat(Math.abs(this.point.y),"\n            ")}},series:[{name:"Homens",data:[-4,-2,-22,-1,-0,-0]},{name:"Mulheres",data:[3,14,50,6,0,1]}]},y={chart:{type:"item"},title:{text:"Distribui\xe7\xe3o das Etnias - 2018"},subtitle:{text:"Tamanho dos grupos categorizados Autodeclara\xe7\xe3o \xc9tnico-Racial"},legend:{labelFormat:'{name} <span style="opacity: 0.4">{y}</span>'},series:[{name:"Estudantes",keys:["name","y","color","label"],data:[["Ind\xedgena",5,"#964B00","IND\xcdGENA"],["Amarelo(a)",9,"#FFBB00","AMARELO(A)"],["Preto(a)",18,"#00000","PRETO(A)"],["Branco(a)",19,"#EABD9D","BRANCO(A)"],["Pardo(a)",52,"#C77A58","PARDO(A)"]],dataLabels:{enabled:!0,format:"{point.label}"},center:["50%","88%"],size:"170%",startAngle:-100,endAngle:100}]},_={chart:{type:"item"},title:{text:"Distribui\xe7\xe3o das Etnias - 2019"},subtitle:{text:"Tamanho dos grupos categorizados Autodeclara\xe7\xe3o \xc9tnico-Racial"},legend:{labelFormat:'{name} <span style="opacity: 0.4">{y}</span>'},series:[{name:"Estudantes",keys:["name","y","color","label"],data:[["Ind\xedgena",1,"#964B00","IND\xcdGENA"],["Amarelo(a)",2,"#FFBB00","AMARELO(A)"],["Preto(a)",11,"#00000","PRETO(A)"],["Branco(a)",39,"#EABD9D","BRANCO(A)"],["Pardo(a)",50,"#C77A58","PARDO(A)"]],dataLabels:{enabled:!0,format:"{point.label}"},center:["50%","88%"],size:"170%",startAngle:-100,endAngle:100}]},C={chart:{type:"column"},title:{text:"Distribui\xe7\xe3o dos Alunos com rela\xe7\xe3o aos filhos"},colors:["#5e5e5e","#0f7f7f","#8ecd82","#ffbf00"],legend:{align:"right",verticalAlign:"middle",layout:"vertical"},xAxis:{categories:["Alunos 2018","Alunos 2019",""],labels:{x:-10}},yAxis:{allowDecimals:!1,title:{text:"Quantidade de Alunos"}},series:[{name:"Sem filho",data:[78,97]},{name:"Um filho ",data:[18,4]},{name:"Dois filhos",data:[6,2]},{name:"Tr\xeas filhos ou mais",data:[1,0]}],responsive:{rules:[{condition:{maxWidth:500},chartOptions:{legend:{align:"center",verticalAlign:"bottom",layout:"horizontal"},yAxis:{labels:{align:"left",x:0,y:-5},title:{text:null}},subtitle:{text:null},credits:{enabled:!1}}}]}},F={chart:{type:"column",options3d:{enabled:!0,alpha:15,beta:15,viewDistance:25,depth:40}},title:{text:"Distribui\xe7\xe3o de Alunos por Renda Familiar"},xAxis:{categories:["2018","2019"],labels:{skew3d:!0,style:{fontSize:"16px"}}},yAxis:{allowDecimals:!1,min:0,title:{text:"Quantidade de alunos",skew3d:!0}},tooltip:{headerFormat:"<b>{point.key}</b><br>",pointFormat:'<span style="color:{series.color}">\u25cf</span> {series.name}: {point.y} / {point.stackTotal}'},colors:["#ffd700","#8ecd82","#0f7f7f","#5e5e5e","#7a1b20"],plotOptions:{column:{stacking:"pyramid",depth:40}},series:[{name:"Acima de 3 sal\xe1rios m\xednimos",data:[0,0],stack:"renda"},{name:"2 a 3 sal\xe1rios m\xednimos",data:[17,2],stack:"renda"},{name:"1 a 2 sal\xe1rios m\xednimos",data:[37,56],stack:"renda"},{name:"At\xe9 1 sal\xe1rio m\xednimo",data:[49,42],stack:"renda"},{name:"Nenhuma renda",data:[0,3],stack:"renda"}]},D={chart:{type:"areaspline"},title:{text:"Ano de Conclus\xe3o do Ensino M\xe9dio <br>dos alunos do PVS/CG"},colors:["#008969","#00498b"],yAxis:{title:{text:"Quantidade de Alunos"}},xAxis:{accessibility:{rangeDescription:""}},legend:{layout:"vertical",align:"right",verticalAlign:"middle"},plotOptions:{series:{label:{connectorAllowed:!1},pointStart:1999}},series:[{name:"Alunos 2019",data:[0,0,0,0,0,0,0,0,2,2,0,4,0,2,0,3,4,17,32,19,18]},{name:"Alunos 2018",data:[1,0,2,0,0,0,2,3,1,2,3,3,0,1,1,2,5,27,27,17]}],responsive:{rules:[{condition:{maxWidth:1e3},chartOptions:{legend:{layout:"horizontal",align:"center",verticalAlign:"bottom"}}}]}},M={chart:{type:"bar"},title:{text:"Fatores que influenciam na escolha do curso"},colors:["#000080","#ff8668","#9ad4b3"],subtitle:{text:""},xAxis:{categories:["<b>Aptid\xf5es pessoais","<b>Possibilidade de realiza\xe7\xe3o pessoal","<b>Disponibilidade de vaga no mercado de trabalho","<b>Por indica\xe7\xe3o em teste vocacional","<b>Influ\xeancia de familiares e/ou terceiros","<b>Baixa Concorr\xeancia pela vaga","<b>Possibilidades salariais"],title:{text:null}},yAxis:{min:0,title:{text:"Quantidade de alunos",align:"high"},labels:{overflow:"justify"}},tooltip:{valueSuffix:" Alunos"},plotOptions:{bar:{dataLabels:{enabled:!0}}},legend:{layout:"vertical",align:"right",verticalAlign:"top",x:-40,y:150,floating:!0,borderWidth:1,backgroundColor:g.a.defaultOptions.legend.backgroundColor||"#FFFFFF",shadow:!0},credits:{enabled:!1},series:[{name:"Alunos de 2018",data:[43,47,3,3,4,1,2]},{name:"Alunos de 2019",data:[35,64,4,"","","",""]}]},P="Matem\xe1tica Matem\xe1tica Matem\xe1tica Matem\xe1tica Engenharia_El\xe9trica Engenharia_El\xe9trica Engenharia_El\xe9trica Engenharia_El\xe9trica Engenharia_Civil Engenharia_Civil Engenharia_Civil Engenharia_Qu\xedmica Engenharia_Qu\xedmica Ci\xeancia_da_Computa\xe7\xe3o Ci\xeancia_da_Computa\xe7\xe3o Ci\xeancia_da_Computa\xe7\xe3o Ci\xeancia_da_Computa\xe7\xe3o Arquitetura_e_Urbanismo Arquitetura_e_Urbanismo Arquitetura_e_Urbanismo Engenharia_Mec\xe2nica Engenharia_Mec\xe2nica Engenharia_Mec\xe2nica Engenharia_Mec\xe2nica Design Engenharia_de_Alimentos Qu\xedmica Qu\xedmica Qu\xedmica Estat\xedstica Engenharia_de_Materias Metereologia F\xedsica Engenharia_de_produ\xe7\xe3o Engenharia_Agr\xedcola Medicina Medicina Medicina Medicina Medicina Ci\xeancias_Biol\xf3gicas Ci\xeancias_Biol\xf3gicas Ci\xeancias_Biol\xf3gicas Ci\xeancias_Biol\xf3gicas Ci\xeancias_Biol\xf3gicas Ci\xeancias_Biol\xf3gicas Odontologia Odontologia Odontologia Farm\xe1cia Farm\xe1cia Medicina_Veterin\xe1ria Medicina_Veterin\xe1ria Fisioterapia Fisioterapia Enfermagem Enfermagem Enfermagem Enfermagem Nutri\xe7\xe3o Nutri\xe7\xe3o Nutri\xe7\xe3o Psicologia Psicologia Educa\xe7\xe3o_F\xedsica Educa\xe7\xe3o_F\xedsica Hist\xf3ria Hist\xf3ria Hist\xf3ria Hist\xf3ria Letras Letras Letras Letras Letras Letras Letras Direito Direito Direito Direito Direito Direito Direito Administra\xe7\xe3o Administra\xe7\xe3o Administra\xe7\xe3o Administra\xe7\xe3o Administra\xe7\xe3o Administra\xe7\xe3o Administra\xe7\xe3o Administra\xe7\xe3o Pedagogia Pedagogia Pedagogia Pedagogia Comunica\xe7\xe3o_Social Comunica\xe7\xe3o_Social Geografia Geografia Geografia Arte_e_M\xeddia Ci\xeancias_Cont\xe1beis Ci\xeancia_Sociais".split(/[,\\. ]+/g),w={accessibility:{screenReaderSection:{beforeChartFormat:"<h5>{chartTitle}</h5><div>{chartSubtitle}</div><div>{chartLongdesc}</div><div>{viewTableButton}</div>"}},colors:["#00008b","#00008b","#00008b","#00008b","#00008b","#00008b","#00008b","#00008b","#00008b","#00008b","#00008b","#00008b","#00008b","#00008b","#00008b","#00008b","#006400","#006400","#006400","#006400","#006400","#006400","#006400","#006400","#006400","#006400","#a51b0b","#a51b0b","#a51b0b","#a51b0b","#a51b0b","#a51b0b","#a51b0b","#a51b0b","#a51b0b","#a51b0b"],series:[{type:"wordcloud",data:g.a.reduce(P.map((function(e){return e.replaceAll("_"," ")})),(function(e,a){var t=g.a.find(e,(function(e){return e.name===a}));return t?t.weight+=1:(t={name:a,weight:1},e.push(t)),e}),[]),name:"Quantidade de alunos"}],title:{text:"Cursos escolhidos dos Alunos PVS - 2018"}},N="Direito Direito Direito Direito Direito Direito Direito Direito Direito Medicina Medicina Medicina Medicina Medicina Medicina Medicina Medicina Medicina Psicologia Psicologia Psicologia Psicologia Psicologia Psicologia Psicologia  Fisioterapia Fisioterapia Fisioterapia Fisioterapia Enfermagem Enfermagem Enfermagem Educa\xe7\xe3o_F\xedsica Educa\xe7\xe3o_F\xedsica Educa\xe7\xe3o_F\xedsica Educa\xe7\xe3o_F\xedsica Educa\xe7\xe3o_F\xedsica Biomedicina Medicina_Veterin\xe1ria Podologia Odontologia Odontologia Odontologia Odontologia Odontologia Odontologia Odontologia Agronomia Ci\xeancias_Contabeis Administra\xe7\xe3o Administra\xe7\xe3o Administra\xe7\xe3o Administra\xe7\xe3o Administra\xe7\xe3o Administra\xe7\xe3o Farm\xe1cia Farm\xe1cia Farm\xe1cia Farm\xe1cia Radiologia Letras Letras Letras Letras Letras Letras Letras Letras Letras Letras Hist\xf3ria Hist\xf3ria Hist\xf3ria Engenharia_Civil Engenharia_Civil Engenharia_Civil Engenharia_Civil Engenharia_El\xe9trica Engenharia_El\xe9trica Ci\xeancias_Biol\xf3gicas Ci\xeancias_Biol\xf3gicas Mat\xe9matica Mat\xe9matica Mat\xe9matica Mat\xe9matica Mat\xe9matica Mat\xe9matica Geografia Geografia Arquitetura_Urbanismo F\xedsica Pedagogia Ci\xeancias_Socias Ci\xeancias_Socias Design Ci\xeancia_da_Computa\xe7\xe3o Ci\xeancia_da_Computa\xe7\xe3o Arte_e_M\xeddia Arte_e_M\xeddia Servi\xe7o_Social Ci\xeancias_Econ\xf4micas ".split(/[,\\. ]+/g),O={accessibility:{screenReaderSection:{beforeChartFormat:"<h5>{chartTitle}</h5><div>{chartSubtitle}</div><div>{chartLongdesc}</div><div>{viewTableButton}</div>"}},series:[{type:"wordcloud",data:g.a.reduce(N.map((function(e){return e.replaceAll("_"," ")})),(function(e,a){var t=g.a.find(e,(function(e){return e.name===a}));return t?t.weight+=1:(t={name:a,weight:1},e.push(t)),e}),[]),name:"Quantidade de alunos"}],colors:["#a51b0b","#006400","#006400","#006400","#006400","#006400","#006400","#006400","#006400","#006400","#00008b","#a51b0b","#00008b","#006400","#006400","#a51b0b","#a51b0b","#00008b","#00008b","#006400","#00008b","#a51b0b","#00008b","#00008b","#a51b0b","#a51b0b","#00008b","#00008b","#a51b0b","#a51b0b","#a51b0b"],title:{text:"Cursos Escolhidos dos Alunos do PVS - 2019"}},S={chart:{type:"column"},title:{text:"Experi\xeancia com rela\xe7\xe3o ao uso do Computador"},colors:["#c8a2c8","#000080","#ff8668","#9ad4b3"],subtitle:{text:"Experi\xeancia dos alunos PVS/CG com rela\xe7\xe3o ao uso do computador "},legend:{align:"right",verticalAlign:"middle",layout:"vertical"},xAxis:{categories:["Alunos 2018","Alunos 2019",""],labels:{x:-10}},yAxis:{allowDecimals:!1,title:{text:"Quantidade de Alunos"}},series:[{name:"Tem muita experi\xeancia",data:[6,3]},{name:"Tem experi\xeancia",data:[52,32]},{name:"Tem alguma no\xe7\xe3o",data:[44,67]},{name:"N\xe3o domina",data:[1,1]}],responsive:{rules:[{condition:{maxWidth:500},chartOptions:{legend:{align:"center",verticalAlign:"bottom",layout:"horizontal"},yAxis:{labels:{align:"left",x:0,y:-5},title:{text:null}},subtitle:{text:null},credits:{enabled:!1}}}]}},B={chart:{type:"column"},title:{text:"Experi\xeancia na prova do ENEM"},colors:["#c8a2c8","#000080","#ff8668","#9ad4b3"],subtitle:{text:"Quantidade de vezes que o aluno realizou o ENEM"},legend:{align:"right",verticalAlign:"middle",layout:"vertical"},xAxis:{categories:["Alunos 2018","Alunos 2019",""],labels:{x:-10}},yAxis:{allowDecimals:!1,title:{text:"Quantidade de Alunos"}},series:[{name:"Sim, 1 vez",data:[37,15]},{name:"Sim, 2 vezes",data:[40,54]},{name:"Sim, 3 vezes ou mais",data:[15,26]},{name:"N\xe3o, primeira vez",data:[11,8]}],responsive:{rules:[{condition:{maxWidth:500},chartOptions:{legend:{align:"center",verticalAlign:"bottom",layout:"horizontal"},yAxis:{labels:{align:"left",x:0,y:-5},title:{text:null}},subtitle:{text:null},credits:{enabled:!1}}}]}},k={chart:{type:"bar"},title:{text:"Aprovados em Intitui\xe7\xf5es de Ensino Superior "},colors:["#c8a2c8","#000080"],subtitle:{text:"Na amostragem de 2018 tivemos 29 alunos aprovados, j\xe1 na amostragem de 2019 tivemos 21 alunos aprovados"},xAxis:{categories:["UFCG","UEPB","IFPB","UFPB","UNIFACISA","CESREI"],title:{text:null}},yAxis:{min:0,title:{text:"Quantidade de Alunos",align:"high"},labels:{overflow:"justify"}},tooltip:{valueSuffix:" Alunos"},plotOptions:{bar:{dataLabels:{enabled:!0}}},legend:{layout:"vertical",align:"right",verticalAlign:"top",x:-30,y:120,floating:!0,borderWidth:1,backgroundColor:g.a.defaultOptions.legend.backgroundColor||"#FFFFFF",shadow:!0},credits:{enabled:!1},series:[{name:"2018",data:[18,9,0,1,0,1]},{name:"2019",data:[8,11,1,0,1,0]}]},L={chart:{type:"column"},title:{text:"Ingresso e Curso de Interesse"},subtitle:{text:"Alunos do Pr\xe9 vestibular Solid\xe1rio -  2018"},colors:["#c8a2c8","#000080"],xAxis:{categories:["2018","2019"],crosshair:!0},yAxis:{min:0,title:{text:"Quantidade de alunos"}},tooltip:{headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:"><b>{point.y} </b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0},plotOptions:{column:{pointPadding:.2,borderWidth:0}},series:[{name:"Ingresso em outro curso",data:[12,5]},{name:"Ingresso no curso de interesse",data:[17,16]}]},I={chart:{type:"column"},title:{text:"Dedica\xe7\xe3o Total ou Parcial"},colors:["#c8a2c8","#9ad4b3"],subtitle:{text:"Rela\xe7\xe3o de alunos que possuem dedica\xe7\xe3o total aos estudos pois n\xe3o trabalham e <br> os alunos que possuem dedica\xe7\xe3o parcial por conta do trabalho"},legend:{align:"right",verticalAlign:"middle",layout:"vertical"},xAxis:{categories:["Alunos 2018","Alunos 2019"],labels:{x:-10}},yAxis:{allowDecimals:!1,title:{text:"Quantidade de Alunos"}},series:[{name:"Alunos que trabalham",data:[29,16]},{name:"Alunos que n\xe3o trabalham",data:[74,87]}],responsive:{rules:[{condition:{maxWidth:500},chartOptions:{legend:{align:"center",verticalAlign:"bottom",layout:"horizontal"},yAxis:{labels:{align:"left",x:0,y:50},title:{text:null}},subtitle:{text:null},credits:{enabled:!1}}}]}},q=(t(28),function(e){return"".concat("/pvsufcg","/").concat(e)});var Q=function(){return o.a.createElement("main",{className:"content"},o.a.createElement("h1",null,"Dimens\xe3o Alcance"),o.a.createElement("hr",null),o.a.createElement("h2",null,"Alcance dos Bairros"),o.a.createElement("section",{className:"images"},o.a.createElement("section",null,o.a.createElement("h4",null,"2018"),o.a.createElement("img",{src:q("images/bairros_2018_macro.png"),alt:"Alcance Bairros 2018"})),o.a.createElement("section",null,o.a.createElement("h4",null,"2019"),o.a.createElement("img",{src:q("images/bairros_2019_macro.png"),alt:"Alcance Bairros 2019",style:{width:"110%"}}))),o.a.createElement("section",{className:"images"},o.a.createElement("section",null,o.a.createElement("img",{src:q("images/genero_e_idade.png"),alt:"G\xeanero e Idade 2018 e 2019",height:"400"})),o.a.createElement(m.a,{highcharts:g.a,options:x})),o.a.createElement("h1",null,"Dimens\xe3o Pessoal"),o.a.createElement("hr",null),o.a.createElement("section",{className:"images"},o.a.createElement(m.a,{highcharts:g.a,options:f}),o.a.createElement(m.a,{highcharts:g.a,options:v})),o.a.createElement("section",{className:"images"},o.a.createElement(m.a,{highcharts:p()(g.a),options:y}),o.a.createElement(m.a,{highcharts:p()(g.a),options:_})),o.a.createElement("section",{className:"images"},o.a.createElement("img",{src:q("images/estado_civil_alunos.png"),alt:"G\xeanero e Idade Unido",style:{width:"60%"}})),o.a.createElement("h1",null,"Dimens\xe3o Familiar"),o.a.createElement("hr",null),o.a.createElement("center",null,o.a.createElement(m.a,{highcharts:g.a,options:C})),o.a.createElement("hr",null),o.a.createElement("center",null,o.a.createElement(m.a,{highcharts:g.a,options:F})),o.a.createElement("h1",null,"Dimens\xe3o Escolar"),o.a.createElement("hr",null),o.a.createElement("section",{className:"images escolas"},o.a.createElement("img",{src:q("images/alunos_por_escola_2018.png"),alt:"Alunos por Escola 2018"}),o.a.createElement("img",{src:q("images/alunos_por_escola_2019.png"),alt:"Alunos por Escola 2019"})),o.a.createElement("section",{className:"images"},o.a.createElement(m.a,{highcharts:g.a,options:D})),o.a.createElement("h1",null,"Dimens\xe3o Interesses"),o.a.createElement("hr",null),o.a.createElement("section",{className:"images"},o.a.createElement(m.a,{highcharts:g.a,options:M}),o.a.createElement(m.a,{highcharts:g.a,options:S})),o.a.createElement("section",{className:"images"},o.a.createElement(m.a,{highcharts:E()(g.a),options:w}),o.a.createElement(m.a,{highcharts:E()(g.a),options:O})),o.a.createElement("section",{className:"images"}),o.a.createElement("h1",null,"Dimens\xe3o Desempenho"),o.a.createElement("hr",null),o.a.createElement("section",{className:"images"},o.a.createElement(m.a,{highcharts:g.a,options:B}),o.a.createElement(m.a,{highcharts:g.a,options:k})),o.a.createElement("section",{className:"images"},o.a.createElement(m.a,{highcharts:g.a,options:L}),o.a.createElement(m.a,{highcharts:g.a,options:I})))},T=t(12),z=(t(34),t(17));var G=function(){return Object(i.useEffect)((function(){}),[]),o.a.createElement("section",{className:"header"},o.a.createElement(l.b,{to:"/"},"TCC | Fabiana Gomes | UFCG"),o.a.createElement("section",null,o.a.createElement(l.b,{to:"/sobre"},"Sobre"),o.a.createElement("section",{className:"dropdown"},o.a.createElement("button",{className:"dropbtn"},"Recursos"),o.a.createElement("section",{className:"dropdown-content"},o.a.createElement("a",{href:"#alo"},o.a.createElement(T.a,{icon:z.b}),"\xa0 Manipula\xe7\xe3o de dados com jupyter"),o.a.createElement("a",{href:"#amor"},o.a.createElement(T.a,{icon:z.a}),"\xa0 Artefatos Github")))))};t(37);var R=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(l.a,{basename:"/pvsufcg"},o.a.createElement(G,null),o.a.createElement("main",{className:"content"},o.a.createElement(r.c,null,o.a.createElement(r.a,{exact:!0,path:"/",component:Q}),o.a.createElement(r.a,{exact:!0,path:"/sobre",component:c}),o.a.createElement(r.a,{path:"/*",render:function(){return"Conteudo n\xe3o encontrado"}})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.5af46cec.chunk.js.map