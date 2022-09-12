import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, FC } from "react";
import { Alert } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { useTheme } from "styled-components";

import { breakingBadApi } from "../../services/api";

import { EpisodeDTO } from "../../dtos";

import {
  EpisodeCard,
  EpisodeCardSeparator,
} from "../../components/EpisodeCard";

import { Container, LoadingContainer, Loading } from "./styles";

export const Episodes: FC = () => {
  const theme = useTheme();

  const [episodes, setEpisodes] = useState<EpisodeDTO[]>([]);
  const [search, setSearch] = useState<string>("breaking bad");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function fetchEpisodes(search: string) {
    await breakingBadApi
      .get<EpisodeDTO[]>("/episodes", {
        params: {
          category: search,
        },
      })
      .then((response) => {
        setEpisodes(response.data);
      })
      .catch(() => {
        Alert.alert("Don't was possible to show the episodes");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    fetchEpisodes(search);
  }, []);

  if (isLoading) {
    return (
      <LoadingContainer>
        <StatusBar style="light" backgroundColor={theme.colors.primary} />
        <Loading size="large" color={theme.colors.secondary} />
      </LoadingContainer>
    );
  }

  return (
    <Container>
      <FlashList
        contentContainerStyle={{ paddingVertical: 20 }}
        data={episodes}
        keyExtractor={(item) => String(item.episode_id)}
        renderItem={({ item }) => <EpisodeCard data={item} />}
        estimatedItemSize={100}
        ItemSeparatorComponent={() => <EpisodeCardSeparator />}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};
