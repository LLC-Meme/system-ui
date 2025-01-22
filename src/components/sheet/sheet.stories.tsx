import React, { useState} from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Sheet from "./sheet";

const meta = {
  title: "UI/Sheet",
  component: Sheet,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    ref: {
      description: "シート要素への参照",
      table: {
        type: { summary: "React.Ref<HTMLElement>" },
        defaultValue: { summary: "undefined" },
      },
      control: false,
    },
    children: {
      description: "シートに表示するコンテンツ",
      table: {
        type: { summary: "React.ReactNode" },
      },
      control: {
        type: "text",
      },
    },
    isOpen: {
      description: "シートの表示状態",
      table: {
        type: { summary: "boolean" },
      },
      control: {
        type: "boolean",
      },
    },
    setIsOpen: {
      description: "シートの表示状態を変更する関数",
      table: {
        type: { summary: "React.Dispatch<React.SetStateAction<boolean>>" },
      },
      control: false,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof Sheet>;


const SheetWithHooks = (props: React.ComponentProps<typeof Sheet>) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Sheet
      {...props}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    />
  );
};

export const Example: Story = {
  args: {
    children: "Sheet content",
  },
  render: SheetWithHooks,
};