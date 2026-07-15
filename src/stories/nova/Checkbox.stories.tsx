import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from '@/components/nova/checkbox.tsx';
import { Label } from '@/components/nova/label.tsx';

const meta = {
  title: 'nova/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Checkbox id="checkbox-default" {...args} />
      <Label htmlFor="checkbox-default">Accept terms and conditions</Label>
    </div>
  ),
};

export const Checked: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Checkbox id="checkbox-checked" defaultChecked {...args} />
      <Label htmlFor="checkbox-checked">Remember me</Label>
    </div>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Checkbox id="checkbox-disabled" disabled {...args} />
      <Label htmlFor="checkbox-disabled">Disabled option</Label>
    </div>
  ),
};

export const DisabledChecked: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Checkbox id="checkbox-disabled-checked" disabled defaultChecked {...args} />
      <Label htmlFor="checkbox-disabled-checked">Disabled checked option</Label>
    </div>
  ),
};
