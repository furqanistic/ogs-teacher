import React from 'react'
import styled from 'styled-components'

import {
  FormatListNumberedOutlined,
  ViewTimelineOutlined,
  LibraryBooksOutlined,
  HistoryToggleOffOutlined,
  CalendarMonthOutlined,
  NewspaperOutlined,
  HomeWorkOutlined,
  FindInPageOutlined,
  Settings,
  TuneOutlined,
  GroupsOutlined,
} from '@mui/icons-material/'
import { Link } from 'react-router-dom'
const Bar = styled.div`
  height: 100%;
  min-height: 100vh;

  background-color: #015401;
`
const NameBox = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: #87f387c5;
  height: 70px;
`
const Name = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  color: #0f4301;
  letter-spacing: 0.3rem;
`
const ItemsWrapper = styled.div`
  display: flex;

  align-items: flex-start;
  flex-direction: column;
  padding: 1rem;
`
const Item = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.8rem 1rem;
  color: white;
  width: 100%;
  border-radius: 20px;
  transition: all 0.1s ease;
  cursor: pointer;
  &:hover {
    background-color: #c5f9c5;
    color: #026602;
    scale: 1.05;
  }
`
const ItemName = styled.p`
  font-size: 1rem;
  font-weight: 400;
`
const ItemIcon = styled.span`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`

const SideBar = () => {
  return (
    <>
      <Bar>
        <NameBox>
          <Name>OGS</Name>
        </NameBox>

        <ItemsWrapper>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <Item>
              <ItemIcon>
                <ViewTimelineOutlined />
              </ItemIcon>
              <ItemName>Dashboard</ItemName>
            </Item>
          </Link>
          <Link to='/attendance' style={{ textDecoration: 'none' }}>
            <Item>
              <ItemIcon>
                <GroupsOutlined />
              </ItemIcon>
              <ItemName>Attendance</ItemName>
            </Item>
          </Link>
          <Link to='/classlist' style={{ textDecoration: 'none' }}>
            <Item>
              <ItemIcon>
                <FormatListNumberedOutlined />
              </ItemIcon>
              <ItemName>Class List</ItemName>
            </Item>
          </Link>
          <Link to='/timetable' style={{ textDecoration: 'none' }}>
            <Item>
              <ItemIcon>
                <HistoryToggleOffOutlined />
              </ItemIcon>
              <ItemName>Timetable</ItemName>
            </Item>
          </Link>
          <Link to='/exam' style={{ textDecoration: 'none' }}>
            <Item>
              <ItemIcon>
                <LibraryBooksOutlined />
              </ItemIcon>
              <ItemName>Exam</ItemName>
            </Item>
          </Link>
          <Link to='/calender' style={{ textDecoration: 'none' }}>
            <Item>
              <ItemIcon>
                <CalendarMonthOutlined />
              </ItemIcon>
              <ItemName>Calender</ItemName>
            </Item>
          </Link>
          <Link to='/news' style={{ textDecoration: 'none' }}>
            <Item>
              <ItemIcon>
                <NewspaperOutlined />
              </ItemIcon>
              <ItemName>News</ItemName>
            </Item>
          </Link>
          <Link to='/homework' style={{ textDecoration: 'none' }}>
            <Item>
              <ItemIcon>
                <HomeWorkOutlined />
              </ItemIcon>
              <ItemName>Homework</ItemName>
            </Item>
          </Link>
          <Link to='/examresult' style={{ textDecoration: 'none' }}>
            <Item>
              <ItemIcon>
                <FindInPageOutlined />
              </ItemIcon>
              <ItemName>Exam Result</ItemName>
            </Item>
          </Link>
          <Link to='/settings' style={{ textDecoration: 'none' }}>
            <Item>
              <ItemIcon>
                <Settings />
              </ItemIcon>
              <ItemName>Settings</ItemName>
            </Item>
          </Link>
          <Item>
            <ItemIcon>
              <TuneOutlined />
            </ItemIcon>
            <ItemName>Configuration</ItemName>
          </Item>
        </ItemsWrapper>
      </Bar>
    </>
  )
}

export default SideBar
