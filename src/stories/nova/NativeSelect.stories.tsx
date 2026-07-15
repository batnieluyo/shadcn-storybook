import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  NativeSelect,
  NativeSelectOption,
  NativeSelectOptGroup,
} from '@/components/nova/native-select.tsx';

const meta = {
  title: 'nova/NativeSelect',
  component: NativeSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['default', 'sm'],
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof NativeSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: 'apple',
    children: (
      <>
        <NativeSelectOption value="apple">Apple</NativeSelectOption>
        <NativeSelectOption value="banana">Banana</NativeSelectOption>
        <NativeSelectOption value="cherry">Cherry</NativeSelectOption>
      </>
    ),
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    defaultValue: 'apple',
    children: (
      <>
        <NativeSelectOption value="apple">Apple</NativeSelectOption>
        <NativeSelectOption value="banana">Banana</NativeSelectOption>
        <NativeSelectOption value="cherry">Cherry</NativeSelectOption>
      </>
    ),
  },
};

export const WithOptGroups: Story = {
  args: {
    defaultValue: 'apple',
    children: (
      <>
        <NativeSelectOptGroup label="Fruits">
          <NativeSelectOption value="apple">Apple</NativeSelectOption>
          <NativeSelectOption value="banana">Banana</NativeSelectOption>
        </NativeSelectOptGroup>
        <NativeSelectOptGroup label="Vegetables">
          <NativeSelectOption value="carrot">Carrot</NativeSelectOption>
          <NativeSelectOption value="potato">Potato</NativeSelectOption>
        </NativeSelectOptGroup>
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: 'apple',
    children: (
      <>
        <NativeSelectOption value="apple">Apple</NativeSelectOption>
        <NativeSelectOption value="banana">Banana</NativeSelectOption>
      </>
    ),
  },
};
