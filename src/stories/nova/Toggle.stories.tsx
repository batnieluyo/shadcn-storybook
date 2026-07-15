import type { Meta, StoryObj } from '@storybook/react-vite';
import { Bold } from 'lucide-react';
import { Toggle } from '@/components/nova/toggle.tsx';

const meta = {
  title: 'nova/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
    },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    'aria-label': 'Toggle bold',
    children: <Bold />,
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    'aria-label': 'Toggle bold',
    children: <Bold />,
  },
};

export const WithText: Story = {
  args: {
    'aria-label': 'Toggle bold',
    children: (
      <>
        <Bold />
        Bold
      </>
    ),
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    'aria-label': 'Toggle bold',
    children: <Bold />,
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    'aria-label': 'Toggle bold',
    children: <Bold />,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    'aria-label': 'Toggle bold',
    children: <Bold />,
  },
};

export const Pressed: Story = {
  args: {
    defaultPressed: true,
    'aria-label': 'Toggle bold',
    children: <Bold />,
  },
};
