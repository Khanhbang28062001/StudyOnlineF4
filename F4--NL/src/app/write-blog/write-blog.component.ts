import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-write-blog',
  templateUrl: './write-blog.component.html',
  styleUrls: ['./write-blog.component.css']
})
export class WriteBlogComponent implements OnInit {
  public in = "68";
  public name = "";
  public Name = "";
  isDropDownOpen: boolean = false;
  isDropDownOpenNotification: boolean = false;
  isDropDownOpenBlog: boolean = false;
  public TenEmail = "bang";
  public Email = "bang-Email";

  
  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public submitBlog(): void {
    console.log(this.Name);
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
