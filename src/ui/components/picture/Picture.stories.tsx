import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Picture } from './Picture';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Picture',
  component: Picture,
} as ComponentMeta<typeof Picture>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Picture> = (args) => <Picture {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  url: 'https://images.pexels.com/photos/7767973/pexels-photo-7767973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
};