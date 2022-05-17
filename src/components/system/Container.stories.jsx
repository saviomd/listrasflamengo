import React from "react";

import Container from "./Container";

export default {
  title: "system/Container",
  component: Container,
};

function Template(args) {
  return <Container {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  children:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nihil culpa, sit consectetur deleniti vitae. Atque recusandae ab sequi quasi mollitia tempora culpa iure perspiciatis amet laborum? Hic, ex expedita? Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nihil culpa, sit consectetur deleniti vitae. Atque recusandae ab sequi quasi mollitia tempora culpa iure perspiciatis amet laborum? Hic, ex expedita? Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nihil culpa, sit consectetur deleniti vitae. Atque recusandae ab sequi quasi mollitia tempora culpa iure perspiciatis amet laborum? Hic, ex expedita?",
};
