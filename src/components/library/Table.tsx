import { ReactNode } from "react";

type TextAlignType = keyof typeof textAlignValues;

type BasePropsType = {
  children?: ReactNode;
};

type DataCellPropsType = BasePropsType & {
  align?: TextAlignType;
  colSpan?: number | undefined;
};

type HeaderCellPropsType = DataCellPropsType & {
  scope?: "col" | "row" | undefined;
};

const textAlignValues = {
  center: "text-center",
  justify: "text-justify",
  left: "text-left",
  right: "text-right",
};
const textAlignKeys = Object.keys(textAlignValues);
const cellClassName = (align: TextAlignType | undefined) =>
  `p-2 ${align ? textAlignValues[align] : ""}`;

function Table({ children }: BasePropsType) {
  return <table className="w-full">{children}</table>;
}

function Head({ children }: BasePropsType) {
  return <thead>{children}</thead>;
}

function Body({ children }: BasePropsType) {
  return <tbody>{children}</tbody>;
}

function Row({ children }: BasePropsType) {
  return <tr className="border-b border-gray-200">{children}</tr>;
}

function HeaderCell({ align, children, colSpan, scope }: HeaderCellPropsType) {
  return (
    <th colSpan={colSpan} className={cellClassName(align)} scope={scope}>
      {children}
    </th>
  );
}

function DataCell({ align, children, colSpan }: DataCellPropsType) {
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
export type { TextAlignType };
