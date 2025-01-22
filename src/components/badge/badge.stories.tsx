import type { Meta, StoryObj } from "@storybook/react";
import Badge from "./badge";

/** 
 * タグ付けなどに使う小さなラベルを表示するコンポーネントです。  
 * 任意のテキストやアイコンを中に入れることで、ラベルとして利用できます。  
*/
const meta = {
  title: "Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ref: {
      description: "DIV要素への参照",
      table: {
        type: { summary: "React.Ref<HTMLDivElement>" },
        defaultValue: { summary: "undefined" },
      },
      control: false,
    },
    children: {
      description: "ラベルに表示するテキスト",
      table: {
        type: { summary: "React.ReactNode" },
      },
      control: {
        type: "text",
      },
    },
    color: {
      description: "バッジの色（背景色と文字色）を指定します。",
      control: {
        type: "select",
        options: [
          "red",
          "orange",
          "yellow",
          "green",
          "mint",
          "teal",
          "cyan",
          "blue",
          "indigo",
          "purple",
          "pink",
          "brown",
          "monochrome",
        ],
      },
      table: {
        type: { summary: "\"red\" | \"orange\" | \"yellow\" | ... | \"monochrome\"" },
        defaultValue: { summary: "blue" },
      },
    },
  },
  args: {
    color: "blue"
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof Badge>;

export const Blue: Story = {
  args: {
    children: "blue",
  },
};

export const Red: Story = {
  args: {
    color: "red",
    children: "red",
  },
};

export const Yellow: Story = {
  args: {
    color: "yellow",
    children: "yellow",
  },
};

export const Green: Story = {
  args: {
    color: "green",
    children: "green",
  },
};

export const Mint: Story = {
  args: {
    color: "mint",
    children: "mint",
  },
};

export const Teal: Story = {
  args: {
    color: "teal",
    children: "teal",
  },
};

export const Cyan: Story = {
  args: {
    color: "cyan",
    children: "cyan",
  },
};

export const Indigo: Story = {
  args: {
    color: "indigo",
    children: "indigo",
  },
};

export const Purple: Story = {
  args: {
    color: "purple",
    children: "purple",
  },
};

export const Pink: Story = {
  args: {
    color: "pink",
    children: "pink",
  },
};

export const Brown: Story = {
  args: {
    color: "brown",
    children: "brown",
  },
};

