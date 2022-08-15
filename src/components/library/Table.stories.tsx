import { ComponentStory, ComponentMeta } from "@storybook/react";

import Table, { textAlignKeys, TextAlignType } from "./Table";

export default {
  title: "library/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: { control: { type: null } },
    href: { control: { type: null } },
    target: { control: { type: null } },
  },
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => (
  <Table {...args}>
    <Table.Head>
      <Table.Row>
        {textAlignKeys.map((item) => (
          <Table.HeaderCell align={item as TextAlignType} key={item}>
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
          <Table.DataCell align={item as TextAlignType} key={item}>
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

export const Default = Template.bind({});
Default.args = {};
