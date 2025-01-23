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
  useIonViewWillEnter,
} from '@ionic/react';
import './LessonFour.css';
import {
  arrowForwardCircle,
  arrowBackCircle,
  checkmark,
  checkmarkCircle,
} from 'ionicons/icons';

const LessonFour: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Reset currentPage to 1 whenever the component is entered
  useIonViewWillEnter(() => {
    setCurrentPage(1);
  });

  // Function to go to the next page
  const goToNextPage = () => {
    if (currentPage < 5) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to go to the previous page
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <IonPage>
      <IonButtons className="lesson-one-buttons">
        <IonBackButton defaultHref="/tabs/home"></IonBackButton>
      </IonButtons>
      <IonContent fullscreen className="lesson-four-page-content">
        <div className="lesson-one-image-container">
          <img src="https://firebasestorage.googleapis.com/v0/b/image-b18d4.appspot.com/o/wifi.svg?alt=media&token=be487248-2be8-48d6-b455-f28d8914f781" />
            <IonTitle className="lesson-one-title">
              Public Wi-Fi Safety
            </IonTitle>
        </div>
        <IonGrid className="lesson-one-grid-container">
          {currentPage === 1 && (
            <IonText className="lesson-one-label">
              <h1>Introduction</h1>
              <p>
              Public Wi-Fi networks, like those in coffee shops, airports, or hotels, are convenient but not always secure. Hackers can use these networks to intercept your data, putting your personal and financial information at risk. Understanding how to safely use public Wi-Fi is essential to protecting yourself while staying connected.
              </p>
              <div className="info-box">
                <h2>Did You Know?</h2>
                <p>
                Public Wi-Fi networks are a common target for cybercriminals. More than 25% of users who connect to unsecured networks risk exposing sensitive information, such as passwords and banking details, to attackers.
                </p>
              </div>
            </IonText>
          )}

          {currentPage === 2 && (
            <IonText className="lesson-one-label">
              <h1>Explanation</h1>
              <p>
                Public Wi-Fi is often not encrypted, making it easy for hackers to access your data. Here’s how public Wi-Fi attacks typically happen and what you can do to protect yourself:
                <br></br>
                <ol>
                  <strong>
                    <li>Man-in-the-Middle Attacks</li>
                  </strong>
                  - Hackers intercept the data between your device and the network, allowing them to see what you send and receive.
                  <br></br>
                  <strong>
                    <li>Evil Twin Networks</li>
                  </strong>
                  - A hacker sets up a fake Wi-Fi network with a similar name to a legitimate one, tricking users into connecting to it.
                  <br></br>
                  <strong>
                    <li>Unsecured Data Transfers</li>
                  </strong>
                  - Without encryption, any information you send, like passwords or messages, can be intercepted.
                </ol>
              </p>
              <div className="info-box">
                <h2>Tip:</h2>
                <p>
                    A Virtual Private Network (VPN) is one of the best ways to protect yourself on public Wi-Fi. It encrypts your connection, keeping your data safe from prying eyes.
                </p>
              </div>
            </IonText>
          )}

          {currentPage === 3 && (
            <IonText className="lesson-one-label">
              <h1>Why It Matters</h1>
              <p>
              Connecting to public Wi-Fi without proper precautions can lead to severe consequences, such as identity theft or financial loss. Here’s why staying safe on public networks is important:
                <br></br>
                <ol>
                  <strong>
                    <li>Protects Sensitive Information</li>
                  </strong>
                  - Without security, your passwords, credit card numbers, and emails can be stolen.
                  <br></br>
                  <strong>
                    <li>Prevents Malware Installation</li>
                  </strong>
                  - Hackers can use public Wi-Fi to infect your device with malware, such as keyloggers or ransomware.
                  <br></br>
                  <strong>
                    <li>Keeps Your Accounts Safe</li>
                  </strong>
                  - If someone accesses your data, they might log in to your accounts or change your passwords, locking you out.
                </ol>
              </p>
              <div className="info-box">
                <h2>Real-Life Case:</h2>
                <p>
                A traveler connected to an airport Wi-Fi network to check their bank account. Without realizing it, they were on a fake network set up by a hacker, who gained access to their banking credentials. The hacker quickly transferred money from the account.
                </p>
              </div>
            </IonText>
          )}

          {currentPage === 4 && (
            <IonText className="lesson-one-label">
              <h1>Action Steps</h1>
              <p>
              Follow these steps to stay safe on public Wi-Fi networks:
                <br></br>
                <ol>
                  <strong>
                    <li>Avoid Accessing Sensitive Accounts</li>
                  </strong>
                  - Don’t log into bank accounts or enter passwords when on public Wi-Fi.
                  <strong>
                    <li>Use a VPN</li>
                  </strong>
                  - A VPN encrypts your internet connection, making it difficult for hackers to steal your information.
                  <br></br>
                  <strong>
                    <li>Verify the Network</li>
                  </strong>
                    - Ask the staff for the official network name to ensure you’re connecting to the right one. Avoid networks with generic names like "Free Wi-Fi."
                    <br></br>
                  <strong>
                    <li>Turn Off Sharing</li>
                  </strong>
                    - Disable file and printer sharing on your device to prevent unauthorized access.
                    <br></br>
                  <strong>
                    <li>Enable HTTPS</li>
                  </strong>
                    - Ensure websites you visit start with “https://” instead of “http://” to encrypt your data.
                    <br></br>
                  <strong>
                    <li>Use Mobile Data for Sensitive Tasks</li>
                  </strong>
                    - If you need to log into a secure account, consider using your mobile data instead of public Wi-Fi.
                    <br></br>
                  <strong>
                    <li>Forget Networks After Use</li>
                  </strong>
                    - Don’t let your device automatically reconnect to public networks in the future.
                </ol>
              </p>
              <div className="info-box">
                <h2>Quick Tip:</h2>
                <p>
                Enable your device’s firewall and make sure your antivirus software is up-to-date before using public Wi-Fi.
                </p>
              </div>
            </IonText>
          )}

          {currentPage === 5 && (
            <IonText className="lesson-one-label">
              <h1>Example</h1>
              <p>
              Imagine you’re working at a café and need to check your email. Without using a VPN, a hacker on the same network could intercept your login details. If you used a VPN, however, your connection would be encrypted, preventing them from stealing your information.
              </p>
              <div className="info-box">
                <h2>Takeaway:</h2>
                <p>
                Public Wi-Fi can be risky, but with the right precautions—like using a VPN and avoiding sensitive transactions—you can stay safe while connected.
                </p>
              </div>
            </IonText>
          )}

          <div className="topic-one-button-container">
            {(currentPage === 2 ||
              currentPage === 3 ||
              currentPage === 4 ||
              currentPage === 5) && (
              <IonButton
                className="topic-one-prev-button"
                fill="clear"
                shape="round"
                onClick={goToPreviousPage}
              >
                <IonIcon
                  className="topic-one-icon"
                  icon={arrowBackCircle}
                  slot="start"
                ></IonIcon>
                Previous
              </IonButton>
            )}

            <IonButton
              className="topic-one-next-button"
              fill="clear"
              shape="round"
              onClick={currentPage < 5 ? goToNextPage : undefined}
              routerLink={currentPage === 5 ? '/tabs/home' : undefined}
            >
              {currentPage === 5 ? 'Finish' : 'Next'}
              <IonIcon
                className="topic-one-icon"
                icon={currentPage === 5 ? checkmarkCircle : arrowForwardCircle}
                slot="end"
              ></IonIcon>
            </IonButton>
          </div>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default LessonFour;
