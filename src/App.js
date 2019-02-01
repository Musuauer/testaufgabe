import React, { Component } from 'react'
import axios from 'axios'
import { Header } from './components/Header'
import { Content } from './components/Content'
import './App.css'

class App extends Component {
  state = {
    footer: '',
    headers: [],
    images: [],
    currentIndex: 2
  }

  componentDidMount () {
    this.setContent()
  }

  getContentFromAPI = async () => {
    try {
      return await axios.get('https://api.admiralcloud.com/v2/publicArea/deliver/79cc6fd31e2e0285402269')
    } catch (error) {
      console.error(error)
    }
  }

  setContent = async () => {
    const content = await this.getContentFromAPI()

    if (content) {
      console.log('content from API:', content)

      const images = content.data.mediaContainers.map(container => (
        container.previewImages.map(previewImage => previewImage)
      ))

      console.log('images from API:', images)

      const headers = content.data.mediaContainers.map(container => (
        container.metadata.map(data => data.content)
      )
      )

      console.log('headers from API:', headers)

      const credit = content.data.metadata[1].content

      this.setState({
        headers,
        credit,
        images
      })
    }
  }

  next = () => {
    const currentIndex = this.state.currentIndex
    const newIndex = currentIndex + 1

    this.setState({
      currentIndex: (this.state.images.length === newIndex)
        ? 0
        : newIndex
    })
  }

  render () {
    const { headers, credit, images, currentIndex } = this.state

    if (images.length > 0) {
      return (
        <div className='App'>
          <Header
            headers={headers}
            currentIndex={currentIndex}
          />
          <Content
            credit={credit}
            images={images}
            currentIndex={currentIndex}
            next={this.next}
          />
        </div>
      )
    }
    return (
      <div>Loading...</div>
    )
  }
}

export default App
