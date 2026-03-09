import type { ReactNode } from "react";

interface BaseProps {
  children?: ReactNode;
}

type TextAlign = keyof typeof textAlignValues;

type DataCellProps = BaseProps & {
  align?: TextAlign;
  colSpan?: number | undefined;
};

type HeaderCellProps = DataCellProps & {
  scope?: "col" | "row" | undefined;
};

const textAlignValues = {
  center: "text-center",
  justify: "text-justify",
  left: "text-left",
  right: "text-right",
};
const textAlignKeys = Object.keys(textAlignValues);
const cellClassName = (align: TextAlign | undefined) =>
  `p-2 ${align ? textAlignValues[align] : ""}`;

function Table({ children }: BaseProps) {
  return <table className="w-full">{children}</table>;
}

function Head({ children }: BaseProps) {
  return <thead>{children}</thead>;
}

function Body({ children }: BaseProps) {
  return <tbody>{children}</tbody>;
}

function Row({ children }: BaseProps) {
  return <tr className="border-b border-gray-200">{children}</tr>;
}

function HeaderCell({ align, children, colSpan, scope }: HeaderCellProps) {
  return (
    <th colSpan={colSpan} className={cellClassName(align)} scope={scope}>
      {children}
    </th>
  );
}

function DataCell({ align, children, colSpan }: DataCellProps) {
  return (
    <td colSpan={colSpan} className={cellClassName(align)}>
      {children}
    </td>
  );
}

Table.Head = Head;
Table.Body = Body;
Table.Row = Row;
Table.HeaderCell = HeaderCell;
Table.DataCell = DataCell;

export default Table;
export { textAlignKeys };
export type { TextAlign };
