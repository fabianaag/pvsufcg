import React from 'react';
import './App.css';
import Content from './content/Content';
import Header from './header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
