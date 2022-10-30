import React from "react";
import Clock from "./Clock";

export default function Clocks({clocks}) {
  return (
    <div className="clocks-container">
      {clocks.map((clock, index) => (
        <Clock key={index} clock={clock} />
      ))}
    </div>
  );
};