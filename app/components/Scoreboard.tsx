// components/Scoreboard.tsx
import React, { useState } from 'react';

interface ScoreboardProps {
  teamAName: string;
  teamBName: string;
}

const Scoreboard: React.FC<ScoreboardProps> = ({ teamAName, teamBName }) => {
  const [scoreA, setScoreA] = useState<number>(0);
  const [scoreB, setScoreB] = useState<number>(0);

  const incrementScoreA = () => setScoreA(scoreA + 1);
  const incrementScoreB = () => setScoreB(scoreB + 1);
  const resetScores = () => {
    setScoreA(0);
    setScoreB(0);
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h1>{`${teamAName} vs ${teamBName}`}</h1>
      <div>
        <h2>{teamAName} Score: {scoreA}</h2>
        <button onClick={incrementScoreA}>Increment {teamAName} Score</button>
      </div>
      <div>
        <h2>{teamBName} Score: {scoreB}</h2>
        <button onClick={incrementScoreB}>Increment {teamBName} Score</button>
      </div>
      <div>
        <button onClick={resetScores} style={{ marginTop: '20px' }}>
          Reset Scores
        </button>
      </div>
    </div>
  );
};

export default Scoreboard;
