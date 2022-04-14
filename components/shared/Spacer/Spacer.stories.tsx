import {Spacer, Props} from './';
import {Story} from '@storybook/react/types-6-0';

export default {
  title: 'components/shared/Spacer',
  component: Spacer,
};

const Box: React.VFC = () => (
  <div style={{height: '50px', background: 'black'}}></div>
);

const Template: Story<Props> = args => (
  <>
    <Box />
    <Spacer {...args} />
    <Box />
  </>
);

const defaultProps: Props = {
  sizes: {
    mobile: {mt: 20},
  },
};

export const overview = Template.bind({});
overview.args = defaultProps;
