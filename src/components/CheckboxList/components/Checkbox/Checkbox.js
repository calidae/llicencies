import React from 'react';

export default function Checkbox(props) {

    const { isChecked, onChange, label } = props

    return (
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={onChange}
        />
        {label}
      </label>
    );
}
