import "./Details.css";

import { Link, NavLink, useParams,useNavigate } from 'react-router-dom';
import { BrowserRouter,Route,Routes, Switch, Redirect } from 'react-router-dom';
import React, { useEffect, useLayoutEffect, useState } from 'react';

import * as recipeService from "../../../services/recipeService";
import * as userService from "../../../services/userService";


const Details = () =>  {

    const [recipe,setRecipe] = useState({}); 
    const {recipeId} = useParams();
    
    const history = useNavigate();


    const recipesd = async () => {
        let reciperes =   await recipeService.getOne(recipeId);

        console.log(reciperes);
        setRecipe(reciperes);
    };

    useEffect(() => { recipesd(recipe); },[]);



    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    

    return (
        <div>
    <section className="sec11">
        <button smooth="true" className="leavede" onClick={()=> history(-1)}><i class="fas fa-solid fa-circle-xmark"></i></button>
        <article className="main">
            <article className="artsmde">
                <h4>Ingredients</h4>
                <p className="ingre">
                    {recipe.ingredients}
                </p>
            </article>
            <article className="artm">
                <img src={recipe.imageUrl}/>
                <hr/>
                <h4>{recipe.name}</h4>
                <p className="cut-text">{recipe.instructions}</p>
                <p>Cooking Time: {recipe.time}min</p>
                <p>Price: ${recipe.price}</p>
            </article>
            <article className="artsmde">
                <h4>Cooking Time & Price</h4>
                <p className="inst">
                   Cooking Time: {recipe.time}
                   <hr/>
                   Price: ${recipe.price}
                </p>
            </article>
        </article>
        <button className="gob" onClick={()=> history(-1)}><i class="fas fa-solid fa-arrow-left-long"></i></button>
    </section>
        </div>
    );
}

export default Details;