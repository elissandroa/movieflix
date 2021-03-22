package elissandro.example.movieflix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import elissandro.example.movieflix.entities.Genre;

public interface GenreRepository extends JpaRepository<Genre, Long>{

}
