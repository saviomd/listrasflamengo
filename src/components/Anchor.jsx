import PropTypes from "prop-types";
import React from "react";

import theme from "../data/theme";

const Anchor = ({ children, href, target }) => (
  <a
    href={href}
    target={target}
    rel={target === "_blank" && "noopener noreferrer"}
    style={{ color: theme.anchor.color }}
  >
    {children}
  </a>
);

Anchor.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  target: PropTypes.oneOf(["_blank", "_parent", "_self", "_top`"]),
};

Anchor.defaultProps = {
  target: "_self",
};

export default Anchor;
