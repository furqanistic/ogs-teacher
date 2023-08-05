import React from 'react'
import StudentData from './StudentData'
import styled from 'styled-components'
import GenderGraph from './GenderGraph'
import AttendanceForm from './AttendanceForm'
import AttendanceAllClasses from './AttendanceAllClasses'

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const AttendanceMain = () => {
  return (
    <>
      <PageWrapper>
        <AttendanceForm />
        <StudentData />
        <GenderGraph />
      </PageWrapper>
      <AttendanceAllClasses />
    </>
  )
}

export default AttendanceMain
