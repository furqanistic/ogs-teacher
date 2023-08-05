import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
  height: 300px;
  background-color: #cdf9bc;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Card = styled.div`
  width: 190px;
  height: 120px;
  padding: 0.5rem;
  background: rgb(10, 170, 7);
  border-radius: 8px;
  backdrop-filter: blur(5px);
  position: absolute;
  border-bottom: 3px solid rgba(255, 255, 255, 0.44);
  border-left: 2px rgba(255, 255, 255, 0.545) outset;
  box-shadow: -40px 50px 30px rgba(0, 0, 0, 0.28);
  transform: skewX(10deg);
  transition: 0.4s;
  overflow: hidden;
  color: white;
  &:hover {
    height: 254px;
    transform: skew(0deg);
  }
`
const Align = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-self: flex-start;
`
const Red = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ff605c;
  box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.28);
`
const Yellow = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ffbd44;
  box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.28);
`
const Green = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #00ca4e;
  box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.28);
`
const Title = styled.h1`
  font-size: 1.4rem;
  text-align: center;
  margin: 1.3rem;
  color: rgb(251, 251, 251);
  text-shadow: -10px 5px 10px rgba(0, 0, 0, 0.573);
`
const Info = styled.p`
  font-size: 0.8rem;
`
const Offer = () => {
  return (
    <>
      <Container>
        <Item>
          <Card>
            <Align>
              <Red />
              <Yellow />
              <Green />
            </Align>
            <Title>Teachers</Title>
            <Info>
              A teacher, also called a schoolteacher or formally an educator, is
              a person who helps students to acquire knowledge, competence.
            </Info>
          </Card>
        </Item>
        <Item>
          <Card>
            <Align>
              <Red />
              <Yellow />
              <Green />
            </Align>
            <Title>Education</Title>
            <Info>
              Education refers to the discipline that is concerned with methods
              of teaching and learning in schools or school-like environments
            </Info>
          </Card>
        </Item>
        <Item>
          <Card>
            <Align>
              <Red />
              <Yellow />
              <Green />
            </Align>
            <Title>Library</Title>
            <Info>
              Academic libraries serve colleges and universities. Public
              libraries serve cities and towns of all types.
            </Info>
          </Card>
        </Item>
        <Item>
          <Card>
            <Align>
              <Red />
              <Yellow />
              <Green />
            </Align>
            <Title>Why Us?</Title>
            <Info>
              Most of our clients have been with us for many years because we
              deliver such outstanding results, we're trustworthy.
            </Info>
          </Card>
        </Item>
      </Container>
    </>
  )
}

export default Offer
