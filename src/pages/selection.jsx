import Card from '../components/ui/Card.jsx';

const SelectionCards = () => {
    return (
    <div className='container'>
        <div className='left'>
            <Card imageName='student' buttonName='Student' path='/student' />
        </div>
        <div className='right'>
            <Card imageName='hr' buttonName='HR' path='/hr'/>
        </div>
    </div>
    );
}
 
export default SelectionCards;