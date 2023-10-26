import styled from "styled-components";

export const Main = styled.main`
    width: 92vw;
    display: flex;
    flex-direction: column;
`

export const Title = styled.p`
    font-family: 'IBM Plex Sans', sans-serif;
    color: #373737;
    font-size: 2.0625rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 3vh;
    padding-left: 3vw;
`

export const FormSignup = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 15vh;
`

export const InputNickname = styled.input.attrs({ type: "text" })`
    width: 90%;
    height: 3.75rem;
    padding-left: 3vw;
    color: #000;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    font-family: Noto Sans;
    border-radius: 0.25rem;
    border: 1px solid #D5D8DE;
    background: #FFF;
`

export const InputEmail = styled.input.attrs({ type: "email" })`
    width: 90%;
    height: 3.75rem;
    padding-left: 3vw;
    color: #000;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    font-family: Noto Sans;
    border-radius: 0.25rem;
    border: 1px solid #D5D8DE;
    background: #FFF;
    margin-top: 2vh;
`

export const InputPassword = styled.input.attrs({ type: "password" })`
    width: 90%;
    height: 3.75rem;
    padding-left: 3vw;
    color: #000;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    font-family: Noto Sans;
    border-radius: 0.25rem;
    border: 1px solid #D5D8DE;
    background: #FFF;
    margin-top: 2vh;
`

export const ContractText = styled.p`
    width: 90%;
    height: 3.75rem;
    color: #000;
    font-family: Noto Sans;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 5vh;
`

export const Link = styled.a`
    color: #4088CB;
    font-family: Noto Sans;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`
export const SectionTerms = styled.section`
    width: 90%;
    display: flex;
    align-items: center;
    height: 6vh;
`

export const CheckTerms = styled.input.attrs({ type: "checkbox" })`
    width: 1.11581rem;
    height: 1.125rem;
    flex-shrink: 0;
`
export const LableCheck = styled.label`
    margin-left: 2vw;
    color: #000;
    font-family: Noto Sans;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const Register = styled.button.attrs({ type: "submit" })`
    width: 90%;
    display: flex;
    padding: 0.8125rem 8.3125rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border-radius: 1.6875rem;
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    border: none;
    margin-top: 4vh;
`
