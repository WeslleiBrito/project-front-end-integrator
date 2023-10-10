import {Main, Title, FormSignup, InputNickname, InputEmail, InputPassword, ContractText, Link, CheckTerms, LableCheck, Register} from './SignupStyle'
import React from 'react';
import {Header} from '../../components/Header/Header'
import { useForm } from '../../hooks/useForm'
import axios, { AxiosError } from "axios";
import {BASE_URL} from '../../constants/BASEURL.js'


export const SignupPage = () => {

    const [form, onChange] = useForm({ name: "", email: "", password: ""})

    const signup = async (event) => {
        event.preventDefault()
        
        const body = {
            name: form.name,
            email: form.email,
            password: form.password
        }

        try {
            const result = await axios.post(
                BASE_URL + "/users/signup",
                body
            )
            
            alert(result.data.message)

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
            <Header></Header>
            <Title>
                {"Olá, boas vindas ao LabEddit ;)"}  
            </Title>
            <FormSignup onSubmit={signup}>
                <InputNickname placeholder="Apelido" id='name' name='name' value={form.name} onChange={onChange} required/>
                <InputEmail placeholder='E-mail' id='email' name='email' value={form.email} onChange={onChange} required/>
                <InputPassword placeholder='Senha' id='password' name='password' value={form.password} onChange={onChange} required/>
                <ContractText>
                    Ao continuar, você concorda com o nosso <Link href='#'>Contrato de usuário</Link> e nossa <Link href='#'>Política de Privacidade</Link>
                </ContractText>
                <CheckTerms required id='checkTerms'/>
                <LableCheck htmlFor='checkTerms'>Eu concordo em receber emails sobre coisas legais no Labeddit</LableCheck>
                <Register>Cadastrar</Register>
            </FormSignup>
        </Main>
    )
}