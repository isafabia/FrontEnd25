import { Component, OnInit } from '@angular/core'; // importing angular core components for the component and lifecycle hook
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone'; // importing ionic components for layout (header, toolbar, title, content)
import {MovieService} from '../services/movie.service'; // import movie service to fetch movie data
import {CommonModule} from '@angular/common'; // importing common module for basic functionalities like ngIf, ngFor, etc.
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone'; // importing ionic components for displaying movie cards


@Component({
  selector: 'app-home', 
  templateUrl: 'home.page.html', 
  styleUrls: ['home.page.scss'], 
  imports: [CommonModule, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage implements OnInit {
  myMovies:any[] = []; // array to store movie data

  constructor(private movieService:MovieService) {} // inject movie service

  ngOnInit(): void { // on component init
    this.movieService.getMovieData().subscribe( // get movie data from service
      (data)=>{ 
        this.myMovies = data.Search; // store movie data in array
      }
    )
  }
}
