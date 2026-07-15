import type { Meta, StoryObj } from '@storybook/react-vite';
import { Marker, MarkerIcon, MarkerContent } from '@/components/nova/marker.tsx';
import { InfoIcon } from 'lucide-react';

const meta = {
  title: 'nova/Marker',
  component: Marker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'separator', 'border'],
    },
  },
} satisfies Meta<typeof Marker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Marker {...args} className="w-72">
      <MarkerIcon>
        <InfoIcon />
      </MarkerIcon>
      <MarkerContent>Read receipts are on</MarkerContent>
    </Marker>
  ),
};

export const Separator: Story = {
  render: (args) => (
    <Marker {...args} variant="separator" className="w-72">
      <MarkerContent>Today</MarkerContent>
    </Marker>
  ),
};

export const Border: Story = {
  render: (args) => (
    <Marker {...args} variant="border" className="w-72">
      <MarkerContent>Section heading</MarkerContent>
    </Marker>
  ),
};
