import { NavLink } from 'react-router-dom';
import '../styles/components/NavigationBar.css';

const NavigationBar = () => {
    return ( 
        <>
            <div className="nav-bar">
                <div className="nav-bar-title">Resume Evaluation System</div>
                <div className="nav-bar-menu">
                    <NavLink to="/"><span className="material-symbols-outlined nav-bar-menu-items">home</span></NavLink>
                    <NavLink to="/"><span className="material-symbols-outlined nav-bar-menu-items">person</span></NavLink>
                </div>
            </div>
        </>
     );
}
 
export default NavigationBar;