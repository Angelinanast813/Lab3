import React, {Component} from "react";
import Add from "../components/Add.js";
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";

import '../styles/App.css';
import EditForm from "./EditForm";
import Content from "./Content";
import RecipeLong from "./RecipeLong";

class App extends Component{
    render() {
        function mainWindow() {
            delete localStorage.category;
            delete localStorage.search;
            let searchShow = document.getElementById("search-show");
            let cat = document.getElementById("cat");
            let search = document.getElementById("search");
            if (searchShow != null){
                searchShow.style.display = 'none';
            }

            if (cat != null){
                cat.style.display = 'none';
            }

            if (search != null){
                search.value = '';
            }
        }

        return(
            <Router>
                <div className={'header'}>
                    <Link to={'/recipes'} onClick={mainWindow}>
                        <p>Книга рецептів</p>
                    </Link>
                </div>
                <Switch>
                    <Route exact path={'/'}>
                        <Redirect to={'/recipes'}/>
                    </Route>
                    <Route exact path={'/add'} component={Add}/>
                    <Route exact path={'/recipes'} component={Content}/>
                    <Route path={'/edit/:id'} render={props => <EditForm {...props} />}/>
                    <Route path={'/recipes/:id'} render={props => <RecipeLong {...props} />}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
