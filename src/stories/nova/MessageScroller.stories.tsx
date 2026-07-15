import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  MessageScrollerProvider,
  MessageScroller,
  MessageScrollerViewport,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerButton,
} from '@/components/nova/message-scroller.tsx';
import { Message, MessageAvatar, MessageContent, MessageHeader } from '@/components/nova/message.tsx';

const messages = [
  { id: '1', name: 'Ada', text: 'Good morning! Ready for the sync?' },
  { id: '2', name: 'You', text: 'Yep, joining in a minute.' },
  { id: '3', name: 'Ada', text: 'Great, I have the deck ready.' },
  { id: '4', name: 'Luis', text: 'Can someone share the link?' },
  { id: '5', name: 'You', text: 'Posting it now.' },
  { id: '6', name: 'Ada', text: 'Got it, thanks!' },
  { id: '7', name: 'Luis', text: 'Perfect, see you all there.' },
];

const meta = {
  title: 'nova/MessageScroller',
  component: MessageScroller,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MessageScroller>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <MessageScrollerProvider defaultScrollPosition="end">
      <MessageScroller className="h-96 w-96 rounded-lg border">
        <MessageScrollerViewport>
          <MessageScrollerContent className="p-4">
            {messages.map((message) => (
              <MessageScrollerItem key={message.id} messageId={message.id}>
                <Message align={message.name === 'You' ? 'end' : 'start'}>
                  <MessageAvatar>
                    <div className="flex size-8 items-center justify-center rounded-full bg-muted text-xs font-medium">
                      {message.name.slice(0, 1)}
                    </div>
                  </MessageAvatar>
                  <MessageContent>
                    <MessageHeader>{message.name}</MessageHeader>
                    <div className="rounded-lg bg-muted px-3 py-2 text-sm">
                      {message.text}
                    </div>
                  </MessageContent>
                </Message>
              </MessageScrollerItem>
            ))}
          </MessageScrollerContent>
        </MessageScrollerViewport>
        <MessageScrollerButton direction="end" />
      </MessageScroller>
    </MessageScrollerProvider>
  ),
};
