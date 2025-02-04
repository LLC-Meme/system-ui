import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  ThemeContainer,
  ThemeLight,
  ThemeDark,
  ThemeSystem,
} from "./theme-switch";

function ThemeSwitchExample() {
  return (
    <ThemeContainer>
      <ThemeLight />
      <ThemeDark />
      <ThemeSystem current />
    </ThemeContainer>
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

export const LightDefault: StoryObj<typeof ThemeLight> = {
  render: () => <ThemeLight />,
};

export const LightCurrent: StoryObj<typeof ThemeLight> = {
  render: () => <ThemeLight current />,
};

export const DarkDefault: StoryObj<typeof ThemeDark> = {
  render: () => <ThemeDark />,
};

export const DarkCurrent: StoryObj<typeof ThemeDark> = {
  render: () => <ThemeDark current />,
};

export const SystemDefault: StoryObj<typeof ThemeSystem> = {
  render: () => <ThemeSystem />,
};

export const SystemCurrent: StoryObj<typeof ThemeSystem> = {
  render: () => <ThemeSystem current />,
};
