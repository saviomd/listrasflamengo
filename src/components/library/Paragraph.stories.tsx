import { ComponentStory, ComponentMeta } from "@storybook/react";

import Paragraph from "./Paragraph";

export default {
  title: "library/Paragraph",
  component: Paragraph,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = (args) => (
  <Paragraph {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nihil culpa, sit consectetur deleniti vitae. Atque recusandae ab sequi quasi mollitia tempora culpa iure perspiciatis amet laborum? Hic, ex expedita? Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nihil culpa, sit consectetur deleniti vitae. Atque recusandae ab sequi quasi mollitia tempora culpa iure perspiciatis amet laborum? Hic, ex expedita? Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nihil culpa, sit consectetur deleniti vitae. Atque recusandae ab sequi quasi mollitia tempora culpa iure perspiciatis amet laborum? Hic, ex expedita?",
};
