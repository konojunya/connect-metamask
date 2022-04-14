import {Notification, Props} from './';
import {Story} from '@storybook/react/types-6-0';

export default {
  title: 'components/shared/Notification',
  component: Notification,
};

const Template: Story<Props> = args => <Notification {...args} />;

const defaultProps: Props = {
  children: 'テキスト',
  state: 'default',
};

export const overview = Template.bind({});
overview.args = defaultProps;

export const caution = Template.bind({});
caution.args = {
  ...defaultProps,
  state: 'caution',
};
