import React, {Component} from "react";
import {Link} from "react-router-dom";

import "../styles/AddForm.css";
import RecipeStorage from "../components/RecipeStorage";

class AddForm extends Component{
    constructor(props){
        super(props);
        this.state = {id : -1};
    }

    componentDidMount() {
        let recipes = RecipeStorage.getRecipes();
        if(recipes.length !== 0){
            this.setState({id : +recipes[recipes.length - 1].id + 1});
        } else {
            this.setState({id : 1});
        }
    }


    render() {
         function addRecipe() {
            let name = document.getElementById("add_name");
            let desc = document.getElementById("add_descr");
            let category = document.getElementById("add_category");
            let cooking = document.getElementById("add_cook");

            if (name.value === "" || desc.value === "" || cooking.value === "") {
                nameBlur();
                descrBlur();
                cookBlur();
            } else {
                let recipes = RecipeStorage.getRecipes();
                let id = 1;
                if (recipes.length !== 0){
                    id = +recipes[recipes.length - 1].id + 1;
                }
                let createDate = new Date().toString();
                let recipe = {
                    "id": id,
                    "name": name.value,
                    "category": category.value,
                    "shortDesc": desc.value,
                    "longDesc": cooking.value,
                    "createDate": createDate
                };
                RecipeStorage.setRecipe(recipe);
            }
        }

        function nameBlur() {
            let name = document.getElementById("add_name");
            if (name.value === ""){
                let mess = document.getElementById("add_name_wrong");
                mess.style.display = 'block';
                name.style.borderColor = 'red';
            } else {
                let mess = document.getElementById("add_name_wrong");
                mess.style.display = 'none';
                name.style.borderColor = '#ced4da';
            }
        }

        function descrBlur() {
            let name = document.getElementById("add_descr");
            if (name.value === ""){
                let mess = document.getElementById("add_descr_wrong");
                mess.style.display = 'block';
                name.style.borderColor = 'red';
            } else {
                let mess = document.getElementById("add_descr_wrong");
                mess.style.display = 'none';
                name.style.borderColor = '#ced4da';
            }
        }

        function cookBlur() {
            let name = document.getElementById("add_cook");
            if (name.value === ""){
                let mess = document.getElementById("add_cook_wrong");
                mess.style.display = 'block';
                name.style.borderColor = 'red';
            } else {
                let mess = document.getElementById("add_cook_wrong");
                mess.style.display = 'none';
                name.style.borderColor = '#ced4da';
            }
        }

        return (
            <div className={'addform border border-success rounded'}>
                <h2 className={'ttl'}>Новий рецепт</h2>
                <form>
                    <div className={'form-group'}>
                        <label htmlFor={'add_name'}>Назва</label>
                        <input type={'text'} className={'form-control'} id={'add_name'} onBlur={nameBlur} required={true}/>
                        <div className={'invalid-feedback wrong'} id={'add_name_wrong'}>
                            Введіть назву будь-ласка
                        </div>
                    </div>
                    <div className={'form-group'}>
                        <label htmlFor={'add_category'}>Категорiя</label>
                        <select className={'form-control'} id={'add_category'}>
                            <option>Випічка</option>
                            <option>Супи</option>
                            <option>Пироги</option>
                            <option>Соуси</option>
                            <option>Десерти</option>
                        </select>
                    </div>
                    <div className={'form-group'}>
                        <label htmlFor={'add_descr'}>Короткий опис</label>
                        <textarea className={'form-control'} id={'add_descr'} rows={'4'} onBlur={descrBlur} required={true}/>
                        <div className={'invalid-feedback'} id={'add_descr_wrong'}>
                            Введіть опис будь-ласка
                        </div>
                    </div>
                    <div className={'form-group'}>
                        <label htmlFor={'add_cook'}>Спосіб приготування:</label>
                        <textarea className={'form-control'} id={'add_cook'} rows={'7'} onBlur={cookBlur} required={true}/>
                        <div className={'invalid-feedback'} id={'add_cook_wrong'}>
                            Введіть спосіб приготування будь-ласка
                        </div>
                    </div>
                    <Link to={'/recipes/' + this.state.id} onClick={addRecipe}>
                        <button className={'btn btn-primary wdth20'}>Додати</button>
                    </Link>
                </form>
            </div>
        );
    }
}

export default AddForm;
