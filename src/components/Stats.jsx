import {
  Box,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";

import jerseys from "../data/jerseys";

function Manufacturer({ manufacturer }) {
  return {
    manufacturer,
    average: null,
    bigger: null,
    count: 0,
    smaller: null,
    total: 0,
  };
}
const manufacturers = [];
const all = Manufacturer({ manufacturer: "Todas" });
let stats = [];
jerseys.forEach(({ manufacturer }) => {
  if (!manufacturers.includes(manufacturer)) {
    manufacturers.push(manufacturer);
  }
});
manufacturers.forEach((manufacturer) => {
  stats.push(Manufacturer({ manufacturer }));
});
jerseys.forEach(({ count, manufacturer }) => {
  stats = stats.map((item) => {
    const stat = { ...item };
    if (stat.manufacturer === manufacturer) {
      stat.bigger = count > stat.bigger ? count : stat.bigger;
      stat.count += 1;
      stat.smaller =
        !stat.smaller || count < stat.smaller ? count : stat.smaller;
      stat.total += count;
      all.bigger = count > all.bigger ? count : stat.bigger;
      all.count += 1;
      all.smaller = !all.smaller || count < all.smaller ? count : stat.smaller;
      all.total += count;
    }
    return stat;
  });
});
stats = [all, ...stats].map((item) => ({
  ...item,
  average: Math.floor(item.total / item.count),
}));

function Stats() {
  return (
    <Box py={2}>
      <Container maxWidth="lg">
        <Box mx="auto" maxWidth={400} py={2}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell colSpan={2} />
                  <TableCell align="center" colSpan={4}>
                    Número de listras
                  </TableCell>
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
                {stats.map(
                  ({ average, bigger, count, manufacturer, smaller }) => (
                    <TableRow key={manufacturer}>
                      <TableCell component="th" scope="row">
                        {manufacturer}
                      </TableCell>
                      <TableCell align="right">{count}</TableCell>
                      <TableCell align="right">{average}</TableCell>
                      <TableCell align="right">{bigger}</TableCell>
                      <TableCell align="right">{smaller}</TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </Box>
  );
}

export default Stats;
