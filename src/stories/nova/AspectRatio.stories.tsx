import type { Meta, StoryObj } from '@storybook/react-vite';
import { AspectRatio } from '@/components/nova/aspect-ratio.tsx';

const meta = {
  title: 'nova/AspectRatio',
  component: AspectRatio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ratio: 16 / 9,
  },
  render: (args) => (
    <div className="w-80">
      <AspectRatio {...args} className="overflow-hidden rounded-lg bg-muted">
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          className="size-full object-cover"
        />
      </AspectRatio>
    </div>
  ),
};

export const Square: Story = {
  args: {
    ratio: 1,
  },
  render: (args) => (
    <div className="w-60">
      <AspectRatio {...args} className="overflow-hidden rounded-lg bg-muted">
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          className="size-full object-cover"
        />
      </AspectRatio>
    </div>
  ),
};

export const Portrait: Story = {
  args: {
    ratio: 3 / 4,
  },
  render: (args) => (
    <div className="w-60">
      <AspectRatio {...args} className="overflow-hidden rounded-lg bg-muted">
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          className="size-full object-cover"
        />
      </AspectRatio>
    </div>
  ),
};
