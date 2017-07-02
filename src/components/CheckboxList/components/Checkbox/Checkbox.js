import React from 'react';

export default function Checkbox(props) {
    return (
      <label>
        <input
          type="checkbox"
          checked={props.isChecked} 
          value={props.value} 
          onChange={props.onChange}
        />
        {props.label}
      </label>
    );
}
