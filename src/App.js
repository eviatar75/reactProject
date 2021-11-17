import './App.css';
import React, { useState } from 'react';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './Components/pages/About/About';
import { Constant } from './Constant';
import Home from './Components/pages/Home/Home';
import SignIn from './Components/pages/SignIn/SignIn';
import ContactUs from './Components/pages/ContactUs/ContactUs';
import Search from './Components/pages/Search/Search';
import { firebase } from './Firebase/firebase';


function App() {
  const [isUserSignedIn, setUserSignedIn] = useState(true);

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUserSignedIn(true);
    }
    else {
      setUserSignedIn(false);
    }
  })

  if (isUserSignedIn === true)
    return (
      <React.StrictMode>
          <Router>
            <Switch>
              <Route exact path={Constant.PATHS.HOME}>
                <Home />
              </Route>
              <Route path={Constant.PATHS.ABOUT}>
                <About />
              </Route>
              <Route exact path={Constant.PATHS.CONTACTUS}>
                <ContactUs />
              </Route>
              <Route exact path={Constant.PATHS.SEARCH}>
                <Search />
              </Route>
            </Switch>
          </Router>
      </React.StrictMode>
    )
  else {
    return (
      <React.StrictMode>
        <Router>
          <Switch>
            <Route path="/">
              <SignIn />
            </Route>
          </Switch>
        </Router>
      </React.StrictMode>
    )

  }
}

export default App;
