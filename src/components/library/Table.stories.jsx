import React from "react";

import Table, { textAlignKeys } from "./Table";

export default {
  title: "library/Table",
  component: Table,
};

function Template(args) {
  return (
    <Table {...args}>
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
    </Table>
  );
}

export const Default = Template.bind({});
Default.args = {};
