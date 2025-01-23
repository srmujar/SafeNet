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
import { Browser } from '@capacitor/browser';
import './Articles.css';

const Articles: React.FC = () => {
  const handleCardClick = async () => {
    // Open the article in the WebView using the Capacitor Browser
    await Browser.open({ url: 'https://medium.com/@cybertec/cyber-hygiene-best-practices-for-online-safety-c9d1732abefd' }); // Replace with the actual URL
  };
  return (
    <IonPage>
      <IonContent fullscreen className="articles-page-content">
        <div className="tools-image-container">
          <img src="https://firebasestorage.googleapis.com/v0/b/image-b18d4.appspot.com/o/articles_bg.png?alt=media&token=df5f4dbb-5a02-4254-ae96-de208c6437e7" />
          <IonTitle className="lesson-one-title">Educational Articles</IonTitle>
        </div>
        <IonGrid className="tools-grid-container">
          <IonText>
            <h1 className="article-label">
              Articles For Cyber Awareness
            </h1>
          </IonText>
          <IonRow>
            <IonCol size="12">
              <IonCard className="tools-card" routerLink="/tabs/articles/articletopicone">
                <IonCardHeader>
                  <div className="articles-card-content-container">
                    <div className="articles-card-image-container">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/image-b18d4.appspot.com/o/educational_articles.webp?alt=media&token=f8e39c0a-2cf8-4491-be80-3879b6749be5"
                      />
                    </div>
                    <div className="tools-card-text-container">
                      <IonCardTitle className="tools-card-title">Cyber Hygiene: Best Practices for Online Safety</IonCardTitle>
                      <IonText className="tools-card-content">by: Jonathan Paulson</IonText>
                    </div>
                  </div>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol size="12">
              <IonCard className="tools-card" routerLink="/tabs/articles/articletopictwo">
                <IonCardHeader>
                  <div className="articles-card-content-container">
                    <div className="articles-card-image-container article-image-two">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/image-b18d4.appspot.com/o/article2.jpg?alt=media&token=1aecb675-4603-42c9-8684-bc9c059a43a7"
                      />
                    </div>
                    <div className="tools-card-text-container">
                      <IonCardTitle className="tools-card-title">Internet Safety Tips For Everyone Who Spends Time Online</IonCardTitle>
                      <IonText className="tools-card-content">by: Security National Bank</IonText>
                    </div>
                  </div>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol size="12">
              <IonCard className="tools-card" routerLink="/tabs/articles/articletopicthree">
                <IonCardHeader>
                  <div className="articles-card-content-container">
                    <div className="articles-card-image-container article-image-three">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/image-b18d4.appspot.com/o/article3.webp?alt=media&token=3fb890e1-f3d2-4289-8639-5c222d7d815b"
                      />
                    </div>
                    <div className="tools-card-text-container">
                      <IonCardTitle className="tools-card-title">Online Safety Tips - How to Stay Safe Online</IonCardTitle>
                      <IonText className="tools-card-content">by: Asya Karapetyan</IonText>
                    </div>
                  </div>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol size="12">
              <IonCard className="tools-card" routerLink="/tabs/articles/articletopicfour">
                <IonCardHeader>
                  <div className="articles-card-content-container">
                    <div className="articles-card-image-container article-image-three">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/image-b18d4.appspot.com/o/article4.avif?alt=media&token=11a761de-5d76-452f-b2d2-6c20671c25ef"
                      />
                    </div>
                    <div className="tools-card-text-container">
                      <IonCardTitle className="tools-card-title">Share with Care: Staying Safe on Social Media</IonCardTitle>
                      <IonText className="tools-card-content">by: National Cybersecurity Alliance</IonText>
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

export default Articles;
