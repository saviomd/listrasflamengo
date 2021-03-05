import { Box, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

import jerseys from '../data/jerseys';

const manufacturers = ['Todas'];
const stats = [];
jerseys.forEach(({ manufacturer }) => {
  if (!manufacturers.includes(manufacturer)) {
    manufacturers.push(manufacturer);
  }
});
manufacturers.forEach((manufacturer) => {
  stats.push({ manufacturer, average: null, bigger: null, count: 0, smaller: null, total: 0 });
});
jerseys.forEach(({ count, manufacturer }) => {
  stats.forEach((stat) => {
    if (stat.manufacturer === manufacturer) {
      stat.bigger = count > stat.bigger ? count : stat.bigger;
      stat.count += 1;
      stat.smaller = (!stat.smaller || count < stat.smaller) ? count : stat.smaller;
      stat.total += count;
      stats[0].bigger = count > stats[0].bigger ? count : stat.bigger;
      stats[0].count += 1;
      stats[0].smaller = (!stats[0].smaller || count < stats[0].smaller) ? count : stat.smaller;
      stats[0].total += count;
    }
  });
});
stats.forEach((stat) => {
  stat.average = Math.floor(stat.total / stat.count);
});

const Stats = () => (
  <Box py={2}>
    <Container maxWidth="lg">
      <Box mx="auto" maxWidth={400} py={2}>
        <TableContainer component={Paper}>
          <Table >
            <TableHead>
            <TableRow>
                <TableCell colSpan={2}></TableCell>
                <TableCell align="center" colSpan={4}>Número de listras</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Fabricante</TableCell>
                <TableCell align="right">Anos</TableCell>
                <TableCell align="right">Média</TableCell>
                <TableCell align="right">Maior</TableCell>
                <TableCell align="right">Menor</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {stats.map(({ average, bigger, count, manufacturer, smaller }) => (
                <TableRow key={manufacturer}>
                  <TableCell component="th" scope="row">{manufacturer}</TableCell>
                  <TableCell align="right">{count}</TableCell>
                  <TableCell align="right">{average}</TableCell>
                  <TableCell align="right">{bigger}</TableCell>
                  <TableCell align="right">{smaller}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  </Box>
);

export default Stats;
