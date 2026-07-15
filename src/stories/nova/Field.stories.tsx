import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from '@/components/nova/field.tsx';
import { Input } from '@/components/nova/input.tsx';

const meta = {
  title: 'nova/Field',
  component: Field,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal', 'responsive'],
    },
  },
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-96">
      <FieldSet>
        <FieldLegend>Profile</FieldLegend>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="field-name">Name</FieldLabel>
            <Input id="field-name" placeholder="Jane Doe" />
            <FieldDescription>
              This is your public display name.
            </FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="field-email">Email</FieldLabel>
            <Input id="field-email" type="email" placeholder="jane@example.com" />
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <div className="w-96">
      <Field orientation="horizontal">
        <FieldLabel htmlFor="field-username">Username</FieldLabel>
        <FieldContent>
          <Input id="field-username" placeholder="janedoe" />
        </FieldContent>
      </Field>
    </div>
  ),
};

export const WithError: Story = {
  render: () => (
    <div className="w-96">
      <Field data-invalid="true">
        <FieldLabel htmlFor="field-password">Password</FieldLabel>
        <Input id="field-password" type="password" aria-invalid />
        <FieldError>Password must be at least 8 characters.</FieldError>
      </Field>
    </div>
  ),
};

export const WithSeparator: Story = {
  render: () => (
    <div className="w-96">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="field-email-2">Email</FieldLabel>
          <Input id="field-email-2" type="email" placeholder="jane@example.com" />
        </Field>
        <FieldSeparator>Or</FieldSeparator>
        <Field>
          <FieldTitle>Continue with SSO</FieldTitle>
          <FieldDescription>
            Use your organization&apos;s single sign-on provider.
          </FieldDescription>
        </Field>
      </FieldGroup>
    </div>
  ),
};
