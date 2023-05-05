
import { Component } from '@angular/core';
import { GetBlogService } from '../Service/get-blog.service';
import { HttpServerService } from '../Service/http-server.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent {
  public description = "Tieu de";
  public Content = "Content ne";
  public img_url = "";

  constructor(private httpServerService: HttpServerService) {
    this.httpServerService.getSubmitBlog().subscribe((data) => {
      this.description = data;
      console.log(data);
    });
    
  }

}
