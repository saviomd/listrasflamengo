import { Box, Container, Grid } from '@material-ui/core';

import Jersey from './Jersey';
import jerseys from '../data/jerseys';

const Jerseys = () => (
  <Box component={Container} p={4} maxWidth="lg">
    <Grid container spacing={2} style={{ flexWrap: 'nowrap', overflowX: 'scroll' }}>
      {[...jerseys].reverse().map(({ count, initialColor, manufacturer, year }) => (
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

export default Jerseys;
