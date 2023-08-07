import "./DetailsFavourite.css";

import { Link, NavLink, useParams,useNavigate } from 'react-router-dom';
import { BrowserRouter,Route,Routes, Switch, Redirect } from 'react-router-dom';
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';

import * as recipeService from "../../../services/recipeService";
import * as userService from "../../../services/userService";
import { AuthContext } from '../../../contexts/AuthContext';
import ConfirmDialog from "../../../common/ConfirmDialog";


const DetailsFavourite = () =>  {

    const [recipe,setRecipe] = useState({}); 
    const {recipeId} = useParams();
    const {user} = useContext(AuthContext);
    const history = useNavigate();
    const [showDeleteDialog,setShowDeleteDialog] = useState(false);


    const recipesd = async () => {
        let reciperes =   await userService.getOneFav(recipeId);

        console.log(reciperes);
        setRecipe(reciperes);
    };

    useEffect(() => { recipesd(recipe); },[]);


    
    const onRemoveFavourite = (e) => {

        e.preventDefault();

        userService.removeFavourite(recipeId,user.accessToken)
         .then(result => {
            console.log(result);
            history('/shoppingcart');
        })
        .finally(() => {
            console.log(`Deleted ${recipeId}`);
        })
    }


    const deleteclickHandler = (e) => {
        e.preventDefault();
        console.log(process.env.NODE_ENV);
        setShowDeleteDialog(true);
    }


    
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });


    return (
        <div>
        <ConfirmDialog show={showDeleteDialog} onClose={() => setShowDeleteDialog(false)} onSave={onRemoveFavourite}></ConfirmDialog>
      <section className="sec11">
        <button smooth="true" className="leavedef" onClick={()=> history(-1)}><i class="fas fa-solid fa-circle-xmark"></i></button>
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
                <p>Cooking Time: {recipe.time}min</p>
                <p>Price: ${recipe.price}</p>
                <button className="favnon" onClick={deleteclickHandler}><i className="fas fa-solid fa-minus"></i></button>
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

export default DetailsFavourite;