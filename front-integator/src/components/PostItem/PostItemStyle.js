import styled from "styled-components";

import styled from "styled-components";
import React from 'react';
import { RxThickArrowUp, RxThickArrowDown } from "react-icons/rx";
import commentIconImage from '../../assets/icons/conversation.png'

export const Item = styled.li`
`

export const NameCreator = styled.p`
`
export const Content = styled.p`
`

export const SectionLike = styled.section`
`

export const Like = () => {

    return(
        <button>
            <RxThickArrowUp/>
        </button>
    )
}


export const DisLike = () => {
    return(
        <button>
            <RxThickArrowDown/>
        </button>
    )
}

export const CommentIcon = () => {
    return(
        <button>
            <img alt="icon" src={commentIconImage}/>
        </button>
    )
}


export const NumberLike = styled.p`
`

export const NumberComments = styled.p`
`
