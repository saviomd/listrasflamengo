import PropTypes from "prop-types";
import React from "react";

function Paragraph({ children }) {
  return <p className="mb-4">{children}</p>;
}

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Paragraph;
