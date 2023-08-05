import React, { useState } from 'react'

import styled from 'styled-components'

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material'
import { CheckCircle, Download } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import DateInput from '../DateInput'

const ButtonWrapper = styled.div`
  display: flex;
`
const ActionButton = styled.button`
  all: unset;
  background-color: ${(props) => props.clr};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 10px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;
  /* color: #67ff67; */
`
const AttendanceButton = styled.button`
  all: unset;
  background-color: #808080c0;

  cursor: pointer;
  padding: 0.5rem;
  border-radius: 10px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;
`
const ButtonsWrapper = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
  min-width: 700px;
`

const DownloadButton = styled.button`
  all: unset;
  background-color: green;
  padding: 0.5rem;
  border-radius: 10px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
const Text = styled.p`
  font-size: 0.7rem;
  font-weight: 500;
  margin-right: 0.5rem;
  width: 2rem;
  text-align: start;
`
const ActionButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
`
// JSX HERE
const AttendanceChart = (props) => {
  const [attendanceStatus, setAttendanceStatus] = useState({})
  const students = [
    {
      id: 'SP21C11',
      name: 'Ahmed Ali',
      status: 'Present',
    },
    {
      id: 'SP21C11',
      name: 'Ahmed Ali',
      status: 'Present',
    },
    {
      id: 'SP21C11',
      name: 'Ahmed Ali',
      status: 'Present',
    },
    {
      id: 'SP21C11',
      name: 'Ahmed Ali',
      status: 'Present',
    },
    {
      id: 'SP21C11',
      name: 'Ahmed Ali',
      status: 'Present',
    },
    {
      id: 'SP21C11',
      name: 'Ahmed Ali',
      status: 'Present',
    },
    {
      id: 'SP21C11',
      name: 'Ahmed Ali',
      status: 'Present',
    },
    {
      id: 'SP21C11',
      name: 'Ahmed Ali',
      status: 'Present',
    },
    {
      id: 'SP21C11',
      name: 'Ahmed Ali',
      status: 'Present',
    },
    {
      id: 'SP21C11',
      name: 'Ahmed Ali',
      status: 'Present',
    },
    {
      id: 'SP21C11',
      name: 'Ahmed Ali',
      status: 'Present',
    },
    {
      id: 'SP21C11',
      name: 'Ahmed Ali',
      status: 'Present',
    },
    {
      id: 'SP21C11',
      name: 'Ahmed Ali',
      status: 'Present',
    },
    {
      id: 'SP21C11',
      name: 'Ahmed Ali',
      status: 'Present',
    },
    {
      id: 'SP21C11',
      name: 'Ahmed Ali',
      status: 'Present',
    },
    {
      id: 'SP21C11',
      name: 'Ahmed Ali',
      status: 'Present',
    },
    {
      id: 'SP21C11',
      name: 'Ahmed Ali',
      status: 'Present',
    },
    {
      id: 'SP21C11',
      name: 'Ahmed Ali',
      status: 'Present',
    },
    {
      id: 'SP21C11',
      name: 'Ahmed Ali',
      status: 'Present',
    },
  ]

  //  FUNCTIONS HERE FROM BACKEND
  const handleStatusClick = (studentId, status) => {
    // Update student status in the backend
    setAttendanceStatus({ ...attendanceStatus, [studentId]: status })
  }
  const setAllAttendanceStatus = (status) => {
    const newStatus = students.reduce((acc, student) => {
      // Update student status in the backend
      acc[student.id] = status
      return acc
    }, {})
    setAttendanceStatus({ ...attendanceStatus, ...newStatus })
  }
  const handleEditClick = (studentId) => {
    // Edit student data
  }

  // const handleAnalyticsClick = (studentId) => {
  //   // Show analytics for a specific student
  // }
  return (
    <>
      <ButtonsWrapper>
        <DownloadButton>
          Download CSV <Download style={{ marginLeft: '0.5rem' }} />
        </DownloadButton>
        <ActionButtonsWrapper>
          <DateInput />
          <Text>Select All As </Text>
          <ActionButton
            clr='green'
            variant='contained'
            color='primary'
            onClick={() => setAllAttendanceStatus('present')}
          >
            Present
          </ActionButton>
          <ActionButton
            clr='red'
            variant='contained'
            color='secondary'
            onClick={() => setAllAttendanceStatus('absent')}
          >
            Absent
          </ActionButton>
          <ActionButton
            clr='purple'
            variant='contained'
            color='warning'
            onClick={() => setAllAttendanceStatus('leave')}
          >
            Leave
          </ActionButton>
        </ActionButtonsWrapper>
      </ButtonsWrapper>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Student ID</TableCell>
              <TableCell>Student Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.id}</TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell>
                  <ButtonWrapper>
                    <AttendanceButton
                      clr='green'
                      variant='contained'
                      style={{
                        backgroundColor:
                          attendanceStatus[student.id] === 'present'
                            ? 'green'
                            : 'grey',
                      }}
                      onClick={() => handleStatusClick(student.id, 'present')}
                    >
                      Present
                    </AttendanceButton>
                    <AttendanceButton
                      clr='red'
                      variant='contained'
                      style={{
                        backgroundColor:
                          attendanceStatus[student.id] === 'absent'
                            ? 'red'
                            : 'grey',
                      }}
                      onClick={() => handleStatusClick(student.id, 'absent')}
                    >
                      Absent
                    </AttendanceButton>
                    <AttendanceButton
                      clr='purple'
                      variant='contained'
                      style={{
                        backgroundColor:
                          attendanceStatus[student.id] === 'leave'
                            ? 'purple'
                            : 'grey',
                      }}
                      onClick={() => handleStatusClick(student.id, 'leave')}
                    >
                      Leave
                    </AttendanceButton>
                  </ButtonWrapper>
                </TableCell>
                <TableCell>
                  <ButtonWrapper>
                    <Link to='/attendance/student'>
                      <ActionButton
                        clr='blue'
                        variant='contained'
                        onClick={() => handleEditClick(student.id)}
                      >
                        Update
                        <CheckCircle style={{ marginLeft: '0.5rem' }} />
                      </ActionButton>
                    </Link>
                  </ButtonWrapper>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default AttendanceChart
