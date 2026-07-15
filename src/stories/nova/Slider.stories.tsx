import type { Meta, StoryObj } from '@storybook/react-vite';
import { Slider } from '@/components/nova/slider.tsx';

const meta = {
  title: 'nova/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
    className: 'w-64',
  },
};

export const Range: Story = {
  args: {
    defaultValue: [25, 75],
    max: 100,
    step: 1,
    className: 'w-64',
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
    disabled: true,
    className: 'w-64',
  },
};

export const Stepped: Story = {
  args: {
    defaultValue: [20],
    max: 100,
    step: 20,
    className: 'w-64',
  },
};

export const Vertical: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
    orientation: 'vertical',
    className: 'h-48',
  },
};
