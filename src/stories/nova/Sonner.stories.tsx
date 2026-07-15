import type { Meta, StoryObj } from '@storybook/react-vite';
import { toast } from 'sonner';
import { Toaster } from '@/components/nova/sonner.tsx';
import { Button } from '@/components/nova/button.tsx';

const meta = {
  title: 'nova/Sonner',
  component: Toaster,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div>
      <Toaster />
      <Button onClick={() => toast('Event has been created')}>Show Toast</Button>
    </div>
  ),
};

export const Success: Story = {
  render: () => (
    <div>
      <Toaster />
      <Button onClick={() => toast.success('Your changes have been saved')}>
        Show Success Toast
      </Button>
    </div>
  ),
};

export const Error: Story = {
  render: () => (
    <div>
      <Toaster />
      <Button
        variant="destructive"
        onClick={() => toast.error('Something went wrong. Please try again.')}
      >
        Show Error Toast
      </Button>
    </div>
  ),
};

export const Info: Story = {
  render: () => (
    <div>
      <Toaster />
      <Button
        variant="outline"
        onClick={() => toast.info('A new version is available.')}
      >
        Show Info Toast
      </Button>
    </div>
  ),
};

export const WithAction: Story = {
  render: () => (
    <div>
      <Toaster />
      <Button
        variant="secondary"
        onClick={() =>
          toast('Event has been created', {
            description: 'Sunday, December 3rd at 9:00 AM',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })
        }
      >
        Show Toast With Action
      </Button>
    </div>
  ),
};
