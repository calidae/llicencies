import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import CheckboxList from './index'
import Checkbox from './components/Checkbox/index'


it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<CheckboxList />, div)
});


// FIX ME - Please use snapshots here
xit('renders an input list', () => {
  const options = [
    { label: 'label1', value: 'value1' },
  ]
  const checkboxList = shallow(<CheckboxList options={options} />)
  const content = (
      <Checkbox label="label1" checked={false} value="value1" onChange={jest.fn()} />
  )
  expect(checkboxList).toContainReact(content)
});


it('sets a selected checkbox', () => {
  const options = [{ label: 'label1', value: 'value1' }]

  const checkboxList = shallow(<CheckboxList options={options} />)
  expect(checkboxList.state('value')).toBe(null)

  checkboxList.find('Checkbox').simulate('change')

  expect(checkboxList.state('value')).toBe('value1')
});


it('toggle between selected checkboxes', () => {
  const options = [
    { label: 'label1', value: 'value1' },
    { label: 'label2', value: 'value2' },
  ]

  const checkboxList = shallow(<CheckboxList options={options} />)

  checkboxList.find({ value: 'value1' }).simulate('change')
  expect(checkboxList.state('value')).toBe('value1')

  checkboxList.find({ value: 'value2' }).simulate('change')
  expect(checkboxList.state('value')).toBe('value2')

  checkboxList.find({ value: 'value1' }).simulate('change')
  expect(checkboxList.state('value')).toBe('value1')
});