import {Header} from './';
import {Story} from '@storybook/react/types-6-0';

export default {
  title: 'components/shared/Header',
  component: Header,
};

const Template: Story = args => <Header {...args} />;

export const overview = Template.bind({});
