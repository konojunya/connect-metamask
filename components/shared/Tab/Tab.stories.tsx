import {Tab, Props} from './';
import {Story} from '@storybook/react/types-6-0';

export default {
  title: 'components/shared/Tab',
  component: Tab,
};

const Template: Story<Props> = args => <Tab {...args} />;

const defaultProps: Props = {
  tabs: [
    {id: '1', content: 'コレクション'},
    {id: '2', content: 'ロードマップ'},
  ],
  selected: 0,
};

export const overview = Template.bind({});
overview.args = defaultProps;
