import {IconButton, Props} from './';
import {Story} from '@storybook/react/types-6-0';

export default {
  title: 'components/shared/IconButton',
  component: IconButton,
};

const Template: Story<Props> = args => <IconButton {...args} />;

export const overview = Template.bind({});
overview.args = {
  icon: <span>icon</span>,
};
