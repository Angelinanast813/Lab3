import React from "react";
import Recipes from "../data/recipes";

class RecipeStorage {
    static getRecipes() {
        if(localStorage.getItem("recipes") == null) {
               let recipesArr = [];

               {Recipes.map((recipe, index) => {
                 recipesArr.push({
                   "id": recipe.id,
                 "name": recipe.name,
               "category": recipe.category,
             "shortDesc": recipe.shortDesc,
                 "longDesc": recipe.longDesc,
               "createDate": recipe.createDate
                 });
               })}
                  localStorage.setItem("recipes", JSON.stringify(recipesArr));


        }
        return JSON.parse(localStorage.getItem("recipes"));
    }

    static setRecipe(recipe){
        let recipes = JSON.parse(localStorage.getItem("recipes"));
        recipes.push(recipe);
        localStorage.setItem("recipes", JSON.stringify(recipes));
    }

    static saveNewRecipesArr(recipes){
        localStorage.setItem("recipes", JSON.stringify(recipes));
    }

    static getRecipesOfCategory(category, recipes){
        let recipesOfCategory = [];
        for (let i = 0; i < recipes.length; i++) {
            if (recipes[i].category === category){
                recipesOfCategory.push(recipes[i]);
            }
        }
        return recipesOfCategory;
    }

    static getRecipesByName(name){
        console.log(localStorage.getItem("search"));
        let recipes = JSON.parse(localStorage.getItem("recipes"));
        let recipesByName = [];
        for (let i = 0; i < recipes.length; i++) {
            let recName = recipes[i].name;
            let recNameArr = recName.split("");
            let nameArr = name.split("");
            let match = false;
            for (let j = 0; j < recNameArr.length; j++) {
                for (let k = 0; k < nameArr.length; k++) {
                    if (recNameArr[j + k].toLowerCase() !== nameArr[k].toLowerCase()){
                        break;
                    } else {
                        if (k === nameArr.length-1){
                            match = true;
                        }
                    }
                }
                if (match) break;
            }

            if (match){
                recipesByName.push(recipes[i]);
            }
        }

        return recipesByName;
    }

    static sortBy(type, recipes){
        if (type === '2'){
            return recipes.sort((recipe1, recipe2) => {
                return Date.parse(recipe1.createDate) - Date.parse(recipe2.createDate);
            });
        } else {
            return recipes.sort((recipe1, recipe2) => {
                return Date.parse(recipe2.createDate) - Date.parse(recipe1.createDate);
            });
        }
    }
}

export default RecipeStorage;
