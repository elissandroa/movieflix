package elissandro.example.movieflix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import elissandro.example.movieflix.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long>{

}
