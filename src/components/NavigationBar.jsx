import '../styles/components/NavigationBar.css';

const NavigationBar = () => {
    return ( 
        <>
            <div className="nav-bar">
                <div className="nav-bar-title">Resume Evaluation System</div>
                <div className="nav-bar-menu">
                    <a href="/"><span class="material-symbols-outlined nav-bar-menu-items">home</span></a>
                    <a href="/"><span class="material-symbols-outlined nav-bar-menu-items">person</span></a>
                </div>
            </div>
        </>
     );
}
 
export default NavigationBar;