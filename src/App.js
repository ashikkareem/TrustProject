import React ,{Fragment}from 'react';
import {BrowserRouter  as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/navbar';
import AboutUs from './components/aboutUs';
import Donate from './components/donate';
import ContactUs from './components/contactUs';
import OurWorks from './components/ourWorks';
import Follow from './components/follow';
import Home from './components/layout/home';
import Footer from './components/footer';

import './App.css';

class App extends React.Component {

  render() {

    return(
    <Router>  
    <Fragment>


      <Navbar />
      <AboutUs />
      <hr />
      <OurWorks/>
      <hr></hr>
      <Donate />
      <ContactUs />
      <Follow />  
      <hr></hr>
      <Footer/>

    
    <Route exact path ='/home' component={Home} />
    <Route exact path ='/aboutus' component={AboutUs} />
    <Route exact path ='/donate' component={Donate} />
    <Route exact path ='/contactus' component={ContactUs} />
    <Route exact path ='/ourworks' component={OurWorks} />
    <Route exact path ='/follow' component={Follow} />




    </Fragment>
    </Router>
    )

  }
}

export default App;