import {Main, Title, FormSignup, InputNickname, InputEmail, InputPassword, ContractText, Link, CheckTerms, LableCheck} from './SignupStyle'
import {Header} from '../../components/Header/Header'

export const SignupPage = () => {

    return(
        <Main>
            <Header></Header>
            <Title>
                {"Olá, boas vindas ao LabEddit ;)"}  
            </Title>
            <FormSignup>
                <InputNickname placeholder="Apelido"/>
                <InputEmail placeholder='E-mail'/>
                <InputPassword placeholder='Senha'/>
                <ContractText>
                    Ao continuar, você concorda com o nosso <Link href='#'>Contrato de usuário</Link> e nossa <Link href='#'>Política de Privacidade</Link>
                </ContractText>
                <CheckTerms id='checkTerms'/>
                <LableCheck htmlFor='checkTerms'>Eu concordo em receber emails sobre coisas legais no Labeddit</LableCheck>
            </FormSignup>
        </Main>
    )
}