package ctu.vn.backend.entity;

import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "course")
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String description;

    @Column(name = "image_url")
    private String imageUrl;

    private int subscribers;

    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date dateCreated;


    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;

    // Getter and setter for id
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    // Getter and setter for title
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }

    // Getter and setter for description
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }

    // Getter and setter for imageUrl
    public String getImageUrl() {
        return imageUrl;
    }
    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    // Getter and setter for subscribers
    public int getSubscribers() {
        return subscribers;
    }
    public void setSubscribers(int subscribers) {
        this.subscribers = subscribers;
    }

    // Getter and setter for dateCreated
    public Date getDateCreated() {
        return dateCreated;
    }
    public void setDateCreated(Date dateCreated) {
        this.dateCreated = dateCreated;
    }

    // Getter and setter for user
    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }}
