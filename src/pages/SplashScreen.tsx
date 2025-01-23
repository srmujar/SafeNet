import React, { useEffect } from 'react';
import { IonContent, IonPage, IonText } from '@ionic/react';
import { useHistory } from 'react-router';
import './SplashScreen.css';

const SplashScreen: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push('/main');
    }, 4000);
  }, [history]);

  return (
    <IonPage>
      <IonContent fullscreen className="splashscreen-page-content">
        <div className="splashscreen-container">
          <img src="https://firebasestorage.googleapis.com/v0/b/image-b18d4.appspot.com/o/safenet_logo.svg?alt=media&token=c21e63c6-35e3-407b-af23-f5fb45edf186"></img>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SplashScreen;
