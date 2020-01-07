import {Injectable} from '@angular/core';
import {Recipe} from './recipe';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RecipesService {
    recipeChanged = new BehaviorSubject<Recipe[]>(null);
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
        },
        {
            id: 'r5',
            title: 'Lettuce Wrap Style',
            imageUrl: 'https://images.squarespace-cdn.com/content/v1/563ff408e4b0bcc74e2aa3c0/1534092161941-OK19QQHKEUEO1XW4FQ3O/ke17ZwdGBToddI8pDm48kJuqRxIpT-K8-hBs4ffXF0Z7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmujyyI7Frso6MRdplGTbhDruLwzBebSqxotBf75yyvV0gz6Zu76HFfnTZUZc5Jxuv/In+N+Out+Burger+Secret+Menu+Tips+%26+Tricks+%7C+coupleinthekitchen.com',
            ingredients: ['Cheese', 'Meat', 'Grilled Onions', 'Tomatoes', 'Lettuce', 'Pickles']
        }
    ];

    constructor() {
    }

    getAllRecipes() {
        this.recipeChanged.next(this.recipes.slice());
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
        this.recipeChanged.next(this.recipes.slice());
    }
}
