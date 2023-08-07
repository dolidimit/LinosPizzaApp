import "./Favourites.css";

import React, { useLayoutEffect, useState ,useEffect,useContext} from 'react';
import { Link, NavLink, useNavigate, useParams ,Navigate} from 'react-router-dom';
import RecipeFavourite from "../Recipe/RecipeFavourite/RecipeFavourite";
import * as userService from '../../services/userService';
import { AuthContext } from "../../contexts/AuthContext";


function Favourites() {

    let sum = 0;

    const navigate = useNavigate();
    const [favourites,setFavourites] = useState([]);
    const {user} = useContext(AuthContext);
    const count = favourites.length;

    useEffect(() => {

        setTimeout(() => {
            userService.yourFavourites(user._id)
            .then(result => {
                setFavourites(result);
            })
            .catch(err => {            
                console.log(err);
            });

        },300)
    
    },[]);

    


    favourites.forEach(x => {
        sum+= Number(x.price)
    });

    return (
        <div>
              

            <section className="sec4">
           
                          <>
                            {favourites.map(x => <RecipeFavourite key ={x._id} recipe={x} />)}
   
                          </>
            
            </section>
            <h5 >Sum: ${sum.toFixed(2)}</h5>
        </div>
    );
}

export default Favourites;