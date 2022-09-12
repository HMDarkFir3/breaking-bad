import styled, { css } from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Content = styled.View`
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 14px;
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.primary_text};
  `}
`;

export const Season = styled.Text`
  font-size: 14px;
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.primary_text};
  `}
`;

export const Episode = styled.Text`
  font-size: 14px;
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.primary_text};
  `}
`;

export const Series = styled.Text`
  font-size: 14px;
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.primary_text};
  `}
`;

export const EpisodeCardSeparator = styled.View`
  margin-bottom: 20px;
`;
