import {Tag, Props} from './';
import {Story} from '@storybook/react/types-6-0';

export default {
  title: 'components/shared/Tag',
  component: Tag,
};

const Template: Story<Props> = args => <Tag {...args}>テキスト</Tag>;

export const overview = Template.bind({});

export const basic = Template.bind({});
basic.args = {
  color: 'basic',
};

export const skelton = Template.bind({});
skelton.args = {
  color: 'skelton',
};

export const primary_sm = Template.bind({});
overview.args = {
  size: 'sm',
};

export const basic_sm = Template.bind({});
basic.args = {
  color: 'basic',
  size: 'sm',
};

export const skelton_sm = Template.bind({});
skelton.args = {
  color: 'skelton',
  size: 'sm',
};
