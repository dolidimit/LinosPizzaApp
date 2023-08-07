import React, { useLayoutEffect, useState,useEffect,useContext,ReactMapboxGl } from 'react';
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import RecipeModel from "../Recipe/RecipeModel/RecipeModel";
import { AuthContext } from "../../contexts/AuthContext";
import * as recipeService from '../../services/recipeService';
import "./DescendingPrice.css";

const DescendingPrice = () => {


    let [recipes,setRecipes] = useState([]);
    const {user} = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    const [limit,setLimit] = useState(8);

    
        useEffect(() => {
          setIsLoading(true);
          setTimeout(() => {
            recipeService.getAll()
            .then(recipeResult => {
                recipeResult = recipeResult.sort((a,b) => b.price -a.price );
                setRecipes(recipeResult);
                setIsLoading(false);
            })
            .catch(err => {            
                console.log(err);
            });
          }, 300);

        }, []);

        const loadMore = () => {
            setLimit(limit+8);
        }

        let recipesc = recipes.length;
    

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

export default DescendingPrice;