import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Pierog', 'Description of Recipes', 'https://www.mniammniam.com/obrazki/u_obrazki/n17511.jpg'),
    new Recipe('Pierog', 'Description of Recipes', 'https://www.mniammniam.com/obrazki/u_obrazki/n17511.jpg'),
    new Recipe('Pierog', 'Description of Recipes', 'https://www.mniammniam.com/obrazki/u_obrazki/n17511.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
