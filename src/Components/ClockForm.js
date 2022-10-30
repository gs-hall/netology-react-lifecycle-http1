import React from "react";

export default function ClockForm({form, onChange, onSubmit}) {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-container">
          <section>
            <label>Название</label>
            <input type="text" name="clockName" value={form.clockName} onChange={onChange} />
          </section>
          <section>
            <label>Временная зона</label>
            <input type="number" name="timeZone" value={form.timeZone} onChange={onChange} />
          </section>
          <section>
            <input type="submit" name="add" value="Добавить" />
          </section>
      </div>
    </form>
  );
};