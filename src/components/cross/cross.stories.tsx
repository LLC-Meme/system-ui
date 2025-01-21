import type { Meta, StoryObj } from "@storybook/react";
import Cross from "./cross";

/**
 * クロスアイコンコンポーネントです。
 */
const meta = {
  title: "Cross",
  component: Cross,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ref: {
      description: "クロスアイコン要素(SVG)への参照",
      table: {
        type: { summary: "React.Ref<SVGSVGElement>" },
        defaultValue: { summary: "undefined" },
      },
      control: false,
    }
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Cross>;

export default meta;
type Story = StoryObj<typeof Cross>;

export const Example: Story = {
  args: {},
};