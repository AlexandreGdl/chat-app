import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Message } from './Message';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Message',
  component: Message,
} as ComponentMeta<typeof Message>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Message> = (args) => <Message {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  text: 'Message',
  self: true,
  date: "09:00 AM"
};

Secondary.args = {
  text: 'Message',
  self: false,
  date: "09:00 PM"
}