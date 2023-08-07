import "./User.css";

import { Link, NavLink } from 'react-router-dom';
import { useState, createElement, useEffect ,useContext} from 'react';
import React, { useLayoutEffect } from 'react';

import RecipeFavourite from "../Recipe/RecipeFavourite/RecipeFavourite";
import * as userService from '../../services/userService';
import { AuthContext } from "../../contexts/AuthContext";



const User = () => {
  
    const {user} = useContext(AuthContext);

    const [recipes,setRecipes] = useState([]);


    useEffect(() => {
        userService.yourFavourites(user._id)
            .then(recipeResult => {
                setRecipes(recipeResult);
            })
            .catch(err => {            
                console.log(err);
            });
    }, []);

    


    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });




    return (
        <div>
              <section className="sec12">
        <article className="artsm">
            <h2 className="headinu">{user.email}</h2>
            <img className = "imgi" src="https://www.shareicon.net/download/2016/09/01/822751_user_512x512.png"/>
            <p className="inst">
                Why is it important to choose good quality food?
            </p>
            <p className="inst">
                In summary, eating balanced and right portioned diet, can help us to meet the nutrition guidelines 
                in our daily nutrition supply. Wider range of choice can help people to make healthier food choices. 
                It is, therefore, 
                important to teach children and teenagers how to choose and portion their food to encourage 
                them to develop their health related habits.
            </p>
            <p>Your Order:</p>
            <Link  smooth= "true" to="/shoppingcart"><i className="fa-solid fa-shopping-cart"></i></Link>
       
        </article>

      
        
    

    </section>
        </div>

    );
}

export default User;