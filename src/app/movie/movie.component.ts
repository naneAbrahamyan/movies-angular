import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service'; // Fetch the item from your data source

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie = []; 
  id:any = 5;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    this.dataService.getMovies().subscribe(data => this.movie = data.results.filter((val: {id:number}) => val.id === this.id))
  }
}
