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
  p {
    text-align: left;
    margin: 2rem;
    width: 60%;
  }
`

export const Header = ({ title, subtitle }) => {
  return (
    <StyledHeader>

      <h1 tabIndex='1'>
        {title}
      </h1>

      <p tabIndex='1'>
        {subtitle}
      </p>

    </StyledHeader>

  )
}
