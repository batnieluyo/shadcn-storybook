import type { Meta, StoryObj } from '@storybook/react-vite';
import { CircleCheckIcon, TriangleAlertIcon } from 'lucide-react';
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from '@/components/nova/alert.tsx';
import { Button } from '@/components/nova/button.tsx';

const meta = {
  title: 'nova/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive'],
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Alert {...args} className="w-96">
      <CircleCheckIcon />
      <AlertTitle>Update available</AlertTitle>
      <AlertDescription>
        A new version of the app is ready to install.
      </AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
  render: (args) => (
    <Alert {...args} className="w-96">
      <TriangleAlertIcon />
      <AlertTitle>Something went wrong</AlertTitle>
      <AlertDescription>
        Your changes could not be saved. Please try again.
      </AlertDescription>
    </Alert>
  ),
};

export const WithAction: Story = {
  render: (args) => (
    <Alert {...args} className="w-96">
      <CircleCheckIcon />
      <AlertTitle>Payment received</AlertTitle>
      <AlertDescription>
        Your invoice has been paid successfully.
      </AlertDescription>
      <AlertAction>
        <Button size="sm" variant="outline">
          View
        </Button>
      </AlertAction>
    </Alert>
  ),
};

export const TitleOnly: Story = {
  render: (args) => (
    <Alert {...args} className="w-96">
      <CircleCheckIcon />
      <AlertTitle>Saved successfully.</AlertTitle>
    </Alert>
  ),
};
