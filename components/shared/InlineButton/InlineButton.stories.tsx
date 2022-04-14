import {InlineButton, Props} from './';
import {Story} from '@storybook/react/types-6-0';

export default {
  title: 'components/shared/InlineButton',
  component: InlineButton,
};

const Template: Story<Props> = args => <InlineButton {...args} />;

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
