import "./RecipeModel.css";

import { Link, NavLink, useNavigate, useNavigationType, useParams } from 'react-router-dom';
import React, { useLayoutEffect, useState,useEffect, useContext } from 'react';

import * as userService from '../../../services/userService';
import { AuthContext } from "../../../contexts/AuthContext";
import { useNotificationContext, types } from '../../../contexts/NotificationContext';



const RecipeModel = ({recipe}) => {

    const navigate = useNavigate();
    const {user} = useContext(AuthContext);
    const {recipeId} = recipe._id;

    const [favourites,setFavourites] = useState([]);
    const { addNotification } = useNotificationContext();


    useEffect(() => {
        
        userService.yourFavourites(user._id)
        .then(result => {
            setFavourites(result);
        })
        .catch(err => {            
            console.log(err);
        });

    },[]);


        const HandleFavourite = (e) =>  {

            e.preventDefault();

            console.log(`Recipe ${recipeId}`);
         

                const name = recipe.name;
                const time = recipe.time;
                const type = recipe.type;
                const imageUrl = recipe.imageUrl;
                const ingredients = recipe.ingredients;
                const price = recipe.price;
        
                        userService.addFavourite({
                            name,
                            time,
                            type,
                            imageUrl,
                            ingredients,
                            price
                        },user.accessToken)
                         .then(result => {
                            addNotification(`You added ${name}!`, types.warn);          
                            navigate('/shoppingcart');
                                      
                        })

        }




    return (
        <article className="articles">
            <img className="img2" src={recipe.imageUrl}/>
            <h1>{recipe.name}</h1>
            <h4 className="typed">{recipe.type}</h4>
            <h4>${recipe.price}</h4>
            
            <ul class="stars">
               <span class="fa fa-star checked"></span>
               <span class="fa fa-star checked"></span>
               <span class="fa fa-star checked"></span>
               <span class="fa fa-star"></span>
               <span class="fa fa-star"></span>
            </ul>
            
            <div className="btns1">
            <Link  smooth= "true" className="btnd" to={`/recipe-details/recipe-number:${recipe._id}`}>Details</Link>
          
        
                {
                   user.email
                        ? <button className="favour" onClick={HandleFavourite} ><i className="fa fa-plus"></i></button>
                        : null
                }
                
           
            </div>
        </article>
    );

};

export default RecipeModel;