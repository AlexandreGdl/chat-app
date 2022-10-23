import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FriendList } from './FriendList';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/FriendList',
  component: FriendList,
} as ComponentMeta<typeof FriendList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FriendList> = (args) => <FriendList {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  url: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  name: 'Jone Doe',
};