package ctu.vn.backend.Controller;

import ctu.vn.backend.Service.LessonService;
import ctu.vn.backend.entity.Lesson;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/lesson")
public class LessonController {

    private final LessonService lessonService;

    public LessonController(LessonService lessonService) {
        this.lessonService = lessonService;
    }

    @PostMapping("/")
    public Lesson createLesson(@RequestBody Lesson lesson) {
        return lessonService.createLesson(lesson);
    }

    @PutMapping("/{id}")
    public Lesson updateLesson(@PathVariable Long id, @RequestBody Lesson lessonDetails) {
        return lessonService.updateLesson(id, lessonDetails);
    }

    @GetMapping("/")
    public List<Lesson> getAllLessons() {
        return lessonService.getAllLessons();
    }

    @GetMapping("/{id}")
    public Lesson getLessonById(@PathVariable Long id) {
        return lessonService.getLessonById(id);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteLesson(@PathVariable Long id) {
        lessonService.deleteLesson(id);
        return ResponseEntity.ok().build();
    }
}
