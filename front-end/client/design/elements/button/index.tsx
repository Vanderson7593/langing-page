import styled from "@emotion/styled";
import { theme } from "@theme";
import {
  boxShadow,
  color,
  compose,
  position,
  space,
  textAlign,
  variant,
} from "styled-system";
import ButtonStyles from "./button-styles";

import { ButtonProps } from "./button.types";

const Button = styled("button")<ButtonProps>(
  {
    padding: "25px",
    fontSize: "13pt",
    fontWeight: "bold",
    backgroundColor: "inherit",
    color: theme.colors.WHITE,
    minWidth: "200px",
    borderRadius: "40px",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Roboto",
    gap: "10px",
    display: "flex",
    height: "60px",
  },
  compose(
    color,
    textAlign,
    boxShadow,
    space,
    position,
    variant({
      prop: "backgroundColor",
      variants: {
        black: ButtonStyles.black,
        pink: ButtonStyles.pink,
      },
    }),
    variant({
      prop: "borderRadius",
      variants: {
        bordered: ButtonStyles.bordered,
        rectangle: ButtonStyles.rectangle,
      },
    })
  )
);

export default Button;
