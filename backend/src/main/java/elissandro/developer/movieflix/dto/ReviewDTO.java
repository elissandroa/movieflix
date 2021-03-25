package elissandro.developer.movieflix.dto;

import elissandro.developer.movieflix.entities.Review;

public class ReviewDTO {
	
	private Long id;
	private String text;
	private Long movieId;
	private Long userId;
	
	private MovieDTO movie;
	
	private UserDTO user;
	
	public ReviewDTO() {
	}

	public ReviewDTO(Long id, String text) {
		this.id = id;
		this.text = text;
		this.movieId = movie.getId();
		this.userId = user.getId();
	}
	
	public ReviewDTO(Review entity) {
		id = entity.getId();
		this.text = entity.getText();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public MovieDTO getMovie() {
		return movie;
	}

	public void setMovie(MovieDTO movie) {
		this.movie = movie;
	}

	public Long getMovieId() {
		return movieId;
	}

	public void setMovieId(Long movieId) {
		this.movieId = movieId;
	}

	public UserDTO getUser() {
		return user;
	}

	public void setUser(UserDTO user) {
		this.user = user;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}
}
