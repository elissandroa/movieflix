import { Link } from 'react-router-dom';
import './style.scss';

const MovieCard = () => {
    return (
        <div className="movie-card-box">
          <Link to="/movie">
            <img src="https://www.themoviedb.org/t/p/original/h2kcFAIdzxdDGe3BOuG4i1ikjp0.jpg" alt="Vídeo" className="movie-photo"></img>
            </Link>
          <h2 className="movie-card-title">Mulher Maravilha 1984 </h2>  
          <h3 className="movie-card-year">2020</h3>
          <p className="movie-card-subTitle">Uma nova era de maravilhas começa</p>
         
        </div>
    );
}

export default MovieCard;