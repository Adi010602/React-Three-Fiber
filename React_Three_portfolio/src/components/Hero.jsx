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
    font-family: 'Roboto', sans-serif;
`

const Left =  styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
`


const Title =  styled.h1`
font-size: 61px;

`
const Line = styled.img`
  height: 5px;
`

const SubTitle =  styled.h2`
color:#0FC2D8 ;
`

const Desc =  styled.p`
font-size: 20px;
color: lightblue;
`

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
position: relative;
`

const Img = styled.img`
  
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  
  @keyframes animate{
    to{
      transform: translateY(20px);
    }
    
  }
`
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  
`


const Hero = () => {
  return (
    
    <Section>
      <NavBar/>
      <Container>
        <Left>
          <Title>
            Think.   Make. Solve.
          </Title>
          <WhatWeDo>
          <Line src="./images/line.png" />
          <SubTitle>What We Do</SubTitle>
          </WhatWeDo>
          <Desc>We enjoy creating delightfull, human-centered digital experiences.</Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>

          {/* 3d model   */}
          <Img src="./images/hero.png"/>
        </Right>

      </Container>  
    </Section>
  )
}

export default Hero