import React from 'react'
import Hero from './components/Hero'
import Who from './components/who'
import Works from './components/works'
import Contact from './components/contact'
import styled from "styled-components"

const Container = styled.div`
  height: 100vh;
 
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./images/bg.jpeg");
  &::-webkit-scrollbar{
    display: none;
  }
`;

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