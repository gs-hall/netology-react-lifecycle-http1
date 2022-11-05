import React from "react";


function getHandStyle(degrees) {
  return {
    transform: `rotate(${degrees}deg)`
  };
};

export default function AnalogueClock({time}) {
  const [hours, minutes, seconds] = time.split(':');
  return (
    <div className="analogue-clock-container" >
      <div className="analogue-clock-hand second" style={getHandStyle(seconds/60*360)} />
      <div className="analogue-clock-hand minute" style={getHandStyle(minutes/60*360)} />
      <div className="analogue-clock-hand hour" style={getHandStyle(hours/24*360)} />
    </div>
  );
};