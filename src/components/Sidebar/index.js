import { Link } from 'react-router-dom'
import './index.scss'
import logo from '../../images/Logo.png'
import logoSubtitle from '../../images/Sublogo.png'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={logo} alt ='logo' />
            <img classname = 'sub-logo' src={logoSubtitle} alt ='sub-logo' />
        </Link>
        <nav>
            <NavLink exact ="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact ="true" activeclassname="active" className = "about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact ="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/mark-marus-b28a34235/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/MarkMarus'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
                </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://t.me/cvltyxd'>
                    <FontAwesomeIcon icon={faTelegram} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar