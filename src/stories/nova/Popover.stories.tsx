import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverDescription,
} from '@/components/nova/popover.tsx';
import { Button } from '@/components/nova/button.tsx';
import { Label } from '@/components/nova/label.tsx';
import { Input } from '@/components/nova/input.tsx';

const meta = {
  title: 'nova/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Popover defaultOpen>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Dimensions</PopoverTitle>
          <PopoverDescription>
            Set the dimensions for the layer.
          </PopoverDescription>
        </PopoverHeader>
        <div className="grid gap-2">
          <div className="grid grid-cols-3 items-center gap-2.5">
            <Label htmlFor="story-width">Width</Label>
            <Input id="story-width" defaultValue="100%" className="col-span-2" />
          </div>
          <div className="grid grid-cols-3 items-center gap-2.5">
            <Label htmlFor="story-height">Height</Label>
            <Input id="story-height" defaultValue="25px" className="col-span-2" />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const SimpleText: Story = {
  render: () => (
    <Popover defaultOpen>
      <PopoverTrigger asChild>
        <Button>Show info</Button>
      </PopoverTrigger>
      <PopoverContent>
        <p>Place content for the popover here.</p>
      </PopoverContent>
    </Popover>
  ),
};
