import React from 'react';
import CheckboxList from '../CheckboxList';

export default function Question(props) {

    const { number, title, options, } = props

    return (
      <div>
        <h1>{number}. {title}</h1>
        <CheckboxList options={options} />
      </div>
    );
}
