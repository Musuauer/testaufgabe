import React, { Component } from 'react'
import styled from 'styled-components'

const Gallery = styled.div`
position: relative;
background: url(${props => props.background}) no-repeat center center fixed; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover; overflow: hidden; height: 100vh;

  img {
    width: 90%;
  }
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
`

export default class ImageGallery extends Component {
  state={
    images: [],
    currentImageIndex: 2
  }

  componentDidMount () {
    console.log('gallery props', this.props.images[0][0].signedUrl)
    this.setState({
      images: this.props.images,
      currentImage: this.props.images[this.state.currentImageIndex][0].signedUrl
    })
  }

  nextImage = () => {
    const currentIndex = this.state.currentImageIndex
    const newIndex = currentIndex + 1
    console.log('comparison', this.state.images.length, currentIndex)

    this.setState({
      currentImageIndex: (this.state.images.length === newIndex)
        ? 0
        : newIndex
    })
  }

  render () {
    console.log('gallery state', this.state)
    if (this.state.images.length > 0) {
      return (
        <Gallery
          background={this.state.images[this.state.currentImageIndex][0].signedUrl}
        >
          <StyledButton
            onClick={this.nextImage}>
          >
          </StyledButton>
        </Gallery>
      )
    }
    return (
      <div>Loading...</div>
    )
  }
}
