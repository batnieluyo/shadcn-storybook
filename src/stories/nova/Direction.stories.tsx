import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@/components/nova/button.tsx';
import { DirectionProvider, useDirection } from '@/components/nova/direction.tsx';

function DirectionAwarePanel() {
  const direction = useDirection();

  return (
    <div dir={direction} className="flex w-72 items-center gap-2 rounded-lg border p-3">
      <Button variant="outline" size="sm">
        Back
      </Button>
      <span className="flex-1 text-center text-sm text-muted-foreground">
        useDirection() → &quot;{direction}&quot;
      </span>
      <Button size="sm">Next</Button>
    </div>
  );
}

const meta = {
  title: 'nova/Direction',
  component: DirectionProvider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    dir: {
      control: 'select',
      options: ['ltr', 'rtl'],
    },
  },
} satisfies Meta<typeof DirectionProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LeftToRight: Story = {
  args: {
    dir: 'ltr',
  },
  render: (args) => (
    <DirectionProvider {...args}>
      <DirectionAwarePanel />
    </DirectionProvider>
  ),
};

export const RightToLeft: Story = {
  args: {
    dir: 'rtl',
  },
  render: (args) => (
    <DirectionProvider {...args}>
      <DirectionAwarePanel />
    </DirectionProvider>
  ),
};
