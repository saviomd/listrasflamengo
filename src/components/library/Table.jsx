/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import React from "react";

const textAlignValues = {
  center: "text-center",
  justify: "text-justify",
  left: "text-left",
  right: "text-right",
};
const textAlignKeys = Object.keys(textAlignValues);
const cellClassName = (align) => `p-2 ${align ? textAlignValues[align] : ""}`;

function Table({ children }) {
  return <table className="w-full">{children}</table>;
}

function Head({ children }) {
  return <thead>{children}</thead>;
}

function Body({ children }) {
  return <tbody>{children}</tbody>;
}

function Row({ children }) {
  return <tr className="border-b">{children}</tr>;
}

function HeaderCell({ align, children, colSpan, scope }) {
  return (
    <th colSpan={colSpan} className={cellClassName(align)} scope={scope}>
      {children}
    </th>
  );
}

function DataCell({ align, children, colSpan }) {
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

Object.keys(Table).forEach((key) => {
  Table[key].propTypes = {
    children: PropTypes.node,
    ...(["HeaderCell", "DataCell"].includes(key) && {
      "aria-label": PropTypes.string,
      align: PropTypes.oneOf(textAlignKeys),
      colSpan: PropTypes.number,
    }),
    ...(key === "HeaderCell" && {
      scope: PropTypes.oneOf(["col", "row"]),
    }),
  };
  Table[key].defaultProps = {
    children: null,
    ...(["HeaderCell", "DataCell"].includes(key) && {
      "aria-label": null,
      align: null,
      colSpan: null,
    }),
    ...(key === "HeaderCell" && {
      scope: null,
    }),
  };
});

export default Table;
export { textAlignKeys };
