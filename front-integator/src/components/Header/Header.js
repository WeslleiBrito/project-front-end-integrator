import { NavHeaderPost, MiniLogo, ButtonEnter, ButtonLogout, Close, HeaderComponent } from './HeaderStyle'
import miniLogo from '../../assets/img/mini-logo.svg'
import { useNavigate } from 'react-router-dom';
import { goLogin, goPost } from '../../Routes/coordinator';


export const Header = (props) => {
    const page = props.namePage
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('idUser')
        goLogin(navigate)
    }

    const closePage = () => {
        goPost(navigate)
    }

    const configHeader = {
        signup: <NavHeaderPost $namePage={"signup"}>
            <MiniLogo alt='Logo labenu' src={miniLogo} />   
            <ButtonEnter onClick={() => goLogin(navigate)}>Entrar</ButtonEnter>
        </NavHeaderPost>,

        post: <NavHeaderPost $namePage={"post"}>
            <MiniLogo alt='Logo labenu' src={miniLogo} />
            <ButtonLogout onClick={logout}>Logout</ButtonLogout>
        </NavHeaderPost>,

        comment: <NavHeaderPost>
            <Close closePage={closePage}/>
            <MiniLogo alt='Logo labenu' src={miniLogo} />
            <ButtonLogout onClick={logout}>Logout</ButtonLogout>
        </NavHeaderPost>
    }

    return (
        <HeaderComponent $namePage={page}>
            {configHeader[page]}
        </HeaderComponent>
    )
}