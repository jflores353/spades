// pages/index.tsx
import React from 'react';
import Scoreboard from '../components/Scoreboard';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Spades Game</h1>
      <Scoreboard teamAName="Team A" teamBName="Team B" />
    </div>
  );
};

export default Home;
