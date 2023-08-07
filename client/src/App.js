import './App.css';

import { Route, Routes,Redirect, useNavigate, useParams} from 'react-router-dom';

import Register from './components/Authentication/Register/Register';
import Home from './components/Home/Home.js';
import Login from './components/Authentication/Login/Login';
import User from './components/User/User';
import CreateRecipe from './components/Recipe/CreateRecipe/CreateRecipe';
import RecipesCatalog from './components/RecipesCatalog/RecipesCatalog';
import { useState, createElement, useEffect, useContext ,useLayoutEffect} from 'react';
import Header from './components/Header/Header';
import Favourites from './components/Favourites/Favourites';
import Footer from './components/Footer/Footer';
import { Navigate } from 'react-router-dom';
import Details from './components/Recipe/Details/Details';
import * as recipeService from './services/recipeService';
import DetailsUser from './components/Recipe/DetailsUser/DetailsUser';
import Logout from './components/Authentication/Logout/Logout';
import { NotificationProvider } from './contexts/NotificationContext';
import Notification from './common/Notification';
import { AuthContext } from './contexts/AuthContext';
import Navbar from './components/NavBar/NavBar';
import useLocalStorage from './hooks/useLocalStorage';
import * as userService from './services/userService';
import DetailsFavourite from './components/Recipe/DetailsFavourite/DetailsFavourite';
import FilterV from './components/FilterV/FilterV';
import FilterNV from './components/FilterNV/FilterNV';
import RecipesDessert from './components/RecipesDessert/RecipesDessert';
import AscendingF from './components/AscendingF/AscendingF';
import DescendingF from './components/DescendingF/DescendingF';
import RecipesSalad from './components/RecipesSalads/RecipesSalads';
import AscendingPrice from './components/AscendingPrice/AscendingPrice';
import DescendingPrice from './components/DescendingPrice/DescendingPrice';
import FilterVeget from './components/FilterVeget/FilterVeget';
import RecipesAppet from './components/RecipesAppet/RecipesAppet';

const initialAuthState = {
  _id: '',
  email: '',
  accessToken: '',
};


function App() {

  const [user,setUser] = useLocalStorage('user',initialAuthState);
  
  const onlogin = (authData) => {
    setUser(authData);
  }

  const onlogout = () => {
    setUser(initialAuthState);
  }

  const [recipes,setRecipes] = useState([]);
   
    useEffect(() => {
       
        recipeService.getAll()
        .then(result => {
            setRecipes(result);
        })
        .catch(err => {            
          console.log(err);
      });

    } ,[]);


    const [recipessh,setRecipesh] = useState([]);
    
    useLayoutEffect(() => {
       
       
            userService.getAll()
            .then(result => {
                setRecipesh(result);
            })
            .catch(err => {            
                console.log(err);
            });

    },[]);
    





  return (
    <AuthContext.Provider value={{user,onlogin,onlogout}}>
      <NotificationProvider>

    <div className="App">
      <Header/>
      <Notification />

      <main id = "main-content">
        <Routes>

        <Route path='/' element={<Home />}/>
        <Route path='/pizzas' element={<RecipesCatalog recipes={recipes}/>}/>
        <Route path='/recipe-details/recipe-number::recipeId' element={<Details/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup'  element={<Register/>}/>

        <Route path='/logout' element={<Logout/>} />
        <Route path='/create-recipe' element={<CreateRecipe />}/>
        <Route path='/recipe-details-your-favourite/recipe-number::recipeId' element={<DetailsFavourite/>}/>
        <Route path='/recipe-details-user-view/recipe-id::recipeId' element={<DetailsUser />}/>
        <Route path='/veganrecipes' element={<FilterV />}/>
        <Route path='/nonvegan' element={<FilterNV />}/>
        <Route path='/vegetarian' element={<FilterVeget />}/>
        <Route path='/ascendingaz' element={<AscendingF />}/>
        <Route path='/descendingza' element={<DescendingF />}/>
        <Route path='/ascendingprice' element={<AscendingPrice />}/>
        <Route path='/descendingprice' element={<DescendingPrice />}/>
        <Route path='/desserts' element={<RecipesDessert />}/>
        <Route path='/salads' element={<RecipesSalad />}/>
        <Route path='/appetizers' element={<RecipesAppet />}/>
        <Route path='/shoppingcart' element={<Favourites/>}/>
        <Route path='/user-profile-page' element={<User />}/>
        <Route path="/logout" element={<Navigate to="/"/>}/>
       
        </Routes>
      </main>
      <Navbar/>
      <Footer/>
    </div>

    </NotificationProvider>
    </AuthContext.Provider>
  );
}

export default App;

