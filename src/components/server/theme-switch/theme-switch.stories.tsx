import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ThemeSwitch from "./theme-switch";

function ThemeSwitchExample() {
  return (
    <ThemeSwitch.Container>
      <ThemeSwitch.Light />
      <ThemeSwitch.Dark />
      <ThemeSwitch.System current />
    </ThemeSwitch.Container>
  );
}

const meta = {
  title: "UI/ThemeSwitch",
  component: ThemeSwitchExample,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ThemeSwitch>;

export default meta;
type Story = StoryObj<typeof ThemeSwitchExample>;

export const Example: Story = {
  args: {},
};

export const LightDefault: StoryObj<typeof ThemeSwitch.Light> = {
  render: () => <ThemeSwitch.Light />,
};

export const LightCurrent: StoryObj<typeof ThemeSwitch.Light> = {
  render: () => <ThemeSwitch.Light current />,
};

export const DarkDefault: StoryObj<typeof ThemeSwitch.Dark> = {
  render: () => <ThemeSwitch.Dark />,
};

export const DarkCurrent: StoryObj<typeof ThemeSwitch.Dark> = {
  render: () => <ThemeSwitch.Dark current />,
};

export const SystemDefault: StoryObj<typeof ThemeSwitch.System> = {
  render: () => <ThemeSwitch.System />,
};

export const SystemCurrent: StoryObj<typeof ThemeSwitch.System> = {
  render: () => <ThemeSwitch.System current />,
};
