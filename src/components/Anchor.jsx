import { Box } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

import theme from "../data/theme";

function Anchor({ children, href, target }) {
  return (
    <Box
      component="a"
      href={href}
      target={target}
      rel={target === "_blank" && "noopener noreferrer"}
      sx={{ color: theme.anchor.color }}
    >
      {children}
    </Box>
  );
}

Anchor.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  target: PropTypes.oneOf(["_blank", "_parent", "_self", "_top`"]),
};

Anchor.defaultProps = {
  target: "_self",
};

export default Anchor;
