import type { Meta, StoryObj } from '@storybook/react-vite';
import { Kbd, KbdGroup } from '@/components/nova/kbd.tsx';

const meta = {
  title: 'nova/Kbd',
  component: Kbd,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Kbd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '⌘',
  },
};

export const Letter: Story = {
  args: {
    children: 'K',
  },
};

export const Group: Story = {
  render: () => (
    <KbdGroup>
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
    </KbdGroup>
  ),
};

export const Shortcut: Story = {
  render: () => (
    <div className="flex items-center gap-4 text-sm">
      <span>Open command palette</span>
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <Kbd>Shift</Kbd>
        <Kbd>P</Kbd>
      </KbdGroup>
    </div>
  ),
};
