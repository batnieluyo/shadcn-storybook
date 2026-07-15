import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@/components/nova/button.tsx';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from '@/components/nova/card.tsx';

const meta = {
  title: 'nova/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['default', 'sm'],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Card {...args} className="w-80">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one click.</CardDescription>
        <CardAction>
          <Button variant="ghost" size="sm">
            Docs
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          Choose a template, name your project, and we&apos;ll handle the rest.
        </p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline" className="flex-1">
          Cancel
        </Button>
        <Button className="flex-1">Deploy</Button>
      </CardFooter>
    </Card>
  ),
};

export const Small: Story = {
  render: (args) => (
    <Card {...args} size="sm" className="w-80">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">Manage how you receive alerts.</p>
      </CardContent>
      <CardFooter>
        <Button size="sm" className="w-full">
          Mark all as read
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const WithoutFooter: Story = {
  render: (args) => (
    <Card {...args} className="w-80">
      <CardHeader>
        <CardTitle>Team members</CardTitle>
        <CardDescription>Invite people to your workspace.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          Everyone with the link can request to join this workspace.
        </p>
      </CardContent>
    </Card>
  ),
};
