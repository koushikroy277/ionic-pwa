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

export default function Tab1() {
  return (
    <IonPage className="ionic-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ionic-head">Nav</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div><h1>Music</h1></div>
      </IonContent>
    </IonPage>
  );
}
