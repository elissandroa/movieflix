import './style.scss';
import Estrela from '../../../../core/assets/images/estrela.png';

type Props = {
    username?:string;
    review: string;
}
const ReviewCard = ({username, review}:Props) => {
  
    
    return (
        <>
         <div className="user-and-star-aligment">
                <div className="review-star">
                    <img src={Estrela} alt="a"/><span className="review-user">{username}</span>
                </div>
            </div>
            <div className="review-box">
                   <span className="review-text">{review}</span>
            </div>
            
        </>
    );
}

export default ReviewCard;