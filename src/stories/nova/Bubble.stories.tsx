import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Bubble,
  BubbleContent,
  BubbleGroup,
  BubbleReactions,
} from '@/components/nova/bubble.tsx';

const meta = {
  title: 'nova/Bubble',
  component: Bubble,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'secondary',
        'muted',
        'tinted',
        'outline',
        'ghost',
        'destructive',
      ],
    },
    align: {
      control: 'select',
      options: ['start', 'end'],
    },
  },
} satisfies Meta<typeof Bubble>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Bubble {...args} className="w-80">
      <BubbleContent>Hey, how's the launch prep going?</BubbleContent>
    </Bubble>
  ),
};

export const Sent: Story = {
  args: {
    align: 'end',
  },
  render: (args) => (
    <Bubble {...args} className="w-80">
      <BubbleContent>
        Almost done — just wrapping up the release notes.
      </BubbleContent>
    </Bubble>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-3">
      <Bubble variant="default">
        <BubbleContent>Default bubble</BubbleContent>
      </Bubble>
      <Bubble variant="secondary">
        <BubbleContent>Secondary bubble</BubbleContent>
      </Bubble>
      <Bubble variant="muted">
        <BubbleContent>Muted bubble</BubbleContent>
      </Bubble>
      <Bubble variant="tinted">
        <BubbleContent>Tinted bubble</BubbleContent>
      </Bubble>
      <Bubble variant="outline">
        <BubbleContent>Outline bubble</BubbleContent>
      </Bubble>
      <Bubble variant="ghost">
        <BubbleContent>Ghost bubble</BubbleContent>
      </Bubble>
      <Bubble variant="destructive">
        <BubbleContent>Destructive bubble</BubbleContent>
      </Bubble>
    </div>
  ),
};

export const WithReactions: Story = {
  render: (args) => (
    <Bubble {...args} className="w-80">
      <BubbleContent>Nice work on the release!</BubbleContent>
      <BubbleReactions>👍 2</BubbleReactions>
    </Bubble>
  ),
};

export const Conversation: Story = {
  render: () => (
    <BubbleGroup className="w-80">
      <Bubble align="start" variant="muted">
        <BubbleContent>Hey, how's the launch prep going?</BubbleContent>
      </Bubble>
      <Bubble align="end" variant="default">
        <BubbleContent>
          Almost done — just wrapping up the release notes.
        </BubbleContent>
      </Bubble>
      <Bubble align="start" variant="muted">
        <BubbleContent>Great, let me know if you need a hand.</BubbleContent>
      </Bubble>
    </BubbleGroup>
  ),
};
