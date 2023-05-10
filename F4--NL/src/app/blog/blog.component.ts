import { blog, BlogModelModule } from './../model/blog-model/blog-model.module';
import { Component, EventEmitter, Output } from '@angular/core';
// import { BlogModelModule } from '../model/blog-model/blog-model.module';
import { GetBlogService } from '../Service/get-blog.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  isDropDownOpen: boolean = false;
  isDropDownOpenNotification: boolean = false;
  isDropDownOpenBlog: boolean = false;
  public TenEmail = "bang";
  public Email = "bang-Email";
  openNavProfile(): void {
    this.isDropDownOpen = !this.isDropDownOpen;
    this.isDropDownOpenNotification = false;
    this.isDropDownOpenBlog = false;
  }
  openNavNotification(): void {
    this.isDropDownOpenNotification = !this.isDropDownOpenNotification;
    this.isDropDownOpen = false;
    this.isDropDownOpenBlog = false;
  }
  openNavBlog(): void {
    this.isDropDownOpenBlog = !this.isDropDownOpenBlog;
    this.isDropDownOpen = false;
    this.isDropDownOpenNotification = false;
  }

  blogs: BlogModelModule[] = [];
  public blogId!: Number;
  constructor(
    private getBlogService: GetBlogService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // this.route.queryParams.subscribe(params => {
    //   this.blogId = params['id'];
    //   // console.log(this.blogId);
    // });
  }

  public ngOnInit(): void {
    this.getBlogService.getAllSubmitBlog().subscribe((data) => {
      this.blogs = data;
      console.log("blog ne",this.blogs)
    })
  }

  // onBlogClick(blogId: Number) {
  //   this.router.navigate(['/blog', blogId]);
  // }
  

 
}