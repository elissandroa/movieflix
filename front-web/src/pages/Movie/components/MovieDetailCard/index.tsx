import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Navbar from '../../../../core/components/Navbar';
import { Movie } from '../../../../core/types/Movie';
import { makePrivateRequest } from '../../../../core/utils/request';
import ReviewCard from '../ReviewCard';
import { useForm } from 'react-hook-form';
import './style.css';
import MovieInfoLoader from '../MovieInfoLoader';
import MovieDetailLoader from '../MovieDetailLoader';
import MovieReviewLoader from '../MovieReviewLoader';
import { User } from '../../../../core/types/User';


type ParamsType = {
    movieId: string;
}

type FormStates = {
    text: string;
    movieId: number;
}

const MovieDetailCard = () => {
    const { movieId } = useParams<ParamsType>();
    const [movies, setMovies] = useState<Movie>();
    const [users, setUsers] = useState<User>();
    const { register, handleSubmit } = useForm<FormStates>();
    const [isLoading, setIsloading] = useState(false);
    const history = useHistory();

    useEffect(() => {
        setIsloading(true);
        makePrivateRequest({ url: `/movies/${movieId}` })
            .then(response => setMovies(response.data))
            .finally(() => setIsloading(false));
    }, [movieId]);


    const onSubmit = (data: FormStates) => {

        makePrivateRequest({ url: "/reviews", method: 'POST', data })
            .then(response => {
                alert('Obrigado por avaliar');
                history.go(0);
            })
            .catch(() => {
                alert("O comentário não pode ficar em branco.");
            })

    }

    return (


        <div className=" movie-justify-content">
            <Navbar visible={true} />


            <div className="row movie-container" >

                {isLoading ? <MovieInfoLoader /> : (

                    <>
                        <div className="col-6 ">
                            <div className="movie-photo-container">
                                <img src={movies?.imgUrl} alt={movies?.title} className="movie-photo-details" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="movie-description">
                                <h1 className="movie=description-title">{movies?.title}</h1>
                                <h3 className="movie-description-year">{movies?.year}</h3>
                                <p className="movie-description-subTitle">{movies?.subTitle} </p>
                                <textarea className="movie-description-synopsis" value={movies?.synopsis}></textarea>
                                
                            </div>
                        </div>

                    </>
                )}


            </div>



               

            <div className="form-review-container">
           

                {isLoading ? <MovieDetailLoader /> : (
                    <>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("text")} type="text" className="form-input-reviews" placeholder="Insira aqui sua avaliação" />
                            <input {...register("movieId", { required: true })} value={movieId} type="hidden" />

                            <div className="button-container" >
                                <button className="button-salve-reviews">
                                    SALVAR AVALIAÇÃO
                        </button>
                            </div>
                        </form>
                        <div className="d-flex justify-content-center">
                        </div>
                    </>

                )}





            </div>

            <div className="reviews-container">
              {isLoading ? <MovieReviewLoader /> : (
                <>  
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

              </>  
              )}  
                      

            </div>

        </div>
    );
}

export default MovieDetailCard;