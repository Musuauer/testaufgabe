import React, { Component } from 'react'
import axios from 'axios'
import { Header } from './components/Header'
import { Content } from './components/Content'
import './App.css'

class App extends Component {
  state = {
    title: '',
    subtitle: '',
    footer: '',
    images: []
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

      const header = content.data.mediaContainers[0].metadata.map(data => data.content)

      const subtitleArray = header[1].split('.')

      const subtitle = subtitleArray.map((item, i, arr) => {
        let divider = i < subtitleArray.length - 1 && <br />
        return (
          <span >
            <div key={i}>{item}</div>
            {/* {divider} */}
          </span>
        )
      })

      console.log('subtitle', subtitle)

      const footer = content.data.metadata[1].content

      const images = content.data.mediaContainers.map(container => (
        container.previewImages.map(previewImage => previewImage)
      ))

      console.log('images from API:', images)

      this.setState({
        title: header[0],
        subtitle: subtitle,
        footer,
        images
      })
    }
  }

  render () {
    const { title, subtitle, footer, images } = this.state

    return (
      <div className='App'>
        <Header
          title={title}
          subtitle={subtitle}
        />
        <Content
          footer={footer}
          images={images}
        />
      </div>
    )
  }
}

export default App
