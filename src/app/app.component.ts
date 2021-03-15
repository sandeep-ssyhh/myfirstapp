import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myfirstapp';
  myAge = 27;
  userJSON= {first_Name:"Sandeep",Mob_No:8483856421}

  clickme(){

    console.log('You are Adult');
  }

  increment(){

    this.myAge= this.myAge + 1;
  }

  decrement(){

    this.myAge=this.myAge - 1;
  }
}
