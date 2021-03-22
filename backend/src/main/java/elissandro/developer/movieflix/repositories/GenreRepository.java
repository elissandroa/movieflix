package elissandro.developer.movieflix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import elissandro.developer.movieflix.entities.Genre;

public interface GenreRepository extends JpaRepository<Genre, Long>{

}
