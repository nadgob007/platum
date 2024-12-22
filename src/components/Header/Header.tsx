import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png' 
import './Header.scss'

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
            <nav role="navigation">
                <div className="menuToggle">
                    <input type="checkbox" />

                    <span></span>
                    <span></span>
                    <span></span>

                    <ul className="menu">
                        <a href="/"><li>Главная</li></a>
                        <a href="/ProductCatalog"><li>ТХВ РС</li></a>
                        <a href="/contacts"><li>Контакты</li></a>
                        <a href="/about"><li>О нас</li></a>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
}