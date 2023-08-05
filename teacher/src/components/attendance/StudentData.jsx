import React from 'react'
import { PeopleOutline } from '@mui/icons-material'
import styled from 'styled-components'
const Parent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  margin: 1rem;
`

const Div1 = styled.div`
  width: 200px;
  height: 200px;
  grid-area: 1 / 1 / 2 / 2;
  background-color: green;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Div2 = styled.div`
  width: 200px;
  height: 200px;
  grid-area: 1 / 2 / 2 / 3;
  background-color: white;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Div3 = styled.div`
  width: 200px;
  height: 200px;
  grid-area: 2 / 1 / 3 / 2;
  background-color: white;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Div4 = styled.div`
  width: 200px;
  height: 200px;
  grid-area: 2 / 2 / 3 / 3;
  background-color: green;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Number = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: ${(props) => props.bcc};
  margin-top: 0.3rem;
`
const Text = styled.h3`
  font-size: 0.6rem;
  font-weight: 300;
  color: ${(props) => props.bcc};
`
const Icon = styled.div`
  background-color: ${(props) => props.bcc};
  padding: 0.8rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StudentData = () => {
  return (
    <>
      <Parent>
        <Div1>
          <Icon bcc='white'>
            <PeopleOutline style={{ fontSize: '4rem' }} />
          </Icon>
          <Number bcc='white'>400</Number>
          <Text bcc='white'>Total Student</Text>
        </Div1>
        <Div2>
          <Icon bcc='green'>
            <PeopleOutline style={{ fontSize: '4rem', color: 'white' }} />
          </Icon>
          <Number bcc='green'>6</Number>
          <Text bcc='green'>Total Exams</Text>
        </Div2>
        <Div3>
          <Icon bcc='green'>
            <PeopleOutline style={{ fontSize: '4rem', color: 'white' }} />
          </Icon>
          <Number bcc='green'>13</Number>
          <Text bcc='green'>Total Classes</Text>
        </Div3>
        <Div4>
          <Icon bcc='white'>
            <PeopleOutline style={{ fontSize: '4rem' }} />
          </Icon>
          <Number bcc='white'>20</Number>
          <Text bcc='white'>Total Sections</Text>
        </Div4>
      </Parent>
    </>
  )
}

export default StudentData
