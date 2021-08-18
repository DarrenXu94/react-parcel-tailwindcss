import React from "react";
import App, { AppProps } from "./App";
import { Meta, Story } from "@storybook/react";

export default {
  title: "App",
} as Meta;

const Template: Story<AppProps> = (args) => {
  return <App {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {};
