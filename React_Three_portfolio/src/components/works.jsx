import React from 'react'
import styled from "styled-components"

const Section=styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;

`

const Container = styled.div`
  
`

const Left = styled.div`
  flex: 2;

`

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const works = () => {
  return (
    <Section>
      <Container>
        <Left>abcd</Left>
        <Right>abcd</Right>
      </Container>
    </Section>
  )
}

export default works