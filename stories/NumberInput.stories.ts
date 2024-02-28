
import NumberInput from '../app/components/NumberInput/index'
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'NumberInput',
  component: NumberInput,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof NumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {

  },
};

