import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //variable declaration
  count: number = 0;
  show: boolean = false;

  //function for when the press me button is clicked  
  onButtonClick() {
    console.log('Button Clicked');
    this.count++;// count so that amount changes accordingly
  }
  //function for star dbl click
  //makes text appear and disappear when star is double clicked
  onStarDBLClick() {
    if (this.show) {
      this.show = false;
    } else {
      this.show = true;
    }
  }

}

