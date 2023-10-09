import {Main, FormPost, InputContent, ButtonPost, ListPost} from './PostStyle'
import {Comment} from '../../components/Comment/Comment'
import React from 'react';

export const PostPage = () => {

    const posts = [
        {
            id: "idPost01",
            name: "Autor item-1",
            content: "Meu Primeiro post",
            like: 5,
            disLike: 2,
            numberComment: 1,
            comments: [
                {
                    id: "idPost01",
                    name: "Autor item-1",
                    content: "Meu Primeiro post",
                    like: 5,
                    disLike: 2,
                    numberComment: 0,
                    comments: []
                }
            ]
        }
    ]
    return(
        <Main>
            <FormPost>
                <InputContent placeholder='Escreva seu post...'/>
                <ButtonPost value={"Postar"}/>
            </FormPost>
            <ListPost>
                {
                    posts.map(post => {
                        return (
                            <Comment key={post.id} id={post.id} name={post.name} content={post.content} numberLike={post.like - post.disLike} numberComment={post.numberComment} comments={post.comments}/>
                        )
                    })
                }
            </ListPost>
        </Main>
    )
}
