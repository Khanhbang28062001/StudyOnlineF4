import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetBlogService } from '../Service/get-blog.service';
import { UserIDService } from '../Service/user-id.service';
import { UserService } from '../Service/user.service';
import { UserModule } from '../model/user.module';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  constructor(
    private getBlogService: GetBlogService,
    private route: ActivatedRoute,
    private router: Router,
    private userIdService: UserIDService,
    private userService: UserService
  ) {
  }
  userId: Number = 0;
  User: UserModule = new UserModule(0, "", "", "", 0,"");
  
  public ngOnInit(): void {
    this.userIdService.currentUserId.subscribe(userId => this.userId = userId);
    this.userService.getUserById(this.userId).subscribe((data) => {
      this.User = data;
      console.log("Lay du lieu role id route roi ne!!!!!! " + this.User.idrole);
    })

  }
}
