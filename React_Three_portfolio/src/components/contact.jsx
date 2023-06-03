import React from 'react'
import styled from "styled-components"
import Map from './Map';

const data = [
  "Web Design",
  "Development",
  "Illustrations",
  "Product Design",
  "Social Media"
];

const Section=styled.div`
       height: 100vh;
      display: flex;
    scroll-snap-align: center;
    justify-content: center;
    font-family: 'Roboto', sans-serif;

`



const Container =  styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    gap: 50px;
`
const Title =  styled.h1`
  font-weight: 200;
  `

const Form =  styled.form`
  width: 500px;
  display  :flex ;
  flex-direction: column;
  gap: 25px;
  `
const TextArea =  styled.textarea`
   padding: 20px;
   
   background-color: light;
   border: none;
   border-radius: 5px;
`
const Input =  styled.input`
    padding: 20px;
    background-color: light;
    border: none;
    border-radius: 5px;
`

const Button =  styled.button`
width:500px;
padding: 20px;
background-color: #0FC2D8;
color: white;
border: none;
border-radius: 5px;
cursor: pointer;
font-family: 'Pangolin', cursive;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`



const Right =  styled.div`
  flex:1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
`


const who = () => {
  return (
    <Section>
      <Container>
      <Left>
        <Form>
          <Title>Contact Us</Title>
          <Input placeholder='Name'></Input>
          <Input placeholder='Email'></Input>
          <TextArea placeholder='Write yout review' rows={10}/>
          <Button>Send</Button>
        </Form>
      </Left>
      <Right>
      <Map/>
      </Right>
      </Container>
    </Section>
  )
}

export default who