import { NavHeader, MiniLogo, ButtonEnter, ButtonLogout, Close } from './HeaderStyle'
import miniLogo from '../../assets/img/logo-labenu.svg'
import { useNavigate } from 'react-router-dom';
import { goLogin, goPost } from '../../Routes/coordinator';


export const Header = (props) => {
    const page = props.namePage
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem('token')
        goLogin(navigate)
    }

    const closePage = () => {
        goPost(navigate)
    }

    const configHeader = {
        signup: <>
            <MiniLogo alt='Logo labenu' src={miniLogo} />   
            <ButtonEnter onClick={() => goLogin(navigate)}>Entrar</ButtonEnter>
        </>,

        post: <>
            <MiniLogo alt='Logo labenu' src={miniLogo} />
            <ButtonLogout onClick={logout}>Logout</ButtonLogout>
        </>,

        comment: <>
            <Close closePage={closePage}/>
            <MiniLogo alt='Logo labenu' src={miniLogo} />
            <ButtonLogout onClick={logout}>Logout</ButtonLogout>
        </>
    }

    return (
        <NavHeader>
            {configHeader[page]}
        </NavHeader>
    )
}