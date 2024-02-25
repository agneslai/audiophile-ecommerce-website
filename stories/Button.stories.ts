
import Button from '../app/components/Button/index'
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: {type: 'select'}, options: ['default', 'secondary'] },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'see product'
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'see product'
  },
};

export const Black: Story = {
  args: {
    variant: 'black',
    children: 'see product'
  },
};

export const Transparent: Story = {
  args: {
    variant: 'transparent',
    children: 'shop'
  },
};