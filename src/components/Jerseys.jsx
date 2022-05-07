import { Box, Container, Grid } from "@mui/material";
import React from "react";

import Jersey from "./Jersey";
import jerseys from "../data/jerseys";

function Jerseys() {
  return (
    <Box component={Container} sx={{ maxWidth: "lg", p: 4 }}>
      <Grid
        container
        spacing={2}
        sx={{ flexWrap: "nowrap", overflowX: "scroll" }}
      >
        {[...jerseys]
          .reverse()
          .map(({ count, initialColor, manufacturer, year }) => (
            <Jersey
              count={count}
              initialColor={initialColor}
              key={year}
              manufacturer={manufacturer}
              year={year}
            />
          ))}
      </Grid>
    </Box>
  );
}

export default Jerseys;
