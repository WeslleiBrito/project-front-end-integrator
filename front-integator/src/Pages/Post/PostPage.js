import {Main, FormPost, InputContent, ButtonPost, ListPost} from './PostStyle'
import {Comment} from '../../components/comment/Comment'
import React, { useEffect, useState } from 'react';
import { goLogin } from '../../Routes/coordinator';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import axios, { AxiosError } from 'axios';
import { BASEURL } from '../../constants/BASEURL';

export const PostPage = () => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const [postsApi, setPostApi] = useState([])

    useEffect(() => {
        if(!token){
            goLogin(navigate)
        }
    }, [token, navigate])

    useEffect(() => {

       
        const getPosts = async () => {
            try {
                const header = {
                    headers: {
                        authorization: token
                    }
                }
        
                const result = await axios.get(
                    BASEURL + "/post",
                    header
                )
                
                setPostApi(result.data)
            } catch (error) {
                console.log(error)
            }
            
        }

        if(token){
            getPosts()
        }
        
    }, [token])
  
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
                BASEURL + '/post',
                body,
                header
                
            )
            
            const result = await axios.get(
                BASEURL + "/post",
                header
            )
            
            setPostApi(result.data)

        } catch (error) {
            if(error instanceof AxiosError){
                console.log(error.response.data);

            }else{
                alert(error)
            }
        }
    }

    return(
        <Main>
            <FormPost onSubmit={createPost}>
                <InputContent placeholder='Escreva seu post...' value={form.content} onChange={onChange}/>
                <ButtonPost value={"Postar"}/>
            </FormPost>
            <ListPost>
                {
                    postsApi ? postsApi.map(post => {
                        return (
                            <Comment key={post.id} id={post.id} name={post.creator.name} content={post.content} numberLike={post.like - post.dislike} numberComment={post.amountComments} comments={post.comments}/>
                        )
                    }): <></>
                }
            </ListPost>
        </Main>
    )
}
