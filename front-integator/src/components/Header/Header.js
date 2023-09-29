import {NavHeader, MiniLogo, LinkEnter} from './HeaderStyle'
import miniLogo from '../../assets/img/logo-labenu.svg'

export const Header = () => {

    return(
        <NavHeader>
            <MiniLogo alt='Logo labenu' src={miniLogo}/>
            <LinkEnter>Entrar</LinkEnter>
        </NavHeader>
    )
}