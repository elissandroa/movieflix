package elissandro.developer.movieflix.dto;

import java.io.Serializable;

import elissandro.developer.movieflix.entities.Review;
import elissandro.developer.movieflix.entities.User;

public class ReviewDTO implements Serializable{
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String text;
	
	private UserDTO user;
	private Long userId;	
	
	public ReviewDTO() {
	}

	public ReviewDTO(Long id, String text, User user) {
		this.id = id;
		this.text = text;
	}
	
	public ReviewDTO(Review entity) {
		id = entity.getId();
		text = entity.getText();
		this.user = new UserDTO(entity.getUser());
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

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public UserDTO getUser() {
		return user;
	}

	public void setUser(UserDTO user) {
		this.user = user;
	}
}
