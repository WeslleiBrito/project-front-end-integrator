import styled from "styled-components";
import React from 'react';
import { TbArrowBigUp, TbArrowBigDown } from "react-icons/tb";
import { BiMessage } from "react-icons/bi";


export const Item = styled.li`
`

export const NameCreator = styled.p`
`
export const Content = styled.p`
`

export const SectionLike = styled.section`
`

export const Like = (props) => {
    const { likeDislike, id } = props
    return (
        <TbArrowBigUp onClick={() => likeDislike(id, true)}/>
    )
}


export const DisLike = (props) => {
    const { likeDislike, id } = props
    return (
        <TbArrowBigDown onClick={() => likeDislike(id, false)}/>
    )
}

export const CommentIcon = (props) => {
    const { goComments, navigate, id, status } = props
    return (
        <BiMessage
            onClick={() => { goComments(navigate, id) }}
            style={{ display: status, width: "2vw", border: "none", background: "trasparent" }}
        />
    )
}


export const NumberLike = styled.p`
`

export const NumberComments = styled.p`
`
