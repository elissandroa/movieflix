package elissandro.example.movieflix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import elissandro.example.movieflix.entities.Review;

public interface ReviewRepository extends JpaRepository<Review, Long>{

}
