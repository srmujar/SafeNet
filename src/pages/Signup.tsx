import React from 'react';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonText,
  IonTextarea,
  IonInput,
  IonList,
  IonItem,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonRouterLink,
  IonButtons,
  IonBackButton
} from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import '@fontsource/poppins';
import '@fontsource/poppins/700.css';
import './Signup.css';

const Signup: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="signup-page-content">
        <IonButtons>
          <IonBackButton defaultHref="/main"></IonBackButton>
        </IonButtons>
        <div className="signup-image-container">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/image-b18d4.appspot.com/o/signup.svg?alt=media&token=7209aa54-fe25-450b-a15b-cc5fccc772b5"
            alt="Signup"
          />
        </div>
        <IonGrid className="signup-grid-container">
          <IonText>
            <h1 className="signup-label">Sign Up</h1>
          </IonText>
          <IonRow>
            <IonCol>
              <IonItem className="signup-item" lines="none">
                <IonInput
                  className="signup-input"
                  placeholder="First Name"
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem className="signup-item" lines="none">
                <IonInput
                  className="signup-input"
                  placeholder="Last Name"
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem className="signup-item" lines="none">
                <IonInput
                  className="signup-input"
                  placeholder="Email"
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem className="signup-item" lines="none">
                <IonInput
                  className="signup-input"
                  type="password"
                  placeholder="Password"
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton className="signup-button" expand="full">
                Sign Up
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center ion-align-items-center">
            <IonCol>
              <IonText className="signup-account-label">
                Already have an account?
              </IonText>
              <IonRouterLink routerLink="/login">
                <IonText className="signup-create-account-button">
                  Login to Account
                </IonText>
              </IonRouterLink>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Signup; // Ensure you are exporting the component
