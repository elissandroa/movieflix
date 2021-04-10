import Navbar from "../../components/Navbar";
import MovieCard from "./components/MovieCard";
import './style.scss';

const Home = () => {
    return (
       <>       
       <Navbar visible={true} />
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
        </>
    );
}

export default Home;