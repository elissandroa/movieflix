import Pagination from "../../core/components/Pagination";
import MovieCard from "../Movie/components/MovieCard";
import './style.scss';

const Home = () => {
    return (
       <>       
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
            
        </div>
         <div className="movie-pagination-container">  
            <Pagination />
         </div>   

        </>
    );
}

export default Home;