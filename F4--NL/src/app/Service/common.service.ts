
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private content = '';

  


  constructor( ) { }

  public getBlog(): any{
    return this.content;
  }
  public setBlog(content:any): void{
    this.content = content;
  }
  public sendContentblog(content:any): void{
    console.log('Da gui len service:', content);
  }

  

}
