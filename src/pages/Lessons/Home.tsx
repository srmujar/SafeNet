import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonIcon,
  IonButton,
  IonLabel,
  IonText,
  IonInput,
  IonItem,
  IonGrid,
  IonRow,
  IonCol,
  IonSearchbar,
} from '@ionic/react';
import { personCircle, search } from 'ionicons/icons';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      {/* <IonToolbar>
        <div className="top-nav-bar-container">
          <IonTitle>Hello, User</IonTitle>
          <IonButton className="user-account-button" slot="end">
            <IonIcon className="user-account-icon" icon={person}></IonIcon>
          </IonButton>
        </div>
      </IonToolbar> */}
      <IonContent fullscreen className="home-page-content">
        <IonToolbar className="home-toolbar">
          <div className="title-logo-container">
            <div className="logo-container">
              <img src="https://firebasestorage.googleapis.com/v0/b/image-b18d4.appspot.com/o/logo.svg?alt=media&token=8870d775-9103-4729-a79e-e0f55562cd96" alt="Logo" />
            </div>
            <IonTitle>SafeNet</IonTitle>
          </div>
        </IonToolbar>
        <div className="home-slogan-container">
          <IonText className="home-slogan">Learn. Secure.</IonText>
          <IonText className="home-slogan second-line">Stay Safe!</IonText>
        </div>
        {/* <div className="home-search-container">
          <IonSearchbar></IonSearchbar>
        </div> */}
        <IonItem className="search-item">
          <IonInput className="search-input" placeholder="Search"></IonInput>
          <IonButton className="search-button" fill="clear">
            <IonIcon className="search-icon" icon={search}></IonIcon>
          </IonButton>
        </IonItem>
        <IonText className="home-topics-title">Topics</IonText>
        <IonGrid className="home-grid">
          <IonRow>
            <IonCol size="6">
              <IonCard
                className="home-lesson-one-card"
                routerLink="/tabs/home/lessonone"
              >
                <IonCardHeader className="home-lessons-card-title-container">
                  <div>
                    <IonCardTitle className="home-lessons-card-title">
                      Digital Security
                    </IonCardTitle>
                    <IonCardTitle className="home-lessons-card-title">
                      Basics
                    </IonCardTitle>
                  </div>
                  <div className="home-image-container">
                    <img src="https://firebasestorage.googleapis.com/v0/b/image-b18d4.appspot.com/o/basics.svg?alt=media&token=3abf9624-5e5d-46a1-89d6-3a7321a30d6b" />
                  </div>
                  {/* <div>
                    <IonCardSubtitle className="home-lessons-card-subtitle">
                      3 Lessons
                    </IonCardSubtitle>
                  </div> */}
                  {/* <IonButton>Start</IonButton> */}
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol size="6">
              <IonCard
                className="home-lesson-two-card"
                routerLink="/tabs/home/lessontwo"
              >
                <IonCardHeader className="home-lessons-card-title-container">
                  <div>
                    <IonCardTitle className="home-lessons-card-title">
                      Creating
                    </IonCardTitle>
                    <IonCardTitle className="home-lessons-card-title">
                      Strong Passwords
                    </IonCardTitle>
                  </div>
                  <div className="home-image-container">
                    <img src="https://firebasestorage.googleapis.com/v0/b/image-b18d4.appspot.com/o/strongpass.svg?alt=media&token=f1c75dd7-af5f-4f75-9f9f-3cbf3c412c89" />
                  </div>
                  {/* <div>
                    <IonCardSubtitle className="home-lessons-card-subtitle">
                      3 Lessons
                    </IonCardSubtitle>
                  </div> */}
                  {/* <IonButton>Start</IonButton> */}
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol size="6">
              <IonCard
                className="home-lesson-three-card"
                routerLink="/tabs/home/lessonthree">
                <IonCardHeader className="home-lessons-card-title-container">
                  <div>
                    <IonCardTitle className="home-lessons-card-title">
                      Recognizing
                    </IonCardTitle>
                    <IonCardTitle className="home-lessons-card-title">
                      Phishing Attacks
                    </IonCardTitle>
                  </div>
                  <div className="home-image-container">
                    <img src="https://firebasestorage.googleapis.com/v0/b/image-b18d4.appspot.com/o/phishing.svg?alt=media&token=7bf203be-3955-4274-8b8c-f3ee152899b4" />
                  </div>
                  {/* <div>
                    <IonCardSubtitle className="home-lessons-card-subtitle">
                      3 Lessons
                    </IonCardSubtitle>
                  </div> */}
                  {/* <IonButton>Start</IonButton> */}
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol size="6">
              <IonCard 
              className="home-lesson-four-card"
              routerLink="/tabs/home/lessonfour">
                <IonCardHeader className="home-lessons-card-title-container">
                  <div>
                    <IonCardTitle className="home-lessons-card-title">
                      Public
                    </IonCardTitle>
                    <IonCardTitle className="home-lessons-card-title">
                      Wi-Fi Safety
                    </IonCardTitle>
                  </div>
                  <div className="home-image-container">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/image-b18d4.appspot.com/o/wifi.svg?alt=media&token=be487248-2be8-48d6-b455-f28d8914f781"
                    />
                  </div>
                  {/* <div>
                    <IonCardSubtitle className="home-lessons-card-subtitle">
                      3 Lessons
                    </IonCardSubtitle>
                  </div> */}
                  {/* <IonButton>Start</IonButton> */}
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
