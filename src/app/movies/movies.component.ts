import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  data = [];
  search = [];
  title = 'angular-movies';
  searchValue = '';

  constructor(private dataService: DataService){

  }

  ngOnInit(): void {
    this.dataService.getMovies().subscribe((data) => this.data = data.results);
  }


  onSearch(): void {
    console.log('search value', this.searchValue)
    this.search = !this.searchValue ? this.data :this.data.filter((movie: {original_title: string})=> {
      console.log(movie['original_title'].includes(this.searchValue), movie['original_title'])
    return  movie['original_title'].toLowerCase().includes(this.searchValue.toLowerCase())
    });
    console.log(this.search)
  }

}