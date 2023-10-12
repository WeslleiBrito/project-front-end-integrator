import styled from "styled-components";
import React from 'react';
import { RxThickArrowUp, RxThickArrowDown } from "react-icons/rx";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faMessage);

export const Item = styled.li`
`

export const NameCreator = styled.p`
`
export const Content = styled.p`
`

export const SectionLike = styled.section`
`

export const Like = () => {

    return (
        <button>
            <RxThickArrowUp />
        </button>
    )
}


export const DisLike = () => {
    return (
        <button>
            <RxThickArrowDown />
        </button>
    )
}

export const CommentIcon = (props) => {
    const { goComments, navigate, id, status } = props
    return (
        <FontAwesomeIcon icon={faMessage}
            onClick={() => { goComments(navigate, id) }}
            style={{ display: status, width: "2vw", border: "none" }}
        />
    )
}


export const NumberLike = styled.p`
`

export const NumberComments = styled.p`
`
