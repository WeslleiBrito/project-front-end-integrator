import styled from "styled-components";
import { TbX } from "react-icons/tb";

const stayle = {
    post: {
        width: "50vw", 
        justifyContent: "flex-end"
    }
}

export const HeaderComponent = styled.header`
    width: 100vw;
    height: 6vh;
    display: flex;
    padding-right: 10vw;
    padding-left: 10vw;
    justify-content: ${props => props.$post ? stayle.post.justifyContent : "center"};
    background-color: #EDEDED;
    box-sizing: border-box;
`

export const NavHeaderPost = styled.nav`
    width: ${props => props.$post ? stayle.post.width : "100%"};
    display: flex;
    justify-content: space-between;
    align-items: center;
`


export const MiniLogo = styled.img`
    height: 4vh;

`

export const ButtonEnter = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #4088CB;
    font-weight: 600;
    font-size: 2cqmax;
`
export const ButtonLogout = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #4088CB;
    font-weight: 600;
    font-size: 2vh;
`
export const Close = (props) => {

    const closePage = props.closePage

    return(
        <TbX onClick={closePage} style={{fontSize: "4vh"}}/>
    )
}