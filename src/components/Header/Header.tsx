import './Header.scss'

import { NavLink } from 'react-router-dom';

import logo from '../../assets/images/logo.png' 

export const Header = () => {
    return <header>
        <div className="Header">
            <div className='logo'>
                <NavLink to='/'>
                    <img src={logo} alt='логотип'/>
                </NavLink>
            </div>
            <div className='navigation'>
                <NavLink  className="nav-link" to='/'> Главная </NavLink>
                <NavLink  className="nav-link" to='/ProductCatalog'> ТХВ РС </NavLink>
                <NavLink  className="nav-link" to='/contacts'> Контакты </NavLink>
                <NavLink  className="nav-link" to='/about'> О нас </NavLink>
            </div>
        </div>
    </header>
}