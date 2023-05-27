import React from 'react'
import Hero from './components/Hero'
import Who from './components/who'
import Works from './components/works'
import Contact from './components/contact'
import styled from "styled-components"

const Container=styled.div`
    height: 100%;
    width: 100%;
    background: url("./images/bg.jpeg");
    scroll-snap-type:y mandatory;
    scroll-behavior: smooth; 
    overflow-y: auto;
  scrollbar-width: none;
  color: white;
    &::-webkit-scrollbar{
    display: none;
  }
    `

function App() {
  return (
    <Container>
      <Hero/>
      <Who/>
      <Works/>
      <Contact/>

    </Container>
  )
}

export default App