import React from 'react'
import SideBar from '../components/home/SideBar'
import Main from '../components/home/Main'
import styled from 'styled-components'

const Left = styled.div`
  flex: 1.5;
`
const Right = styled.div`
  flex: 7;
`
const Wrapper = styled.div`
  display: flex;
`
const Home = () => {
  return (
    <>
      <Wrapper>
        <Left>
          <SideBar />
        </Left>
        <Right>
          <Main />
        </Right>
      </Wrapper>
    </>
  )
}

export default Home
