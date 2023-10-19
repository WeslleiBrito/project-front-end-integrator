import styled from "styled-components";

export const Main = styled.main`
    width: 100vw;
    padding: 3.5vh 5vw 3.5vh 5vw;
`
export const FormPost = styled.form`
    display: flex;
    flex-direction: column;
    height: 21vh;
`

export const InputContent = styled.textarea.attrs({autoComplete: "off", id: "content", name: "content"})`
    height: 15vh;
    vertical-align: top;
    padding-left: 4vw;
    padding-top: 5vw;
    padding-right: 4vw;
    resize: none;
    border-radius: 1em;
    border: none;
    background-color: #EDEDED;
`
export const ButtonPost = styled.input.attrs({type: "submit"})`
    margin-top: 2vh;
    height: 4vh;
    background: linear-gradient(to right, #FF6489, #F9B24E );
    border: none;
    border-radius: 0.7em;

`
export const ListPost = styled.ul`
`


