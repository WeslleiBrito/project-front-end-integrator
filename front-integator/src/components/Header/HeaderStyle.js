import styled from "styled-components";
import { TbX } from "react-icons/tb";

const stayle = {
    post: {
        width: "calc(50% + 10vw)", 
        justifyContent: "flex-end"
    }
}

export const HeaderComponent = styled.header`
    ${props => console.log(props.$namePage)}
    width: 100%;
    height: 6vh;
    display: flex;
    padding-right: 10vw;
    padding-left: 10vw;
    justify-content: ${props => props.$namePage ? stayle.post.justifyContent : "center"};
    background-color: #EDEDED;
    box-sizing: border-box;
`

export const NavHeaderPost = styled.nav`
    ${props => console.log(props.$namePage)}
    width: ${props => props.$namePage ? stayle.post.width : "100%"};
    display: flex;
    justify-content: space-between;
    align-items: center;
`


export const MiniLogo = styled.img`
    height: 4vh;
    width: 10vw;

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