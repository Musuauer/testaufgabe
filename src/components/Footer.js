import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
width: 100%;
margin: 2rem auto;
`

export const Footer = ({ credit }) => (
  <StyledFooter>

    <p tabIndex='1'>
      {credit}
    </p>

  </StyledFooter>

)
