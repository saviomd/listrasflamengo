import PropTypes from "prop-types";
import React from "react";

function Container({ children }) {
  return (
    <div className="container mx-auto max-w-screen-xl px-4">{children}</div>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
