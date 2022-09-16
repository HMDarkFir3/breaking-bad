import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, FC } from "react";
import { Alert } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { useTheme } from "styled-components";

import { breakingBadApi } from "../../services/api";

import { CharacterDTO } from "../../dtos";

import {
  CharacterCard,
  CharacterCardSeparator,
} from "../../components/CharacterCard";

import { Container, LoadingContainer, Loading } from "./styles";

export const Characters: FC = () => {
  const theme = useTheme();

  const [characters, setCharacters] = useState<CharacterDTO[]>([]);
  const [search, setSearch] = useState<string>("breaking bad");
  const [offset, setOffset] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);

  async function fetchCharacters() {
    await breakingBadApi
      .get<CharacterDTO[]>("/characters", {
        params: {
          category: search,
          limit: 10,
          offset: offset,
        },
      })
      .then((response) => {
        if (offset === 0) {
          setCharacters(response.data);
        } else {
          setCharacters((prevState) => [...prevState, ...response.data]);
        }

        setOffset((prevState) => prevState + 10);
      })
      .catch(() => {
        Alert.alert("Don't was possible to show the characters");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleLoadMore() {
    offset >= 60 ? setIsLoadingMore(false) : setIsLoadingMore(true);

    fetchCharacters();
  }

  useEffect(() => {
    fetchCharacters();
  }, []);

  function renderFooter() {
    return (
      <>
        {isLoadingMore && (
          <LoadingContainer style={{ marginTop: 20 }}>
            <Loading size="large" color={theme.colors.secondary} />
          </LoadingContainer>
        )}
      </>
    );
  }

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
      <StatusBar style="light" backgroundColor={theme.colors.primary} />

      <FlashList
        contentContainerStyle={{ paddingVertical: 20 }}
        data={characters}
        keyExtractor={(item) => String(item.char_id)}
        renderItem={({ item }) => <CharacterCard data={item} />}
        ItemSeparatorComponent={() => <CharacterCardSeparator />}
        estimatedItemSize={100}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.5}
        onEndReached={handleLoadMore}
        ListFooterComponent={renderFooter}
      />
    </Container>
  );
};
