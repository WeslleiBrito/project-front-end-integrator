import { useEffect, useState } from "react";
import { useFechtPosts } from "../hooks/useFechtPosts";
import { PostsContext } from "./PostsContext";

export const GlobalState = (props) => {

    const {initial, loading} = useFechtPosts()
    
    const [posts, setPosts] = useState([])

    useEffect(() => {
        setPosts(initial)
    }, [initial])
    
    const context = {
        posts,
        setPosts,
        loading
    }

    return(
        <PostsContext.Provider value={context}>
            {props.children}
        </PostsContext.Provider>
    )
}