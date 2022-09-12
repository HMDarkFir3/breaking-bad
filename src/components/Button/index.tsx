import React, { FC } from "react";
import { TouchableOpacityProps } from "react-native";
import { SvgProps } from "react-native-svg";

import { Container, Content, IconArea, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  icon: FC | FC<SvgProps>;
}

export const Button: FC<Props> = (props) => {
  const { title, icon: Icon, ...rest } = props;

  return (
    <Container activeOpacity={0.7} {...rest}>
      <Content>
        <IconArea>
          <Icon width={24} />
        </IconArea>

        <Title>{title}</Title>
      </Content>
    </Container>
  );
};
