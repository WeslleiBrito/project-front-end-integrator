import {Main, Logo, Title, FormLogin, InputEmail, InputPassword, ButtonContinue, ButtonCreateAccount} from './LoginStyle'
import logoLabenu from '../../assets/img/logo-labenu.svg'


export const LoginPage = () => {

    return(
        <Main>
            <Logo alt='logo-labenu' src={logoLabenu}/>
            <Title>O projeto de rede social da Labenu</Title>
            <FormLogin>
                <InputEmail placeholder='E-mail'/>
                <InputPassword placeholder='Senha'/>
                <ButtonContinue value={"Continuar"}/>
            </FormLogin>
            <ButtonCreateAccount>Crie uma conta!</ButtonCreateAccount>
        </Main>
    )
}