import {Avatar, Props} from './';
import {Story} from '@storybook/react/types-6-0';
import {Color} from '../../../styles/variables';

export default {
  title: 'components/shared/Avatar',
  component: Avatar,
};

const Template: Story<Props> = args => <Avatar {...args} />;

const defaultProps: Props = {
  src: 'https://storage.googleapis.com/stella-collection/dummy/holoicon.png',
  size: 80,
};

export const overview = Template.bind({});
overview.args = defaultProps;

export const border = Template.bind({});
border.args = {
  ...defaultProps,
  border: Color.White.White_100,
};
