import { Container, Table } from "../library";
import { jerseys } from "../../data";

type ManufacturerStatsType = {
  manufacturer: string;
};

function ManufacturerStats({ manufacturer }: ManufacturerStatsType) {
  return {
    manufacturer,
    average: 0,
    bigger: 0,
    count: 0,
    smaller: 0,
    total: 0,
  };
}
const manufacturers: string[] = [];
const all = ManufacturerStats({ manufacturer: "Todas" });
let stats: ReturnType<typeof ManufacturerStats>[] = [];
jerseys.forEach(({ manufacturer }) => {
  if (!manufacturers.includes(manufacturer)) {
    manufacturers.push(manufacturer);
  }
});
manufacturers.forEach((manufacturer) => {
  stats.push(ManufacturerStats({ manufacturer }));
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
    <Container>
      <div className="mx-auto max-w-md py-4">
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.HeaderCell aria-label="Fabricante" colSpan={2} />
              <Table.HeaderCell colSpan={4}>Número de listras</Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell align="left">Fabricante</Table.HeaderCell>
              <Table.HeaderCell align="right">Anos</Table.HeaderCell>
              <Table.HeaderCell align="right">Média</Table.HeaderCell>
              <Table.HeaderCell align="right">Maior</Table.HeaderCell>
              <Table.HeaderCell align="right">Menor</Table.HeaderCell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {stats.map(({ average, bigger, count, manufacturer, smaller }) => (
              <Table.Row key={manufacturer}>
                <Table.HeaderCell align="left" scope="row">
                  {manufacturer}
                </Table.HeaderCell>
                <Table.DataCell align="right">{count}</Table.DataCell>
                <Table.DataCell align="right">{average}</Table.DataCell>
                <Table.DataCell align="right">{bigger}</Table.DataCell>
                <Table.DataCell align="right">{smaller}</Table.DataCell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </Container>
  );
}

export default Stats;
