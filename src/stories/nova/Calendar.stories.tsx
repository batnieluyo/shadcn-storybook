import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { Calendar } from '@/components/nova/calendar.tsx';

const meta = {
  title: 'nova/Calendar',
  component: Calendar,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    function CalendarDemo() {
      const [date, setDate] = React.useState<Date | undefined>(new Date());
      return (
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-lg border"
        />
      );
    }
    return <CalendarDemo />;
  },
};

export const Range: Story = {
  render: () => {
    function CalendarRangeDemo() {
      const [range, setRange] = React.useState<
        { from: Date | undefined; to?: Date | undefined } | undefined
      >({
        from: new Date(),
        to: undefined,
      });
      return (
        <Calendar
          mode="range"
          selected={range}
          onSelect={setRange}
          className="rounded-lg border"
        />
      );
    }
    return <CalendarRangeDemo />;
  },
};

export const Multiple: Story = {
  render: () => {
    function CalendarMultipleDemo() {
      const [dates, setDates] = React.useState<Date[] | undefined>([
        new Date(),
      ]);
      return (
        <Calendar
          mode="multiple"
          selected={dates}
          onSelect={setDates}
          className="rounded-lg border"
        />
      );
    }
    return <CalendarMultipleDemo />;
  },
};

export const DropdownCaption: Story = {
  render: () => {
    function CalendarDropdownDemo() {
      const [date, setDate] = React.useState<Date | undefined>(new Date());
      return (
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          captionLayout="dropdown"
          className="rounded-lg border"
        />
      );
    }
    return <CalendarDropdownDemo />;
  },
};

export const Disabled: Story = {
  render: () => {
    function CalendarDisabledDemo() {
      const [date, setDate] = React.useState<Date | undefined>(new Date());
      const today = new Date();
      return (
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          disabled={{ before: today }}
          className="rounded-lg border"
        />
      );
    }
    return <CalendarDisabledDemo />;
  },
};
