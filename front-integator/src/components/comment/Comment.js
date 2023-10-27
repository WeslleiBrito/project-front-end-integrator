import React from 'react';
import { Item, NameCreator, Content, SectionLike, Like, NumberLike, DisLike, CommentIcon, NumberComments, CommentSection, SectionInterection } from './CommentStyle'
import { useNavigate } from 'react-router-dom';
import { goComment } from '../../Routes/coordinator';


export const Comment = (props) => {

    const { idPost, idComment, name, content, numberLike, numberComment, likeDislike, colorLikeDislike } = props
    const { colorLike, colorDislike } = colorLikeDislike

    const navigate = useNavigate()
    let like = numberLike
    let commentNumber = numberComment

    let unitLike = ""
    let unitComment = ""
    

    if(numberLike >= 1000){
        unitLike = "K"
        like /= 1000

    }else if(numberLike >= 1000000){
        unitLike = "M"
        like /= 1000000
    }

    if(numberComment >= 1000){
        unitComment = "K"
        commentNumber /= 1000
    }else if(numberComment >= 1000000) {
        unitComment = "M"
        commentNumber /= 1000000
    }

    return (
        <Item id={idComment}>
            <NameCreator>Enviado por: {name}</NameCreator>
            <Content>{content}</Content>
            <SectionInterection>
                <SectionLike>
                    <Like likeDislike={likeDislike} id={idPost && idComment ? idComment : idPost} color={colorLike}/>
                    <NumberLike>{like}{unitLike}</NumberLike>
                    <DisLike likeDislike={likeDislike} id={idPost && idComment ? idComment : idPost} color={colorDislike}/>
                </SectionLike>
                <CommentSection $status={idComment ? "none" : "flex"}>
                    <CommentIcon goComments={goComment} navigate={navigate} id={idPost} />
                    <NumberComments>{commentNumber}{unitComment}</NumberComments>
                </CommentSection>
            </SectionInterection>       
        </Item>
    )
}


