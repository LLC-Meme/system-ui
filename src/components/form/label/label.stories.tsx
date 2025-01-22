import type { Meta, StoryObj } from "@storybook/react";
import Label from "./label";

/** 
 * formの`label`エレメントです。  
 * `input`や`select`などのフォーム要素にラップして使用します。  
 */
const meta = {
  title: "Form/Label",
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
    },
    ref: {
      description: "labelエレメントへの参照",
      table: {
        type: { summary: "React.RefObject<HTMLLabelElement>" },
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