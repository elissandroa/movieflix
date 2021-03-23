package elissandro.developer.movieflix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import elissandro.developer.movieflix.entities.User;

public interface UserRepository extends JpaRepository<User, Long>{
	User findByEmail(String email);
}
