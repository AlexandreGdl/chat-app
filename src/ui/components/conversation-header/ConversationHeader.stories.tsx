import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ConversationHeader } from './ConversationHeader';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/ConversationHeader',
  component: ConversationHeader,
} as ComponentMeta<typeof ConversationHeader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ConversationHeader> = (args) => <ConversationHeader {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  url: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  name: 'Jone Doe',
  lastSeen: '09:10 AM',
};