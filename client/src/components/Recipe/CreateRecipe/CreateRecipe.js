import "./CreateRecipe.css";

import { Link, NavLink, useNavigate } from 'react-router-dom';
import React, { useLayoutEffect, useState,useContext } from 'react';
import { Alert } from 'react-bootstrap';

import * as recipeService from "../../../services/recipeService";
import { AuthContext } from "../../../contexts/AuthContext";
import * as userService from '../../../services/userService';


const CreateRecipe = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });


    const {user} = useContext(AuthContext);
    const [errors,setErrors] = useState({name: false});
    const history = useNavigate();


    const onCreateRecipe = (e) => {

        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const ingredients = formData.get('ingredients');
        const publicp = formData.get('public');


        if(publicp=='yes'){
            userService.addFavourite({
                ingredients,
                publicp
            },user.accessToken)
             .then(result => {
                    console.log(result);
                    history('/shoppingcart');
                
            })
             .catch(err => {            
                console.log(err);
            });
        }
        else {
            
                userService.create({
                    ingredients,
                    publicp
                },user.accessToken)
                 .then(result => {
                        console.log(result);
                        history('/pizzas');
                    
                })
                 .catch(err => {            
                    console.log(err);
                });
            
        }


        

    };




    return (
        <div className = "maind2">
            <section className="seccre">
            <button smooth="true" className="leavede" onClick={()=> history(-1)}><i class="fas fa-solid fa-circle-xmark"></i></button>
        <div>
           <h1>Create Your Own Piza!</h1>
           <form id="createform" onSubmit={onCreateRecipe} method="POST">
            <label name="ingredl">Ingredients</label>
            <textarea  name = "ingredients" id="ingredients" placeholder=" . . . ." />
            <label name="publicv">Public</label>
            <input type="text" name = "public" id="public" placeholder="   yes / no"/>
            <span>("yes" = the pizza will be added to the shopping cart.)</span>
            <button className="btnad2" type="submit">Add</button>
           </form>
           <button className="gob3" onClick={()=> history(-1)}><i class="fas fa-solid fa-arrow-left-long"></i></button>
        </div>
    
    </section>
        </div>
    );
}

export default CreateRecipe;