import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from '@/components/nova/textarea.tsx';

const meta = {
  title: 'nova/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Type your message here.',
    className: 'w-80',
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: 'The quick brown fox jumps over the lazy dog.',
    className: 'w-80',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Type your message here.',
    disabled: true,
    className: 'w-80',
  },
};

export const Invalid: Story = {
  args: {
    defaultValue: 'Invalid content',
    'aria-invalid': true,
    className: 'w-80',
  },
};
