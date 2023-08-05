import React from 'react'
import styled from 'styled-components'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 1rem;
`

const AttendanceAllClasses = () => {
  // Data of every class
  const data = [
    { name: 'PG', attendance: 82 },
    { name: 'Nursery', attendance: 62 },
    { name: 'Prep', attendance: 40 },
    { name: 'Class 2', attendance: 85 },
    { name: 'Class 3', attendance: 25 },
    { name: 'Class 4', attendance: 57 },
    { name: 'Class 5', attendance: 78 },
    { name: 'Class 6', attendance: 92 },
    { name: 'Class 7', attendance: 20 },
    { name: 'Class 8', attendance: 61 },
  ]
  return (
    <>
      <Wrapper>
        <BarChart
          width={1000}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey='attendance' fill='#17dd1b' />
        </BarChart>
      </Wrapper>
    </>
  )
}

export default AttendanceAllClasses
