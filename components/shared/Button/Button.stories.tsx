import {Button, Props} from './';
import {Story} from '@storybook/react/types-6-0';

export default {
  title: 'components/shared/Button',
  component: Button,
};

const Template: Story<Props> = args => <Button {...args} />;

const defaultProps: Props = {
  children: 'テキスト',
};

export const overview = Template.bind({});
overview.args = defaultProps;

export const secondary = Template.bind({});
secondary.args = {
  ...defaultProps,
  color: 'secondary',
};

export const grad = Template.bind({});
grad.args = {
  ...defaultProps,
  color: 'grad',
};

export const error = Template.bind({});
error.args = {
  ...defaultProps,
  color: 'error',
};

export const disabled = Template.bind({});
disabled.args = {
  ...defaultProps,
  disabled: true,
};
