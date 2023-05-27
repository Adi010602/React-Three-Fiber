import React from 'react'
import styled from "styled-components"
import NavBar from './NavBar'
const Section=styled.div`
    height: 100vh;
   
    margin: 0; 
    padding: 0; 
    box-sizing: border-box; 
    border:none;
    `
const Hero = () => {
  return (
    
    <Section><NavBar/></Section>
  )
}

export default Hero