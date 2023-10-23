import { useEffect, useState } from "react";
import { useFechtPosts } from "../hooks/useFechtPosts";
import { PostsContext } from "./PostsContext";
import axios, { AxiosError } from "axios";
import { BASE_URL } from "../constants/BASEURL";
import { getAllPosts } from "../services/getAllPosts";


export const GlobalState = (props) => {

    const {initial, loading, error, handleSetError} = useFechtPosts()
    const [posts, setPosts] = useState([])

    
    useEffect(() => {
        setPosts(initial)
    }, [initial])

    const setPost = async () => {
        try {
            const header = {
                headers: {
                    authorization: localStorage.getItem('token')
                }
            }

            const resut = await axios.get(
                BASE_URL + "/post",
                header
            )

            setPosts(resut.data)

        } catch (error) {
            console.log("Erro ao tentar setar");
        }
    }

    const createComment = async (event, idPost, content) => {
        event.preventDefault()

        try {
            const token = localStorage.getItem('token')
            const header = {
                headers: {
                    authorization: token
                    
                }
            }

            await axios.post(
                BASE_URL + `/comment/post/${idPost}`,
                {content},
                header
            )
            
            const newPosts = await getAllPosts()
            
            setPosts(newPosts.data)

        } catch (error) {
            if(error instanceof AxiosError){
                alert(error.response.data)
            }else{
                alert(error)
            }
            
        }
    }

    const createPost = async (event, content) => {
        event.preventDefault()
        
        try {
            const token = localStorage.getItem('token')
            const header = {
                headers: {
                    authorization: token
                }
            }

            const body = {
                content
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
            
            setPosts((await getAllPosts()).data)
        } catch (error) {
            if(error instanceof AxiosError){
                console.log(error.response.data);

            }else{
                alert(error)
            }
        }
    }

    const likeDislikePost = async (id, action) => {
        
        try {

            const token = localStorage.getItem('token')
            const header = {
                headers: {
                    authorization: token
                    
                }
            }

            await axios.post(
                BASE_URL + `/posts/${id}/like`,
                {like: action},
                header
            )
            
            const newPosts = await getAllPosts()
            
            setPosts(newPosts.data)

        } catch (error) {
            if(error instanceof AxiosError){
                alert(error.response.data)
            }else{
                alert(error)
            }
        }
    }

    const likeDislikeComment = async (id, action) => {
        
        try {

            const token = localStorage.getItem('token')
            const header = {
                headers: {
                    authorization: token
                    
                }
            }

            await axios.post(
                BASE_URL + `/comments/${id}/like`,
                {like: action},
                header
            )
            
            const newPosts = await getAllPosts()
            
            setPosts(newPosts.data)

        } catch (error) {
            if(error instanceof AxiosError){
                alert(error.response.data)
            }else{
                alert(error)
            }
        }
    }

    const context = {
        posts,
        setPost,
        createComment,
        loading,
        createPost,
        likeDislikePost,
        likeDislikeComment,
        error,
        handleSetError
    }

    return(
        <PostsContext.Provider value={context}>
            {props.children}
        </PostsContext.Provider>
    )
}