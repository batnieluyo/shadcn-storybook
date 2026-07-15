import type { Meta, StoryObj } from '@storybook/react-vite';
import { Spinner } from '@/components/nova/spinner.tsx';

const meta = {
  title: 'nova/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Small: Story = {
  args: {
    className: 'size-3',
  },
};

export const Large: Story = {
  args: {
    className: 'size-8',
  },
};

export const WithText: Story = {
  render: (args) => (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <Spinner {...args} />
      Loading...
    </div>
  ),
};
