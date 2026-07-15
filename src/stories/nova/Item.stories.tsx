import type { Meta, StoryObj } from '@storybook/react-vite';
import { MoreHorizontalIcon, UserIcon } from 'lucide-react';
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from '@/components/nova/item.tsx';
import { Button } from '@/components/nova/button.tsx';

const meta = {
  title: 'nova/Item',
  component: Item,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'muted'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'xs'],
    },
  },
} satisfies Meta<typeof Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Item {...args} className="w-96">
      <ItemMedia variant="icon">
        <UserIcon />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Jane Doe</ItemTitle>
        <ItemDescription>jane@example.com</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="ghost" size="icon-sm">
          <MoreHorizontalIcon />
        </Button>
      </ItemActions>
    </Item>
  ),
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
  render: (args) => (
    <Item {...args} className="w-96">
      <ItemMedia variant="icon">
        <UserIcon />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Jane Doe</ItemTitle>
        <ItemDescription>jane@example.com</ItemDescription>
      </ItemContent>
    </Item>
  ),
};

export const Muted: Story = {
  args: {
    variant: 'muted',
  },
  render: (args) => (
    <Item {...args} className="w-96">
      <ItemContent>
        <ItemTitle>Archived project</ItemTitle>
        <ItemDescription>Last updated 3 months ago</ItemDescription>
      </ItemContent>
    </Item>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex w-96 flex-col gap-3">
      <Item variant="outline" size="default">
        <ItemContent>
          <ItemTitle>Default size</ItemTitle>
        </ItemContent>
      </Item>
      <Item variant="outline" size="sm">
        <ItemContent>
          <ItemTitle>Small size</ItemTitle>
        </ItemContent>
      </Item>
      <Item variant="outline" size="xs">
        <ItemContent>
          <ItemTitle>Extra small size</ItemTitle>
        </ItemContent>
      </Item>
    </div>
  ),
};

export const Group: Story = {
  render: () => (
    <ItemGroup className="w-96">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <UserIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Jane Doe</ItemTitle>
          <ItemDescription>Product Designer</ItemDescription>
        </ItemContent>
      </Item>
      <ItemSeparator />
      <Item variant="outline">
        <ItemMedia variant="icon">
          <UserIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>John Smith</ItemTitle>
          <ItemDescription>Engineer</ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  ),
};
