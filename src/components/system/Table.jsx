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

const Table = {
  Component: ({ children }) => {
    return <table className="w-full">{children}</table>;
  },
  Head: ({ children }) => {
    return <thead>{children}</thead>;
  },
  Body: ({ children }) => {
    return <tbody>{children}</tbody>;
  },
  Row: ({ children }) => {
    return <tr className="border-b">{children}</tr>;
  },
  HeaderCell: ({ align, children, colSpan, scope }) => {
    return (
      <th colSpan={colSpan} className={cellClassName(align)} scope={scope}>
        {children}
      </th>
    );
  },
  DataCell: ({ align, children, colSpan }) => {
    return (
      <td colSpan={colSpan} className={cellClassName(align)}>
        {children}
      </td>
    );
  },
};

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
