package ctu.vn.backend.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ctu.vn.backend.DAO.CourseRepository;
import ctu.vn.backend.DAO.UserRepository;
import ctu.vn.backend.entity.Course;

@Service
public class CourseService {
    @Autowired
    private CourseRepository courseRepository;

    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    public Course getCourseById(Long id) {
        Optional<Course> course = courseRepository.findById(id);
        if (course.isPresent()) {
            return course.get();
        } else {
            throw new CourseNotFoundException("Course not found with id " + id);
        }
    }

    @Autowired
    private UserRepository userRepository;

    public Course createCourse(Course course) {
        return courseRepository.save(course);
    }

    public Course updateCourse(Long id, Course courseDetails) {
        Course course = getCourseById(id);
        course.setTitle(courseDetails.getTitle());
        course.setDescription(courseDetails.getDescription());
        course.setImageUrl(courseDetails.getImageUrl());
        course.setSubscribers(courseDetails.getSubscribers());
        course.setUser(courseDetails.getUser());
        return courseRepository.save(course);
    }


    public void deleteCourse(Long id) {
        courseRepository.deleteById(id);
    }
}
