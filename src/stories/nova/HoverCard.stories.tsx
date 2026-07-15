import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/nova/hover-card.tsx';
import { Button } from '@/components/nova/button.tsx';

const meta = {
  title: 'nova/HoverCard',
  component: HoverCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultOpen: true,
  },
  render: (args) => (
    <HoverCard {...args}>
      <HoverCardTrigger asChild>
        <Button variant="link">@nova-ui</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium">@nova-ui</p>
          <p className="text-sm text-muted-foreground">
            The React component library powering the Nova design system.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const WithLink: Story = {
  args: {
    defaultOpen: true,
  },
  render: (args) => (
    <HoverCard {...args}>
      <HoverCardTrigger asChild>
        <a href="#" className="text-sm text-primary underline underline-offset-4">
          Hover for details
        </a>
      </HoverCardTrigger>
      <HoverCardContent>
        <p className="text-sm text-muted-foreground">
          Additional context appears here when the trigger is hovered.
        </p>
      </HoverCardContent>
    </HoverCard>
  ),
};
