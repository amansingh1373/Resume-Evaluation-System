import '../../styles/components/Card.css';
import studentimg from '../../assets/student.jpg';
import hrimg from '../../assets/HR.jpg';

const Card = (props) => {
    const map = {
        student : studentimg,
        hr : hrimg
    };
    let imgurl = map[props.imageName];
    const style = { 
        backgroundImage: `url(${imgurl})`,
    };
    return ( 
        <div className="card">
            <div className='temp'>
                <div className="img-wrapper" style={style}></div>
                <img className='card-img' src={`${imgurl}`} />
            </div>
            <div className="button-wrapper">
                <button className='card-button'>{props.buttonName}</button>
            </div>
        </div>
     );
}
 
export default Card;