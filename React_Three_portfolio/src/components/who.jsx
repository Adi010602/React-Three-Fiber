import React from 'react'
import styled from "styled-components"

const Section=styled.div`
       height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    scroll-snap-align: center;
`



const Container =  styled.div`
    height: 100vh;
    scroll-snap-align: center;
    width: 1400px;
    display: flex;
    justify-content: space-between;
    font-family: 'Roboto', sans-serif;
`
const Left = styled.div`
  flex: 1;
`
const Title =  styled.h1`
font-size: 61px;

`

const SubTitle =  styled.h2`
color:#0FC2D8 ;

`
const Line = styled.img`
  height: 5px;
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
  flex:1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
`

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;

`

const who = () => {
  return (
    <Section>
      <Container>
      <Left>
        {/* 3d model */}
      </Left>
      <Right>
      <Title>
            Think outside the square space
          </Title>
          <WhatWeDo>
          <Line src="./images/line.png" />  
          <SubTitle>Who We Are</SubTitle>
          </WhatWeDo>
          <Desc>We enjoy creating delightfull, human-centered digital experiences.</Desc>
          <Button>Learn More</Button>
      </Right>
      </Container>
    </Section>
  )
}

export default who