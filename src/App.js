import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./about/About";
import Content from "./content/Content";
import Header from "./header/Header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router basename="/pvsufcg">
        <Header />
        <main className="content">
          <Switch>
            <Route exact path="/" component={Content} />
            <Route exact path="/sobre" component={About} />
            <Route path="/*" render={() => "Conteudo não encontrado"} />
          </Switch>
        </main>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
