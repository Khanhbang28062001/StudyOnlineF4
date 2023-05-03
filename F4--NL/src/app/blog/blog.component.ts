import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../Service/common.service';
import { HttpServerService } from '../Service/http-server.service';

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

  public description = "";
  public content = "";
  
  public formData= this.formBuilder.group({
    user_id:[3],
    description:['',Validators.required],
    content:['',Validators.required],
    // (so truong du lieu trong ban)
  });
  constructor(
    private common:CommonService,
    private formBuilder: FormBuilder,
    private httpServerService:HttpServerService 
    ) { }
    public submitBlog(): void {

      this.common.sendContentblog(this.formData.value);
      this.httpServerService.postSubmitBlog(this.formData.value).subscribe((data)=>{
        console.log('postSubmitBlog', data)
      }
      );
      this.httpServerService.getSubmitBlog();
     
    }
  public ngOnInit( ): void {
    const payload = this.formData.value;
    // this.httpServerService.postSubmitBlog(payload).subscribe((data)=>{
    //   console.log('postSubmitBlog', data)
    // })
    this.httpServerService.getSubmitBlog().subscribe((data)=>{
      console.log('getSubmitBlog', data)
    })
  }
  openNavProfile(): void{
    this.isDropDownOpen = !this.isDropDownOpen;
    this.isDropDownOpenNotification= false;
    this.isDropDownOpenBlog= false;
  }
  openNavNotification(): void{
    this.isDropDownOpenNotification= !this.isDropDownOpenNotification;
    this.isDropDownOpen = false;
    this.isDropDownOpenBlog= false;
  }
  openNavBlog(): void{
    this.isDropDownOpenBlog= !this.isDropDownOpenBlog;
    this.isDropDownOpen = false;
    this.isDropDownOpenNotification= false;
  }
}
