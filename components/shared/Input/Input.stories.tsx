import {Input, Props} from './';
import {Story} from '@storybook/react/types-6-0';

export default {
  title: 'components/shared/Input',
  component: Input,
};

const Template: Story<Props> = args => <Input {...args} />;

const defaultProps: Props = {
  label: 'テキスト',
  placeholder: 'テキスト',
};

export const overview = Template.bind({});
overview.args = defaultProps;

export const inputed = Template.bind({});
inputed.args = {
  ...defaultProps,
  value: 'テキスト',
};

export const error = Template.bind({});
error.args = {
  ...defaultProps,
  value: 'テキスト',
  error: 'テキスト',
};
