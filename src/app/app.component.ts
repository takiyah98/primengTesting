import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public mainContentClass = "col-md-10";                                                       ;
  public column12 = "col-md-12";

  clickToggle(){
    console.log('clicked button');
    console.log(this.mainContentClass);
    if(this.mainContentClass == "col-md-10"){
      this.mainContentClass = "col-md-12"
    }
    else{
      this.mainContentClass = "col-md-10"
    }

  }

}
