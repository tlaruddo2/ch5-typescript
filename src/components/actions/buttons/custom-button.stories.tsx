import { CustomButton } from "./custom-button";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Actions/CustomButton",
  component: CustomButton,
};

const Template: ComponentStory<typeof CustomButton> = args => (
  <CustomButton {...args} />
);

export const Default = Template.bind({});

export const first = Template.bind({});
first.args = {
  href: "www.google.com",
  //   variant: "outlined",
  contents: "first button",
};

export const second = Template.bind({});
second.args = {
  href: "www.naver.com",
  //   variant: "outlined",
  contents: "second button",
};
