import React, { FC } from "react";

import { EpisodeDTO } from "../../dtos";

import {
  Container,
  Content,
  Title,
  Season,
  Episode,
  Series,
  EpisodeCardSeparator,
} from "./styles";

interface Props {
  data: EpisodeDTO;
}

export const EpisodeCard: FC<Props> = (props) => {
  const { title, season, episode, series } = props.data;

  return (
    <Container>
      <Content>
        <Title>Title: {title}</Title>
        <Season>Season: {season}</Season>
        <Episode>Episode: {episode}</Episode>
        <Series>Series: {series}</Series>
      </Content>
    </Container>
  );
};

export { EpisodeCardSeparator };
