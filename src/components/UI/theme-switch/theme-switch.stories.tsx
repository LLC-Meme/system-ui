import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ThemeSwitchContainer from "./container";
import ThemeSwitchLight from "./light";
import ThemeSwitchDark from "./dark";
import ThemeSwitchSystem from "./system";

function ThemeSwitchExample() {
  return (
    <ThemeSwitchContainer>
      <ThemeSwitchLight />
      <ThemeSwitchDark />
      <ThemeSwitchSystem current />
    </ThemeSwitchContainer>
  );
}

const meta = {
  title: "UI/ThemeSwitch",
  component: ThemeSwitchExample,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ThemeSwitchExample>;

export default meta;
type Story = StoryObj<typeof ThemeSwitchExample>;

export const Example: Story = {
  args: {},
};

export const LightDefault: StoryObj<typeof ThemeSwitchLight> = {
  render: () => <ThemeSwitchLight />,
};

export const LightCurrent: StoryObj<typeof ThemeSwitchLight> = {
  render: () => <ThemeSwitchLight current />,
};

export const DarkDefault: StoryObj<typeof ThemeSwitchDark> = {
  render: () => <ThemeSwitchDark />,
};

export const DarkCurrent: StoryObj<typeof ThemeSwitchDark> = {
  render: () => <ThemeSwitchDark current />,
};

export const SystemDefault: StoryObj<typeof ThemeSwitchSystem> = {
  render: () => <ThemeSwitchSystem />,
};

export const SystemCurrent: StoryObj<typeof ThemeSwitchSystem> = {
  render: () => <ThemeSwitchSystem current />,
};
