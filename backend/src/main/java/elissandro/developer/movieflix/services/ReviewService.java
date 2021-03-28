package elissandro.developer.movieflix.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import elissandro.developer.movieflix.dto.ReviewDTO;
import elissandro.developer.movieflix.entities.Movie;
import elissandro.developer.movieflix.entities.Review;
import elissandro.developer.movieflix.entities.User;
import elissandro.developer.movieflix.repositories.MovieRepository;
import elissandro.developer.movieflix.repositories.ReviewRepository;
import elissandro.developer.movieflix.repositories.UserRepository;
import elissandro.developer.movieflix.services.exceptions.DatabaseException;
import elissandro.developer.movieflix.services.exceptions.ResourceNotFoundException;

@Service
public class ReviewService {
	
	@Autowired 
	private ReviewRepository repository;
	
	@Autowired 
	private MovieRepository movieRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	
	
	@Transactional(readOnly = true)	
	public List<ReviewDTO> findAll(){
			List<Review> list = repository.findAll();
			return list.stream().map(x -> new ReviewDTO(x)).collect(Collectors.toList());
		}
	
	@Transactional(readOnly = true)
	public ReviewDTO findById(Long id) {
		Optional<Review> obj = repository.findById(id);
		Review entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found "));
		return new ReviewDTO(entity);
	}
		
	
	@Transactional
	public ReviewDTO insert(ReviewDTO dto) {
		Movie movie = movieRepository.getOne(dto.getId());
		User user = userRepository.getOne(dto.getUserId());
		Review review = new Review(null, dto.getText(), movie, user);
		review = repository.save(review);
		return new ReviewDTO(review);
	}
	
	@Transactional
	public ReviewDTO update(Long id, ReviewDTO dto) {
		try {
			Review entity = repository.getOne(id);
			copyDtoToEntity(dto, entity);
			entity = repository.save(entity);
			return new ReviewDTO(entity);
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Id not found " + id);
	
		}
	}

	public void delete(Long id) {
		try {
			repository.deleteById(id);
		}
		catch(EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Id not found "+ id);
		}
		catch(DataIntegrityViolationException e ) {
			throw new DatabaseException("Integrity violation");
			
		}
		
	}
	
	private void copyDtoToEntity(ReviewDTO dto, Review entity) {
		entity.setText(dto.getText());
		entity.setMovie(movieRepository.getOne(dto.getId()));
		entity.setUser(userRepository.getOne(dto.getUserId()));
	}
}
