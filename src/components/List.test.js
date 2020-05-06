import React from 'react'
import ReactDOM from 'react-dom'
import List from './List'
import { mount } from 'enzyme'
import jest from 'jest-mock'

const items = ['Blubb', 'Bla']

describe('List', () => {
  it('should be rendered without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<List initialItems={items} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
