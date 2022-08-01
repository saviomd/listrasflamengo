import React from "react";

import Paragraph from "./Paragraph";

export default {
  title: "library/Paragraph",
  component: Paragraph,
};

function Template(args) {
  return <Paragraph {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  children:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nihil culpa, sit consectetur deleniti vitae. Atque recusandae ab sequi quasi mollitia tempora culpa iure perspiciatis amet laborum? Hic, ex expedita? Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nihil culpa, sit consectetur deleniti vitae. Atque recusandae ab sequi quasi mollitia tempora culpa iure perspiciatis amet laborum? Hic, ex expedita? Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nihil culpa, sit consectetur deleniti vitae. Atque recusandae ab sequi quasi mollitia tempora culpa iure perspiciatis amet laborum? Hic, ex expedita?",
};
