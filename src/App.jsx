import './App.css';
import NavigationBar from './components/NavigationBar.jsx';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div className='main-container'>
      <div className='nav-wrapper'> 
        <NavigationBar/>
      </div>
      <Outlet />
    </div>
  )
}

export default App;
