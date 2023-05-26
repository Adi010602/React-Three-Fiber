import React from 'react'
import Hero from './components/Hero'
import Who from './components/who'
import Works from './components/works'
import Contact from './components/contact'
import styled from "styled-components"

const Container=styled.div`
    height: 100vh;
    width: 100%;
    scroll-snap-type:y mandatory;
    scroll-behavior: smooth;
   
    
    
    
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