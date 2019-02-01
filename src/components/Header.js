import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: 9;

  .title{
    margin-top: 12rem;
  }

  .subtitle{
    margin-top: 3rem;
    width: 70%;
  }

  p {
    text-align: left;
    margin-bottom: 1rem;
    width: 60%;
  }

  @media (max-width: 700px) {
    .title {
      margin-top: 6rem;
    }

    .subtitle {
      width: 90%;
      margin-top: 1rem;
    }

    p {
      width: 95%;
    }
  }
`
const Banner = styled.div`
position: absolute;
top: 0;
width: 100%;
height: 120px;
background-color: rgba(31,39,50,.5);
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 2rem;
z-index: 999;

  h1 {
    font-weight: 400;
  }

  .logo {
    height: 100%;
    width: 12rem;
    background: url('https://wwwcdn.admiralcloud.com/wp-content/uploads/2018/09/ac-white-small.png')  no-repeat center center; background-size: contain;
  }

  @media (max-width: 700px) {
    padding: 0 .5rem;
    height: 70px;

    .logo {
      width: 6rem;
    }
  }

`

export const Header = ({ headers, currentIndex }) => {
  console.log('header props', headers)
  const title = headers[currentIndex][0]
  let subtitle = ''
  headers[currentIndex][1] && (
    subtitle = headers[currentIndex][1]
  )
  const subtitleArray = subtitle.split('.')
  console.log('title', title)
  console.log('subtitle', subtitleArray)

  return (
    <StyledHeader>
      <Banner>
        <div className='logo' />
        <h1>AdmiralCloud</h1>
      </Banner>

      <div className='title'>
        <h1 tabIndex='1'>
          {title}
        </h1>
      </div>

      {subtitleArray && (
        <div tabIndex='1' className='subtitle'>
          {subtitleArray.map((item, i, arr) => {
            return (
              <p key={i}>{item}</p>
            )
          })}
        </div>
      )
      }

    </StyledHeader>
  )
}
