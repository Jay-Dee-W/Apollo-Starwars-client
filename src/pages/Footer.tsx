import Counter from "../components/Counter"
import styled from '@emotion/styled'



export default function Footer() {
 
    return ( 
        <StyledFooter>
            <Counter />
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
border: 1px solid black;
position: fixed;
bottom: 0%;
width: 95vw;
background: black;
border-radius: 5px 5px 0px 0px;
text-align: center;
margin: 1% 0% 0% 1%;
`