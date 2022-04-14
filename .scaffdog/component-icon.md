---
name: 'component-icon.md'
root: '.'
output: 'components/icons'
questions:
  value: 'Please enter a component name.'
---

# `{{ inputs.value | pascal }}/index.ts`

```typescript
export * from './{{ inputs.value | pascal }}';
```

# `{{ inputs.value | pascal }}/{{ inputs.value | pascal }}.stories.tsx`

```typescript
import { {{- inputs.value | pascal -}} } from './';
import {Story} from '@storybook/react/types-6-0';

export default {
  title: '{{ output.dir }}',
  component: {{ inputs.value | pascal }},
};

const Template: Story = args => <{{ inputs.value | pascal }} {...args} />;

export const overview = Template.bind({});
```

# `{{ inputs.value | pascal }}/{{ inputs.value | pascal}}.tsx`

```typescript
export const {{ inputs.value | pascal }}: React.VFC = () => {
  return (
    <Wrapper>TODO</Wrapper>
  );
};
```
