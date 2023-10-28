import {Main, Title, FormSignup, InputNickname, InputEmail, InputPassword, ContractText, Link, SectionTerms, CheckTerms, LableCheck, Register} from './SignupStyle'
import React from 'react';
import {Header} from '../../components/Header/Header'
import { useForm } from '../../hooks/useForm'
import axios, { AxiosError } from "axios";
import {BASE_URL} from '../../constants/BASEURL.js'
import { useNavigate } from 'react-router-dom';
import { goLogin } from '../../Routes/coordinator';


export const SignupPage = () => {

    const [form, onChange] = useForm({ name: "", email: "", password: ""})
    const navigate = useNavigate()

    const signup = async (event) => {
        event.preventDefault()
        
        const body = {
            name: form.name,
            email: form.email,
            password: form.password
        }

        try {

            await axios.post(
                BASE_URL + "/users/signup",
                body
            )
            
            goLogin(navigate)

        } catch (error) {

            if(error instanceof AxiosError){
                alert(error.response.data)
            }else{
                alert(error)
            }
            
        }
    }

    return(
        <>
            <Header namePage="signup"/>
            <Main>
                <Title>
                    {"Olá, boas vindas ao LabEddit ;)"}  
                </Title>
                <FormSignup onSubmit={(event) => {signup(event)}}>
                    <InputNickname placeholder="Apelido" id='name' name='name' value={form.name} onChange={onChange} required autoComplete='off'/>
                    <InputEmail placeholder='E-mail' id='email' name='email' value={form.email} onChange={onChange} required autoComplete='off'/>
                    <InputPassword placeholder='Senha' id='password' name='password' value={form.password} onChange={onChange} required autoComplete='off'/>
                    <ContractText>
                        Ao continuar, você concorda com o nosso <Link href='#'>Contrato de usuário</Link> e nossa <Link href='#'>Política de Privacidade</Link>
                    </ContractText>
                    <SectionTerms>
                        <CheckTerms id='checkTerms'/>
                        <LableCheck htmlFor='checkTerms'>Eu concordo em receber emails sobre coisas legais no Labeddit</LableCheck>
                    </SectionTerms>
                    <Register>Cadastrar</Register>
                </FormSignup>
            </Main>
        </>
        
    )
}