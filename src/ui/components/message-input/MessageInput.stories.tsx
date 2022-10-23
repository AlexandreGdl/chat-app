import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MessageInput } from './MessageInput';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/MessageInput',
  component: MessageInput,
} as ComponentMeta<typeof MessageInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MessageInput> = (args) => <MessageInput {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  emojiPosition: 'bottom'
};