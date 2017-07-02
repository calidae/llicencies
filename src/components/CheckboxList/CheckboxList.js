import React, { Component } from 'react'
import Checkbox from './components/Checkbox'

export default class CheckboxList extends Component {
 
  constructor(props) {
    super(props)
    this.state = { value: null }
  }

  handleChange(value) {
    this.setState({ value: value })
  }

  render() {
    return (
      <div>
        {
          this.props.options && this.props.options.map(option => {
            return <Checkbox
              label={option.label}
              isChecked={this.state.value === option.value}
              value={option.value}
              key={option.value}
              onChange={() => this.handleChange(option.value)}
            />
          })
        }
      </div>
    )
  }
}