package ctu.vn.backend.Service;

public class CourseNotFoundException extends RuntimeException {
    public CourseNotFoundException(String id) {
        super("Could not find course with id: " + id);
    }
}
