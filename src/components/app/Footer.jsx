import React from "react";

import { Anchor } from "../system";

function Footer() {
  return (
    <div className="p-4 text-center text-xs">
      {`© 2020-${new Date().getFullYear()} `}
      <Anchor href="http://saviomd.com/" target="_blank">
        <img
          alt="saviomd.com"
          className="inline align-middle"
          height="14"
          src="https://saviomd.com/img/favicon.png"
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
