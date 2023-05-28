import React from 'react'
import styled from "styled-components"

const Section=styled.div`
    height: 100vh;

    `

const Left = styled.div`
  
`
const Title =  styled.h1`
font-size: 70px;

`

const SubTitle =  styled.h3`
color:#0FC2D8 ;
`

const Desc =  styled.p`
font-size: 24px;
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
  gap: 10px;
`

const who = () => {
  return (
    <Section>
      <Left>
        {/* 3d model */}
      </Left>
      <Right>
      <Title>
            Think.   Make. Solve.
          </Title>
          <WhatWeDo>
          <SubTitle>What We Do</SubTitle>
          </WhatWeDo>
          <Desc>We enjoy creating delightfull, human-centered digital experiences.</Desc>
          <Button>Learn More</Button>
      </Right>
    </Section>
  )
}

export default who