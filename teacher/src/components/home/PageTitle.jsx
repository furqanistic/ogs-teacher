import React from 'react'
import styled from 'styled-components'
const Heading = styled.div`
  margin: 1rem 1rem 0 1rem;
  border: 1px solid green;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`
const PageName = styled.h1`
  background-color: #9ef78a;
  width: 100%;
  font-size: 2rem;
  color: #024b02;
  padding: 0.5rem;
`
const PageTitle = ({ pageName }) => {
  return (
    <>
      <Heading>
        <PageName>{pageName}</PageName>
      </Heading>
    </>
  )
}

export default PageTitle
