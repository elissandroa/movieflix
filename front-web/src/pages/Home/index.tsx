import { useEffect, useState } from "react";
import Navbar from "../../core/components/Navbar";
import Pagination from "../../core/components/Pagination";
import { makePrivateRequest } from "../../core/utils/request";
import MovieCard from "../Movie/components/MovieCard";
import { MoviesResponse } from '../../core/types/Movies';
import './style.scss';
import { Link } from "react-router-dom";

const Home = () => {
    const [moviesReponse, setMoviesResponse] = useState<MoviesResponse>();
                  
    useEffect(()=>{
        const params = {
            page:0,
            linesPerPage: 8
        }
         makePrivateRequest({url: '/movies', params})
        .then(response => setMoviesResponse(response.data));
              
    },[])
    
   
    return (
       
       <div className="justify-content-center ">  
        <Navbar visible = {true}/>      
        <div className="select-genre-container">
              <form className="select-genre">
                   
                       <select className="select-genre-items">
                            <option value="Aventura">Aventura</option>
                       </select>
               
              </form>
              <div className="movie-card-container">
            {moviesReponse?.content.map(movie => (
                <Link to={`movie/${movie.id}`}  key={movie.id}>
                    <MovieCard title={movie.title} subTitle={movie.subTitle} imgUrl={movie.imgUrl} year={movie.year} />
                </Link>
            ))}
        </div>
        <div className="movie-pagination-container">  
            <Pagination item='1' />
            
         </div>   


        </div>
       
        

        </div>
    );
}

export default Home;