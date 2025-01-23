import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonGrid,
  IonText,
  IonButton,
  IonIcon,
} from '@ionic/react';
import './ArticleTopicTwo.css';
import {
  arrowForwardCircle,
  arrowBackCircle,
  checkmark,
  checkmarkCircle,
} from 'ionicons/icons';

const ArticleTopicTwo: React.FC = () => {
  return (
    <IonPage>
      <IonButtons className="article-topic-one-back-button-container">
        <IonBackButton defaultHref="/tabs/articles"></IonBackButton>
      </IonButtons>
      <IonContent fullscreen className="article-topic-one-page-content">
        <div className="article-topic-one-image-container">
          <img src="https://firebasestorage.googleapis.com/v0/b/image-b18d4.appspot.com/o/article2.jpg?alt=media&token=1aecb675-4603-42c9-8684-bc9c059a43a7" />
          <div className="overlay"></div>
          <div className="article-topic-one-title">
            <IonTitle>
              Internet Safety Tips <br></br> For Everyone <br></br> Who Spends Time Online
            </IonTitle>
          </div>
        </div>
        
        <IonGrid className="article-topic-one-grid-container">
          <IonText className="lesson-one-label">
            <h1>Introduction</h1>
            <p>
                When you want to make your home secure, you lock the door. When you want to prevent your bike from being stolen, you use a bike lock. When you want to protect your valuable possessions, you keep them in a safe. But what do you do to protect your identity online? We put together a comprehensive internet safety guide full of cybersecurity tips and best practices to help keep you safe online. Looking for information about a specific online safety topic? Use the links below to jump to the relevant section.
            </p>
          </IonText>
          <div className="topic-one-button-container">
            <IonButton
              className="topic-one-next-button article-topic-one-read-button"
              fill="clear"
              shape="round"
              href="https://www.snbsd.com/about/online-safety-guide"
              target="_blank"
              // rel="noopener noreferrer"
            >
              Read Full Article
              <IonIcon
                className="topic-one-icon"
                icon={arrowForwardCircle}
                slot="end"
              ></IonIcon>
            </IonButton>
          </div>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ArticleTopicTwo;
