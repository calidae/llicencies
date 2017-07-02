import React from 'react';
import CheckboxList from '../CheckboxList';

export default function Question(props) {
    return (
      <div>
        <h1>{props.number}. {props.title}</h1>
        <CheckboxList options={props.options} />
      </div>
    );
}
