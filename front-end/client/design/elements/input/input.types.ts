import {
  BoxShadowProps,
  ColorProps,
  PositionProps,
  SpaceProps,
  TextAlignProps,
} from 'styled-system';

type InputVariant = 'bottom'

export interface InputProps
  extends ColorProps,
  TextAlignProps,
  BoxShadowProps,
  SpaceProps,
  PositionProps {
  border?: InputVariant
}
