import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Conversation } from './Conversation';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Conversation',
  component: Conversation,
} as ComponentMeta<typeof Conversation>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Conversation> = (args) => <Conversation {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  alert: 0,
  lastMessage: 'Wanna drink something ?',
  lastMessageDate: 'qsd',
  name: 'Jon Doe',
  url: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  active: true,
};