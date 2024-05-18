import '../../styles/components/Card.css';
import studentimg from '../../assets/student.jpg';
import hrimg from '../../assets/HR.jpg';
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
    const navigate = useNavigate();
    const map = {
        student : studentimg,
        hr : hrimg
    };
    let imgurl = map[props.imageName];
    const style = { 
        backgroundImage: `url(${imgurl})`,
    };
    const handleClick = () => {
        console.log('clicked');
        navigate(props.path);
    }
    return ( 
        <div className="card">
            <div className='temp'>
                <div className="img-wrapper" style={style}></div>
                <img className='card-img' src={`${imgurl}`} />
            </div>
            <div className="button-wrapper">
                <button onClick={handleClick} className='card-button'>{props.buttonName}</button>
            </div>
        </div>
     );
}
 
export default Card;