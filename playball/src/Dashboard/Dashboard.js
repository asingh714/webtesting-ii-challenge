import React from "react";

const Dashboard = props => {
  const { handleBall, handleStrike, handleFoul, handleHit } = props
  return (
    <>
    <button onClick={handleStrike}>Strike</button>
    <button onClick={handleBall}>Ball</button>
    <button onClick={handleFoul}>Foul</button>
    <button onClick={handleHit}>Hit</button>
    </>
  )
}

export default Dashboard;