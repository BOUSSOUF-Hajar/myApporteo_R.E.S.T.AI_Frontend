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
import DenseTable from "./views/cmbjeGagne/cmbjegagne.js";
import Contact from "./views/Contact/Contact.js";
import devenirApp from "./views/DevenirApp/devenirApp.js";
import profilePage from "./views/ProfilePage/ProfilePage";
import DevenirAppo from "./views/ApporteurDevenirApp/devenirApp";
import MonAffaire from "./views/MesAffaires/monAffaire"
//import {DevenirApp} from "./views/ApporteurDevenirApp/devenirApp";
// pages for this product
import Accueil from "./views/Accueil/accueil.js";


var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
    <Route path="/combienjegagne" component={DenseTable} />
    <Route path="/commentçamarche" component={comment} />
    <Route path="/apporteur/connexion" component={LoginApp} />
    <Route path="/partenaire/connexion" component={LoginPart} />
    <Route path="/partenaire/inscription" component={RegisterPart} />
    <Route path="/apporteur/inscription" component={RegisterApp} />
    <Route path="/apporteur/devenirApporteur" component={DevenirAppo} />
    <Route path="/contact" component={Contact} />
    <Route path="/profile" component={profilePage}/>
    <Route path="/devenirApporteur" component={devenirApp} />
    <Route path="/affaires" component={OrderHistory} />
    <Route path="/affaire/:id" component={MonAffaire} />
    <Route path="/" component={Accueil}/>
    </Switch>
  </Router>,
  document.getElementById("root")
);
