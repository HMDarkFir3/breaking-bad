import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Image = styled.Image`
  width: 100px;
  height: 150px;
`;

export const Content = styled.View`
  flex: 1;

  padding: 20px;

  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.secondary};
`;

export const Name = styled.Text`
  font-size: 14px;
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.primary_text};
  `}
`;

export const Nickname = styled.Text`
  margin-top: 4px;

  font-size: 14px;
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.primary_text};
  `}
`;

export const Status = styled.Text`
  margin-top: 4px;

  font-size: 14px;
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.primary_text};
  `}
`;

export const CharacterCardSeparator = styled.View`
  margin-bottom: 20px;
`;
