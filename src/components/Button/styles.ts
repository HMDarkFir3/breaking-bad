import styled, { css } from "styled-components/native";
import { Pressable } from "react-native";

export const Container = styled(Pressable)`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 56px;

  margin-bottom: 16px;

  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 56px;
`;

export const IconArea = styled.View`
  align-items: center;
  justify-content: center;

  width: 56px;
  height: 56px;

  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border-right-width: 1px;

  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    border-color: ${theme.colors.primary_text};
  `}
`;

export const Title = styled.Text`
  flex: 1;

  text-align: center;
  font-size: 18px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.primary_text};
  `}
`;
