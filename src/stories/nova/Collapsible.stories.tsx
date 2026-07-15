import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChevronsUpDownIcon } from 'lucide-react';
import { Button } from '@/components/nova/button.tsx';
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '@/components/nova/collapsible.tsx';

const meta = {
  title: 'nova/Collapsible',
  component: Collapsible,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Collapsible {...args} className="w-72 space-y-2">
      <div className="flex items-center justify-between gap-4 px-1">
        <span className="text-sm font-medium">@daniel starred 3 repositories</span>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="icon-sm">
            <ChevronsUpDownIcon />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-lg border px-3 py-2 text-sm font-mono">radix-nova/ui</div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-lg border px-3 py-2 text-sm font-mono">radix-ui/primitives</div>
        <div className="rounded-lg border px-3 py-2 text-sm font-mono">shadcn/ui</div>
      </CollapsibleContent>
    </Collapsible>
  ),
};

export const DefaultOpen: Story = {
  render: (args) => (
    <Collapsible {...args} defaultOpen className="w-72 space-y-2">
      <div className="flex items-center justify-between gap-4 px-1">
        <span className="text-sm font-medium">@daniel starred 3 repositories</span>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="icon-sm">
            <ChevronsUpDownIcon />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-lg border px-3 py-2 text-sm font-mono">radix-nova/ui</div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-lg border px-3 py-2 text-sm font-mono">radix-ui/primitives</div>
        <div className="rounded-lg border px-3 py-2 text-sm font-mono">shadcn/ui</div>
      </CollapsibleContent>
    </Collapsible>
  ),
};
