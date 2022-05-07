import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

import Chat from "./Chat";
import theme from "../data/theme";

function About() {
  return (
    <Box
      sx={{
        bgcolor: theme.about.bgcolor,
        py: 2,
      }}
    >
      <Container sx={{ maxWidth: "lg" }}>
        <Box component="h1" sx={{ m: 0, mb: 2 }}>
          Sobre
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Chat />
          </Grid>
          <Grid item xs>
            <Typography variant="h6" component="p" gutterBottom>
              Site ilustrando a evolução (e constantes mudanças) ano a ano das
              listras na camisa principal do Flamengo.
            </Typography>
            <Typography variant="h6" component="p" gutterBottom>
              O que uma conversa no grupo do Mengão do trabalho sobre a camisa
              rejeitada pela diretoria e o tempo livre na quarentena não fazem?
            </Typography>
            <img
              alt="saviomd xbox avatar"
              src="https://avatar-ssl.xboxlive.com/avatar/saviomd/avatar-body.png"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default About;
