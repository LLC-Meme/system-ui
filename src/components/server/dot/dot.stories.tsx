import type { Meta, StoryObj } from "@storybook/react";
import Dot from "./dot";

const meta = {
  title: "UI/Dot",
  component: Dot,
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
    color: {
      description: "ドットの色を指定します。",
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
        ],
      },
      table: {
        type: { summary: "red | orange | yellow | ... brown" },
        defaultValue: { summary: "blue" },
      },
    },
  },
  args: {
    color: "blue",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dot>;

export default meta;
type Story = StoryObj<typeof Dot>;

export const Blue: Story = {
  args: {
    color: "blue",
  },
};

export const Red: Story = {
  args: {
    color: "red",
  },
};

export const Orange: Story = {
  args: {
    color: "orange",
  },
};

export const Yellow: Story = {
  args: {
    color: "yellow",
  },
};

export const Green: Story = {
  args: {
    color: "green",
  },
};

export const Mint: Story = {
  args: {
    color: "mint",
  },
};

export const Teal: Story = {
  args: {
    color: "teal",
  },
};

export const Cyan: Story = {
  args: {
    color: "cyan",
  },
};

export const Indigo: Story = {
  args: {
    color: "indigo",
  },
};

export const Purple: Story = {
  args: {
    color: "purple",
  },
};

export const Pink: Story = {
  args: {
    color: "pink",
  },
};

export const Brown: Story = {
  args: {
    color: "brown",
  },
};
