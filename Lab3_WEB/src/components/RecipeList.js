import React, {Component} from "react";
import RecipeStorage from "./RecipeStorage"
import Recipe from "./Recipe";
import "../styles/RecipeList.css"

class RecipeList extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount() {
        let state = {};
        if (localStorage.getItem("datesort") != null){
            let vidsort = document.getElementById("vidsort");
            if (localStorage.getItem("datesort") === '1'){
                this.setState({sorting : "Спочатку новіші"});
                state.sorting = "Спочатку новіші";
            } else {
                this.setState({sorting : "Спочатку старіші"});
                state.sorting = "Спочатку старіші";
            }
            vidsort.style.display = 'block';
        }

        this.setState(state);
    }

    render() {
        if (localStorage.getItem("datesort") == null){
            if (localStorage.getItem("search") == null){
                if (localStorage.getItem("category") == null) {
                    console.log(1);
                    return(
                        <div>
                            <p className={'sort-mess'}><span id={'vidsort'}>Відсортовано:</span>
                                <span className={'mess'} id={'mess'}> {this.state.sorting}</span>
                                <span className={'categ'} id={'cat'}>Категорія:
                                    <span className={'mess'} id={'cat-mess'}></span>
                                </span>
                            </p>
                            <p className={'sort-mess search-mess'} id={'search-show'}>Результати пошуку по:
                                <span className={'mess'} id={'search-mess'}></span>
                            </p>
                            <div className={'recipelist'}>
                                {RecipeStorage.getRecipes().map((recipe, index) => {
                                    return <Recipe id={recipe.id} name={recipe.name} description={recipe.shortDesc} date={recipe.createDate} category={recipe.category}/>
                                })}
                            </div>
                        </div>
                    );
                } else {
                    console.log(2);
                    return(
                        <div>
                            <p className={'sort-mess'}><span id={'vidsort'}>Відсортовано:</span>
                                <span className={'mess'} id={'mess'}> {this.state.sorting}</span>
                                <span className={'categ'} id={'cat'}>Категорія:
                                    <span className={'mess'} id={'cat-mess'}></span>
                                </span>
                            </p>
                            <p className={'sort-mess search-mess'} id={'search-show'}>Результати пошуку по:
                                <span className={'mess'} id={'search-mess'}></span>
                            </p>
                            <div className={'recipelist'}>
                                {RecipeStorage.getRecipesOfCategory(localStorage.getItem("category"), RecipeStorage.getRecipes()).map((recipe, index) => {
                                    return <Recipe id={recipe.id} name={recipe.name} description={recipe.shortDesc} date={recipe.createDate} category={recipe.category}/>
                                })}
                            </div>
                        </div>

                    );
                }
            } else {
                if (localStorage.getItem("category") == null) {
                    console.log(3);
                    return(
                        <div>
                            <p className={'sort-mess'}><span id={'vidsort'}>Відсортовано:</span>
                                <span className={'mess'} id={'mess'}> {this.state.sorting}</span>
                                <span className={'categ'} id={'cat'}>Категорія:
                                    <span className={'mess'} id={'cat-mess'}></span>
                                </span>
                            </p>
                            <p className={'sort-mess search-mess'} id={'search-show'}>Результати пошуку по:
                                <span className={'mess'} id={'search-mess'}></span>
                            </p>
                            <div className={'recipelist'}>
                                {RecipeStorage.getRecipesByName(localStorage.getItem("search")).map((recipe, index) => {
                                    return <Recipe id={recipe.id} name={recipe.name} description={recipe.shortDesc} date={recipe.createDate} category={recipe.category}/>
                                })}
                            </div>
                        </div>
                    );
                } else {
                    console.log(4);
                    return(
                        <div>
                            <p className={'sort-mess'}><span id={'vidsort'}>Відсортовано:</span>
                                <span className={'mess'} id={'mess'}>{this.state.sorting}</span>
                                <span className={'categ'} id={'cat'}>Категорія:
                                    <span className={'mess'} id={'cat-mess'}></span>
                                </span>
                            </p>
                            <p className={'sort-mess search-mess'} id={'search-show'}>Результати пошуку по:
                                <span className={'mess'} id={'search-mess'}></span>
                            </p>
                            <div className={'recipelist'}>
                                {RecipeStorage.getRecipesOfCategory(localStorage.getItem("category"), RecipeStorage.getRecipesByName(localStorage.getItem("search"))).map((recipe, index) => {
                                    return <Recipe id={recipe.id} name={recipe.name} description={recipe.shortDesc} date={recipe.createDate} category={recipe.category}/>
                                })}
                            </div>
                        </div>

                    );
                }
            }
        } else {
            if (localStorage.getItem("search") == null){
                if (localStorage.getItem("category") == null) {
                    console.log(5);
                    return(
                        <div>
                            <p className={'sort-mess'}><span id={'vidsort'}>Відсортовано:</span>
                                <span className={'mess'} id={'mess'}> {this.state.sorting}</span>
                                <span className={'categ'} id={'cat'}>Категорія:
                                    <span className={'mess'} id={'cat-mess'}></span>
                                </span>
                            </p>
                            <p className={'sort-mess search-mess'} id={'search-show'}>Результати пошуку по:
                                <span className={'mess'} id={'search-mess'}></span>
                            </p>
                            <div className={'recipelist'}>
                                {RecipeStorage.sortBy(localStorage.getItem("datesort"), RecipeStorage.getRecipes()).map((recipe, index) => {
                                    return <Recipe id={recipe.id} name={recipe.name} description={recipe.shortDesc} date={recipe.createDate} category={recipe.category}/>
                                })}
                            </div>
                        </div>
                    );
                } else {
                    console.log(6);
                    return(
                        <div>
                            <p className={'sort-mess'}><span id={'vidsort'}>Відсортовано:</span>
                                <span className={'mess'} id={'mess'}> {this.state.sorting}</span>
                                <span className={'categ'} id={'cat'}>Категорія:
                                    <span className={'mess'} id={'cat-mess'}></span>
                                </span>
                            </p>
                            <p className={'sort-mess search-mess'} id={'search-show'}>Результати пошуку по:
                                <span className={'mess'} id={'search-mess'}></span>
                            </p>
                            <div className={'recipelist'}>
                                {RecipeStorage.sortBy(localStorage.getItem("datesort"), RecipeStorage.getRecipesOfCategory(localStorage.getItem("category"), RecipeStorage.getRecipes())).map((recipe, index) => {
                                    return <Recipe id={recipe.id} name={recipe.name} description={recipe.shortDesc} date={recipe.createDate} category={recipe.category}/>
                                })}
                            </div>
                        </div>
                    );
                }
            } else {
                if (localStorage.getItem("category") == null) {
                    console.log(7);
                    return(
                        <div>
                            <p className={'sort-mess'}><span id={'vidsort'}>Відсортовано:</span>
                                <span className={'mess'} id={'mess'}> {this.state.sorting}</span>
                                <span className={'categ'} id={'cat'}>Категорія:
                                    <span className={'mess'} id={'cat-mess'}></span>
                                </span>
                            </p>
                            <p className={'sort-mess search-mess'} id={'search-show'}>Результати пошуку по:
                                <span className={'mess'} id={'search-mess'}></span>
                            </p>
                            <div className={'recipelist'}>
                                {RecipeStorage.sortBy(localStorage.getItem("datesort"), RecipeStorage.getRecipesByName(localStorage.getItem("search"))).map((recipe, index) => {
                                    return <Recipe id={recipe.id} name={recipe.name} description={recipe.shortDesc} date={recipe.createDate} category={recipe.category}/>
                                })}
                            </div>
                        </div>
                    );
                } else {
                    console.log(8);
                    return(
                        <div>
                            <p className={'sort-mess'}><span id={'vidsort'}>Відсортовано:</span>
                                <span className={'mess'} id={'mess'}> {this.state.sorting}</span>
                                <span className={'categ'} id={'cat'}>Категорія:
                                    <span className={'mess'} id={'cat-mess'}></span>
                                </span>
                            </p>
                            <p className={'sort-mess search-mess'} id={'search-show'}>Результати пошуку по:
                                <span className={'mess'} id={'search-mess'}></span>
                            </p>
                            <div className={'recipelist'}>
                                {RecipeStorage.sortBy(localStorage.getItem("datesort"), RecipeStorage.getRecipesOfCategory(localStorage.getItem("category"), RecipeStorage.getRecipesByName(localStorage.getItem("search")))).map((recipe, index) => {
                                    return <Recipe id={recipe.id} name={recipe.name} description={recipe.shortDesc} date={recipe.createDate} category={recipe.category}/>
                                })}
                            </div>
                        </div>
                    );
                }
            }
        }
    }
}

export default RecipeList;
