import React from 'react';
import {Item, NameCreator, Content, SectionLike, Like, NumberLike, DisLike, CommentIcon, NumberComments} from './CommentStyle'



export const Comment = (props) => {

    const {id, name, content, numberLike, numberComment} = props
    console.log(props);
    return(
        <Item id={id}>
            <NameCreator>{name}</NameCreator>
            <Content>{content}</Content>
            <SectionLike>
                <Like/>
                <NumberLike>{numberLike}</NumberLike>
                <DisLike/>
            </SectionLike>
            <CommentIcon/>
            <NumberComments>{numberComment}</NumberComments>
        </Item>
    )
}


