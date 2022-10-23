import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProfilePicture } from './ProfilePicture';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/ProfilePicture',
  component: ProfilePicture,
} as ComponentMeta<typeof ProfilePicture>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProfilePicture> = (args) => <ProfilePicture {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};