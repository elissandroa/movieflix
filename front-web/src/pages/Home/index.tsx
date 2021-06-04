import Navbar from "../../core/components/Navbar";
import Pagination from "../../core/components/Pagination";
import MovieCard from "../Movie/components/MovieCard";
import './style.scss';

const Home = () => {
    return (
       
       <div>  
        <Navbar visible = {true}/>      
        <div className="select-genre-container">
              <form className="select-genre">
                  <select className="select-genre-items">
                    <option value="Aventura">Aventura</option>
                    <option value="Acão">Acão</option>
                    <option value="Romance">Romance</option>
                    <option value="Comédia">Comédia</option>
                  </select>
              </form>
        </div>
        <div className="movie-card-container">
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            
        </div>
         <div className="movie-pagination-container">  
            <Pagination item='1' />
            <Pagination item='2' />
            <Pagination item='3' />
            <Pagination item='4' />
            <Pagination item='5' />
            <Pagination item='6' />
            <Pagination item='7' />
            <Pagination item='8' />
         </div>   

        </div>
    );
}

export default Home;