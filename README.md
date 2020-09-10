<p align="center">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/UfcgBrasao.jpg/1024px-UfcgBrasao.jpg" width="400" align="center">



**CURSO DE CIÊNCIA DA COMPUTAÇÃO**  
**ALUNO(A)**: FABIANA ALVES GOMES 

**PREVESTIBULAR SOLIDÁRIO UFCG**  
**Conhecendo o perfil dos alunos**

---

## Índice

- [Introdução](#introdução)
- [Desenvolvimento](#desenvolvimento)
  - [Metodologia](#metodologia)
  - [Manipulação dos dados](#manipulação-dos-dados)
- [Conclusões](#conclusão)
- [Referências](#referências)


---

### Introdução

O **Pré-Vestibular Solidário (PVS)**[¹](#1)  é um programa vinculado à Pró-Reitora de Pesquisa e Extensão da UFCG criado em 2000 com objetivo de contribuir para a construção de políticas sociais afirmativas viabilizando a ampliação das condições de acesso e permanência de jovens e adultos de baixa renda na educação superior, especialmente de afro-descendentes e indígenas.

Este trabalho, portanto, consiste na coleta de dados socioeconômicos e (?etnoalgo?) dos alunos para que assim possamos ter uma melhor ideia do perfil dos alunos que são beneficiados pelo programa. 

### Desenvolvimento
#### Metodologia
Para conseguir os dados de perfil dos alunos que participaram do Pré-Vestibular solidário a técnica utilizada para a coleta de dados foi a aplicação de um questionário em amostras randômicas dos estudantes do PVS. 

[Descrever turmas]

Para tentar definir o perfil dos alunos, foram utilizados dois questionários que foram aplicado nas turmas de 2018 e 2019.  
Um dos questionários, visa conhecer dados dos alunos tais como idade, sexo, escolas que concluiram o ensino médio, bairro e cidade de origem, curso desejado, etc. 
O outro questionário, perguntava dados socioeconomicos, tais como renda familiar, escolaridade do pai, se tem filhos, data de término do ensino médio e etc. 
[aumentar descrição dos dados?]

Um total de X+Y alunos responderam a pesquisa. 
Em 2018 um total de X alunos responderam a pesquisa e em 2019 esse número foi de Y alunos que contribuiram com a pesquisa. 

No início o questionário era respondido pelos alunos de maneira presencial, reservando-se um momento propício para isso nas atividades do PVS. Porém devido a pandemia, a turma de 2019 respondeu o questionário 

#### Manipulação dos dados
Após coletados os dados dos questionários, os mesmos foram estruturados e codificados em arquivos CSV, para facilitar a manipulação dos mesmos. 

Alguns dados dos formulários eram de campos abertos, como por exemplo, o nome das escolas, e tais dados tiveram divergências de escrita entre os participantes.  
Um exemplo comum disso era o uso de *EEEFM* e *Escola Estadual*, assim como divergências no uso de acentos e preposições.

Para identificar tais casos, foi-se utilizado o **indice de similaridade de jaccard** como ferramenta para ajudar a identificar tais valores. Comparando os pares de palavras distintas pertencentes a uma categoria, geramos um indice de similaridade que varia de 0 a 1. Ordendando as os pares de palavras por similaridade, os pares de palavras com maior similaridade, frequentemente são palavras iguais com um erro de grafia. 

Após a estruturação dos dados, visando minimizar o numéro de categorias, fazendo o uso de funções de agregações foram utilizadas visualizações para que possamos entender com mais clareza as proporções dos grupos afetados pelo PVS. 

- Distribuição por Sexo  | TODO add imagens :horse: 
- Distribuição por Idade 
- Distribuição por Etnia 
- Distribuição por ? 
- <img src="https://eusoqueriaestudar.files.wordpress.com/2011/04/ibagens.jpg" width="400">


#### Conclusões

Após a análise descritiva dos dados dos alunos pertencentes ao Pré-Vestibular Solidário, pode-se concluir que o programa consegue atingir as suas métricas. 

Considerando que a distribuição normal segundo o Censo[²](#2) do IBGE aplicado em 2010 as médias étnicas da população paraibana é de X pardos, Y brancos, Z negros, A índios, B amarelos. [https://www.infoescola.com/geografia/populacao-da-paraiba/#:~:text=Em%20rela%C3%A7%C3%A3o%20%C3%A0%20cor%2C%20a,23%2C49%25%20da%20popula%C3%A7%C3%A3o.] 

...

Considerando a taxa de aprovação, o programa (NAO?) parece conseguir atingir seus objetivos de ampliar o acesso e permanência de baixa renda na educação superior. 

https://periodicos.ufpb.br/index.php/economia/article/download/4865/3670/



#### Referências 

<a id="1"></a>
¹ - PROPEX - UFCG. Pré-Vestibular Solidário, 2000. Disponível em: http://extensao.ufcg.edu.br/projetos-de-extensao/pre-vestibular-solidario.html. Acesso em: 09 de set. de 2020  
<a id="2"></a>
² - IBGE - Instituto Brasileiro de Geografia e Estatística. Censo, 2010. Disponível em: https://censo2010.ibge.gov.br/. Acesso em: 09 de set. de 2020  
