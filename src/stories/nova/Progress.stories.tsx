import type { Meta, StoryObj } from '@storybook/react-vite';
import { Progress } from '@/components/nova/progress.tsx';

const meta = {
  title: 'nova/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-72">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    value: 0,
  },
};

export const Low: Story = {
  args: {
    value: 13,
  },
};

export const Half: Story = {
  args: {
    value: 50,
  },
};

export const Complete: Story = {
  args: {
    value: 100,
  },
};
