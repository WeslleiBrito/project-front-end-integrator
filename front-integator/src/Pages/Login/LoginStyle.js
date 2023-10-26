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
    border-bottom: 1.5px solid;
    border-image: linear-gradient(to right, #FF6489, #F9B24E);
    border-image-slice: 1;
    padding-bottom: 2vh;
    
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
    margin-bottom: 6vh;
`

export const ButtonContinue = styled.button.attrs({type: 'submit'})`
    height: 6vh;
    background: linear-gradient(to right, #FF6489, #F9B24E );
    border: none;
    border-radius: 1.6875rem;
    display: flex;
    width: 22.8125rem;
    padding: 0.8125rem 8.3125rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    color: #FFF;
    text-align: center;
    font-family: Noto Sans;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const ButtonCreateAccount = styled.button`
    height: 6vh;
    display: flex;
    width: 22.8125rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    color: #FE7E02;
    text-align: center;
    font-family: Noto Sans;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border-radius: 1.6875rem;
    border: 1px solid #FE7E02;
    margin-top: 2vh;
`