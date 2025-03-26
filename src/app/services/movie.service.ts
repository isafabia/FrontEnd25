import { Injectable } from '@angular/core'; // importing Injectable decorator for service definition
import {HttpClient} from '@angular/common/http'; // importing HttpClient to make HTTP requests
import { Observable } from 'rxjs'; // importing Observable to handle asynchronous data

@Injectable({
  providedIn: 'root' // providing the service at the root level of the application
})
export class MovieService {

  constructor(private httpClient:HttpClient) { } // injecting HttpClient into the service for API calls

  getMovieData(): Observable<any> { // method to get movie data
    return this.httpClient.get('http://www.omdbapi.com/?apikey=2ee2ed84&s=%27war%27'); // making a GET request to the OMDB API
  }
}
