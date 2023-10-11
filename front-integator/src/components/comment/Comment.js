import React from 'react';
import {Item, NameCreator, Content, SectionLike, Like, NumberLike, DisLike, CommentIcon, NumberComments} from './CommentStyle'
import { useNavigate } from 'react-router-dom';
import { goComment } from '../../Routes/coordinator';


export const Comment = (props) => {

    const {idPost, idComment, name, content, numberLike, numberComment} = props
    const navigate = useNavigate()
   
    return(
        <Item id={idComment}>
            <NameCreator>{name}</NameCreator>
            <Content>{content}</Content>
            <SectionLike>
                <Like/>
                <NumberLike>{numberLike}</NumberLike>
                <DisLike/>
            </SectionLike>
            <CommentIcon goComments={goComment} navigate={navigate} id={idPost} status={idComment ? "none" : "flex"}/>
            <NumberComments>{numberComment}</NumberComments>
        </Item>
    )
}


