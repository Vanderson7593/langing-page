import {
  BoxShadowProps,
  ColorProps,
  PositionProps,
  SpaceProps,
  TextAlignProps,
} from 'styled-system';

type InputBgVariant = 'black' | 'pink'
type InputBorderVariant = 'rounded' | 'rectangle'

export interface ButtonProps
  extends ColorProps,
  TextAlignProps,
  BoxShadowProps,
  SpaceProps,
  PositionProps {
  backgroundColor?: InputBgVariant,
  borderRadius?: InputBorderVariant
}
