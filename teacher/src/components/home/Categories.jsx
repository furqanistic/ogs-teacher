import {
  CalendarMonthOutlined,
  FormatListNumberedOutlined,
  GroupsOutlined,
  HistoryToggleOffOutlined,
  HomeWorkOutlined,
  LibraryBooksOutlined,
  NewspaperOutlined,
  Settings,
  TuneOutlined,
  ViewTimelineOutlined,
} from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  padding: 2rem;
  min-width: 780px;
`

const Parent = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  color: white;
`

const Div1 = styled.div`
  cursor: pointer;
  grid-area: 1 / 1 / 3 / 3;
  height: 12rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
`

const Div2 = styled.div`
  cursor: pointer;
  grid-area: 1 / 3 / 3 / 5;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all 0.2s ease-in;
`

const Div3 = styled.div`
  cursor: pointer;
  grid-area: 1 / 5 / 3 / 7;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Div4 = styled.div`
  cursor: pointer;
  grid-area: 1 / 7 / 3 / 9;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Div5 = styled.div`
  cursor: pointer;
  grid-area: 1 / 9 / 3 / 11;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Div6 = styled.div`
  cursor: pointer;
  grid-area: 3 / 1 / 5 / 3;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Div7 = styled.div`
  cursor: pointer;
  grid-area: 3 / 3 / 5 / 5;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Div8 = styled.div`
  cursor: pointer;
  grid-area: 3 / 5 / 5 / 7;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Div9 = styled.div`
  cursor: pointer;
  grid-area: 3 / 7 / 5 / 9;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Div10 = styled.div`
  cursor: pointer;
  grid-area: 3 / 9 / 5 / 11;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Icon = styled.button`
  outline: none;
  border: none;
  color: white;
  cursor: pointer;
  background: #ee0979; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #ff6a00,
    #ee0979
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #ff6a00,
    #ee0979
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  border-radius: 20px;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.3s ease-in-out;
  &:hover {
    scale: 1.1;
  }
`
const IconTwo = styled.button`
  outline: none;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 40px;
  background: #ffe000; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #799f0c,
    #ffe000
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #799f0c,
    #ffe000
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  border-radius: 20px;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  &:hover {
    scale: 1.1;
  }
`
const IconThree = styled.button`
  outline: none;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 40px;
  background: #ec008c; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #fc6767,
    #ec008c
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #fc6767,
    #ec008c
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  border-radius: 20px;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  &:hover {
    scale: 1.1;
  }
`
const IconFour = styled.button`
  outline: none;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 40px;
  background: #aa076b; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #61045f,
    #aa076b
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #61045f,
    #aa076b
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  border-radius: 20px;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  &:hover {
    scale: 1.1;
  }
`
const IconFive = styled.button`
  outline: none;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 40px;
  background: #414d0b; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #727a17,
    #414d0b
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #727a17,
    #414d0b
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  border-radius: 20px;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  &:hover {
    scale: 1.1;
  }
`
const IconSix = styled.button`
  outline: none;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 40px;
  background: #52c234; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #061700,
    #52c234
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #061700,
    #52c234
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  border-radius: 20px;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  &:hover {
    scale: 1.1;
  }
`
const IconSeven = styled.button`
  outline: none;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 40px;
  background: #000428; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #004e92,
    #000428
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #004e92,
    #000428
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  border-radius: 20px;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  &:hover {
    scale: 1.1;
  }
`
const IconEight = styled.button`
  outline: none;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 40px;
  background: #add100; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #7b920a,
    #add100
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #7b920a,
    #add100
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  border-radius: 20px;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  &:hover {
    scale: 1.1;
  }
`
const IconNine = styled.button`
  outline: none;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 40px;
  background: #da22ff; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #9733ee,
    #da22ff
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #9733ee,
    #da22ff
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  border-radius: 20px;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  &:hover {
    scale: 1.1;
  }
`
const IconTen = styled.button`
  outline: none;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 40px;
  background: #ff8008; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #ffc837,
    #ff8008
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #ffc837,
    #ff8008
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  border-radius: 20px;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  &:hover {
    scale: 1.1;
  }
`
const Name = styled.p`
  font-size: 1rem;
  color: black;
  margin-top: 0.5rem;
`
const Categories = () => {
  return (
    <>
      <Wrapper>
        <Parent>
          <Div1>
            <Link to='/'>
              <Icon>
                <ViewTimelineOutlined style={{ fontSize: '5rem' }} />
              </Icon>
            </Link>
            <Name>Dashboard</Name>
          </Div1>
          <Div2>
            <Link to='attendance'>
              <IconTwo>
                <GroupsOutlined style={{ fontSize: '5rem' }} />
              </IconTwo>
            </Link>
            <Name>Attendance</Name>
          </Div2>
          <Div3>
            <Link to='classlist'>
              <IconThree>
                <FormatListNumberedOutlined style={{ fontSize: '5rem' }} />
              </IconThree>
            </Link>
            <Name>Class List</Name>
          </Div3>
          <Div4>
            <Link to='timetable'>
              <IconFour>
                <HistoryToggleOffOutlined style={{ fontSize: '5rem' }} />
              </IconFour>
            </Link>
            <Name>Timetable</Name>
          </Div4>
          <Div5>
            <Link to='exam'>
              <IconFive>
                <LibraryBooksOutlined style={{ fontSize: '5rem' }} />
              </IconFive>
            </Link>
            <Name>Exam</Name>
          </Div5>
          <Div6>
            <Link to='calender'>
              <IconSix>
                <CalendarMonthOutlined style={{ fontSize: '5rem' }} />
              </IconSix>
            </Link>
            <Name>Calender</Name>
          </Div6>
          <Div7>
            <Link to='news'>
              <IconSeven>
                <NewspaperOutlined style={{ fontSize: '5rem' }} />
              </IconSeven>
            </Link>
            <Name>News</Name>
          </Div7>
          <Div8>
            <Link to='homework'>
              <IconEight>
                <HomeWorkOutlined style={{ fontSize: '5rem' }} />
              </IconEight>
            </Link>
            <Name>Homework</Name>
          </Div8>
          <Div9>
            <Link to='settings'>
              <IconNine>
                <Settings style={{ fontSize: '5rem' }} />
              </IconNine>
            </Link>
            <Name>Settings</Name>
          </Div9>
          <Div10>
            <IconTen>
              <TuneOutlined style={{ fontSize: '5rem' }} />
            </IconTen>
            <Name>Configuration</Name>
          </Div10>
        </Parent>
      </Wrapper>
    </>
  )
}

export default Categories
