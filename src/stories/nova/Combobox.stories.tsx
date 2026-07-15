import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxGroup,
  ComboboxLabel,
  ComboboxEmpty,
  ComboboxSeparator,
} from '@/components/nova/combobox.tsx';

const frameworks = ['Next.js', 'React', 'Vue', 'Svelte', 'Nuxt', 'Remix', 'Astro'];

const meta = {
  title: 'nova/Combobox',
  component: Combobox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Combobox items={frameworks}>
      <ComboboxInput placeholder="Search framework..." />
      <ComboboxContent>
        <ComboboxEmpty>No framework found.</ComboboxEmpty>
        <ComboboxList>
          {(item: string) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  ),
};

export const WithGroups: Story = {
  render: () => (
    <Combobox>
      <ComboboxInput placeholder="Search fruit or vegetable..." />
      <ComboboxContent>
        <ComboboxEmpty>No results found.</ComboboxEmpty>
        <ComboboxList>
          <ComboboxGroup>
            <ComboboxLabel>Fruits</ComboboxLabel>
            <ComboboxItem value="apple">Apple</ComboboxItem>
            <ComboboxItem value="banana">Banana</ComboboxItem>
            <ComboboxItem value="orange">Orange</ComboboxItem>
          </ComboboxGroup>
          <ComboboxSeparator />
          <ComboboxGroup>
            <ComboboxLabel>Vegetables</ComboboxLabel>
            <ComboboxItem value="carrot">Carrot</ComboboxItem>
            <ComboboxItem value="broccoli">Broccoli</ComboboxItem>
          </ComboboxGroup>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Combobox items={frameworks} disabled>
      <ComboboxInput placeholder="Search framework..." disabled />
      <ComboboxContent>
        <ComboboxList>
          {(item: string) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  ),
};
