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
import './ArticleTopicFour.css';
import {
  arrowForwardCircle,
  arrowBackCircle,
  checkmark,
  checkmarkCircle,
} from 'ionicons/icons';

const ArticleTopicFour: React.FC = () => {
  return (
    <IonPage>
      <IonButtons className="article-topic-one-back-button-container">
        <IonBackButton defaultHref="/tabs/articles"></IonBackButton>
      </IonButtons>
      <IonContent fullscreen className="article-topic-one-page-content">
        <div className="article-topic-one-image-container">
          <img src="https://firebasestorage.googleapis.com/v0/b/image-b18d4.appspot.com/o/article4.avif?alt=media&token=11a761de-5d76-452f-b2d2-6c20671c25ef" />
          <div className="overlay"></div>
          <div className="article-topic-one-title">
            <IonTitle>
                Share with Care: <br></br>Staying Safe on Social Media
            </IonTitle>
          </div>
        </div>
        
        <IonGrid className="article-topic-one-grid-container">
          <IonText className="lesson-one-label">
            <h1>Introduction</h1>
            <p>
                No matter whether you're a pro influencer or a newbie with three followers, you need to think about cybersecurity and protecting your personal data while using social media. Nowadays, your Facebook, Twitter, Instagram, LinkedIn, TikTok and YouTube accounts are basically as critical as email, even if you don't post often. Here is how you can keep your account secure, enjoy your online social life, and ghost any scammer that slips into your DMs!
            </p>
          </IonText>
          <div className="topic-one-button-container">
            <IonButton
              className="topic-one-next-button article-topic-one-read-button"
              fill="clear"
              shape="round"
              href="https://www.staysafeonline.org/articles/share-with-care-staying-safe-on-social-media"
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

export default ArticleTopicFour;
