import { useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios';
import { BASE_URL } from '../constants/BASEURL';


export const useFechtPosts = () => {
    const [initial, setInitial] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {

        const token = localStorage.getItem('token')
        const getPosts = async () => {

            const header = {
                headers: {
                    authorization: token
                }
            }
            
            await axios.get(
                BASE_URL + "/post",
                header
            ).then((response) => {
                setInitial(response.data.reverse())
                setLoading(false)
            }).catch((error) => {
                if(error instanceof AxiosError){
                    console.log(error.response.status);
                }
                setError(true)
                setLoading(false)
            })

            
        }
        
        if(token){
            getPosts()
        }

    }, [])

    const handleSetError = () => {
        setError(!error)
    }

    return {initial, loading, error, handleSetError}
}