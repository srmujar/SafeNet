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
import './ArticleTopicOne.css';
import {
  arrowForwardCircle,
  arrowBackCircle,
  checkmark,
  checkmarkCircle,
} from 'ionicons/icons';

const ArticleTopicOne: React.FC = () => {
  return (
    <IonPage>
      <IonButtons className="article-topic-one-back-button-container">
        <IonBackButton defaultHref="/tabs/articles"></IonBackButton>
      </IonButtons>
      <IonContent fullscreen className="article-topic-one-page-content">
        <div className="article-topic-one-image-container">
          <img src="https://firebasestorage.googleapis.com/v0/b/image-b18d4.appspot.com/o/educational_articles.webp?alt=media&token=f8e39c0a-2cf8-4491-be80-3879b6749be5" />
          <div className="overlay"></div>
          <div className="article-topic-one-title">
            <IonTitle>
              Cyber Hygiene: <br></br>Best Practices for Online Safety
            </IonTitle>
          </div>
        </div>
        
        <IonGrid className="article-topic-one-grid-container">
          <IonText className="lesson-one-label">
            <h1>Introduction</h1>
            <p>
              The importance of maintaining robust cybersecurity hygiene cannot
              be overstated. From our personal data to sensitive corporate
              information, everything online is faced with a barrage of cyber
              threats every day. As technology advances, so do the methods
              employed by cyber criminals, and they’re constantly coming up with
              new ways to steal our data. In this blog, I’ll explore some best
              practices for online safety, and explain why individuals and
              organisations alike should consider the revolutionary benefits of
              quantum encryption.
            </p>
          </IonText>
          <div className="topic-one-button-container">
            <IonButton
              className="topic-one-next-button article-topic-one-read-button"
              fill="clear"
              shape="round"
              href="https://medium.com/@cybertec/cyber-hygiene-best-practices-for-online-safety-c9d1732abefd"
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

export default ArticleTopicOne;
