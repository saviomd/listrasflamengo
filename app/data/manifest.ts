const color = "#b71c1c";
const iconSizes = ["192", "512"];
const url = `${import.meta.env.PROD ? "https://saviomd.com" : ""}${import.meta.env.BASE_URL}`;

const manifest = {
  background_color: color,
  description: "Evolução ano a ano das listras na camisa principal do Flamengo",
  display: "standalone",
  icons: iconSizes.map((size) => ({
    sizes: `${size}x${size}`,
    src: `${url}/img/icon-${size}.png`,
    type: "image/png",
  })),
  name: "Listras do Flamengo",
  short_name: "Listras Fla",
  start_url: url,
  theme_color: color,
};

export default manifest;
