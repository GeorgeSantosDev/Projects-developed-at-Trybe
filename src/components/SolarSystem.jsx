import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system" className="system">
        <div className="title">
          <Title headline="Planetas" />
        </div>
        <div className="planets">
          {planets.map(({ name, image }) => (<PlanetCard
            planetName={ name }
            planetImage={ image }
            key={ name }
          />))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
