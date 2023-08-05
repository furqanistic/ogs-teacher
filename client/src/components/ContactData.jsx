import React from 'react'
import styled from 'styled-components'
import School from '../img/front.png'
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  width: 100%;
  position: relative;
`
const Image = styled.img`
  height: 60vh;
  width: 100%;
  object-fit: cover;
  position: relative;
`
const Information = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
`
const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: white;
`
const Button = styled.button`
  font-family: inherit;
  display: inline-block;
  width: 8em;
  height: 2.6em;
  line-height: 2.5em;
  margin: 20px;
  position: relative;
  overflow: hidden;
  border: 0px solid white;
  transition: color 0.5s;
  z-index: 1;
  font-size: 17px;
  border-radius: 10px;
  font-weight: 500;
  color: white;
  background-color: green;
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    background: white;
    height: 150px;
    width: 200px;
    border-radius: 50%;
    top: 100%;
    left: 100%;
    transition: all 0.7s;
  }
  &:hover::before {
    top: -30px;
    left: -30px;
  }
  &:hover {
    color: green;
  }
  &active:before {
    background: green;
    transition: background 0s;
  }
`
const Slogan = styled.p`
  font-size: 2rem;
  color: white;
  font-weight: 300;
`
const ContactData = () => {
  return (
    <>
      <Container>
        <Image src={School} />
        <Information>
          <Title>Orion Grammer School</Title>
          <Button>Contact</Button>
          <Slogan>Making you proud is our vision!</Slogan>
        </Information>
      </Container>
    </>
  )
}

export default ContactData
