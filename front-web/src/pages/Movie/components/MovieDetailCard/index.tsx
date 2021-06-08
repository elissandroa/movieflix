import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navbar from '../../../../core/components/Navbar';
import { Movie } from '../../../../core/types/Movie';
import { makePrivateRequest } from '../../../../core/utils/request';
import ReviewCard from '../ReviewCard';
import './style.css';

type ParamsType = {
    movieId: string;
}

const MovieDetailCard = () => {
    const { movieId } = useParams<ParamsType>();
    const [movies, setMovies] = useState<Movie>();





    useEffect(() => {
        makePrivateRequest({ url: `/movies/${movieId}` })
            .then(response => setMovies(response.data))
    }, [movieId]);




    return (
        <div className=" movie-justify-content">
            <Navbar visible={true} />
            <div className="row movie-container" >
                <div className="col-6 ">
                    <div className="movie-photo-container">
                        <img src={movies?.imgUrl} alt={movies?.title} className="movie-photo-details" />
                    </div>
                </div>
                <div className="col-6">
                    <div className="movie-description">
                        <h1 className="movie=description-title">{movies?.title}</h1>
                        <h3 className="movie-description-year">{movies?.year}</h3>
                        <p className="movie-description-subTitle">{movies?.subTitle}</p>
                        <textarea className="movie-description-synopsis" value={movies?.synopsis}></textarea>
                    </div>
                </div>
            </div>
            <div className="form-review-container">
                <form action="">
                    <input type="text" className="form-input-reviews" placeholder="Insira aqui sua avaliação" />
                    <div className="button-container" >
                        <button className="button-salve-reviews">
                            SALVAR AVALIAÇÃO
                        </button>
                    </div>
                </form>
            </div>

            <div className="reviews-container">
                <div>

                    {movies?.reviews.map(review => (
                        <ReviewCard
                            key={review.id}
                            review={review.text}
                            userReview={review.user.name}
                        />
                    ))}

                    <div className="space-end-page"></div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetailCard;