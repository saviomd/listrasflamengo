import { Box, Grid } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

import theme from "../data/theme";

const initialColors = ["black", "red"];

function Jersey({ count, initialColor, manufacturer, year }) {
  const { black, red } = theme.stripes;
  const colors =
    initialColor === initialColors[0] ? [black, red] : [red, black];
  const stripes = [...Array(count).keys()];
  return (
    <Box key={year} component={Grid} item flexGrow={1} minWidth={160}>
      <Box
        component="h2"
        fontSize="h5.fontSize"
        m={0}
        mb={1}
        textAlign="center"
      >
        {year}
      </Box>
      <Box position="relative">
        <Box
          color="#fff"
          fontFamily={theme.fonts.squadaOne}
          component="h1"
          fontSize="h1.fontSize"
          m={0}
          left={0}
          position="absolute"
          right={0}
          textAlign="center"
          top="20%"
        >
          {count}
        </Box>
        <Box
          component={Grid}
          container
          direction="column"
          height={240}
          spacing={0}
        >
          {stripes.map((item) => (
            <Box
              key={item}
              component={Grid}
              item
              xs
              bgcolor={colors[item % 2]}
            />
          ))}
        </Box>
        <Box textAlign="center">{manufacturer}</Box>
      </Box>
    </Box>
  );
}

Jersey.propTypes = {
  count: PropTypes.number.isRequired,
  initialColor: PropTypes.oneOf(initialColors).isRequired,
  manufacturer: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

export default Jersey;
export { initialColors };
