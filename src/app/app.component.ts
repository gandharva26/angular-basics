import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  name:string = "Gandharva";
  submitState:boolean = false;
  image_path:string = "../favicon.ico"
  defaultVal:string = "hello"
  isLoggedIn:boolean = false;
  courses:{name:string}[] = [{name:"CS105"}, {name:"CS205"},{name:"CS206"}]
   passValueToComponent(event:any){
    console.log(event?.target.value)
  }

  checkButton(event:any){
    if(event.target.value === "submitted"){
      this.submitState = true
    }
    else{
      this.submitState = false
    }
  } 

}
