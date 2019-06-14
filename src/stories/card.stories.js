import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text } from '@storybook/addon-knobs'
// import { withTests } from '@storybook/addon-jest';
// import { jsxDecorator } from 'storybook-addon-jsx';
import Card from '../components/Card'

const contentFiller =
  'Webtwo ipsum sococo quora zillow blippy geni udemy, flickr meevee prezi. Zanga empressr oooooc loopt, quora ngmoco. Mzinga doostang babblely mzinga appjet, zoodles ning zlio zoho, kosmix heroku disqus. stypi cotweet. Jumo zoodles sclipo hipmunk etsy cotweet, eduvant bitly kno trulia. Qeyno divvyshot glogster spotify chumby plickers omgpop, jaiku jajah lijit jajah cloudera bebo, fleck bubbli flickr waze mog. babblely chegg wufoo. Insala diigo zoho kazaa rovio, nuvvo whrrl. Klout qeyno dogster babblely reddit zynga, wufoo twones movity. Spock weebly prezi nuvvo, dogster. Empressr bebo yammer reddit prezi, tumblr oovoo. Lanyrd etsy kosmix zoosk zinch, heekya quora akismet. Waze lala jajah disqus, meebo plugg.'

const titleFiller = 'The title of card'

const markdownString = `
# Documentation

This is inline markdown!

## Example Usage
~~~js
import React from 'react';
import { storiesOf } from '@storybook/react';
import markdownNotes from './readme.md';

storiesOf('Campus|Card', module)
  .add(
    'addon notes rendering some markdown',
    () => (
      <Card titel="Fancy card" content="some important content" />
    ),
    {
      notes: markdownNotes,
    }
  )
~~~
`

storiesOf('Campus 2019|Cards', module)
  .addDecorator(withInfo)
  //   .addParameters({ jest: ['Card'] })
  // .addDecorator(withTests({ results }))
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)
  .add(
    'Default card',
    () => {
      const title = text('Title', titleFiller)
      const content = text('Content', contentFiller)
      return <Card title={title}>{content}</Card>
    },
    {
      //   jsx: { skip: 4 },
      notes: { markdown: markdownString },
      info: { text: 'A card component.' },
    }
  )
