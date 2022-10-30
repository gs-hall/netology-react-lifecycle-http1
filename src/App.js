import { useState, useEffect } from "react";
import ClockForm from "./Components/ClockForm";
import Clocks from "./Components/Clocks";
import "./main.css";
import moment from "moment-timezone";


function getTime(timeZone) {
  return moment(new Date()).utcOffset(timeZone*60).format('HH:mm:ss');
}

function App() {
  const [clockForm, setClockForm] = useState({clockName: 'a', timeZone: 3});
  const [clocks, setClocks] = useState([]);

  useEffect(() => {
    if (clocks.length === 0) return;
    console.log(`initializing interval`);
    const interval = setInterval(() => {
      const newClocks = clocks.map((clock) => ({...clock, time: getTime(clock.timeZone)}));
      console.log(newClocks);
      setClocks(newClocks);
      }, 1000);

    return () => {
      console.log(`clearing interval`);
      clearInterval(interval);
    };
    }, [clocks]);

  const handleFormChange = (e) => {
    const {name, value} = e.target;
    setClockForm(prevForm => ({...prevForm, [name]: value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newClock = {
      clockName: clockForm.clockName,
      timeZone: clockForm.timeZone,
      time: getTime(clockForm.timeZone)
    };
    setClocks([...clocks, newClock]);
  };

  return (
    <div className="main-container">
      <ClockForm form={clockForm} onChange={handleFormChange} onSubmit={handleSubmit} />
      <Clocks clocks={clocks}/>
    </div>
  );
}

export default App;
