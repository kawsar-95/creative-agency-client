import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import logo from '../logo.png'


const Login = () => {

    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

   // Google Form Sign in start
   const handleGoogleSignIn = () => {

    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            console.log(result)
            const { displayName, email,photoURL } = result.user;

            const newUser = {
                name: displayName,
                email: email,
                picture:photoURL,
                error:'',
                success:true
            }



        setLoggedInUser(newUser);
        history.replace(from);

        }).catch(function (error) {

            var errorCode = error.code;
            var errorMessage = error.message;


        });

}

//    Google Form Sign in Complete
    return (

        <div className="container pb-5 mt-5" style={{
         padding:"20px",
         verticalAlign:"middle",
         border:"1px solid #C7C7C7",
         borderRadius:"10px",
         width:"40%",
         height:"auto"


        }}>
            <div className="row d-flex flex-column justify-content-center">

                <div>
                <img className="mt-5" src={logo} style={{ width:"20%"}} alt=""></img>
                <h2 style={{letterSpacing:"-1px",color:"#111430",fontSize:"34px",fontWeight:"700"}} className="text-center mt-5">Login with <span style={{color:"#36A955"}}> Google</span></h2>
                <hr></hr>

               <div className="mt-5 mb-5"> <button style={{padding:"10px",borderRadius:"50px",border:"1px solid #C7C7C7",marginBottom:"50px"}} onClick={handleGoogleSignIn}><img className="img-responsive" style={{width:"7%",marginRight:"10px"}} src="https://i.ibb.co/BsGRpCy/google.png" alt="fb"></img>Sign in with Google</button><br></br></div>
                </div>

            </div>

        </div>
    );
};

export default Login;