import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import Checkbox from './index'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Checkbox />, div)
});

it('renders an input', () => {
  const onChange = jest.fn()
  const checkbox = shallow(<Checkbox label="test" isChecked={false} onChange={onChange} />)
  const content = (
    <label>
      <input type="checkbox" checked={false} onChange={onChange} />
      test
    </label>
  )
  expect(checkbox).toContainReact(content)
});

it('can toggle checked state', () => {
  let checked = false;
  const onChange = jest.fn().mockImplementation(() => checked = !checked)

  let checkbox = shallow(<Checkbox label="test" isChecked={checked} onChange={onChange} />)
  expect(checkbox.instance().props.isChecked).toEqual(false)

  checkbox.find('input').simulate('change')
  checkbox = shallow(<Checkbox label="test" isChecked={checked} onChange={onChange} />)
  expect(checkbox.instance().props.isChecked).toEqual(true)

  checkbox.find('input').simulate('change')
  checkbox = shallow(<Checkbox label="test" isChecked={checked} onChange={onChange} />)
  expect(checkbox.instance().props.isChecked).toEqual(false)
});

