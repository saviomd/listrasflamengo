import React from "react";

import Table, { textAlignKeys } from "./Table";

export default {
  title: "system/Table",
  component: Table,
  argTypes: {
    children: { control: { type: null } },
    href: { control: { type: null } },
    target: { control: { type: null } },
  },
};

function Template(args) {
  return (
    <Table.Component {...args}>
      <Table.Head>
        <Table.Row>
          {textAlignKeys.map((item) => (
            <Table.HeaderCell align={item} key={item}>
              {item}
            </Table.HeaderCell>
          ))}
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell>colSpan no</Table.HeaderCell>
          <Table.HeaderCell>colSpan no</Table.HeaderCell>
          <Table.HeaderCell colSpan={2}>colSpan 2</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          {textAlignKeys.map((item) => (
            <Table.DataCell align={item} key={item}>
              {item}
            </Table.DataCell>
          ))}
        </Table.Row>
        <Table.Row>
          <Table.DataCell>colSpan no</Table.DataCell>
          <Table.DataCell>colSpan no</Table.DataCell>
          <Table.DataCell colSpan={2}>colSpan 2</Table.DataCell>
        </Table.Row>
      </Table.Body>
    </Table.Component>
  );
}

export const Default = Template.bind({});
Default.args = {
  children: "Lorem ipsum dolor sit amet",
  href: "./",
};
