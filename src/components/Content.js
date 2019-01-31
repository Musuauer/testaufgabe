import React from 'react'
import styled from 'styled-components'

const ImageList = styled.ul`
position: relative;
list-style: none;
display: flex;
flex-wrap: wrap;
justify-content: center;
width: 70%;
margin: 2rem auto;
border: 1px solid red;

  li{
  height: 7rem;
  margin: 0 1rem 2rem 1rem;
  }

  img {
  max-width: 100%;
  max-height:100%;
  margin:auto;
}

`

export const Content = ({ footer, images }) => {
  return (
    <section className='content'>

      <ImageList className='images' tabIndex='1'>
        {images.map((image, index) =>
          <li key={index}
            className='image'
          >
            {console.log('image url', image[0])}
            <img
              src={image[5].signedUrl}
              alt=''
            />
          </li>
        )}
      </ImageList>

      <p tabIndex='1'>
        {footer}
      </p>
    </section>

  )
}
