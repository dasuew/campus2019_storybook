import React from 'react'
import ReactDOM from 'react-dom'
import RlButton from './RlButton'
import { mount } from 'enzyme'
import jest from 'jest-mock'

describe('RlButton', () => {
  it('should be rendered without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<RlButton buttonText="Click Me!" />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('should display correct button text', () => {
    const buttonText = 'Click Me!'
    const button = mount(<RlButton buttonText={buttonText} />)
    expect(button.find('.ant-btn').text()).toBe(buttonText)
  })

  it('should trigger on click callback', () => {
    const mockCallback = jest.fn()
    const button = mount(<RlButton buttonText="Test text" onClick={mockCallback} />)

    button.find('button').simulate('click')

    expect(mockCallback.mock.calls.length).toEqual(1)
  })

  it('should display icon', () => {
    const iconName = 'delete'
    const button = mount(<RlButton buttonText="Test text" icon={iconName} />)

    expect(button.find(`.rl_icon__${iconName}`).length).toEqual(1)
  })
})
