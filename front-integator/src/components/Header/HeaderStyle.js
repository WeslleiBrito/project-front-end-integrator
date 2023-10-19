import styled from "styled-components";
import { TbX } from "react-icons/tb";

const stayle = {
    post: {
        width: "55vw", 
        justifyContent: "flex-end"
    }
}

export const HeaderComponent = styled.header`
    width: 100vw;
    display: flex;
    padding-right: 10vw;
    padding-left: 10vw;
    justify-content: ${props => props.$post ? stayle.post.justifyContent : "center"};
`

export const NavHeaderPost = styled.nav`
    width: ${props => props.$post ? stayle.post.width : "100%"};
    display: flex;
    justify-content: space-between;
    align-items: center;
`


export const MiniLogo = styled.img`
    height: 8vh;

`

export const ButtonEnter = styled.button`
`
export const ButtonLogout = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
`
export const Close = (props) => {

    const closePage = props.closePage

    return(
        <TbX onClick={closePage}/>
    )
}