import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  background-color: #282c34;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;

  h1 {
    margin-top: 2rem;
  }
  h3 {
    margin: 2rem;
    width: 50%;
  }
`

export const Header = ({ title, subtitle }) => {
  return (
    <StyledHeader>

      <h1 tabIndex='1'>
        {title}
      </h1>

      <h3 tabIndex='1'>
        {subtitle}
      </h3>

    </StyledHeader>

  )
}
