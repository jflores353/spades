import React, { useState } from "react";

const SpadesScoreKeeper = () => {
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);

  const handleAddScore = (team, points) => {
    if (team === "A") {
      setTeamAScore((prevScore) => prevScore + points);
    } else if (team === "B") {
      setTeamBScore((prevScore) => prevScore + points);
    }
  };

  const handleSubtractScore = (team, points) => {
    if (team === "A") {
      setTeamAScore((prevScore) =>
        prevScore - points >= 0 ? prevScore - points : 0
      );
    } else if (team === "B") {
      setTeamBScore((prevScore) =>
        prevScore - points >= 0 ? prevScore - points : 0
      );
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "400px",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <h2>Spades Score Keeper</h2>

      <div style={{ marginBottom: "20px" }}>
        <h3>Team A: {teamAScore}</h3>
        <button onClick={() => handleAddScore("A", 10)}>Add 10 Points</button>
        <button onClick={() => handleSubtractScore("A", 10)}>
          Subtract 10 Points
        </button>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h3>Team B: {teamBScore}</h3>
        <button onClick={() => handleAddScore("B", 10)}>Add 10 Points</button>
        <button onClick={() => handleSubtractScore("B", 10)}>
          Subtract 10 Points
        </button>
      </div>

      <div>
        <h3>
          Winning Team:{" "}
          {teamAScore === teamBScore
            ? "Tie"
            : teamAScore > teamBScore
            ? "Team A"
            : "Team B"}
        </h3>
      </div>
    </div>
  );
};

export default SpadesScoreKeeper;
