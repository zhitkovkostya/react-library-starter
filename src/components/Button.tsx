import styled from 'styled-components'
import type { MouseEvent, PropsWithChildren } from 'react'

type ButtonProps = PropsWithChildren<{
  onClick?: (e: MouseEvent) => void
}>

const StyledButton = styled.button`
  background-color: green;
`

export const Button = ({
  children,
  onClick = () => alert('Clicked')
}: ButtonProps): JSX.Element => <StyledButton onClick={onClick}>{children}</StyledButton>
