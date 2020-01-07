import {Injectable} from '@angular/core';
import {Recipe} from './recipe';

@Injectable({
    providedIn: 'root'
})
export class RecipesService {
    private recipes: Recipe[] = [
        {
            id: 'r1',
            title: 'Double Double',
            imageUrl: 'https://www.in-n-out.com/mobile/images/menu_v2/double_double_meal.png',
            ingredients: ['Cheese', 'Meat', 'French Fries', 'Drink']
        },
        {
            id: 'r2',
            title: 'Cheeseburger',
            imageUrl: 'https://assets3.thrillist.com/v1/image/2769271/size/tmg-article_default_mobile.jpg',
            ingredients: ['Cheese', 'Meat']
        },
        {
            id: 'r3',
            title: 'Animal Style',
            imageUrl: 'https://a57.foxnews.com/a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2018/09/640/320/1862/1048/in-n-out-2.jpg?ve=1&tl=1?ve=1&tl=1',
            ingredients: ['Cheese', 'Meat', 'Grilled Onions', 'French Fries']
        },
        {
            id: 'r4',
            title: 'Best Burger in Town',
            imageUrl: 'https://i.ytimg.com/vi/AQIExuYef3Y/maxresdefault.jpg',
            ingredients: ['Cheese', 'Meat', 'Grilled Onions', 'French Fries']
        }
    ];

    constructor() {
    }

    getAllRecipes(): Recipe[] {
        return [...this.recipes];
    }

    getRecipe(recipeId: string): Recipe {
        return {
            ...this.recipes.find(recipe => {
                return recipe.id === recipeId;
            })
        };
    }
    deleteRecipe(recipeId: string) {
        this.recipes = this.recipes.filter(recipe => {
            return recipe.id !== recipeId;
        });
    }
}
