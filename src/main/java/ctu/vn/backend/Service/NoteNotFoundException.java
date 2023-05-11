package ctu.vn.backend.Service;

public class NoteNotFoundException extends RuntimeException {
    public NoteNotFoundException(Long message) {
        super(String.valueOf(message));
    }
}
