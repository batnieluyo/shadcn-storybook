import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from '@/components/nova/input.tsx';

const meta = {
  title: 'nova/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'file', 'search'],
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Email',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
};

export const WithValue: Story = {
  args: {
    type: 'email',
    defaultValue: 'jane@example.com',
  },
};

export const Invalid: Story = {
  args: {
    placeholder: 'Email',
    'aria-invalid': true,
  },
};

export const File: Story = {
  args: {
    type: 'file',
  },
};
