import styled from 'styled-components'

export const Paragraph = styled.p({
  marginTop: '2rem',
  marginBottom: '2rem',
  fontSize: '1.2rem',
  lineHeight: '2.2rem'
})

const fontSizeMap = {
  sm: '0.8rem',
  md: '1rem',
  lg: '1.2rem'
}

export const Text = styled.span(({ size = 'md', lineHeight = 1.7 }) => {
  const fontSize = fontSizeMap[size]
  return {
    fontSize: fontSize || fontSizeMap['md'],
    lineHeight: `${lineHeight}rem`
  }
})