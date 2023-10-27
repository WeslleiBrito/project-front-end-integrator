import axios, { AxiosError } from "axios"
import { BASE_URL } from "../constants/BASEURL"


export const getAllPosts = async () => {

    try {
        const token = localStorage.getItem('token')
        console.log(token);
        if(!token){
            throw new Error('Refaça o login.')
        }

        const header = {
            headers: {
                authorization: token
            }
        }

        const result = await axios.get(
            BASE_URL + '/post', 
            header
        )

        return result.data
    } catch (error) {

        if(error instanceof AxiosError){
            alert(error.response.data)
        }

        alert(error)
    }
}