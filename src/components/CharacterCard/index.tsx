import React, { FC } from "react";

import { CharacterDTO } from "../../dtos";

import {
  Container,
  Image,
  Content,
  Name,
  Nickname,
  Status,
  CharacterCardSeparator,
} from "./styles";

interface Props {
  data: CharacterDTO;
}

export const CharacterCard: FC<Props> = (props) => {
  const { img, name, nickname, status } = props.data;

  return (
    <Container>
      <Image source={{ uri: img }} />

      <Content>
        <Name>{name}</Name>
        <Nickname>{nickname}</Nickname>
        <Status>{status}</Status>
      </Content>
    </Container>
  );
};

export { CharacterCardSeparator };
