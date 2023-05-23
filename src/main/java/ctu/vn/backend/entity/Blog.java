package ctu.vn.backend.entity;

// import java.sql.Time;
import java.util.Date;

import javax.persistence.*;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "blog")
@Getter
@Setter
public class Blog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "user_id")
    private int user_id;

    @Column(nullable = false, name = "description")
    private String description;

    @Column(nullable = true, name = "image_url")
    private String image_url;

    @Column(nullable = false, name = "content")
    private String content;

    @Column(nullable = true, name = "total_favorite")
    private int total_favorite;

    @Column(nullable = true, name = "total_comment")
    private int total_comment;

    @Temporal(TemporalType.DATE)
    @Column(nullable = true, name = "date_created")
    private Date date_created;

    public Blog() {

    }

}