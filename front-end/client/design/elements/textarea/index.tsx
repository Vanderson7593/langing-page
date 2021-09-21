import styled from '@emotion/styled'
import { theme } from '@theme'
import { boxShadow, color, compose, position, space, textAlign, variant } from 'styled-system'
import InputStyles from './input-styles'

import { InputProps } from './input.types'

const Textarea = styled('textarea')<InputProps>(
  {
    borderColor: theme.colors.GREY,
    borderWidth: '0.8px',
    borderStyle: 'solid',
    padding: '25px',
    fontSize: '13pt',
    fontWeight: 'lighter',
    backgroundColor: 'inherit',
    width: '100%',
    height: '200px',
    resize: 'none',

  },
  compose(color, textAlign, boxShadow, space, position, variant({
    prop: 'border',
    variants: {
      bottom: InputStyles.bottom
    }
  }))
)

export default Textarea
