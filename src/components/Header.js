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

  h1 {
    margin-top: 3rem;
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
`
const Banner = styled.div`
width: 100%;
height: 120px;
background-color: rgba(31,39,50,.5);
display: flex;
justify-content: space-between;
padding: 0 2rem;

  h1 {
    font-weight: 400;
  }

  .logo {
    height: 100%;
    width: 12rem;
    background: url('https://wwwcdn.admiralcloud.com/wp-content/uploads/2018/09/ac-white-small.png')  no-repeat center center; background-size: contain;
  }
`

export const Header = ({ title, subtitle }) => {
  return (
    <StyledHeader>
      <Banner>
        <div className='logo' />
        <h1>AdmiralCloud</h1>
      </Banner>

      <h1 tabIndex='1'>
        {title}
      </h1>

      <div tabIndex='1' className='subtitle'>
        {subtitle.map((item, i, arr) => {
          return (
            <p key={i}>{item}</p>
          )
        })}
      </div>

    </StyledHeader>

  )
}
