package elissandro.developer.movieflix.services;

import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import elissandro.developer.movieflix.dto.MovieDTO;
import elissandro.developer.movieflix.entities.Movie;
import elissandro.developer.movieflix.repositories.MovieRepository;
import elissandro.developer.movieflix.services.exceptions.DatabaseException;
import elissandro.developer.movieflix.services.exceptions.ResourceNotFoundException;

@Service
public class MovieService {
	
	@Autowired MovieRepository repository;
	
	@Transactional(readOnly = true)	
	public Page<MovieDTO> findAllPaged(PageRequest pageRequest){
			Page<Movie> list = repository.findAll(pageRequest);
			return list.map(x -> new MovieDTO(x));
		}
	
	@Transactional(readOnly = true)
	public MovieDTO findById(Long id) {
		Optional<Movie> obj = repository.findById(id);
		Movie entity = obj.get();
		return new MovieDTO(entity);
	}
	
	@Transactional
	public MovieDTO insert(MovieDTO dto) {
		Movie entity = new Movie();
		copyDtoToEntity(dto, entity);
		entity = repository.save(entity);
		return new MovieDTO(entity);
	}
	
	@Transactional
	public MovieDTO update(Long id, MovieDTO dto) {
		try {
			Movie entity = repository.getOne(id);
			copyDtoToEntity(dto, entity);
			entity = repository.save(entity);
			return new MovieDTO(entity);
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
	
	private void copyDtoToEntity(MovieDTO dto, Movie entity) {
		entity.setImgUrl(dto.getImgUrl());
		entity.setSubTitle(dto.getSubTitle());
		entity.setSynopsis(dto.getSynopsis());
		entity.setTitle(dto.getTitle());
		entity.setYear(dto.getYear());
	}
}
