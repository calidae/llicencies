import React from 'react';

export default function Checkbox(props) {
    return (
      <label>
        <input
          type="checkbox"
          checked={props.isChecked}
          onChange={props.onChange}
        />
        {props.label}
      </label>
    );
}
