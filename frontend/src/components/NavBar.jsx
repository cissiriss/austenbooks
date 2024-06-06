import styled from "styled-components"
import { Link } from "react-router-dom"

const StyledNav = styled.nav`
width: 100%;
max-height: 200px;
`
const StyledDiv = styled.div`
display: flex;
`
const StyledLi = styled.li`
color: #5b5b5b; 
margin: 30px;
font-size: 20px;
`

function NavBar() {

  return (
    <StyledNav>
      <StyledDiv>
       <StyledLi><Link to="/:userName?">Books</Link></StyledLi>
      </StyledDiv>
    </StyledNav>
  )
}

export default NavBar