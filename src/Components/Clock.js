import React from "react";

export default function Clock({clock}) {

  return (
    <div className="clock">
      <div className="name">
        <span>{clock.clockName} ({(clock.timeZone > 0 ? '+' : '')+clock.timeZone})</span>
      </div>
      <div className="time">
        <span>{clock.time}</span>
      </div>
    </div>
  );
};