import styled from "styled-components";
import React from 'react';
import { TbArrowBigUp, TbArrowBigDown } from "react-icons/tb";
import { BiMessage, BiShow, BiHide } from "react-icons/bi";


export const Item = styled.li`
    background-color: #FBFBFB;
    border-radius: 1em;
    border: 1px solid #6f6f6f;
    display: flex;
    flex-direction: column;
    padding: 1vh;
    height: 20vh;
    margin-bottom: 1vh;
    
`

export const NameCreator = styled.p`
    color: #6F6F6F;
    font-weight: 400;
    margin-bottom: 0.5vh;
`
export const Content = styled.p`
    color: #000000;
    font-weight: 400;
    font-size: 1.5rem;
    height: 10vh;
    overflow: auto;
    margin-bottom: 1vh;
`
export const SectionInterection = styled.section`
    display: flex;
    height: 7vh;
    align-items: center;
`
export const SectionLike = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 1em;
    border: 1px solid #6f6f6f;
    height: 5vh;
    width: 35vw;
`

export const Like = ({ likeDislike, id, color }) => {
    
    return (
        <TbArrowBigUp 
            onClick={() => likeDislike(id, true)}
            style={{fontSize: "3.5vh", border: "none", fontWeight: "100"}}
            strokeWidth={1}
            fill={color}
        />
    )
}


export const DisLike = ({ likeDislike, id, color }) => {

    return (
        <TbArrowBigDown 
            onClick={() => likeDislike(id, false)}
            style={{fontSize: "3.5vh", border: "none"}}
            strokeWidth={1}
            fill={color}
        />
    )
}


export const CommentSection = styled.section`
    display: ${props => props.$status ? props.$status : "flex"};
    align-items: center;
    justify-content: space-between;
    padding-left: 4vw;
    padding-right: 4vw;
    height: 5vh;
    margin-left: 10vw;
    width: 25vw;
    border-radius: 1em;
    border: 1px solid #6f6f6f;
`
export const CommentIcon = (props) => {
    const { goComments, navigate, id} = props
    return (
        <BiMessage
            onClick={() => { goComments(navigate, id) }}
            style={{ display: "flex", fontSize: "3.5vh", border: "none", background: "trasparent" }}
            
        />
    )
}


export const NumberLike = styled.p`
    font-size: 2vh;
    margin-left: 2vh;
    margin-right: 2vh;
`

export const NumberComments = styled.p`
    font-size: 2vh;
`
export const Eye = ({status, setStatus}) => {

    if(status){
        return(
            <BiShow onClick={() => setStatus()}/>
        )
    }

    return(
        <BiHide onClick={() => setStatus()}/>
    )
}