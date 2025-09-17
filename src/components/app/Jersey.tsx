import { Heading } from "src/components/library";

const initialColors = ["black", "red"];

interface IProps {
  count: number;
  initialColor: (typeof initialColors)[number];
  manufacturer: string;
  year: number;
}

function Jersey({ count, initialColor, manufacturer, year }: IProps) {
  const colors =
    initialColor === initialColors[0]
      ? ["bg-stripe-black", "bg-stripe-red"]
      : ["bg-stripe-red", "bg-stripe-black"];
  const stripes = [...Array(count).keys()];
  return (
    <div className="min-w-fit snap-start px-2 text-center" key={year}>
      <Heading level={2}>{year}</Heading>
      <div className="relative w-36">
        <div className="font-squada-one leading-jersey absolute right-0 left-0 text-8xl text-white">
          {count}
        </div>
        <div className="h-jersey flex flex-col">
          {stripes.map((item) => (
            <div className={`${colors[item % 2]} grow`} key={item} />
          ))}
        </div>
        <div>{manufacturer}</div>
      </div>
    </div>
  );
}

export default Jersey;
export { initialColors };
