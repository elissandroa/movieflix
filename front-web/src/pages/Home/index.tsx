import { useEffect, useState } from "react";
import Navbar from "../../core/components/Navbar";
import { makePrivateRequest } from "../../core/utils/request";
import MovieCard from "../Movie/components/MovieCard";
import { Genre, MoviesResponse } from '../../core/types/Movie';
import './style.scss';
import { Link } from "react-router-dom";
import Pagination from "../../core/components/Pagination";

const Home = () => {
    const [moviesReponse, setMoviesResponse] = useState<MoviesResponse>();
    const [genres, setGenres] = useState<Genre[]>([]);
    const [genreId, setGenreId] = useState(1);
    const [activePage, setActivePage] = useState(0);



    useEffect(() => {
        const params = {
            page: activePage,
            linesPerPage:4
        }
        makePrivateRequest({ url: `/movies?genreId=${genreId}`, params })
            .then(response => setMoviesResponse(response.data));
    }, [genreId, activePage])

    useEffect(() => {
        makePrivateRequest({ url: "/genres" })
            .then(response => setGenres(response.data));
    }, [])

    return (
        <div className="justify-content-center ">
            <Navbar visible={true} />
            <div className="select-genre-container">
                <form className="select-genre">
                    <select className="select-genre-items" value={genreId} onChange={e => setGenreId(Number(e.target.value))} autoFocus={false}>
                        {genres.map(genre => (
                            <option
                                value={genre.id}
                                key={genre.id}>
                                {genre.name}</option>
                        ))
                        }
                    </select>
                 
                </form>
                <div className="movie-card-container">
                    {moviesReponse?.content.map(movie => (
                        <Link to={`movie/${movie.id}`} key={movie.id}>
                            <MovieCard title={movie.title} subTitle={movie.subTitle} imgUrl={movie.imgUrl} year={movie.year} />
                        </Link>
                    ))}
                </div>
                <div className="pagination-container">
                    {moviesReponse && 
                     <Pagination 
                     totalPages={moviesReponse.totalPages} 
                     activePage={activePage}
                     onChange={page => setActivePage(page)}
                    
                />}
                    
                </div>
            </div>
        </div>
    );
}

export default Home;