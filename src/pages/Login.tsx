// Login.tsx
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
  IonBackButton,
  IonButtons,
} from '@ionic/react';
import '@fontsource/poppins';
import '@fontsource/poppins/700.css';

import './Login.css';

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="login-page-content">
        <IonButtons>
            <IonBackButton defaultHref="/main"></IonBackButton>
        </IonButtons>
        <div className="login-image-container">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/image-b18d4.appspot.com/o/login.svg?alt=media&token=19f70951-727a-467d-ade3-bfb1bfc4d099"
            alt="Login"
          />
        </div>
        <IonGrid className="login-grid-container">
          <IonText>
            <h1 className="login-label">Log In</h1>
          </IonText>
          <IonRow>
            <IonCol>
              <IonItem className="login-item" lines="none">
                <IonInput
                  className="login-input"
                  placeholder="Email"
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem className="login-item" lines="none">
                <IonInput
                  className="login-input"
                  type="password"
                  placeholder="Password"
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton
                className="login-button"
                expand="full"
                routerLink="/tabs/home"
              >
                Log In
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center ion-align-items-center">
            <IonCol>
              <IonText className="login-account-label">
                Don't have an account yet?
              </IonText>
              <IonRouterLink routerLink="/signup">
                <IonText className="login-create-account-button">
                  Create an Account
                </IonText>
              </IonRouterLink>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login; // Ensure you are exporting the component
