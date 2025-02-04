import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Calendar, CalendarProps } from "./calendar";

/**
 * カレンダーコンポーネント
 * ユーザーが日付を選択でき、disableAfter/disableBefore で無効化したい日付を設定できます。
 */
const meta = {
  title: "UI/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ref: {
      description: "カレンダー要素への参照",
      table: {
        type: { summary: "React.Ref<HTMLDivElement>" },
        defaultValue: { summary: "undefined" },
      },
      control: false,
    },
    date: {
      description: "選択された日付",
      table: {
        type: { summary: "Date | null" },
      },
      control: {
        type: "date",
      },
    },
    setDate: {
      description: "日付を設定する関数",
      table: {
        type: { summary: "React.Dispatch<React.SetStateAction<Date | null>>" },
      },
      control: false,
    },
    disableAfter: {
      description: "この日付以降を無効にする(その日を含む)",
      table: {
        type: { summary: "Date" },
      },
      control: {
        type: "date",
      },
    },
    disableBefore: {
      description: "この日付以前を無効にする(その日を含む)",
      table: {
        type: { summary: "Date" },
      },
      control: {
        type: "date",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof Calendar>;

/**
 * Story用のラッパコンポーネント。
 * - Storybookから受け取ったpropsをカレンダーに渡します。
 * - カレンダー内部で日付選択が行われると、その状態はuseStateで管理されます。
 */
const CalendarWithHooks = (props: Omit<CalendarProps, "setDate">) => {
  const [date, setDate] = useState<Date | null>(null);
  return <Calendar {...props} date={date} setDate={setDate} />;
};

export const Example: Story = {
  render: (args) => {
    return <CalendarWithHooks {...args} />;
  },
};
