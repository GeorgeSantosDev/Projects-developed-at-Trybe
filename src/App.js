import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import Title from './components/Title';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <section className="content">
        <Header />
        <SolarSystem />
        <Missions />
        <div id="final-consideration">
          <Title headline="Seu foco determina sua realidade." id="quote" />
          <p id="author">Qui-Gon Jin - Star Wars Episódio I: A Ameaça Fantasma</p>
        </div>
      </section>
    );
  }
}

export default App;
