import React from 'react'
import styled from 'styled-components'

const Gallery = styled.div`
position: relative;
background: url(${props => props.background}) no-repeat center center fixed; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover; overflow: hidden; height: 100vh;

 
`

const StyledButton = styled.button`
position: absolute;
right: 0;
top: 50%;
width: 4rem;
height: 15rem;
font-size: 3rem;
background:  rgba(31,39,50,.5);
z-index: 999;
color: white;

:focus {outline:0;}

  @media (max-width: 700px) {
    width: 2rem;
    height: 7rem;
    border: none;
  }
`

export const ImageGallery = ({ images, currentIndex, next }) => (
  <Gallery
    background={images[currentIndex][0].signedUrl}
  >
    <StyledButton
      onClick={next}>
          >
    </StyledButton>
  </Gallery>
)
