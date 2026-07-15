import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  MessageGroup,
  Message,
  MessageAvatar,
  MessageContent,
  MessageHeader,
  MessageFooter,
} from '@/components/nova/message.tsx';

const meta = {
  title: 'nova/Message',
  component: Message,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    align: {
      control: 'select',
      options: ['start', 'end'],
    },
  },
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Incoming: Story = {
  render: (args) => (
    <div className="w-96">
      <Message {...args} align="start">
        <MessageAvatar>
          <img
            src="https://i.pravatar.cc/64?img=12"
            alt="Ada"
            className="size-8 rounded-full"
          />
        </MessageAvatar>
        <MessageContent>
          <MessageHeader>Ada</MessageHeader>
          <div className="rounded-lg bg-muted px-3 py-2">
            Hey, did you get a chance to look at the proposal?
          </div>
          <MessageFooter>9:41 AM</MessageFooter>
        </MessageContent>
      </Message>
    </div>
  ),
};

export const Outgoing: Story = {
  render: (args) => (
    <div className="w-96">
      <Message {...args} align="end">
        <MessageAvatar>
          <img
            src="https://i.pravatar.cc/64?img=5"
            alt="You"
            className="size-8 rounded-full"
          />
        </MessageAvatar>
        <MessageContent>
          <MessageHeader>You</MessageHeader>
          <div className="rounded-lg bg-primary px-3 py-2 text-primary-foreground">
            Yes! Sending my notes over now.
          </div>
          <MessageFooter>9:43 AM</MessageFooter>
        </MessageContent>
      </Message>
    </div>
  ),
};

export const Conversation: Story = {
  render: () => (
    <MessageGroup className="w-96">
      <Message align="start">
        <MessageAvatar>
          <img
            src="https://i.pravatar.cc/64?img=12"
            alt="Ada"
            className="size-8 rounded-full"
          />
        </MessageAvatar>
        <MessageContent>
          <MessageHeader>Ada</MessageHeader>
          <div className="rounded-lg bg-muted px-3 py-2">
            Hey, did you get a chance to look at the proposal?
          </div>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageAvatar>
          <img
            src="https://i.pravatar.cc/64?img=5"
            alt="You"
            className="size-8 rounded-full"
          />
        </MessageAvatar>
        <MessageContent>
          <MessageHeader>You</MessageHeader>
          <div className="rounded-lg bg-primary px-3 py-2 text-primary-foreground">
            Yes! Sending my notes over now.
          </div>
          <MessageFooter>9:43 AM</MessageFooter>
        </MessageContent>
      </Message>
    </MessageGroup>
  ),
};
