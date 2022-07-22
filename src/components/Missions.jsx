import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionsCard from './MissionCard';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions" className="missions-info">
        <div className="title"> 
          <Title headline="Missões" />
        </div>
        <div className="missions">
          {missions.map(({ name, year, country, destination }) => (<MissionsCard
            key={ name }
            name={ name }
            year={ year }
            country={ country }
            destination={ destination }
          />))}
        </div>
      </div>
    );
  }
}

export default Missions;
