import styled from "styled-components";
import { TbX } from "react-icons/tb";
export const NavHeader = styled.nav`
`

export const MiniLogo = styled.img`
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