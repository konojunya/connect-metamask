import {Toast} from './';
import {toast} from 'react-toastify';
import {Story} from '@storybook/react/types-6-0';

export default {
  title: 'components/shared/Toast',
  component: Toast,
};

const ErrorTemplate: Story = args => {
  toast.error('テキスト');

  return (
    <div>
      <Toast {...args} />
    </div>
  );
};

export const overview = ErrorTemplate.bind({});

const SuccessTemplate: Story = args => {
  toast.success('テキスト');

  return (
    <div>
      <Toast {...args} />
    </div>
  );
};

export const success = SuccessTemplate.bind({});
