import React from 'react'
import styled from "styled-components"
import NavBar from './NavBar'
const Section=styled.div`
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    scroll-snap-align: center;
    flex-direction: column;
`

const Container =  styled.div`
    height: 100vh;
    scroll-snap-align: center;
    width: 1400px;
    display: flex;
    justify-content: space-between;
`

const Left =  styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`


const Title =  styled.h1``

const SubTitle =  styled.h3``

const Desc =  styled.p``

const Button =  styled.button`
width:100px;
padding: 10px;
background-color: #0FC2D8;
color: white;
order: none;
border-radius: 5px;
cursor: pointer;
font-family: 'Pangolin', cursive;
`
const Right =  styled.div`
flex:3;
`


const Hero = () => {
  return (
    
    <Section>
      <NavBar/>
      <Container>
        <Left>
          <Title>
            Think, Make, Solve.
          </Title>
          <SubTitle>What We Do</SubTitle>
          <Desc>We enjoy creating delightfull, human-centered digital experiences.</Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>

          {/* 3d model   */}
        </Right>

      </Container>  
    </Section>
  )
}

export default Hero