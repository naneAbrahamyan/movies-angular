import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/assets/Recipe';
import { RECIPIES } from 'src/assets/mockRecipes';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  isSelected = true;
  recipes: Recipe[] = RECIPIES;
  currentSelection: Recipe | undefined;

  constructor() {}
  ngOnInit(): void {}

  onhandleItemClick(item?: Recipe): void {
    this.currentSelection = item;
  }

  handleRemoval(): void {
    const index = this.recipes.findIndex(
      (value) => value.id === this.currentSelection?.id,
    );
    this.recipes.splice(index, 1);
    this.currentSelection = undefined;
  }
}
