import styled from "styled-components";
import { TbX } from "react-icons/tb";

export const NavHeader = styled.nav`
    background-color: #EDEDED;
    
    @media (max-width: 786px){
        display: grid;
        grid-template-rows: 1fr;
    }
`

export const MiniLogo = styled.img`
    width: 20vw;
    height: 8vh;
    display: flex;
    align-self: center;
`

export const ButtonEnter = styled.button`
`
export const ButtonLogout = styled.button`
`
export const Close = (props) => {

    const closePage = props.closePage

    return(
        <TbX onClick={closePage}/>
    )
}