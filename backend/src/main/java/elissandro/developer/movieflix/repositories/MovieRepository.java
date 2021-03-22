package elissandro.developer.movieflix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import elissandro.developer.movieflix.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long>{

}
