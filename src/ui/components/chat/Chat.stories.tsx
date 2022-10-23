import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Chat } from './Chat';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Chat',
  component: Chat,
} as ComponentMeta<typeof Chat>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Chat> = (args) => <Chat {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  lastSeen: '08:12 AM',
  name: 'Jon Doe',
  url: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
};

Primary.parameters = {
  height: '100vh'
}