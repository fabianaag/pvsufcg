import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/about/About";
import Content from "./components/content/Content";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

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
        <Footer />
      </Router>
    </div>
  );
}

export default App;
