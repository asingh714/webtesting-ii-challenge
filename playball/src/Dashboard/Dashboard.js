import React from "react";

const Dashboard = props => {
  const { handleBall, handleStrike } = props
  return (
    <>
    <button onClick={handleStrike}>Strike</button>
    <button onClick={handleBall}>Ball</button>
    <button>Foul</button>
    <button>Hit</button>
    </>
  )
}

export default Dashboard;