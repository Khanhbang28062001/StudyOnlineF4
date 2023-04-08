
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private contentBlog = '';

  


  constructor( ) { }

  public getBlog(): any{
    return this.contentBlog;
  }
  public setBlog(content:any): void{
    this.contentBlog = content;
  }
  public sendContentblog(content:any): void{
    console.log('Da gui len service:', content);
  }

  

}
