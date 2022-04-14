import {Text} from './';
import {Story} from '@storybook/react/types-6-0';

export default {
  title: 'components/shared/Text',
  component: Text,
};

const Template: Story = () => <Text>children</Text>;

export const overview = Template.bind({});
