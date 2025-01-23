import React from 'react';
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonList,
  IonItem,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Main.css';
import { useHistory } from 'react-router';

const Main: React.FC = () => {
  return (
    <IonPage>
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonContent fullscreen className="main-page-content">
        <div className="main-image-container">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/image-b18d4.appspot.com/o/main.svg?alt=media&token=7ef62b70-01e9-41b6-b934-2d307e842c27"
          />
        </div>
        <IonGrid className="main-container-grid">
          <IonRow>
            <IonText>
              <h1 className="main-label">Welcome to SafeNet</h1>
              <p className="main-text">
                Navigate the digital world confidently with SafeNet, your
                partner in online security.
              </p>
            </IonText>
          </IonRow>
          <IonRow className="ion-justify-content-center ion-align-items-center">
            <IonCol>
              <IonButton routerLink="/login" className="main-login-button-grid">
                Log In
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton
                routerLink="/signup"
                className="main-signup-button-grid"
                fill="outline"
              >
                Sign Up
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Main;
