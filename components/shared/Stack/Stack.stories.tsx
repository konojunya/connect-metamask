import {Stack, Props} from './';
import {Story} from '@storybook/react/types-6-0';
import {Color} from '../../../styles/variables';

export default {
  title: 'components/shared/Stack',
  component: Stack,
};

const Box: React.VFC<{
  children: React.ReactNode;
}> = ({children}) => (
  <div
    style={{
      padding: 18,
      background: Color.GrayAlpha.GrayAlpha_10,
      textAlign: 'center',
    }}
  >
    {children}
  </div>
);

const Template: Story<Props> = args => (
  <Stack {...args}>
    <Box>1</Box>
    <Box>2</Box>
    <Box>3</Box>
    <Box>4</Box>
    <Box>5</Box>
  </Stack>
);

const defaultProps = {};

export const overview = Template.bind({});
overview.args = defaultProps;

export const withHorizontal = Template.bind({});
withHorizontal.args = {
  ...defaultProps,
  mobile: {horizontal: true, vAlign: 'start'},
};

export const withGap = Template.bind({});
withGap.args = {
  ...defaultProps,
  mobile: {gap: 20},
};

export const withResponsive = Template.bind({});
withResponsive.args = {
  ...defaultProps,
  mobile: {gap: 20},
};
