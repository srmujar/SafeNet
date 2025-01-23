import React from 'react';
import {
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonButton,
  IonText,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonButtons,
  IonBackButton,
  IonCardContent,
} from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import { cart, add, arrowForward } from 'ionicons/icons';
import './ThreatDetectionTools.css';

const ThreatDetectionTools: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="tools-page-content">
        <div className="tools-image-container">
          <img src="https://firebasestorage.googleapis.com/v0/b/image-b18d4.appspot.com/o/threatdetectiontools.svg?alt=media&token=d993ebc6-bd2e-4bc0-917a-464a85e020ee" />
          <IonTitle className="lesson-one-title">
            Threat Detection Tools
          </IonTitle>
        </div>
        <IonGrid className="tools-grid-container">
          <IonText>
            <h1 className="tools-label">Tools To Keep You Safe Online</h1>
          </IonText>
          <IonRow>
            <IonCol size="12">
              <IonCard className="tools-card" routerLink="/tabs/threatdetectiontools/toolstopicone">
                <IonCardHeader>
                  <div className="tools-card-content-container">
                    <div className="tools-card-image-container">
                      <img
                        className="tools-card-image home-lesson-one-card"
                        src="https://firebasestorage.googleapis.com/v0/b/image-b18d4.appspot.com/o/malwaredetection.svg?alt=media&token=1962ed47-4001-4d2e-8564-cea7a59400cb"
                      />
                    </div>
                    <div className="tools-card-text-container">
                      <IonCardTitle className="tools-card-title">Malware Detection and File Analysis</IonCardTitle>
                      <IonText className="tools-card-content">Scan files and URLs to keep your device safe from harmful software and viruses</IonText>
                    </div>
                  </div>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol size="12">
              <IonCard className="tools-card" routerLink="/tabs/threatdetectiontools/toolstopictwo">
                <IonCardHeader>
                  <div className="tools-card-content-container">
                    <div className="tools-card-image-container">
                      <img
                        className="tools-card-image home-lesson-two-card"
                        src="https://firebasestorage.googleapis.com/v0/b/image-b18d4.appspot.com/o/password.svg?alt=media&token=d75ee9b9-5d13-4ce0-a122-7587ba8d73a8"
                      />
                    </div>
                    <div className="tools-card-text-container">
                      <IonCardTitle className="tools-card-title">Password Strength Analysis</IonCardTitle>
                      <IonText className="tools-card-content">Ensure your passwords are strong and unique to prevent unauthorized access</IonText>
                    </div>
                  </div>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol size="12">
              <IonCard className="tools-card" routerLink="/tabs/threatdetectiontools/toolstopicthree">
                <IonCardHeader>
                  <div className="tools-card-content-container">
                    <div className="tools-card-image-container">
                      <img
                        className="tools-card-image home-lesson-three-card"
                        src="https://firebasestorage.googleapis.com/v0/b/image-b18d4.appspot.com/o/phishing.svg?alt=media&token=7bf203be-3955-4274-8b8c-f3ee152899b4"
                      />
                    </div>
                    <div className="tools-card-text-container">
                      <IonCardTitle className="tools-card-title">Phishing Detection and URL Safety Check</IonCardTitle>
                      <IonText className="tools-card-content">Protect your information by verifying suspicious links and emails before you click</IonText>
                    </div>
                  </div>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol size="12">
              <IonCard className="tools-card" routerLink="/tabs/threatdetectiontools/toolstopicfour">
                <IonCardHeader>
                  <div className="tools-card-content-container">
                    <div className="tools-card-image-container">
                      <img
                        className="tools-card-image home-lesson-four-card"
                        src="https://firebasestorage.googleapis.com/v0/b/image-b18d4.appspot.com/o/wifitools.svg?alt=media&token=87b398fb-2858-4ace-931f-01290e09ea5d"
                      />
                    </div>
                    <div className="tools-card-text-container">
                      <IonCardTitle className="tools-card-title">Network and Wi-Fi Security Tools</IonCardTitle>
                      <IonText className="tools-card-content">Secure your Wi-Fi network to
                  prevent unauthorized access and data breaches</IonText>
                    </div>
                  </div>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ThreatDetectionTools;
