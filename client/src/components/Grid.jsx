import React from 'react'
import styled from 'styled-components'
import G1 from '../img/g1.jpg'
import G2 from '../img/g2.jpg'
import G3 from '../img/g3.jpg'
import G4 from '../img/g4.jpg'
import G5 from '../img/g5.jpg'
const Parent = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  background-color: white;
`
const ImageGallery = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`
const Title = styled.h1`
  height: 80px;
  width: 100%;
  font-size: 3rem;
  text-align: center;
  color: Green;
  background-color: white;
`

const GridOne = styled.div`
  grid-area: 1 / 11 / 3 / 13;
`
const GridTwo = styled.div`
  grid-area: 3 / 11 / 5 / 13;
`
const GridThree = styled.div`
  grid-area: 5 / 11 / 7 / 13;
`
const GridFour = styled.div`
  grid-area: 1 / 9 / 5 / 11;
`
const GridFive = styled.div`
  grid-area: 5 / 7 / 7 / 11;
`
const GridSix = styled.div`
  grid-area: 5 / 3 / 7 / 7;
`
const GridSeven = styled.div`
  grid-area: 1 / 5 / 5 / 9;
`
const GridEight = styled.div`
  grid-area: 1 / 1 / 3 / 5;
`
const GridNine = styled.div`
  grid-area: 3 / 1 / 5 / 3;
`
const GridTen = styled.div`
  grid-area: 3 / 3 / 5 / 5;
`
const GridEleven = styled.div`
  grid-area: 5 / 1 / 7 / 3;
`
const Grid = ({ name }) => {
  return (
    <>
      <Title>{name}</Title>
      <Parent>
        <GridOne>
          <ImageGallery src={G4} />
        </GridOne>
        <GridTwo>
          <ImageGallery src={G2} />
        </GridTwo>
        <GridThree>
          <ImageGallery src={G3} />
        </GridThree>
        <GridFour>
          <ImageGallery src={G1} />
        </GridFour>
        <GridFive>
          <ImageGallery src={G5} />
        </GridFive>
        <GridSix>
          <ImageGallery src={G4} />
        </GridSix>
        <GridSeven>
          <ImageGallery src={G3} />
        </GridSeven>
        <GridEight>
          <ImageGallery src={G2} />
        </GridEight>
        <GridNine>
          <ImageGallery src={G1} />
        </GridNine>
        <GridTen>
          <ImageGallery src={G2} />
        </GridTen>
        <GridEleven>
          <ImageGallery src={G3} />
        </GridEleven>
      </Parent>
    </>
  )
}

export default Grid
