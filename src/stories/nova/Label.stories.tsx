import type { Meta, StoryObj } from '@storybook/react-vite';
import { Label } from '@/components/nova/label.tsx';
import { Input } from '@/components/nova/input.tsx';
import { Checkbox } from '@/components/nova/checkbox.tsx';

const meta = {
  title: 'nova/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Label',
  },
};

export const WithInput: Story = {
  render: () => (
    <div className="grid gap-1.5">
      <Label htmlFor="story-email">Email</Label>
      <Input id="story-email" type="email" placeholder="you@example.com" />
    </div>
  ),
};

export const WithCheckbox: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="story-terms" />
      <Label htmlFor="story-terms">Accept terms and conditions</Label>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="group grid gap-1.5" data-disabled="true">
      <Label htmlFor="story-disabled">Disabled field</Label>
      <Input id="story-disabled" disabled placeholder="Can't touch this" />
    </div>
  ),
};
