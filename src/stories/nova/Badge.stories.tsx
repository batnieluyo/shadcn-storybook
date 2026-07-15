import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from '@/components/nova/badge.tsx';

const meta = {
    title: 'nova/Badge',
    component: Badge,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'outline', 'secondary', 'ghost', 'destructive', 'link'],
        },
    },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Badge',
    },
};

export const Outline: Story = {
    args: {
        variant: 'outline',
        children: 'Badge',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Badge',
    },
};

export const Ghost: Story = {
    args: {
        variant: 'ghost',
        children: 'Badge',
    },
};

export const Destructive: Story = {
    args: {
        variant: 'destructive',
        children: 'Badge',
    },
};