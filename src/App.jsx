import './App.css';
import NavigationBar from './components/NavigationBar.jsx';
import Card from './components/ui/Card.jsx';

function App() {

  return (
    <div className='main-container'>
      <div className='nav-wrapper'> 
        <NavigationBar/>
      </div>
      <div className='container'>
        <div className='left'>
          <Card imageName='student' buttonName='Student' />
        </div>
        <div className='right'>
          <Card imageName='hr' buttonName='HR' />
        </div>
      </div>
    </div>
  )
}

export default App;
