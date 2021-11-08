import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './Components/pages/About/About';
import { Constant } from './Constant';
import Home from './Components/pages/Home/Home';
import ContactUs from './Components/pages/ContactUs/ContactUs';
import Search from './Components/pages/Search/Search';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
      <Route exact path={Constant.PATHS.HOME}>
        <Header></Header>
        <Home/>
        <Footer></Footer>
      </Route>
      <Route path={Constant.PATHS.ABOUT}>
      <Header></Header>
      <About/>
      <Footer></Footer>
      </Route>
      <Route exact path={Constant.PATHS.CONTACTUS}>
        <Header></Header>
        <ContactUs/>
        <Footer></Footer>
      </Route>
      <Route exact path={Constant.PATHS.SEARCH}>
      <Header></Header>
        <Search/>
        <Footer/>
      </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
