import React from 'react';
import { CommentIcon, Content, DisLike, Item, Like, NameCreator, NumberComments, NumberLike, SectionLike } from './PostItemStyle';
export const PostItem = (props) => {

    const {id, name, content, numberLike, numberComment} = props
 
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