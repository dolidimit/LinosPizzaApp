import "./Home.css";

import React, { useLayoutEffect, useState,useEffect } from 'react';

import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import * as recipeService from "../../services/recipeService";
import RecipeModel from "../Recipe/RecipeModel/RecipeModel";


const Home = () =>  {


    const [recipes,setRecipes] = useState([]);

    useEffect(() => {

        recipeService.getAll()
        .then(result => {
            setRecipes(result);
        })
        .catch(err => {            
            console.log(err);
        });

    },[]);

   

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });


    return (
        <div className = "mainds">
            <aside>
                <Link  smooth= "true" to="/veganrecipes">Vegan</Link>
                <Link  smooth= "true" to="/nonvegan">Non Vegan</Link>
                <Link  smooth= "true" to="/vegetarian">Vegetarian</Link>
                <Link  smooth= "true" to="/appetizers">Appetizers</Link>
            </aside>
                <div className = "mainds">
  
     <article className="roword">
       <img  className="homeim" src ="https://www.allrecipes.com/thmb/0xH8n2D4cC97t7mcC7eT2SDZ0aE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/6776_Pizza-Dough_ddmfs_2x1_1725-fdaa76496da045b3bdaadcec6d4c5398.jpg"/>
       <img className="imgh2" src="https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/62c59f6365a259b03da440de3973f201/Derivates/668cba6648888c61d249c0a5d9651157a4ce3793.jpg"/>
       <p className="textp">
      <h2>Naan Pizza</h2>
      This fuss-free recipe is as simple as it is satisfying. All you need to transform a shop-bought naan into a personal pizza and a few simple ingredients .
      Spread over the tomato sauce and scatter over the grated mozzarella, pepperoni, blue cheese and olives.
        </p>
       <img className="img4fr" src="https://www.acouplecooks.com/wp-content/uploads/2022/10/Margherita-Pizza-093.jpg"/>
       <img  className="homeim2" src ="https://www.foodandwine.com/thmb/EUnl_kGLgYVYMozLPuTw_8zR98s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/smoky-breakfast-pizzas-FT-RECIPE0221-62397ac0094d415ab70803bde96d978f.jpg"/>
       <img className="iimg3" src = "https://buttsweets.pk/wp-content/uploads/2023/07/mexican-pizza.jpg"/>
     </article>
        </div>
        
  
    <p className="textp2">

        <h2>Peperoni Pizza</h2>
        Place on the sheet, cover with a tea towel and leave to rise for 10 mins. Press the edges of the dough, about 2cm from the edge, gently towards the sides of the sheet to create a thicker crust. Be careful not to create any holes.
Spread over the tomato sauce and scatter over the grated mozzarella, pepperoni, blue cheese and olives. Bake for 15-20 mins until golden and crisp, then cut into squares to serve.

    <p>30 mins to prepare and 20 mins to cook</p>
        </p>
        <article class="rowbreakor">
        {recipes.slice(-4).map(x => <RecipeModel key ={x._id} recipe={x}/>)}
        </article>
        </div>
    );
}

export default Home;