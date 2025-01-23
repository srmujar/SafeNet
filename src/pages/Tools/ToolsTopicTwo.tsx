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
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonRow,
  IonCol,
  IonCard,
  IonItem,
  IonCardContent,
  IonCardHeader,
  useIonViewWillEnter,
} from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import './ToolsTopicTwo.css';
import {
  arrowBackCircle,
  arrowForwardCircle,
  checkmarkCircle,
  lockClosed,
  warningOutline,
} from 'ionicons/icons';

const ToolsTopicTwo: React.FC = () => {
  const [segment, setSegment] = useState('guide'); //for nested tabs

  const [currentPage, setCurrentPage] = useState(1);

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

  // Reset currentPage to 1 whenever the component is entered
  useIonViewWillEnter(() => {
    setCurrentPage(1);
  });

  return (
    <IonPage>
      <IonButtons>
        <IonBackButton defaultHref="/tabs/threatdetectiontools"></IonBackButton>
      </IonButtons>
      <IonContent fullscreen className="tools-topic-two-page-content">
        <div className="lesson-one-image-container">
          <img src="https://firebasestorage.googleapis.com/v0/b/image-b18d4.appspot.com/o/password.svg?alt=media&token=d75ee9b9-5d13-4ce0-a122-7587ba8d73a8" />
          <IonTitle className="lesson-one-title">
              Password Strength Analysis
          </IonTitle>
        </div>
        <IonGrid className="lesson-one-grid-container">
          <IonSegment
            value={segment}
            onIonChange={(e) => setSegment(e.detail.value as string)}
          >
            <IonSegmentButton value="guide">
              <IonLabel>Guide</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="tools">
              <IonLabel>Tools</IonLabel>
            </IonSegmentButton>
          </IonSegment>
          {segment === 'guide' && (
            <IonText className="lesson-one-label">
              {currentPage === 1 && (
                <>
                  <h1>Introduction</h1>
                  <p>
                  Strong passwords are one of the most important defenses against cyberattacks. A weak password makes it easier for hackers to gain unauthorized access to your accounts and sensitive information. Password strength analysis tools can help you assess how secure your passwords are and provide advice on how to improve them.
                  </p>
                </>
              )}
              {currentPage === 2 && (
                <>
                  <h1>Why Use Tools for Password Strength Analysis?</h1>
                  <p>
                  Manually evaluating password strength can be difficult, especially since attackers now use advanced techniques like brute-force attacks and password cracking algorithms. Tools like How Secure Is My Password, Password Checker Online, and others simplify the process by evaluating passwords based on length, complexity, and common patterns.
                  </p>
                </>
              )}
              {currentPage === 3 && (
                <>
                  <h1>What These Tools Do</h1>
                  <p>
                  Each password strength analysis tool provides valuable feedback on how to improve your passwords. Here’s how they help:
                    <ul>
                      <li>
                        <strong>Evaluate Password Length and Complexity: </strong>Tools like Password Checker Online and Kaspersky Password Check assess how long and complex your password is, and give advice on how to make it stronger.
                      </li>
                      <li>
                        <strong>Test Time to Crack: </strong>
                        Some tools, such as How Secure Is My Password, provide estimates of how long it would take a hacker to crack your password based on its structure.
                      </li>
                      <li>
                        <strong>Check for Common Patterns: </strong>Tools like 1Password Password Strength Checker look for common phrases or weak patterns that are easily guessable, helping you create a more secure password.
                      </li>
                    </ul>
                  </p>
                </>
              )}
              {currentPage === 4 && (
                <>
                  <h1>How to Use These Tools</h1>
                  <p>
                    <ol>
                      <strong><li>Enter Your Password: </li></strong>Simply type your password into one of the tools listed below.
                      <strong><li>Review the Analysis: </li></strong>The tool will provide feedback, such as how long it would take to crack your password, what improvements you can make, or if the password is safe to use.
                      <strong><li>Follow Suggestions: </li></strong>Use the advice from the tools to strengthen your password, including increasing length or adding a mix of characters.
                    </ol>
                  </p>
                </>
              )}
              {currentPage === 5 && (
                <>
                  <h1>What to Look for in the Reports</h1>
                  <p>
                    <ul>
                      <li>
                        <strong>If flagged as weak:</strong> The tool will recommend ways to improve the password, such as adding more characters, mixing uppercase and lowercase letters, or adding special characters.
                      </li>
                      <li>
                        <strong>If flagged as strong:</strong> While the password might be considered secure, remember to always use a unique password for every account to reduce the risks associated with data breaches.
                      </li>
                    </ul>
                  </p>
                  <div className="info-box">
                    <h2>Tip:</h2>
                    <p>
                    Bookmark these tools for quick access and regularly check the strength of your passwords to ensure your accounts are secure.
                    </p>
                  </div>
                </>
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
                  routerLink={
                    currentPage === 5 ? '/tabs/threatdetectiontools' : undefined
                  }
                >
                  {currentPage === 5 ? 'Finish' : 'Next'}
                  <IonIcon
                    className="topic-one-icon"
                    icon={
                      currentPage === 5 ? checkmarkCircle : arrowForwardCircle
                    }
                    slot="end"
                  ></IonIcon>
                </IonButton>
              </div>
            </IonText>
          )}

          {segment === 'tools' && (
            <div className="tool-wrapper">
              <div className="tool-cards">
                <div className="tool-card">
                  <h2 className="tool-card-title">How Secure Is My Password</h2>
                  <div className="tool-card-content">
                    <p className="tool-description">
                      <strong>Overview:</strong> How Secure Is My Password estimates how long it would take a hacker to crack your password using brute-force methods.
                      <br></br>
                      <br></br>
                      <strong>How It Works:</strong>
                    <ul className="tool-list">
                      <li>
                        <strong>Enter Password:</strong> Type your password to check its strength.
                      </li>
                      <li>
                        <strong>Time Estimate:</strong> The tool provides an estimate of how long it would take to break your password.
                      </li>
                    </ul>
                    <p className="tool-description">
                      <strong>Best For:</strong> Quick analysis of password strength for general users.
                    </p>
                  </p>
                    <a
                      href="https://howsecureismypassword.net/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn"
                    >
                      Visit How Secure Is My Password
                    </a>
                  </div>
                </div>

                <div className="tool-card">
                  <h2 className="tool-card-title">Password Checker Online</h2>
                  <div className="tool-card-content">
                    <p className="tool-description">
                      <strong>Overview:</strong> This tool evaluates your password based on length, complexity, and variety of characters, providing feedback and suggestions.
                      <br></br>
                      <br></br>
                      <strong>How It Works:</strong>
                    <ul className="tool-list">
                      <li>
                        <strong>Enter Password:</strong> Type your password into the input box.
                      </li>
                      <li>
                        <strong>Strength Assessment:</strong> The tool assesses the password and provides suggestions on how to improve it.
                      </li>
                    </ul>
                    <p>
                      <strong>Best For:</strong> Users who want a straightforward password evaluation and improvement suggestions.
                    </p>
                    </p>
                    <a
                      href="https://password-checker.online/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn"
                    >
                      Visit Password Checker Online
                    </a>
                  </div>
                </div>

                <div className="tool-card">
                  <h2 className="tool-card-title">Have I Been Pwned</h2>
                  <div className="tool-card-content">
                    <p className="tool-description">
                      <strong>Overview:</strong> Have I Been Pwned checks if your password or email has been part of any known data breaches, helping identify compromised passwords.
                      <br></br>
                      <br></br>
                      <strong>How It Works:</strong>
                    <ul className="tool-list">
                      <li>
                        <strong>Enter Email or Password:</strong> Type in your email or password.
                      </li>
                      <li>
                        <strong>Breach Check:</strong> The tool checks known breaches for your email or password exposure.
                      </li>
                    </ul>
                    <p>
                      <strong>Best For:</strong> Users who want to ensure their passwords haven't been exposed in data breaches.
                    </p>
                    </p>
                    <a
                      href="https://haveibeenpwned.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn"
                    >
                      Visit Have I Been Pwned
                    </a>
                  </div>
                </div>

                <div className="tool-card">
                  <h2 className="tool-card-title">Kaspersky Password Check</h2>
                  <div className="tool-card-content">
                    <p className="tool-description">
                      <strong>Overview:</strong> Kaspersky’s tool evaluates password strength, checking for common weaknesses and offering suggestions to improve security.
                      <br></br>
                      <br></br>
                      <strong>How It Works:</strong>
                    <ul className="tool-list">
                      <li>
                        <strong>Enter Password:</strong> Input your password.
                      </li>
                      <li>
                        <strong>Strength Assessment:</strong> It checks the password’s length, complexity, and commonness.
                      </li>
                    </ul>
                    <p>
                      <strong>Best For:</strong> A quick evaluation of password strength with actionable suggestions.
                    </p>
                    </p>
                    <a
                      href="https://password.kaspersky.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn"
                    >
                      Visit Kaspersky Password Check
                    </a>
                  </div>
                </div>

                <div className="tool-card">
                  <h2 className="tool-card-title">NordPass Password Strength Checker</h2>
                  <div className="tool-card-content">
                    <p className="tool-description">
                      <strong>Overview:</strong> NordPass offers a password strength checker that evaluates the complexity of your password and suggests ways to make it more secure.
                      <br></br>
                      <br></br>
                      <strong>How It Works:</strong>
                    <ul className="tool-list">
                      <li>
                        <strong>Enter Password:</strong> Input your password for evaluation.
                      </li>
                      <li>
                        <strong>Strength Analysis:</strong> The tool assesses the password for length, character diversity, and other factors.
                      </li>
                    </ul>
                    <p>
                      <strong>Best For:</strong> Detecting phishing scams and
                      protecting your personal accounts from unauthorized
                      access.
                    </p>
                    </p>
                    <a
                      href="https://nordpass.com/secure-password/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn"
                    >
                      Visit NordPass Password Strength Checker
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ToolsTopicTwo;
