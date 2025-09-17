import { Anchor } from "src/components/library";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="p-4 text-center text-xs">
      &copy; 2020-${year}{" "}
      <Anchor href="http://saviomd.com/" target="_blank">
        <img
          alt="saviomd.com"
          className="inline align-middle"
          height="14"
          src="https://saviomd.com/img/icon-192.png"
          width="14"
        />{" "}
        Sávio Mendes
      </Anchor>
      <br />
      Dados das camisas por{" "}
      <Anchor href="http://www.flamantosagrado.com" target="_blank">
        Fla Manto Sagrado
      </Anchor>
      <br />
      Foto por{" "}
      <Anchor href="https://unsplash.com/photos/2nSTmUbWvy0" target="_blank">
        Henrique Soares
      </Anchor>{" "}
      no{" "}
      <Anchor href="https://unsplash.com/" target="_blank">
        Unsplash
      </Anchor>
    </div>
  );
}

export default Footer;
