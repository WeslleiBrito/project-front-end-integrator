import styled from "styled-components";


export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 5vw;
    padding-right: 5vw;
    width: 100%
`

export const Logo = styled.img`
    height: 5.25131rem;
    flex-shrink: 0;
    margin-top: 15vh;
`

export const Title = styled.p`
    color: #373737;
    font-family: IBM Plex Sans;
    font-size: 2.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex;
    justify-content: center;
    margin-top: 1.5vh;
`

export const Phrase = styled.p`
    color: #000;
    text-align: center;
    font-family: IBM Plex Sans;
    font-size: 1rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    margin-bottom: 10vh;
`


export const FormLogin = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    
`

export const InputEmail = styled.input.attrs({type: "email"})`
    height: 3.75rem;
    flex-shrink: 0;
    font-family: Noto Sans;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-left: 3vw;
    border-radius: 0.25rem;
    border: 1px solid #D5D8DE;
    background: #FFF;
    width: 100%;
`

export const InputPassword = styled.input.attrs({type: "password"})`
    height: 3.75rem;
    flex-shrink: 0;
    color: #000;
    font-family: Noto Sans;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-left: 3vw;
    border-radius: 0.25rem;
    border: 1px solid #D5D8DE;
    margin-top: 1vh;
    width: 100%;
`

export const ButtonContinue = styled.button.attrs({type: 'submit'})`
    width: 100%;
`

export const ButtonCreateAccount = styled.button`
    width: 100%;
`