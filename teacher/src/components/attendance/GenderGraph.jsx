import React from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'
import styled from 'styled-components'
const Wrapper = styled.div`
  background-color: white;
`

const GenderGraph = () => {
  // COLOR OF GRAPH BY GENDER
  const COLORS = ['#0088FE', '#ff2828']
  // PERCENTAGE OF GENDER
  const data = [
    { name: 'Male', value: 60 },
    { name: 'Female', value: 40 },
  ]
  return (
    <>
      <Wrapper>
        <PieChart width={300} height={410}>
          <Pie
            data={data}
            cx={150}
            cy={200}
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
      </Wrapper>
    </>
  )
}

export default GenderGraph
