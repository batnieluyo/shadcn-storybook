import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@/components/nova/button.tsx';
import { Label } from '@/components/nova/label.tsx';
import { Input } from '@/components/nova/input.tsx';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/nova/dialog.tsx';

const meta = {
  title: 'nova/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit profile</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-3">
          <div className="grid gap-1.5">
            <Label htmlFor="dialog-name">Name</Label>
            <Input id="dialog-name" defaultValue="Daniel Salcedo" />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="dialog-username">Username</Label>
            <Input id="dialog-username" defaultValue="@daniel" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const WithFooterCloseButton: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Show details</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Order details</DialogTitle>
          <DialogDescription>Order #1234 placed on July 15, 2026.</DialogDescription>
        </DialogHeader>
        <p className="text-sm text-muted-foreground">
          Your order is being processed and will ship within 2-3 business days.
        </p>
        <DialogFooter showCloseButton />
      </DialogContent>
    </Dialog>
  ),
};

export const NoCloseButton: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open</Button>
      </DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button variant="destructive">Delete account</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
