import type { Meta, StoryObj } from "@storybook/react-vite";

import Table, { textAlignKeys } from "./Table";
import type { TextAlignType } from "./Table";

const meta = {
  title: "library/Table",
  component: Table,
  decorators: [
    () => (
      <Table>
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
    ),
  ],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
