import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { withTests } from '@storybook/addon-jest'
import { jsxDecorator } from 'storybook-addon-jsx'
import { withKnobs, text, boolean, number, array, object } from '@storybook/addon-knobs'

import results from '../../.jest-test-results.json'

import List from '../components/List'
const items = ['Blubb', 'Bla']

storiesOf('Campus 2019/List', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)
  .addParameters({ jest: ['List'] })
  .addDecorator(withTests({ results }))
  .add('simple List', () => {
    const itemsKnob = array('Items', items)
    const titleKnob = text('Title', 'Megaliste')

    return <List onClick={action('clicked')} title={titleKnob} initialItems={itemsKnob} />
  })
