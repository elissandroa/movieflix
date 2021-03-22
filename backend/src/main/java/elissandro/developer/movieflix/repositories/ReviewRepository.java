package elissandro.developer.movieflix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import elissandro.developer.movieflix.entities.Review;

public interface ReviewRepository extends JpaRepository<Review, Long>{

}
