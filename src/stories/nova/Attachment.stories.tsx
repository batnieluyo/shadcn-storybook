import type { Meta, StoryObj } from '@storybook/react-vite';
import { FileTextIcon, XIcon } from 'lucide-react';
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
  AttachmentTrigger,
} from '@/components/nova/attachment.tsx';
import { Spinner } from '@/components/nova/spinner.tsx';

const meta = {
  title: 'nova/Attachment',
  component: Attachment,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['idle', 'uploading', 'processing', 'error', 'done'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'xs'],
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
} satisfies Meta<typeof Attachment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    state: 'done',
  },
  render: (args) => (
    <Attachment {...args}>
      <AttachmentMedia variant="icon">
        <FileTextIcon />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>Quarterly-report.pdf</AttachmentTitle>
        <AttachmentDescription>2.4 MB</AttachmentDescription>
      </AttachmentContent>
      <AttachmentActions>
        <AttachmentAction aria-label="Remove attachment">
          <XIcon />
        </AttachmentAction>
      </AttachmentActions>
      <AttachmentTrigger aria-label="Open attachment" />
    </Attachment>
  ),
};

export const Uploading: Story = {
  args: {
    state: 'uploading',
  },
  render: (args) => (
    <Attachment {...args}>
      <AttachmentMedia variant="icon">
        <Spinner />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>design-assets.zip</AttachmentTitle>
        <AttachmentDescription>Uploading…</AttachmentDescription>
      </AttachmentContent>
    </Attachment>
  ),
};

export const Error: Story = {
  args: {
    state: 'error',
  },
  render: (args) => (
    <Attachment {...args}>
      <AttachmentMedia variant="icon">
        <FileTextIcon />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>invoice.pdf</AttachmentTitle>
        <AttachmentDescription>Upload failed</AttachmentDescription>
      </AttachmentContent>
      <AttachmentActions>
        <AttachmentAction aria-label="Remove attachment">
          <XIcon />
        </AttachmentAction>
      </AttachmentActions>
    </Attachment>
  ),
};

export const Vertical: Story = {
  args: {
    state: 'done',
    orientation: 'vertical',
  },
  render: (args) => (
    <Attachment {...args}>
      <AttachmentMedia variant="image">
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=400&dpr=2&q=80"
          alt="Preview"
        />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>photo.jpg</AttachmentTitle>
        <AttachmentDescription>1.1 MB</AttachmentDescription>
      </AttachmentContent>
      <AttachmentActions>
        <AttachmentAction aria-label="Remove attachment">
          <XIcon />
        </AttachmentAction>
      </AttachmentActions>
      <AttachmentTrigger aria-label="Open attachment" />
    </Attachment>
  ),
};

export const Group: Story = {
  render: () => (
    <AttachmentGroup>
      <Attachment state="done">
        <AttachmentMedia variant="icon">
          <FileTextIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>report.pdf</AttachmentTitle>
          <AttachmentDescription>2.4 MB</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
      <Attachment state="uploading">
        <AttachmentMedia variant="icon">
          <Spinner />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>assets.zip</AttachmentTitle>
          <AttachmentDescription>Uploading…</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
      <Attachment state="error">
        <AttachmentMedia variant="icon">
          <FileTextIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>invoice.pdf</AttachmentTitle>
          <AttachmentDescription>Upload failed</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
    </AttachmentGroup>
  ),
};
