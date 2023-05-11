package ctu.vn.backend.Service;

import ctu.vn.backend.DAO.LessonRepository;
import ctu.vn.backend.entity.Lesson;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LessonService {

    private final LessonRepository lessonRepository;

    public LessonService(LessonRepository lessonRepository) {
        this.lessonRepository = lessonRepository;
    }

    public Lesson createLesson(Lesson lesson) {
        return lessonRepository.save(lesson);
    }

    public Lesson updateLesson(Long id, Lesson lessonDetails) {
        Lesson lesson = getLessonById(id);
        lesson.setTitle(lessonDetails.getTitle());
        lesson.setVideoUrl(lessonDetails.getVideoUrl());
        lesson.setCourse(lessonDetails.getCourse());
        return lessonRepository.save(lesson);
    }

    public List<Lesson> getAllLessons() {
        return lessonRepository.findAll();
    }

    public Lesson getLessonById(Long id) {
        return lessonRepository.findById(id).orElseThrow(() -> new LessonNotFoundException(id));
    }

    public void deleteLesson(Long id) {
        lessonRepository.deleteById(id);
    }
}
