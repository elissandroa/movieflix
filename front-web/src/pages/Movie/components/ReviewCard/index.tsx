import './style.scss';
import Estrela from '../../../../core/assets/images/estrela.png';

type Props = {
    userReview?:string;
    review?: string;
}
const ReviewCard = ({userReview, review}:Props) => {
  
    
    return (
        <>
         <div className="user-and-star-aligment">
                <div className="review-star">
                    <img src={Estrela} alt="a"/><span className="review-user">{userReview}</span>
                </div>
            </div>
            <div className="review-box">
                   <span className="review-text">{review}</span>
            </div>
            
        </>
    );
}

export default ReviewCard;