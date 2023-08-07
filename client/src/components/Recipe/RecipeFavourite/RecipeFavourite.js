import "./RecipeFavourite.css";

import { Link, Navigate, NavLink, useNavigate, useParams } from 'react-router-dom';
import { BrowserRouter,Route,Routes, Switch, Redirect } from 'react-router-dom';
import React, { useLayoutEffect, useState,useContext,useEffect,location } from 'react';

import * as userService from '../../../services/userService';
import { AuthContext } from "../../../contexts/AuthContext";
import ConfirmDialog from "../../../common/ConfirmDialog";
import Favourites from "../../Favourites/Favourites";


const RecipeFavourite = ({recipe}) => {


    const {user} = useContext(AuthContext);
    const recipeId = recipe._id;
    const history = useNavigate();

    const [showDeleteDialog,setShowDeleteDialog] = useState(false);


    const onRemoveFavourite = (e) => {

        e.preventDefault();

        userService.removeFavourite(recipeId, user.accessToken)
         .then(() => {
            history('/pizzas');
        })
        .catch(err => {            
            console.log(err);
        });

    }

    const favouriteHandler = (e) => {
        e.preventDefault();
        setShowDeleteDialog(true);
    }




    return (
        <article className="articles">
             <ConfirmDialog show={showDeleteDialog} onClose={() => setShowDeleteDialog(false)} onSave={onRemoveFavourite}></ConfirmDialog>
            <img className="img4" src={recipe.imageUrl}/>
            <h1>{recipe.name}</h1>
            <h4>${recipe.price}</h4>
            <ul class="stars">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </ul>
            <div className="btns1">
            <Link  smooth= "true" className="btnd" to={`/recipe-details-your-favourite/recipe-number:${recipe._id}`}>Details</Link>
            <button className="favnon" onClick={favouriteHandler}><i className="fas fa-minus"></i></button>
            </div>
        </article>
    );
};

export default RecipeFavourite;