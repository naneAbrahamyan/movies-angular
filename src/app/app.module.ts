import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { MoviesComponent } from './movies/movies.component';
import { SliderComponent } from './slider/slider.component';

const appRoutes: Routes = [
  {path: '', component: MoviesComponent},
  {path: 'details/:id', component: MovieComponent },
  {path: 'recipes', component: MovieComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MoviesComponent,
    SliderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
