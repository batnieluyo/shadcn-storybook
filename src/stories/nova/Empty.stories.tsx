import type { Meta, StoryObj } from '@storybook/react-vite';
import { FolderIcon, SearchXIcon } from 'lucide-react';
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/nova/empty.tsx';
import { Button } from '@/components/nova/button.tsx';

const meta = {
  title: 'nova/Empty',
  component: Empty,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Empty>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Empty className="w-96 border">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FolderIcon />
        </EmptyMedia>
        <EmptyTitle>No projects yet</EmptyTitle>
        <EmptyDescription>
          Create your first project to get started.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Create Project</Button>
      </EmptyContent>
    </Empty>
  ),
};

export const WithoutMedia: Story = {
  render: () => (
    <Empty className="w-96 border">
      <EmptyHeader>
        <EmptyTitle>No results found</EmptyTitle>
        <EmptyDescription>
          Try adjusting your search or filters.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
};

export const SearchEmpty: Story = {
  render: () => (
    <Empty className="w-96 border">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <SearchXIcon />
        </EmptyMedia>
        <EmptyTitle>No matches</EmptyTitle>
        <EmptyDescription>
          We couldn&apos;t find anything matching your search.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline">Clear search</Button>
      </EmptyContent>
    </Empty>
  ),
};
