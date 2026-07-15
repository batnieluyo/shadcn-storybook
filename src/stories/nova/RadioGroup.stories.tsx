import type { Meta, StoryObj } from '@storybook/react-vite';
import { RadioGroup, RadioGroupItem } from '@/components/nova/radio-group.tsx';
import { Label } from '@/components/nova/label.tsx';

const meta = {
  title: 'nova/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <RadioGroup defaultValue="comfortable" {...args}>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <RadioGroup defaultValue="comfortable" disabled {...args}>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="default" id="rd1" />
        <Label htmlFor="rd1">Default</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="comfortable" id="rd2" />
        <Label htmlFor="rd2">Comfortable</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="compact" id="rd3" />
        <Label htmlFor="rd3">Compact</Label>
      </div>
    </RadioGroup>
  ),
};

export const WithDisabledItem: Story = {
  render: (args) => (
    <RadioGroup defaultValue="comfortable" {...args}>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="default" id="rw1" />
        <Label htmlFor="rw1">Default</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="comfortable" id="rw2" />
        <Label htmlFor="rw2">Comfortable</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="compact" id="rw3" disabled />
        <Label htmlFor="rw3">Compact (disabled)</Label>
      </div>
    </RadioGroup>
  ),
};
