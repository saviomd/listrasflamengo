import { Box, Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import theme from "../data/theme";

const Jersey = ({ count, initialColor, manufacturer, year }) => {
  const { black, red } = theme.stripes;
  const colors = initialColor ? [black, red] : [red, black];
  const stripes = [...Array(count).keys()];
  return (
    <Box
      key={year}
      component={Grid}
      item
      position="relative"
      flexGrow={1}
      minWidth={160}
    >
      <Box
        component="h2"
        fontSize="h5.fontSize"
        m={0}
        mb={1}
        textAlign="center"
      >
        {year}
      </Box>
      <Box
        color="#fff"
        component="h1"
        fontFamily={theme.fonts.squadaOne}
        fontSize="h1.fontSize"
        m={0}
        left={0}
        position="absolute"
        right={0}
        textAlign="center"
        top="30%"
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
          <Box key={item} component={Grid} item xs bgcolor={colors[item % 2]} />
        ))}
      </Box>
      <Box textAlign="center">{manufacturer}</Box>
    </Box>
  );
};

Jersey.propTypes = {
  count: PropTypes.number.isRequired,
  initialColor: PropTypes.number.isRequired,
  manufacturer: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

export default Jersey;
