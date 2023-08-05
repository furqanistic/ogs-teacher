import React from 'react'
import NavBar from './NavBar'

import Categories from './Categories'
import PageTitle from './PageTitle'

const Main = () => {
  return (
    <>
      <NavBar />
      <PageTitle pageName='Dashboard' />
      <Categories />
    </>
  )
}

export default Main
