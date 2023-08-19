import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  name:string = "Gandharva";
  image_path:string = "../favicon.ico"
  defaultVal:string = "hello"
   passValueToComponent(event:any){
    console.log(event?.target.value)
  }

}
