import React from 'react'
import  styled  from 'styled-components'

const Section = styled.div`
display: flex;
justify-content: center;
color: #0FC2D8;
font-family: 'Pangolin', cursive;
`

const Container = styled.div`
    width: 1400px;
  
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Logo = styled.img`
   height: 50px;
`

const Links= styled.div`
    display: flex;
    align-items: center;
    gap: 50px;

`

const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
    
`

const ListItems = styled.li`
  cursor: pointer;
`
const Icons =  styled.div`
  display: flex;
    align-items: center;
    gap: 20px;
`
const Icon =  styled.img`
height:20px;
width: 20px;
cursor: pointer;
`
const Button =  styled.button`
width:100px;
padding: 10px;
background-color: #0FC2D8;
color: white;
border: none;
border-radius: 5px;
cursor: pointer;
font-family: 'Pangolin', cursive;
`



function NavBar() {
  return (
    <Section>
        <Container>
        <Links>
            <Logo src="./images/hero logo.png"/>
        <List>
            <ListItems>Home</ListItems>
            <ListItems>Studio</ListItems>
            <ListItems>Works</ListItems>
            <ListItems>Contact</ListItems>
        </List>
        </Links>
        <Icons>
            <Icon src="./images/search.png"></Icon>
            <Button>Know More</Button>
        </Icons>
        </Container>

    </Section>
  )
}

export default NavBar