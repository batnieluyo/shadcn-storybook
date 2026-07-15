import type { Meta, StoryObj } from '@storybook/react-vite';
import { BoldIcon, ItalicIcon, UnderlineIcon } from 'lucide-react';
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from '@/components/nova/button-group.tsx';
import { Button } from '@/components/nova/button.tsx';

const meta = {
  title: 'nova/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline">Back</Button>
      <Button variant="outline">Next</Button>
    </ButtonGroup>
  ),
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline">Top</Button>
      <Button variant="outline">Middle</Button>
      <Button variant="outline">Bottom</Button>
    </ButtonGroup>
  ),
};

export const Icons: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline" size="icon" aria-label="Bold">
        <BoldIcon />
      </Button>
      <Button variant="outline" size="icon" aria-label="Italic">
        <ItalicIcon />
      </Button>
      <Button variant="outline" size="icon" aria-label="Underline">
        <UnderlineIcon />
      </Button>
    </ButtonGroup>
  ),
};

export const WithSeparator: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline">Cut</Button>
      <Button variant="outline">Copy</Button>
      <ButtonGroupSeparator />
      <Button variant="outline">Paste</Button>
    </ButtonGroup>
  ),
};

export const WithText: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <ButtonGroupText>https://</ButtonGroupText>
      <Button variant="outline">example.com</Button>
    </ButtonGroup>
  ),
};
