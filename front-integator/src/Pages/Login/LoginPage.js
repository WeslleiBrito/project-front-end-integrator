import {Main, Logo, Title, FormLogin, InputEmail, InputPassword, ButtonContinue, ButtonCreateAccount, Phrase, ContainerPassword, Eye} from './LoginStyle'
import React, {  useState } from 'react';
import logoLabenu from '../../assets/img/logo-labenu.svg'
import axios, { AxiosError } from "axios";
import { BASE_URL } from '../../constants/BASEURL';
import { useForm } from '../../hooks/useForm';
import { goPost, goSignup } from '../../Routes/coordinator';
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { PostsContext } from '../../context/PostsContext';
import { string, object } from 'zod'
import { ZodError } from 'zod';
import { CircularProgress } from '@chakra-ui/react'


export const LoginPage = () => {
    const [form, onChange] = useForm({ email: "", password: ""})

    const navigate = useNavigate()
    const context = useContext(PostsContext)
    const { error, handleSetError, setPost, loadingSpiner, setLoadingSpiner } = context
    const [statusEye, setStatusEye] = useState(false)

    const setStatus = () => {
        setStatusEye(!statusEye)
    }

    const login = async (event) => {
        event.preventDefault()
        setLoadingSpiner(true)

        try {

            const userSchema = object({
                email: string().email({message: "Informe um email válido"}),
                password: string().min(5, {message: "A senha deve pussuir o mínimo de 5 caracteres."})
            })
    
    
            const body = userSchema.parse({
                email: form.email,
                password: form.password
            })

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

            }else if(error instanceof ZodError){
                const message = JSON.parse(error.message)
                alert(message[0].message)
            }
            else{
                alert(error)
            }
        }finally{
            setLoadingSpiner(false)
        }

    }
    
    return(
        
        <Main>
            <Logo alt='logo-labenu' src={logoLabenu}/>
            <Title>LabEddit</Title>
            <Phrase>O projeto de rede social da Labenu</Phrase>
            <FormLogin onSubmit={login}>
                <InputEmail placeholder='E-mail' name='email' value={form.name} onChange={onChange} required autoComplete='off'/>
                <ContainerPassword>
                    <InputPassword type={statusEye ? 'text' : "password"} placeholder='Senha' name='password' value={form.password} onChange={onChange} autoComplete='off' autoCapitalize="none"required/>
                    <Eye status={statusEye} setStatus={setStatus}/>
                </ContainerPassword>
                <ButtonContinue>Continuar {loadingSpiner ? <CircularProgress isIndeterminate color='black' size={"1.75rem"}/> : ""}</ButtonContinue>
            </FormLogin>
            <ButtonCreateAccount onClick={() => {goSignup(navigate)}}>Crie uma conta!</ButtonCreateAccount>
        </Main>
    )
}