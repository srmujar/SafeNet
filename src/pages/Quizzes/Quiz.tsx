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
import './Quiz.css';

const Quiz: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="quiz-page-content">
        <div className="tools-image-container">
          <img src="https://firebasestorage.googleapis.com/v0/b/image-b18d4.appspot.com/o/profile_bg.png?alt=media&token=86b56675-76dd-40fc-ab9c-5b2fe90f178d" />
          <IonTitle className="lesson-one-title">
            Quiz and Assessments
          </IonTitle>
        </div>
        <IonGrid className="tools-grid-container">
          <IonText>
            <h1 className="tools-label">Quiz To Protect Your Online Life</h1>
          </IonText>
          <IonRow>
            <IonCol size="12">
              <IonCard className="tools-card" routerLink="/tabs/quiz/quizone">
                <IonCardHeader>
                  <div className="quiz-card-content-container">
                    <div className="quiz-card-image-container">
                      <img
                        className="tools-card-image home-lesson-one-card"
                        src="https://firebasestorage.googleapis.com/v0/b/image-b18d4.appspot.com/o/quiz_one.png?alt=media&token=b712b2c0-bbb7-4def-9e89-42e2b38a394a"
                      />
                    </div>
                    <div className="tools-card-text-container">
                      <IonCardTitle className="tools-card-title">How Safe Are You?</IonCardTitle>
                      <IonText className="tools-card-content">Find out where you stand in digital security with this quiz</IonText>
                    </div>
                  </div>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol size="12">
              <IonCard className="tools-card" routerLink="/tabs/quiz/quiztwo">
                <IonCardHeader>
                  <div className="quiz-card-content-container">
                    <div className="quiz-card-image-container">
                      <img
                        className="tools-card-image home-lesson-two-card"
                        src="https://firebasestorage.googleapis.com/v0/b/image-b18d4.appspot.com/o/quiz_two.png?alt=media&token=07948b86-01af-4aae-b19a-101462bc1732"
                      />
                    </div>
                    <div className="tools-card-text-container">
                      <IonCardTitle className="tools-card-title">Building Better Passwords</IonCardTitle>
                      <IonText className="tools-card-content">Test your ability to create secure and reliable passwords</IonText>
                    </div>
                  </div>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol size="12">
              <IonCard className="tools-card" routerLink="/tabs/quiz/quizthree">
                <IonCardHeader>
                  <div className="quiz-card-content-container">
                    <div className="quiz-card-image-container">
                      <img
                        className="tools-card-image home-lesson-three-card"
                        src="https://firebasestorage.googleapis.com/v0/b/image-b18d4.appspot.com/o/quiz_three.png?alt=media&token=131e607c-8efa-4fdf-896c-6f67702c1888"
                      />
                    </div>
                    <div className="tools-card-text-container">
                      <IonCardTitle className="tools-card-title">Think Before You Click</IonCardTitle>
                      <IonText className="tools-card-content">Learn to spot phishing attacks and protect your information</IonText>
                    </div>
                  </div>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol size="12">
              <IonCard className="tools-card" routerLink="/tabs/quiz/quizfour">
                <IonCardHeader>
                  <div className="quiz-card-content-container">
                    <div className="quiz-card-image-container">
                      <img
                        className="tools-card-image home-lesson-four-card"
                        src="https://firebasestorage.googleapis.com/v0/b/image-b18d4.appspot.com/o/quiz_four.png?alt=media&token=2d428b95-7548-4caf-9e32-e8f5f833380f"
                      />
                    </div>
                    <div className="tools-card-text-container">
                      <IonCardTitle className="tools-card-title">Stay Safe on Public Wi-Fi</IonCardTitle>
                      <IonText className="tools-card-content">Quiz yourself on the dos and don’ts of using public Wi-Fi</IonText>
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

export default Quiz;
