import {Main, Logo, Title, FormLogin, InputEmail, InputPassword, ButtonContinue, ButtonCreateAccount} from './LoginStyle'
import logoLabenu from '../../assets/img/logo-labenu.svg'
import axios, { AxiosError } from "axios";
import { BASEURL } from '../../constants/BASEURL';
import { useForm } from '../../hooks/useForm';

export const LoginPage = () => {
    const [form, onChange] = useForm({ email: "", password: ""})

    const login = async (event) => {
        event.preventDefault()
        const body = {
            email: form.email,
            password: form.password
        }

        try {
            const result = await axios.post(
                BASEURL + '/users/login',
                body
            )
            
            localStorage.setItem('token', result.data.token)
            console.log(result.data)

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
            <Logo alt='logo-labenu' src={logoLabenu}/>
            <Title>O projeto de rede social da Labenu</Title>
            <FormLogin onSubmit={login}>
                <InputEmail placeholder='E-mail' name='email' value={form.name} onChange={onChange}/>
                <InputPassword placeholder='Senha' name='password' value={form.password} onChange={onChange}/>
                <ButtonContinue>Continuar</ButtonContinue>
            </FormLogin>
            <ButtonCreateAccount>Crie uma conta!</ButtonCreateAccount>
        </Main>
    )
}