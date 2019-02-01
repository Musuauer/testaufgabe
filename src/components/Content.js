import React from 'react'
import styled from 'styled-components'
import { ImageGallery } from './ImageGallery'
import { Footer } from './Footer'

const ImageList = styled.ul`
position: relative;
list-style: none;
display: flex;
flex-wrap: wrap;
justify-content: center;
margin: 2rem auto;
z-index: 99;

  li{
  height: 7rem;
  margin: 0 1rem 2rem 1rem;
  }

  img {
  max-width: 100%;
  max-height:100%;
  margin:auto;
}

@media (max-width: 700px) {
    li {
      height: 10rem;
    }
  }

`

export const Content = ({ images, credit, currentIndex, next }) => (
  <section className='content'>
    <ImageGallery
      images={images}
      credit={credit}
      currentIndex={currentIndex}
      next={next}
    />

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

    <Footer
      credit={credit}
    />
  </section>

)
