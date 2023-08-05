import React from 'react'
import styled from 'styled-components'
import { ArrowBack, LogoutOutlined } from '@mui/icons-material/'
import { useNavigate } from 'react-router-dom'

const Bar = styled.div`
  height: 70px;
  /* background-color: white; */
  background-color: #015401;
  color: #9cff9c;
`
const NavBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.7rem;
`
const Name = styled.h2`
  font-size: 1.2rem;
  font-weight: 500;
  text-transform: uppercase;
`
const Email = styled.p`
  font-size: 0.7rem;
  font-weight: 300;
`
const DetailsBox = styled.div`
  display: flex;

  flex-direction: column;
`
const NavRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const ProfileImage = styled.img`
  height: 3.2rem;
  width: 3.2rem;
  object-fit: cover;
  margin-right: 1rem;
  border-radius: 50%;
`
const LogOutButton = styled.div`
  margin-right: 0.5rem;
  cursor: pointer;
`
const DetailsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
const NavBar = () => {
  const navigate = useNavigate()

  return (
    <>
      <Bar>
        <NavBarWrapper>
          <DetailsWrapper>
            <ArrowBack
              style={{ marginRight: '1rem' }}
              onClick={() => navigate(-1)}
            />
            <ProfileImage src='https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
            <DetailsBox>
              <Name>Furqan Afzal</Name>
              <Email>furqan@orion.com</Email>
            </DetailsBox>
          </DetailsWrapper>
          <NavRight>
            <LogOutButton>
              <LogoutOutlined style={{ fontSize: '2rem', color: 'white' }} />
            </LogOutButton>
          </NavRight>
        </NavBarWrapper>
      </Bar>
    </>
  )
}

export default NavBar
