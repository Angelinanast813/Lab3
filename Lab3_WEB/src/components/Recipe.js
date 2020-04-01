import React, {Component} from "react";

import "../styles/Recipe.css";
import RecipeStorage from "./RecipeStorage";
import {Link} from "react-router-dom";

class Recipe extends Component {

    render() {
        function deleteRecipe(id) {
            let recipes = RecipeStorage.getRecipes();
            let elementToDelete = 0;
            console.log("id -" + id);
            console.log(recipes.length);
            for (let i = 0; i < recipes.length; i++) {
                if(recipes[i].id === id){
                    elementToDelete = i;
                    break;
                }
            }
            recipes.splice(elementToDelete, 1);
            RecipeStorage.saveNewRecipesArr(recipes);
        }

        return (
            <div className={'card recipe'}>
                <Link to={'recipes/' + this.props.id}>
                    <img src={'http://placehold.it/500x400'} className={'card-img-top image'} alt={'...'}/>
                </Link>
                <div className={'card-body'}>
                    <p className={'date align-top'}>Додано: {(new Date(this.props.date)).toLocaleDateString()}</p>
                    <Link to={'recipes/' + this.props.id}>
                        <h5 className={'card-title ttl'}>{this.props.name}</h5>
                    </Link>
                    <p className={'option-block'}><span className={'option'}>Категорія: </span>{this.props.category}</p>
                    <div className={'option-block'}>
                        <p className={'card-text'}>{this.props.description}</p>
                    </div>
                </div>
                <div className={'card-footer btns'}>
                    <div>
                        <Link to={'edit/' + this.props.id}>
                            <button className={'btn btn-warning btn2'}>Редагувати</button>
                        </Link>
                    </div>
                    <div>
                        <Link to={'/recipes'}>
                            <button className={'btn btn-danger btn2'} onClick={(e) => {deleteRecipe(this.props.id, e)}}>Видалити</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Recipe;
