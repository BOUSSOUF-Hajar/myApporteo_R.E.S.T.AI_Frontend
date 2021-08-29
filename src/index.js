import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "./assets/scss/material-kit-react.scss?v=1.10.0";
import RegisterApp from "./views/RegisterPage/registerApporteur.js";
import RegisterPart from "./views/RegisterPage/registerPartenaire.js";
import LoginApp from "./views/LoginPage/LoginApporteur.js";
import LoginPart from "./views/LoginPage/LoginPartenaire.js";
import comment from "./views/CommentçaMarche/commnentçaMarche.js";
import OrderHistory from "./views/MesAffaires/mesAffaires";
import gagne from "./views/cmbjeGagne/cmbjegagne.js";
import Contact from "./views/Contact/Contact.js";
import devenirApp from "./views/DevenirApp/devenirApp.js";
import DevenirAppo from "./views/ApporteurDevenirApp/devenirApp";
import MonAffaire from "./views/MesAffaires/monAffaire";
import notFound from "./views/not_found/NotFound.js";
//import {DevenirApp} from "./views/ApporteurDevenirApp/devenirApp";
// pages for this product
import Accueil from "./views/Accueil/accueil.js";
import AuthService from "./services/authService";

var hist = createBrowserHistory();
const isLogged = AuthService.isLogged()
const isAdmin = AuthService.isAdmin()
const isApporteur = AuthService.isApporteur()
const isPartenaire = AuthService.isPartenaire()
ReactDOM.render(
  <Router history={hist}>
    <Switch>
    <Route path="/combienjegagne" component={gagne} />
    <Route path="/commentçamarche" component={comment} />
    <Route path="/apporteur/connexion" component={LoginApp} />
    <Route path="/partenaire/connexion" component={LoginPart} />
    <Route path="/partenaire/inscription" component={RegisterPart} />
    <Route path="/apporteur/inscription" component={RegisterApp} />
    <Route path="/apporteur/devenirApporteur" component={isApporteur?DevenirAppo: notFound} />
    <Route path="/contact" component={Contact} />
    <Route path="/devenirApporteur" component={devenirApp} />
    <Route path="/affaires" component={isLogged?OrderHistory: notFound} />
    <Route path="/" component={Accueil}/>
    </Switch>
  </Router>,
  document.getElementById("root")
);
