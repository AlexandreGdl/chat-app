import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Separator } from './Separator';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Separator',
  component: Separator,
} as ComponentMeta<typeof Separator>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Separator> = (args) => <Separator {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  height: '2',
  color: '#333'
};