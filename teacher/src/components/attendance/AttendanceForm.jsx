import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'

const Wrapper = styled.div`
  width: 400px;
  height: 410px;
  background-color: white;
`
const ButtonCollections = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
const Button = styled.button`
  margin-top: 1rem;
  width: 6rem;
  height: 3rem;
  outline: none;
  background-color: ${(props) => props.clr};
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  padding: 0.5rem;
  font-weight: 400;
  cursor: pointer;
`
const Title = styled.p`
  font-size: 1.2rem;
  color: white;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
`
const AttendanceForm = () => {
  // status info of pprevious day
  const data = [
    { name: 'Absent', value: 12 },
    { name: 'Present', value: 60 },
    { name: 'Leave', value: 3 },
  ]
  // chossing color of all statuses
  const COLORS = ['#FF8042', '#00C49F', '#FFBB28']

  return (
    <>
      <Wrapper>
        <Title>Last Attendance Stats</Title>
        <PieChart width={400} height={300}>
          <Pie
            data={data}
            cx='50%'
            cy='50%'
            labelLine={false}
            outerRadius={100}
            fill='#8884d8'
            dataKey='value'
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>

        <ButtonCollections>
          <Link to='/attendance/upload'>
            <Button clr='green'>Upload</Button>
          </Link>
          <Button clr='blue'>Update</Button>
          <Button clr='grey'>View</Button>
        </ButtonCollections>
      </Wrapper>
    </>
  )
}

export default AttendanceForm
