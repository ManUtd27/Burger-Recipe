import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RecipesService} from '../recipes.service';
import {Recipe} from '../recipe';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedrecipe: Recipe;
  constructor(private route: ActivatedRoute,
              private recipeService: RecipesService,
              private router: Router
              ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
        paramMap => {
          if (!paramMap.has('recipeId')) {
            // redirect
            return;
          }
          const recipeId = paramMap.get('recipeId');
          this.loadedrecipe = this.recipeService.getRecipe(recipeId);
        }
    );
  }

    onDeleteRecipe() {
        this.recipeService.deleteRecipe(this.loadedrecipe.id);
        this.router.navigate(['/recipes']);
    }
}
