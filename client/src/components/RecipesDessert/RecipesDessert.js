import "./RecipesDessert.css";

import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import RecipeModel from "../Recipe/RecipeModel/RecipeModel";
import * as recipeService from '../../services/recipeService';


const RecipesDessert = () => {

    
    const [recipes,setRecipes] = useState([]);
    const [limit,setLimit] = useState(8);
   
    useEffect(() => {
       
        recipeService.getAll()
        .then(result => {
            result = result.filter(x=> x.type=="dessert");
            setRecipes(result);
        })

    } ,[]);

    const loadMore = () => {
        setLimit(limit+8);
    }



    let recipesc = recipes.length;

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });




    return (
        <div>
             <aside>
                <Link  smooth= "true" to="/veganrecipes">Vegan</Link>
                <Link  smooth= "true" to="/nonvegan">Non Vegan</Link>
                <Link  smooth= "true" to="/vegetarian">Vegetarian</Link>
                <Link  smooth= "true" to="/appetizers">Appetizers</Link>
                
            </aside>
            <div class="dropdown">
                <button class="dropbtn">Sort & Order</button>
             <div class="dropdown-content">
  
                <Link  smooth= "true" to="/ascendingaz">A-z</Link>
                <Link  smooth= "true" to="/descendingza">Z-a</Link>
                <Link  smooth= "true" to="/ascendingprice">Price +</Link>
                <Link  smooth= "true" to="/descendingprice">Price -</Link>
             </div>
            </div>
           <section className="sec4">
           
              {recipes.slice(0,limit).map(x => <RecipeModel key ={x._id} recipe={x}/>)}          
              
           </section>
           {limit < recipes.length && (
            <button className="loadMorebtn" onClick={loadMore}>Load More</button>
           )}
           <h5>Items: {recipesc}</h5>
        </div>
    );

}

export default RecipesDessert;