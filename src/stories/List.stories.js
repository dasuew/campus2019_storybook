import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, array, object } from '@storybook/addon-knobs';

import List from '../components/List';
const items =['Blubb', 'Bla' ];

storiesOf('Campus 2019/List', module)
    .addDecorator(withKnobs)
    .add('simple List', () =>{
    
        const itemsKnob = array('Items', items);
        const titleKnob = text('Title', 'Megaliste');
        
        return (<List onClick={action('clicked')} title={titleKnob} initialItems={itemsKnob}/>);
    });
  