import { useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios';
import { BASE_URL } from '../constants/BASEURL';



export const useFechtPosts = () => {
    const [initial, setInitial] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {

        const getPosts = async () => {
            const token = localStorage.getItem('token')

            const header = {
                headers: {
                    authorization: token
                }
            }
    
            await axios.get(
                BASE_URL + "/post",
                header
            ).then((response) => {
                setInitial(response.data)
                setLoading(false)
            }).catch((error) => {
                if(error instanceof AxiosError){
                    console.log(error.response.status);
                }
                setError(true)
                setLoading(false)
            })
        }

        getPosts()
    }, [])

    return {initial, loading, error}
}