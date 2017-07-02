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

            const { label, value } = option

            return <Checkbox
              label={label}
              isChecked={this.state.value === value}
              value={value}
              key={value}
              onChange={() => this.handleChange(value)}
            />
          })
        }
      </div>
    )
  }
}