import {Main, Logo, Title, FormLogin, InputEmail, InputPassword, ButtonContinue, ButtonCreateAccount} from './LoginStyle'
import React from 'react';
import logoLabenu from '../../assets/img/logo-labenu.svg'
import axios, { AxiosError } from "axios";
import { BASE_URL } from '../../constants/BASEURL';
import { useForm } from '../../hooks/useForm';
import { goPost, goSignup } from '../../Routes/coordinator';
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { PostsContext } from '../../context/PostsContext';


export const LoginPage = () => {
    const [form, onChange] = useForm({ email: "", password: ""})
    const navigate = useNavigate()
    const context = useContext(PostsContext)
    const { error, handleSetError, setPost } = context

    const login = async (event) => {
        event.preventDefault()
        
        const body = {
            email: form.email,
            password: form.password
        }

        try {
            const result = await axios.post(
                BASE_URL + '/users/login',
                body
            )
            
            localStorage.setItem('token', result.data.token)
            localStorage.setItem('idUser', result.data.idUser)

            if(error){
                handleSetError()
            }

            await setPost()

            goPost(navigate)

        } catch (error) {

            if(error instanceof AxiosError){
                alert(error.response.data)
            }else{
                alert(error)
            }
        }
    }
    
    return(
        
        <Main>
            <Logo alt='logo-labenu' src={logoLabenu}/>
            <Title>O projeto de rede social da Labenu</Title>
            <FormLogin onSubmit={login}>
                <InputEmail placeholder='E-mail' name='email' value={form.name} onChange={onChange} required/>
                <InputPassword placeholder='Senha' name='password' value={form.password} onChange={onChange} autoComplete='off' required/>
                <ButtonContinue>Continuar</ButtonContinue>
            </FormLogin>
            <ButtonCreateAccount onClick={() => {goSignup(navigate)}}>Crie uma conta!</ButtonCreateAccount>
        </Main>
    )
}