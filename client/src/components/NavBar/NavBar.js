import './NavBar.css';

import { Link, NavLink } from 'react-router-dom';
import { useContext} from 'react';

import { AuthContext } from "../../contexts/AuthContext";


const Navbar = () => {

    const {user} = useContext(AuthContext);

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

 
    let navbar = (
      <ul>
        <li><Link smooth= "true" to="/"><i className="fas fa-solid fa-book-bookmark"></i></Link>Home</li>
        <li><Link smooth= "true" to="/pizzas"><i className="fas fa-thin fa-pizza-slice"></i></Link>Pizzas</li>
        <li><Link smooth= "true" to="/salads"><i className="fas fa-solid fa-leaf"></i></Link>Salads</li>
        <li><Link smooth= "true" to="/desserts"><i className="fas fa-solid fa-cookie"></i></Link>Desserts</li>
        <li><Link smooth= "true" to="/shoppingcart"><i className="fa-solid fa-shopping-cart"></i></Link>Cart</li>
        <li><Link smooth= "true" to="/create-recipe"><i className="fas fa-solid fa-plus"></i></Link>Add Recipe</li>
        <li><Link smooth= "true" to="/user-profile-page"><i className="fas fa-solid fa-user"></i></Link>Profile</li>
        <li><Link smooth= "true" onClick={scrollToTop} to="#"><i class="fas fa-solid fa-arrow-up"></i></Link>Up</li>
      </ul>
    );


    return (
       <section className="sec5navl">
                {
                   user.email
                        ? navbar
                        : null  
                }
        </section>
      
    );
}

export default Navbar;