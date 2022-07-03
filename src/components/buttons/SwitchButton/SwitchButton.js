import React from "react";

export default function SwitchButton({ onclick, checked }) {
  return (
    <div>
      <label htmlFor="paperSwitch2" className="paper-switch-tile">
        <input
          type="checkbox"
          name="paperSwitch2"
          id="paperSwitch2"
          onClick={onclick}
          checked={checked}
        />
        <div class="paper-switch-tile-card border">
          <div class="paper-switch-tile-card-front border background-warning">
            All Done
          </div>
          <div class="paper-switch-tile-card-back border background-secondary">
            Remove
          </div>
        </div>
      </label>
    </div>
  );
}
