package ctu.vn.backend.Service;

public class LessonNotFoundException extends RuntimeException {
    public LessonNotFoundException(Long id) {
        super("Lesson not found with id: " + id);
    }
}
