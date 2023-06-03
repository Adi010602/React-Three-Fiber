import React from 'react'
import styled from "styled-components"

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
    width: 1400px;
    display: flex;
    justify-content: space-between;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const List =  styled.ul`
list-style: none;
display: flex;
flex-direction: column;
gap: 15px;
`

const ListItem =  styled.li`
 
font-size: 100px;
font-weight: bold;
cursor: pointer;
color: transparent;
-webkit-text-stroke: 1px white;
position: relative;

::after {
    content: "abcd";
    position: absolute;
    top: 0;
    left: 0;
    color: #ff002b;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
}
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
        <List>
          {data.map((item)=>(
            <ListItem key={item}>{item}</ListItem>
          ))}
          <ListItem></ListItem>
        </List>
       
      </Left>
      <Right>
   
      </Right>
      </Container>
    </Section>
  )
}

export default who