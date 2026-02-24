import type { Meta, StoryObj } from "@storybook/react-vite";

import Container from "./Container";

const meta = {
  title: "library/Container",
  component: Container,
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nihil culpa, sit consectetur deleniti vitae. Atque recusandae ab sequi quasi mollitia tempora culpa iure perspiciatis amet laborum? Hic, ex expedita? Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nihil culpa, sit consectetur deleniti vitae. Atque recusandae ab sequi quasi mollitia tempora culpa iure perspiciatis amet laborum? Hic, ex expedita? Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nihil culpa, sit consectetur deleniti vitae. Atque recusandae ab sequi quasi mollitia tempora culpa iure perspiciatis amet laborum? Hic, ex expedita?",
  },
};
