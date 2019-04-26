import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';

import Componente_01 from './components/componente-01';
import Componente_02 from './components/componente-02';

class App extends Component {
  render() {
    return (
      <div className="App">

        <h2>Prueba rutas</h2>

        <a href="/componente01">Componente 1</a>
        <a href="/componente02">Componente 2</a>

        <BrowserRouter basename="/storybook">
          <Route path="/componente01" component={Componente_01} />
          <Route path="/componente02" component={Componente_02} />
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
