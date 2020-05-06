import React from 'react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { withTests } from '@storybook/addon-jest'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import { jsxDecorator } from 'storybook-addon-jsx'
import results from '../../.jest-test-results.json'
import RlButton from '../iprl-components/RlButton/RlButton'

const sampleButtonText = 'Some action'

storiesOf('Buttons', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)
  .addParameters({ jest: ['RlButton'] })
  .addDecorator(withTests({ results }))
  .add(
    'Danger',
    () => {
      const loading = boolean('Loading', false)
      const buttonText = text('Text on button', sampleButtonText)
      const disabled = boolean('Disabled', false)

      return (
        <RlButton
          onClick={action('button-click')}
          type="danger"
          loading={loading}
          disabled={disabled}
          buttonText={buttonText}
        />
      )
    },
    {
      jsx: { skip: 1 },
      info: {
        text: `
        Button to use when some action has to gain attention
            
        `,
      },
    }
  )
  .add(
    'Default',
    () => {
      const loading = boolean('Loading', false)
      const buttonText = text('Text on button', sampleButtonText)
      const disabled = boolean('Disabled', false)

      return (
        <RlButton
          onClick={action('button-click')}
          type="default"
          loading={loading}
          disabled={disabled}
          buttonText={buttonText}
        />
      )
    },
    {
      jsx: { skip: 1 },
      info: {
        text: `Button in default state`,
      },
    }
  )
  .add(
    'Confirm',
    () => {
      const loading = boolean('Loading', false)
      const buttonText = text('Text on button', sampleButtonText)
      const disabled = boolean('Disabled', false)

      return (
        <RlButton
          onClick={action('button-click')}
          type="confirm"
          loading={loading}
          disabled={disabled}
          buttonText={buttonText}
        />
      )
    },
    {
      jsx: { skip: 1 },
      info: {
        text: `Button in confirm state`,
      },
    }
  )
