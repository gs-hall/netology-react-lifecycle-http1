import React from "react";
import Clock from "./Clock";

export default function Clocks({clocks, isDigital, onDelete}) {
  return (
    <div className="clock-container">
      {clocks.map((clock, index) => (
        <Clock key={index} clock={clock} index={index} onDelete={onDelete} isDigital={isDigital} />
      ))}
    </div>
  );
};