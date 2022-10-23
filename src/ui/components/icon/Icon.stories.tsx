import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon } from './Icon';
import { faLockOpen } from '@fortawesome/free-solid-svg-icons';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  icon: faLockOpen,
  iconSize: 'xs',
  size: '40'
};