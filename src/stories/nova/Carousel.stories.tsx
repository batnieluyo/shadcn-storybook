import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/nova/carousel.tsx';

const meta = {
  title: 'nova/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Carousel {...args} className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="flex aspect-square items-center justify-center rounded-xl bg-muted text-4xl font-semibold">
              {index + 1}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

export const Vertical: Story = {
  render: (args) => (
    <Carousel {...args} orientation="vertical" className="w-full max-w-xs">
      <CarouselContent className="h-64">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="flex h-full items-center justify-center rounded-xl bg-muted text-4xl font-semibold">
              {index + 1}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

export const MultipleItems: Story = {
  render: (args) => (
    <Carousel {...args} opts={{ align: 'start' }} className="w-full max-w-sm">
      <CarouselContent>
        {Array.from({ length: 8 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/3">
            <div className="flex aspect-square items-center justify-center rounded-xl bg-muted text-2xl font-semibold">
              {index + 1}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};
