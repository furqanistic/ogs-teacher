import React from 'react'
import PageTitle from '../components/home/PageTitle'
import SideBar from '../components/home/SideBar'
import AttendanceMain from '../components/attendance/AttendanceMain'
import styled from 'styled-components'
import NavBar from '../components/home/NavBar'

const Left = styled.div`
  flex: 1.5;
`
const Right = styled.div`
  flex: 7;
`
const Wrapper = styled.div`
  display: flex;
`
const Attendance = () => {
  return (
    <>
      <Wrapper>
        <Left>
          <SideBar />
        </Left>
        <Right>
          <NavBar />
          <PageTitle pageName='Attendance' />
          <AttendanceMain />
        </Right>
      </Wrapper>
    </>
  )
}

export default Attendance
