import React from "react";

import { Container, Heading, Paragraph } from "../library";
import Chat from "./Chat";

function About() {
  return (
    <div className="bg-about py-4">
      <Container>
        <Heading level={2}>Sobre</Heading>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 sm:w-6/12 lg:w-4/12">
            <Chat />
          </div>
          <div className="w-full px-4 text-xl sm:w-6/12 lg:w-8/12">
            <Paragraph>
              Site ilustrando a evolução (e constantes mudanças) ano a ano das
              listras na camisa principal do Flamengo.
            </Paragraph>
            <Paragraph>
              O que uma conversa no grupo do Mengão do trabalho sobre a camisa
              rejeitada pela diretoria e o tempo livre na quarentena não fazem?
            </Paragraph>
            <img
              alt="saviomd xbox avatar"
              src="https://avatar-ssl.xboxlive.com/avatar/saviomd/avatar-body.png"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
