import { useState, useEffect } from "react";
import moment from "moment-timezone";
import ClockForm from "./Components/ClockForm";
import Clocks from "./Components/Clocks";
import "./main.css";

function getTime(timeZone) {
  return moment(new Date()).utcOffset(timeZone*60).format('HH:mm:ss');
}

function App() {
  const [clockForm, setClockForm] = useState({clockName: 'Moscow', timeZone: 3});
  const [clocks, setClocks] = useState([]);
  const [isDigital, setIsDigital] = useState(true);

  useEffect(() => {
    if (clocks.length === 0) return;
    const interval = setInterval(() => {
      const newClocks = clocks.map((clock) => ({...clock, time: getTime(clock.timeZone)}));
      setClocks(newClocks);
      }, 1000);

    return () => {
      clearInterval(interval);
    };
    }, [clocks]);

  const handleFormChange = (e) => {
    const {name, value} = e.target;
    setClockForm(prevForm => ({...prevForm, [name]: value}));
  };

  const handleDelete = (index) => {
    setClocks([...clocks].filter((_, i) => i !== index));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newClock = {
      clockName: clockForm.clockName,
      timeZone: clockForm.timeZone,
      time: getTime(clockForm.timeZone)
    };
    setClocks([...clocks, newClock]);
  };

  const handleSwitchChange = (checked, event) => {
    setIsDigital(!isDigital);
  };

  return (
    <div className="main-container">
      <ClockForm
        form={clockForm}
        isDigital={isDigital}
        onFormChange={handleFormChange}
        onFormSubmit={handleFormSubmit}
        onSwitchChange={handleSwitchChange}
        switchDisabled={clocks.length === 0}
        setIsDigital={setIsDigital}
        />

      <Clocks
        clocks={clocks}
        isDigital={isDigital}
        onDelete={handleDelete}
        />

    </div>
  );
}

export default App;
