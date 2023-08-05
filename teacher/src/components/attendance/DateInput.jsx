import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
`

const Title = styled.h1`
  font-size: 0.7rem;
  font-weight: 600;
`

const StyledInput = styled.input`
  width: 7rem;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`

const DateInput = () => {
  const [selectedDate, setSelectedDate] = useState(null)

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }

  const handleInputChange = (e) => {
    const inputValue = e.target.value
    const isValidDate = /^\d{1,2}\/\d{1,2}\/\d{4}$/.test(inputValue)
    if (isValidDate) {
      const inputDate = new Date(inputValue)
      setSelectedDate(inputDate)
    }
  }

  const formattedDate = selectedDate
    ? selectedDate.toLocaleDateString('en-GB')
    : ''

  return (
    <Container>
      <Title>Select a date:</Title>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat='dd/MM/yyyy'
        showPopperArrow={false}
        customInput={
          <StyledInput
            value={formattedDate}
            onChange={handleInputChange}
            placeholder='dd/mm/yyyy'
          />
        }
      />
    </Container>
  )
}

export default DateInput
