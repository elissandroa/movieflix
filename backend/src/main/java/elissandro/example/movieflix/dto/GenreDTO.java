package elissandro.example.movieflix.dto;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import elissandro.example.movieflix.entities.Genre;
import elissandro.example.movieflix.entities.Movie;

public class GenreDTO implements Serializable{
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String name;
	
	private Set<Movie> movies = new HashSet<>();
	
	public GenreDTO() {
	}

	public GenreDTO(Long id, String name) {
		this.id = id;
		this.name = name;
	}
	
	public GenreDTO(Genre entity) {
		id = entity.getId();
		name = entity.getName();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Set<Movie> getMovies() {
		return movies;
	}
}
