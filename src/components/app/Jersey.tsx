import { Heading } from "../library";

const initialColors = ["black", "red"];

type PropsType = {
  count: number;
  initialColor: typeof initialColors[number];
  manufacturer: string;
  year: number;
};

function Jersey({ count, initialColor, manufacturer, year }: PropsType) {
  const colors =
    initialColor === initialColors[0]
      ? ["bg-stripe-black", "bg-stripe-red"]
      : ["bg-stripe-red", "bg-stripe-black"];
  const stripes = [...Array(count).keys()];
  return (
    <div className="min-w-fit snap-start px-2 text-center" key={year}>
      <Heading level={2}>{year}</Heading>
      <div className="relative w-36">
        <div className="absolute left-0 right-0 font-squadaOne text-8xl leading-jersey text-white">
          {count}
        </div>
        <div className="flex h-jersey flex-col">
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
