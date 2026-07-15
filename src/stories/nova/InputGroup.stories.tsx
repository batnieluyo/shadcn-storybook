import type { Meta, StoryObj } from '@storybook/react-vite';
import { MailIcon, SearchIcon } from 'lucide-react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from '@/components/nova/input-group.tsx';
import { Kbd } from '@/components/nova/kbd.tsx';

const meta = {
  title: 'nova/InputGroup',
  component: InputGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <InputGroup className="w-72">
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupInput placeholder="Search..." />
    </InputGroup>
  ),
};

export const WithTrailingButton: Story = {
  render: () => (
    <InputGroup className="w-72">
      <InputGroupInput placeholder="Enter your email" />
      <InputGroupAddon align="inline-end">
        <InputGroupButton>Subscribe</InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
};

export const WithText: Story = {
  render: () => (
    <InputGroup className="w-72">
      <InputGroupAddon>
        <InputGroupText>https://</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="example.com" />
    </InputGroup>
  ),
};

export const WithShortcut: Story = {
  render: () => (
    <InputGroup className="w-72">
      <InputGroupAddon>
        <MailIcon />
      </InputGroupAddon>
      <InputGroupInput placeholder="Search mail" />
      <InputGroupAddon align="inline-end">
        <Kbd>⌘K</Kbd>
      </InputGroupAddon>
    </InputGroup>
  ),
};

export const Textarea: Story = {
  render: () => (
    <InputGroup className="w-72">
      <InputGroupTextarea placeholder="Leave a comment..." />
      <InputGroupAddon align="block-end">
        <InputGroupText>0/280</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  ),
};
