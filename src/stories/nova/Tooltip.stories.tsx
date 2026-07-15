import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@/components/nova/button.tsx';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/nova/tooltip.tsx';

const meta = {
  title: 'nova/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const OnPlainElement: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <span className="cursor-default text-sm underline decoration-dotted underline-offset-4">
          Hover this text
        </span>
      </TooltipTrigger>
      <TooltipContent>
        <p>Helpful extra context</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const OpenByDefault: Story = {
  render: () => (
    <Tooltip defaultOpen>
      <TooltipTrigger asChild>
        <Button variant="outline">Always shown</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This tooltip starts open</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const Sides: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      {(['top', 'right', 'bottom', 'left'] as const).map((side) => (
        <Tooltip key={side}>
          <TooltipTrigger asChild>
            <Button variant="outline">{side}</Button>
          </TooltipTrigger>
          <TooltipContent side={side}>
            <p>Tooltip on {side}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  ),
};
