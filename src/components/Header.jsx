import { Box, colors } from "@material-ui/core";
import React from "react";

import backgroundImage from "../img/henrique-soares-2nSTmUbWvy0-unsplash.jpg";
import theme from "../data/theme";

const style = {
  backgroundColor: theme.stripes.red,
  backgroundImage: `url(${backgroundImage})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  color: colors.grey[50],
  textAlign: "center",
  textShadow: `0 0 8px ${colors.grey[900]}`,
};

function Header() {
  return (
    <Box
      component="h1"
      fontFamily={theme.fonts.squadaOne}
      fontSize={{ xs: "h2.fontSize", sm: "h1.fontSize" }}
      lineHeight={1}
      m={0}
      px={3}
      py={{ xs: 4, sm: 8 }}
      style={style}
    >
      Listras do
      <br />
      Flamengo
    </Box>
  );
}

export default Header;
