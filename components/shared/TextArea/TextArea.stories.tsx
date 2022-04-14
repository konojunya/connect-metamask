import {TextArea, Props} from './';
import {Story} from '@storybook/react/types-6-0';

export default {
  title: 'components/shared/TextArea',
  component: TextArea,
};

const Template: Story<Props> = args => <TextArea {...args} />;

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
