import React, {Component} from "react";

import "../styles/EditForm.css";
import RecipeStorage from "../components/RecipeStorage";
import {Link} from "react-router-dom";

class EditForm extends Component{
    componentDidMount() {
        let name = document.getElementById("edit_name");
        let desc = document.getElementById("edit_descr");
        let category = document.getElementById("edit_category");
        let cooking = document.getElementById("edit_cook");

        let currRecipe = {};
        let recipes = RecipeStorage.getRecipes();
        for (let i = 0; i < recipes.length; i++) {
            if (recipes[i].id === +this.props.match.params.id){
                currRecipe = recipes[i];
                break;
            }
        }

        name.value = currRecipe.name;
        desc.value = currRecipe.shortDesc;
        category.value = currRecipe.category;
        cooking.value = currRecipe.longDesc;
    }


    render() {

        function saveRecipe(id) {
            let name = document.getElementById("edit_name");
            let desc = document.getElementById("edit_descr");
            let category = document.getElementById("edit_category");
            let cooking = document.getElementById("edit_cook");

            if (name.value === "" || desc.value === "" || cooking.value === "") {
                nameBlur();
                descrBlur();
                cookBlur();
            } else {
                let recipes = RecipeStorage.getRecipes();
                for (let i = 0; i < recipes.length; i++) {
                    if (recipes[i].id === +id){
                        recipes[i].name = name.value;
                        recipes[i].category = category.value;
                        recipes[i].shortDesc = desc.value;
                        recipes[i].longDesc = cooking.value;
                        break;
                    }
                }
                RecipeStorage.saveNewRecipesArr(recipes);
            }
        }

        function nameBlur() {
            let name = document.getElementById("edit_name");
            if (name.value === ""){
                let mess = document.getElementById("edit_name_wrong");
                mess.style.display = 'block';
                name.style.borderColor = 'red';
            } else {
                let mess = document.getElementById("edit_name_wrong");
                mess.style.display = 'none';
                name.style.borderColor = '#ced4da';
            }
        }

        function descrBlur() {
            let name = document.getElementById("edit_descr");
            if (name.value === ""){
                let mess = document.getElementById("edit_descr_wrong");
                mess.style.display = 'block';
                name.style.borderColor = 'red';
            } else {
                let mess = document.getElementById("edit_descr_wrong");
                mess.style.display = 'none';
                name.style.borderColor = '#ced4da';
            }
        }

        function cookBlur() {
            let name = document.getElementById("edit_cook");
            if (name.value === ""){
                let mess = document.getElementById("edit_cook_wrong");
                mess.style.display = 'block';
                name.style.borderColor = 'red';
            } else {
                let mess = document.getElementById("edit_cook_wrong");
                mess.style.display = 'none';
                name.style.borderColor = '#ced4da';
            }
        }

        return (

            <div className={'editform border border-warning rounded'}>

                <h2 className={'ttl'}>Редагування рецепту</h2>
                <form>
                    <div className={'form-group'}>
                        <label htmlFor={'add_name'}>Назва</label>
                        <input type={'text'} className={'form-control'} id={'edit_name'} onBlur={nameBlur} required={true} />
                        <div className={'invalid-feedback wrong'} id={'edit_name_wrong'}>
                            Введіть назву будь-ласка
                        </div>
                    </div>
                    <div className={'form-group'}>
                        <label htmlFor={'add_category'}>Категорiя</label>
                        <select className={'form-control'} id={'edit_category'}>
                            <option>Випічка</option>
                            <option>Супи</option>
                            <option>Пироги</option>
                            <option>Соуси</option>
                            <option>Десерти</option>
                        </select>
                    </div>
                    <div className={'form-group'}>
                        <label htmlFor={'add_descr'}>Короткий опис</label>
                        <textarea className={'form-control'} id={'edit_descr'} rows={'4'} onBlur={descrBlur} required={true}/>
                        <div className={'invalid-feedback'} id={'edit_descr_wrong'}>
                            Введіть опис будь-ласка
                        </div>
                    </div>
                    <div className={'form-group'}>
                        <label htmlFor={'add_cook'}>Спосіб приготування:</label>
                        <textarea className={'form-control'} id={'edit_cook'} rows={'7'} onBlur={cookBlur} required={true}/>
                        <div className={'invalid-feedback'} id={'edit_cook_wrong'}>
                            Введіть спосіб приготування будь-ласка
                        </div>
                    </div>
                    <div className={'btns'}>
                        <div>
                            <Link to={'/recipes'}>
                                <button className={'btn btn-success wdth20'} onClick={(e) => {saveRecipe(this.props.match.params.id, e)}}>Зберегти</button>
                            </Link>
                        </div>
                        <div>
                            <Link to={'/recipes'}>
                                <button className={'btn btn-danger wdth20'}>Відхилити зміни</button>
                            </Link>
                        </div>
                    </div>

                </form>
            </div>
        );
    }
}

export default EditForm;
