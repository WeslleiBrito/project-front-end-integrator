import { Main, FormPost, InputContent, ButtonPost, ListPost } from './PostStyle'
import { Comment } from '../../components/comment/Comment'
import React, { useEffect } from 'react';
import { goLogin } from '../../Routes/coordinator';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useContext } from "react";
import { PostsContext } from '../../context/PostsContext';
import { Header } from '../../components/Header/Header'

export const PostPage = () => {

    const context = useContext(PostsContext)
    const { posts, loading, createPost, likeDislikePost } = context
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const [form, onChange, clearForm] = useForm({ content: "" })

    useEffect(() => {
        if (!token) {
            goLogin(navigate)
        }
    }, [token, navigate])

    const MainPosts = () => {

        return (
            <>
                <Header namePage="post"/>
                <Main>
                <FormPost onSubmit={async (event) => { await createPost(event, form.content); clearForm()}}>
                    <InputContent placeholder='Escreva seu post...' value={form.content} onChange={onChange} required />
                    <ButtonPost value={"Postar"} />
                </FormPost>
                <ListPost>
                    {
                        posts.map(post => {
                            
                            return (
                                <Comment key={post.id}
                                    idPost={post.id}
                                    name={post.creator.name}
                                    content={post.content}
                                    numberLike={post.like}
                                    numberComment={post.amountComments}
                                    comments={post.comments}
                                    likeDislike={likeDislikePost}
                                />
                            )
                        })
                    }
                </ListPost>
            </Main>
            </>
            
        )
    }



    return (
        <>
            <Header />
            {loading ? <></> : MainPosts()}
        </>
    )
}
