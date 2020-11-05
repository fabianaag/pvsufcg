import React from "react";
import "./Content.css";

function Content(...props) {
  return (
    <main className="content">
      {/* Titulo parcial */}
      <h2>Lorem, ipsum dolor.</h2>
      {/* Texto temporário */}
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit quos
        tempora porro deleniti facilis dicta esse at vitae nostrum cumque
        debitis incidunt enim quo facere, repellendus fuga aut minus eligendi?
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
        dicta iusto laudantium, rerum iste nisi autem. Aut est quidem repellat
        architecto ex voluptatum corporis nemo, aspernatur necessitatibus,
        voluptates, quae similique.
      </p>
      {/* Separador */}
      <hr />
      <h2>Mais texto lorem.</h2>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptatum
      tenetur voluptatem neque nihil, laborum deserunt quas illum ut! Officia?

      {/* CSS inline é coisa feia, talvez criar uma class css com essas regras seja mais bonito */}
      <section style={{ display: "flex", justifyContent: "space-evenly" }}>
        <img src="https://picsum.photos/id/237/400/300" alt="Mock" />
        <img src="https://picsum.photos/id/69/400/300" alt="Mock" />
      </section>
    </main>
  );
}

export default Content;
