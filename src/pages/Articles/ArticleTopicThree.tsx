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
import './ArticleTopicThree.css';
import {
  arrowForwardCircle,
  arrowBackCircle,
  checkmark,
  checkmarkCircle,
} from 'ionicons/icons';

const ArticleTopicThree: React.FC = () => {
  return (
    <IonPage>
      <IonButtons className="article-topic-one-back-button-container">
        <IonBackButton defaultHref="/tabs/articles"></IonBackButton>
      </IonButtons>
      <IonContent fullscreen className="article-topic-one-page-content">
        <div className="article-topic-one-image-container">
          <img src="https://firebasestorage.googleapis.com/v0/b/image-b18d4.appspot.com/o/article3.webp?alt=media&token=3fb890e1-f3d2-4289-8639-5c222d7d815b" />
          <div className="overlay"></div>
          <div className="article-topic-one-title">
            <IonTitle>
                Online Safety Tips - <br></br> How to Stay Safe Online
            </IonTitle>
          </div>
        </div>
        
        <IonGrid className="article-topic-one-grid-container">
          <IonText className="lesson-one-label">
            <h1>Introduction</h1>
            <p>
                If you spend a lot of time on the Web, then it’s necessary to follow online safety rules. In this article, we will explain why Internet safety is important and share some tips on how to stay safe online. Follow our recommendations to avoid online threats, and to safely use Internet services and devices.
            </p>
          </IonText>
          <div className="topic-one-button-container">
            <IonButton
              className="topic-one-next-button article-topic-one-read-button"
              fill="clear"
              shape="round"
              href="https://nektony.com/tips/online-safety?srsltid=AfmBOorKGbp3QM7NKxRLIUYGGYpkY_Iusg4u8724qI4d3siLzoOk31Cx"
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

export default ArticleTopicThree;
