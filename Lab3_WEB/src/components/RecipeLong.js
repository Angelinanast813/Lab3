import React, {Component} from "react";

import "../styles/RecipeLong.css";
import RecipeStorage from "./RecipeStorage";
import {Link} from "react-router-dom";

class RecipeLong extends Component {
    componentDidMount() {
        let name = document.getElementById("name");
        let cooking = document.getElementById("cooking");

        let currRecipe = {};
        let recipes = RecipeStorage.getRecipes();
        for (let i = 0; i < recipes.length; i++) {
            if (recipes[i].id === +this.props.match.params.id){
                currRecipe = recipes[i];
                break;
            }
        }

        name.innerHTML = currRecipe.name;
        cooking.innerHTML = currRecipe.longDesc;
    }

    render() {
        function deleteRecipe(id) {
            let recipes = RecipeStorage.getRecipes();
            let elementToDelete = 0;
            for (let i = 0; i < recipes.length; i++) {
                if(recipes[i].id === +id){
                    elementToDelete = i;
                    break;
                }
            }
            recipes.splice(elementToDelete, 1);
            RecipeStorage.saveNewRecipesArr(recipes);
        }

        return (
            <div className={'card long'}>
                <img src={'http://placehold.it/1200x300'} className={'card-img-top image'} alt={'...'}/>
                <div className={'card-body'}>
                    <h5 className={'card-title ttl'} id={'name'}></h5>
                    <div className={'option-block'}>
                        <p className={'option'}>Приготування:</p>
                        <p className={'card-text text'} id={'cooking'}></p>
                    </div>
                </div>
                <div className={'btns'}>
                    <div>
                        <Link to={'/edit/' + this.props.match.params.id}>
                            <button className={'btn btn-warning btn2'}>Редагувати</button>
                        </Link>
                    </div>
                    <div>
                        <Link to={'/recipes'} onClick={(e) => {deleteRecipe(this.props.match.params.id, e)}}>
                            <button className={'btn btn-danger btn2'}>Видалити</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default RecipeLong;
