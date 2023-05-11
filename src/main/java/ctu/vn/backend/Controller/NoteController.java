package ctu.vn.backend.Controller;

import ctu.vn.backend.DAO.NoteRepository;
import ctu.vn.backend.Service.NoteNotFoundException;
import ctu.vn.backend.entity.Note;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/note")
public class NoteController {

    @Autowired
    private NoteRepository noteRepository;

    @GetMapping("/")
    public List<Note> getAllNotes() {
        return noteRepository.findAll();
    }
    @GetMapping("/{id}")
    public Note getNoteById(@PathVariable("id") Long id) {
        return noteRepository.findById(id).orElseThrow(() -> new NoteNotFoundException(id));
    }

    @PostMapping("/")
    public Note createNote(@RequestBody Note note) {
        return noteRepository.save(note);
    }

    @PutMapping("/{id}")
    public Note updateNote(@PathVariable("id") Long id, @RequestBody Note noteDetails) {
        Note note = noteRepository.findById(id).orElseThrow(() -> new NoteNotFoundException(id));
        note.setContent(noteDetails.getContent());
        note.setLesson(noteDetails.getLesson());
        note.setCourse(noteDetails.getCourse());
        return noteRepository.save(note);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteNote(@PathVariable("id") Long id) {
        Note note = noteRepository.findById(id).orElseThrow(() -> new NoteNotFoundException(id));
        noteRepository.delete(note);
        return ResponseEntity.ok().build();
    }
}
