import React, { useState, useEffect } from "react";
import {firebase} from '../../../Firebase/firebase';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const SignIn = ()=>{

  const [isUserSignedIn, setIsSignedIn] = useState(false);

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setIsSignedIn(!!user);
      console.log(user);
    });
  }, []);

    return <div className="grid grid-cols-1">
        <div className="flex justify-center pt-20">
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Google_livres.png" alt="404"/>
        </div>
        <div className="flex justify-center pt-10">
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
    </div> 
}

export default SignIn;