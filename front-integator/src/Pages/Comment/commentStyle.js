import styled from "styled-components";

export const Main = styled.main`
   width: 100vw;
   padding: 3vh 5vw 3vh 5vw;
   display: flex;
   flex-direction: column;
`

export const SectionPost = styled.section`
    background-color: #FBFBFB;
    border-radius: 1em;
    border: 1px solid #6f6f6f;
    display: flex;
    flex-direction: column;
    padding: 1vh;
    height: 20vh;
    margin-bottom: 1vh;
`

export const FormComment = styled.form`
    display: flex;
    flex-direction: column;
    height: 23vh;
    border-bottom: 1.5px solid;
    border-image: linear-gradient(to right, #FF6489, #F9B24E);
    border-image-slice: 1;
    padding-bottom: 2.5vh;
`
export const InputContent = styled.textarea.attrs({type: "text", autoComplete: "off", id: "content", name: "content"})`
    height: 15vh;
    vertical-align: top;
    padding-left: 4vw;
    padding-top: 2vh;
    padding-right: 4vw;
    resize: none;
    border-radius: 1em;
    border: none;
    background-color: #EDEDED;
    font-size: 1.2em;
    width: 100%;
`

export const ButtonComment = styled.button.attrs({type: 'submit'})`
    margin-top: 1.5vh;
    height: 5vh;
    background: linear-gradient(to right, #FF6489, #F9B24E );
    border: none;
    border-radius: 0.7em;
    font-size: 1.1em;
    font-weight: 700;
    color: #FFFFFF;
    width: 100%;
`
export const ListComment = styled.ul`
    margin-top: 3vh;
`