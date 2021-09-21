import {
  BoxShadowProps,
  ColorProps,
  PositionProps,
  SpaceProps,
  TextAlignProps,
} from 'styled-system';

type InputVariant = 'black' | 'pink'

export interface ButtonProps
  extends ColorProps,
  TextAlignProps,
  BoxShadowProps,
  SpaceProps,
  PositionProps {
  backgroundColor?: InputVariant
}
