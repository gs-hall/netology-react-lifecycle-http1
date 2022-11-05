import React from "react";
import Icon from "./Icon";
import DigitalClock from "./DigitalClock";
import AnalogueClock from "./AnalogueClock";

export default function Clock({clock, index, isDigital, onDelete}) {
  return (
    <div className="clock">
      <div className="name">
        <span>{clock.clockName} ({(clock.timeZone > 0 ? '+' : '')+clock.timeZone})</span>
      </div>
      <div className="time">
        <Icon icon="fa-times-circle" addClassName="close" onClick={() => onDelete(index)} />
        {isDigital && <DigitalClock time={clock.time} />}
        {!isDigital && <AnalogueClock time={clock.time} />}
      </div>
    </div>
  );
};