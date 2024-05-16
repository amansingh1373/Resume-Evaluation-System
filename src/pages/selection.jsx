import Card from '../components/ui/Card.jsx';

const SelectionCards = () => {
    return (
    <div className='container'>
        <div className='left'>
        <Card imageName='student' buttonName='Student' />
        </div>
        <div className='right'>
        <Card imageName='hr' buttonName='HR' />
        </div>
    </div>
    );
}
 
export default SelectionCards;