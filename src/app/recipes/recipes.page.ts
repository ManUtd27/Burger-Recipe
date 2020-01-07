import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from './recipe';
import {RecipesService} from './recipes.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, OnDestroy {

  recipes: Recipe[];
  recipeSub: Subscription;
  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
    this.recipeService.getAllRecipes();
    this.recipeSub = this.recipeService.recipeChanged.subscribe(reci => {
      this.recipes = reci;
      console.log('In subscription', this.recipes);
    });
  }

  ngOnDestroy(): void {
    this.recipeSub.unsubscribe();
  }
}
