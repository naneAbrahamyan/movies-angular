import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Item } from 'src/assets/Item';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  data: Item[] = [];
  search:Item[] = [];
  passedValue: Item[] = [];
  title = 'angular-movies';
  searchValue = '';
  
  constructor(private dataService: DataService){

  }

  ngOnInit(): void {
    this.dataService.getMovies().subscribe((data) => {
      this.data = [...data.results]
      this.search =[... data.results]
      this.passedValue = [...data.results]
    });
  }


  onSearch(): void {
    console.log('search value', this.searchValue)
    this.search = !this.searchValue ? this.data :this.data.filter((movie: {original_title: string})=> {
      console.log(movie['original_title'].includes(this.searchValue), movie['original_title'])
    return  movie['original_title'].toLowerCase().includes(this.searchValue.toLowerCase())
    });
    this.passedValue = [...this.search]
    console.log(this.search)
  }

 }