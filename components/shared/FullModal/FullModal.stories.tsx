import {FullModal} from './';
import {useState} from 'react';
import {Story} from '@storybook/react/types-6-0';
import {Button} from '../Button';

export default {
  title: 'components/shared/FullModal',
  component: FullModal,
};

const Template: Story = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={(): void => setOpen(!open)}>toggle</Button>
      <FullModal open={open} onClose={(): void => setOpen(false)}>
        <p>contents</p>
      </FullModal>
    </div>
  );
};

export const overview = Template.bind({});
