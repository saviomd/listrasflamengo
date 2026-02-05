import type { ReactNode } from "react";

interface IBaseProps {
  children?: ReactNode;
}

type TextAlignType = keyof typeof textAlignValues;

type DataCellPropsType = IBaseProps & {
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

function Table({ children }: IBaseProps) {
  return <table className="w-full">{children}</table>;
}

function Head({ children }: IBaseProps) {
  return <thead>{children}</thead>;
}

function Body({ children }: IBaseProps) {
  return <tbody>{children}</tbody>;
}

function Row({ children }: IBaseProps) {
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
