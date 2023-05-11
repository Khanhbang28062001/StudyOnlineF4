package ctu.vn.backend.Service;

import ctu.vn.backend.DAO.NoteRepository;
import ctu.vn.backend.entity.Note;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NoteService {

    @Autowired
    private NoteRepository noteRepository;

    public Note getNoteById(Long id) {
        return noteRepository.findById(id).orElseThrow(() -> new NoteNotFoundException(id));
    }

    public Note createNote(Note note) {
        return noteRepository.save(note);
    }

    public Note updateNote(Long id, Note noteDetails) {
        Note note = noteRepository.findById(id).orElseThrow(() -> new NoteNotFoundException(id));
        note.setContent(noteDetails.getContent());
        note.setLesson(noteDetails.getLesson());
        note.setCourse(noteDetails.getCourse());
        return noteRepository.save(note);
    }

    public void deleteNoteById(Long id) {
        Note note = noteRepository.findById(id).orElseThrow(() -> new NoteNotFoundException(id));
        noteRepository.delete(note);
    }
}
