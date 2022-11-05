import React from "react";
import Switch from "react-switch";

export default function ClockForm({form, isDigital, onFormChange, onFormSubmit, onSwitchChange, setIsDigital, switchDisabled}) {
  return (
    <form onSubmit={onFormSubmit}>
      <div className="form-container">
          <section>
            <label>Название</label>
            <input type="text" name="clockName" value={form.clockName} onChange={onFormChange} />
          </section>
          <section>
            <label>Временная зона</label>
            <input type="number" name="timeZone" value={form.timeZone} onChange={onFormChange} />
          </section>
          <section className="button">
            <input type="submit" name="add" value="Добавить" />
          </section>
          <section className="switch">
            
            <label onClick={switchDisabled ? null : () => setIsDigital(false)} className={switchDisabled ? "disabled" : null}>Со стрелкой</label>
            <Switch
              checked={isDigital}
              onChange={onSwitchChange}
              uncheckedIcon={false}
              checkedIcon={false}
              onColor="#707070"
              offColor="#707070"
              disabled={switchDisabled}
              />
            <label onClick={switchDisabled ? null : () => setIsDigital(true)} className={switchDisabled ? "disabled" : null}>Цифровые</label>
          </section>
      </div>
    </form>
  );
};