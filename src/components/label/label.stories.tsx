import type { Meta, StoryObj } from "@storybook/react";
import Label from "./label";

/** 
 * formの`label`エレメントです。  
 * `input`や`select`などのフォーム要素にラップして使用します。  
 */

const meta = {
  title: "Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      description: "labelにラップされるform要素",
      table: {
        type: { summary: "React.ReactNode" },
      },
      control: {
        type: "text",
      },
    }
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof Label>;

export const Example: Story = {
  args: {
    children: "ラベル",
  },
}