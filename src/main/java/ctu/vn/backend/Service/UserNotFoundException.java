package ctu.vn.backend.Service;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(String userId) {
        super("Could not find user " + userId);
    }
}
