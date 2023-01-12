import { CustomButton } from "./custom-button";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Actions/CustomButton",
  component: CustomButton,
};

const Template: ComponentStory<typeof CustomButton> = args => (
  <CustomButton {...args} />
);

export const Primary = Template.bind({});
