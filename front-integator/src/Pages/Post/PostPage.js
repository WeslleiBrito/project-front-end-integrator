import {Main, FormPost, InputContent, ButtonPost, ListPost} from './PostStyle'


export const PostPage = () => {

    return(
        <Main>
            <FormPost>
                <InputContent placeholder='Escreva seu post...'/>
                <ButtonPost value={"Postar"}/>
            </FormPost>
            <ListPost>
                
            </ListPost>
        </Main>
    )
}
