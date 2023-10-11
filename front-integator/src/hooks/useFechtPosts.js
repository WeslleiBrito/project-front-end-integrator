import { useEffect, useState } from 'react'
import axios from 'axios';
import { BASE_URL } from '../constants/BASEURL';


export const useFechtPosts = () => {
    const [initial, setInitial] = useState([])
    const [loading, setLoading] = useState(true)

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
                console.log(error)
                setLoading(false)
            })
        }

        getPosts()
    }, [])

    return {initial, loading}
}