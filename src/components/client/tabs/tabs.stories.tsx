import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Tabs from "./tabs";

const meta = {
  title: "UI/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ref: {
      description: "タブ要素への参照",
      table: {
        type: { summary: "React.Ref<HTMLDivElement>" },
        defaultValue: { summary: "undefined" },
      },
      control: false,
    },
    values: {
      description: "タブの値",
      table: {
        type: { summary: "string[]" },
      },
      control: false,
    },
    selectedValue: {
      description: "選択されたタブの値",
      table: {
        type: { summary: "string" },
      },
      control: false,
    },
    setSelectedValue: {
      description: "選択されたタブの値を更新する関数",
      table: {
        type: { summary: "React.Dispatch<React.SetStateAction<string>>" },
      },
      control: false,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof Tabs>;

const TabWithHooks = () => {
  const [selectedValue, setSelectedValue] = useState("Tab1");
  const values = ["Tab1", "Tab2", "Tab3"];
  return (
    <Tabs
      values={values}
      selectedValue={selectedValue}
      setSelectedValue={setSelectedValue}
    />
  );
};

export const Example: Story = {
  render: TabWithHooks,
};
