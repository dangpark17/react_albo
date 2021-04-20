
import React from 'react';
import './App.css';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table,Button,Container,Modal,ModalBody,ModalHeader,FormGroup,ModalFooter} from 'reactstrap';
import {
  Route,
  Switch
} from 'react-router-dom';
import AppAppBar from '../src/views/AppAppBar'; 
import AppFooter from '../src/views/AppFooter';
import Home from '../src/render/Home';
import SignUp from '../src/render/SignUp';
import ProductHero from '../src/views/ProductHero';
import ProductValues from '../src/views/ProductValues';
import ProductHowItWorks from '../src/views/ProductHowItWorks';
import ProductCategories from '../src/views/ProductCategories';
import ProductCTA from '../src/views/ProductCTA';
import ProductSmokingHero from '../src/views/ProductSmokingHero';


class App extends React.Component {

  render(){
    return (
      <React.Fragment>
            <ProductHero />
            
            <ProductCategories />
            <AppFooter />
      </React.Fragment>
    );
  }  
}

export default App;
