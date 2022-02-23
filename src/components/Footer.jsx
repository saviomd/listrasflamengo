import { Box, Typography } from "@mui/material";
import React from "react";

import Anchor from "./Anchor";

function Footer() {
  return (
    <Box py={2} textAlign="center">
      <Typography component="div" variant="caption" gutterBottom>
        {`© 2020-${new Date().getFullYear()}`}
        <Anchor href="http://saviomd.com/" target="_blank">
          <img
            alt="saviomd.com"
            src="https://saviomd.com/img/favicon.png"
            height="15"
            style={{ margin: "0 5px", verticalAlign: "middle" }}
            width="15"
          />
          Sávio Mendes
        </Anchor>
      </Typography>
      <Typography component="div" variant="caption" gutterBottom>
        Dados das camisas por{" "}
        <Anchor href="http://www.flamantosagrado.com" target="_blank">
          Fla Manto Sagrado
        </Anchor>
      </Typography>
      <Typography component="div" variant="caption" gutterBottom>
        Foto por{" "}
        <Anchor href="https://unsplash.com/photos/2nSTmUbWvy0" target="_blank">
          Henrique Soares
        </Anchor>{" "}
        no{" "}
        <Anchor href="https://unsplash.com/" target="_blank">
          Unsplash
        </Anchor>
      </Typography>
    </Box>
  );
}

export default Footer;
