import "./Register.css";

import { useNavigate } from 'react-router';
import React, { useLayoutEffect, useState,useContext } from 'react';
import { Alert } from 'react-bootstrap';
import { Icon } from 'react-icons-kit';
import {eye} from 'react-icons-kit/feather/eye';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';

import * as authService from '../../../services/authService';
import { AuthContext } from '../../../contexts/AuthContext';
import * as validator from '../../../utils/authValidator';


const Register = () => {

     const {onlogin} = useContext(AuthContext);
     const navigate = useNavigate();

     const [errors,setErrors] = useState({name: false});
     const [Email, setErrorEmail] = useState('');
     const [Password, setErrorPassword] = useState('');

     const [type, setType]=useState('password');
     const [icon, setIcon]=useState(eyeOff);


      const onregisterSubmitHandler = (e) => {

          e.preventDefault();

          const email = e.target.email.value;
          const password = e.target.password.value;
          const confirmpassword = e.target.confirmpassword.value;
  

          authService.register(email, password, confirmpassword)   
          .then(authData => {

            onlogin(authData);
            navigate('/');

          })
          .catch(err => {            
            console.log(err);
          });


      }



      
      const emailcheckValid = (e) => {
        let currentemail = e.target.value;

        if(validator.validEmail(currentemail) !== '' || currentemail.length < 10) {
            setErrors(state => ({...state, name: 'Email should be at least 10 characters long and contain "@" character.'}))
        }
        else {
            setErrors(state => ({...state, name: false}))
            setErrorEmail(currentemail)
        }
      };

      
      const passwordcheckValid = (e) => {
        let currentpassword = e.target.value;

        if( currentpassword.length < 8 ) {
           
            setErrors(state => ({...state, name: 'Password should be at least 8 characters long.'}))
        }
        else {
            setErrors(state => ({...state, name: false}))
        }
      };








      function onChange() {
        const password = document.querySelector('input[name=password]');
        const confirm = document.querySelector('input[name=confirm]');
        if (confirm.value === password.value) {
          confirm.setCustomValidity('');
        } else {
          confirm.setCustomValidity('Passwords do not match');
        }
      }

     const handleToggle=()=>{    
      if(type==='password'){
        setIcon(eye);      
        setType('text');
       }
       else{
        setIcon(eyeOff);     
        setType('password');
       }
     }


     

    return (
        <div>
      <section className="sec8">
      <form onSubmit={onregisterSubmitHandler}  method="POST" >
      <h1>Sign Up</h1>
        <p className="form">
          <h2>Welcome to Lino's Pizza!</h2>
          <h3>Please enter your credentials.</h3>
          
         <label className="email">Email</label>
            <span className="ema">
            <input type="email" name = "email" className = "email" id = "email"  onChange={emailcheckValid}/>
            </span>
            <label className="password">Password</label>
            <span className="passw">
            <input className = "passw" name = "password" type={type} id = "password" onChange={onChange} onBlur={passwordcheckValid} />
            <span onClick={handleToggle}><Icon className="iconeye" icon={icon} size={25}/></span>
            </span>
            <label className="password">Confirm Password</label>
            <span className="passw">
            <input className = "passw" name = "confirm" type={type} id = "confirmpassword" onChange={onChange} onBlur={passwordcheckValid}/>
            <span onClick={handleToggle}><Icon className="iconeye" icon={icon} size={25}/></span>

            </span>
            <button className="btnsig" type = "submit">Sign up</button> 
            <span className="textbel">
            Thank you, enjoy your Lino's Pizza journey!
            </span>
           
        </p>
      </form>
    </section>
        </div>
    );
};

export default Register;
