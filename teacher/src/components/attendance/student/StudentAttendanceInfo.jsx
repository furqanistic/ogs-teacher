import React from 'react'
import SideBar from '../../home/SideBar'
import styled from 'styled-components'
import NavBar from '../../home/NavBar'
import AttendanceChart from './AttendanceChart'

const Left = styled.div`
  flex: 1.5;
`
const Right = styled.div`
  flex: 7;
`
const Wrapper = styled.div`
  display: flex;
`

const StudentAttendanceInfo = (props) => {
  return (
    <>
      <Wrapper>
        <Left>
          <SideBar />
        </Left>
        <Right>
          <NavBar />
          <AttendanceChart />
        </Right>
      </Wrapper>
    </>
  )
}

export default StudentAttendanceInfo
