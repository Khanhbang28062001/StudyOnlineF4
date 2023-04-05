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
  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public submitBlog(): void {
    console.log(this.Name);
  }


}
