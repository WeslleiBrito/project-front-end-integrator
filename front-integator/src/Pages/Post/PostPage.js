import {Main, FormPost, InputContent, ButtonPost, ListPost} from './PostStyle'
import {Comment} from '../../components/comment/Comment'
import React, { useEffect } from 'react';
import { goLogin } from '../../Routes/coordinator';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import axios, { AxiosError } from 'axios';
import { BASE_URL } from '../../constants/BASEURL';
import { useContext } from "react";
import { PostsContext } from '../../context/PostsContext';
import { Header } from '../../components/Header/Header'

export const PostPage = () => {

    const context = useContext(PostsContext)
    const {posts, loading } = context

    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    useEffect(() => {
        if(!token){
            goLogin(navigate)
        }
    }, [token, navigate])

    const MainPosts = () => {
        
        return(
            <Main>
                <FormPost onSubmit={createPost}>
                    <InputContent placeholder='Escreva seu post...' value={form.content} onChange={onChange}/>
                    <ButtonPost value={"Postar"}/>
                </FormPost>
                <ListPost>
                    {
                        posts.map(post => {
                            return (
                                <Comment key={post.id} idPost={post.id} name={post.creator.name} content={post.content} numberLike={post.like - post.dislike} numberComment={post.amountComments} comments={post.comments}/>
                            )
                        })
                    }
                </ListPost>
            </Main>
        )
    }
  
    const [form, onChange] = useForm({ content: ""})

    const createPost = async (event) => {
        event.preventDefault()
        
        try {
            const header = {
                headers: {
                    authorization: token
                }
            }

            const body = {
                content: form.content
            }

            await axios.post(
                BASE_URL + '/post',
                body,
                header
                
            )
            
            await axios.get(
                BASE_URL + "/post",
                header
            )

        } catch (error) {
            if(error instanceof AxiosError){
                console.log(error.response.data);

            }else{
                alert(error)
            }
        }
    }

    return(
        <>
            <Header/>
            {loading ? <></> : MainPosts()}
        </>
    )
}
