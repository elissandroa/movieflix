package elissandro.developer.movieflix.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import elissandro.developer.movieflix.entities.Genre;
import elissandro.developer.movieflix.entities.Movie;

public interface GenreRepository extends JpaRepository<Genre, Long>{
	
	@Query("SELECT obj FROM Movie obj WHERE :genre IS NULL OR obj.genre = :genre")
	Page<Movie>find(Genre genre, Pageable pageable);
}
