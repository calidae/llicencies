import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import Question from './index'


it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Question />, div)
});