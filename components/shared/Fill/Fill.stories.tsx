import {Fill} from './';
import {Container} from '../../layouts/Container';
import {Story} from '@storybook/react/types-6-0';

export default {
  title: 'components/shared/Fill',
  component: Fill,
};

const Template: Story = () => (
  <Container>
    outside fill
    <Fill>in fill</Fill>
    outside fill
  </Container>
);

export const overview = Template.bind({});
