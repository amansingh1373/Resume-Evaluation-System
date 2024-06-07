import { NavLink } from 'react-router-dom';
import '../styles/components/NavigationBar.css';
import { useAuth } from '../context/authContext'
import { doSignOut } from '../firebase/auth'


const NavigationBar = () => {
    const { userLoggedIn } = useAuth()
    return ( 
        <>
            <div className="nav-bar">
                <div className="nav-bar-title">Resume Evaluation System</div>
                <div className="nav-bar-menu">
                    <NavLink to="/"><span className="material-symbols-outlined nav-bar-menu-items">home</span></NavLink>
                    {
                        userLoggedIn ?
                        <>
                            <button onClick={() => { doSignOut().then(() => { navigate('/login') }) }} className='check-button1' >Logout</button>
                        </>
                        :
                        <>
                            <NavLink to="/login"><span className='check-button login-register-button'>Login / Register</span></NavLink>
                        </>
                    }
                </div>
            </div>
        </>
     );
}
 
export default NavigationBar;