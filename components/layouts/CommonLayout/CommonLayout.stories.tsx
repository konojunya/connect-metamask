import {CommonLayout} from './';
import {Story} from '@storybook/react/types-6-0';

export default {
  title: 'components/layouts/CommonLayout',
  component: CommonLayout,
};

const Template: Story = args => <CommonLayout {...args}>contents</CommonLayout>;

export const overview = Template.bind({});
