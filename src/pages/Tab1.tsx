import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab1.scss";

import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/extract',
  params: {url: 'http://www.melskitchencafe.com/the-best-fudgy-brownies/'},
  headers: {
    'x-rapidapi-key': '95f1fb94d7mshe7816815b93cc4ap197e2fjsn4b824aff24ce',
    'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
  }
};

export default function Tab1() {
  axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  return (
    <IonPage className="ionic-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ionic-head">Ecommerce</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div><h1>API CALL</h1></div>
      </IonContent>
    </IonPage>
  );
}
