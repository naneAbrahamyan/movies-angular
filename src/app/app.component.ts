import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  data = [];
  title = 'angular-movies';
  searchValue = '';

  constructor(private dataService: DataService){

  }

  ngOnInit(): void {
    this.dataService.getMovies().subscribe((data) => this.data = data.results);
  }


  click(): void {
    console.log('data', this.data)
  }

}
