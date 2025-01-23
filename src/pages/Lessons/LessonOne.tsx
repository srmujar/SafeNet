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
import './LessonOne.css';
import {
  arrowForwardCircle,
  arrowBackCircle,
  checkmark,
  checkmarkCircle,
} from 'ionicons/icons';

const LessonOne: React.FC = () => {
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
    <IonPage className="lesson-one-page">
      <IonButtons className="lesson-one-buttons">
        <IonBackButton defaultHref="/tabs/home"></IonBackButton>
      </IonButtons>
      <IonContent fullscreen className="lesson-one-page-content">
        <div className="lesson-one-image-container">
          <img src="https://firebasestorage.googleapis.com/v0/b/image-b18d4.appspot.com/o/basics.svg?alt=media&token=3abf9624-5e5d-46a1-89d6-3a7321a30d6b" />
            <IonTitle className="lesson-one-title">
              Introduction to Digital Security –<br></br>
              Why it’s Important
            </IonTitle>
        </div>
        <IonGrid className="lesson-one-grid-container">
          {currentPage === 1 && (
            <IonText className="lesson-one-label">
              <h1>Introduction</h1>
              <p>
                Digital security is a fundamental aspect of protecting our
                personal information, devices, and online accounts from cyber
                threats. In today’s digital world, nearly every interaction—be
                it shopping, banking, socializing, or working—leaves a data
                footprint. Understanding digital security means understanding
                how to protect these footprints from potential threats.
              </p>
              <div className="info-box">
                <h2>Did You Know?</h2>
                <p>
                  Over 70% of data breaches occur because of weak or reused
                  passwords. Enhancing your digital security can reduce the
                  risks and protect your information.
                </p>
              </div>
            </IonText>
          )}

          {currentPage === 2 && (
            <IonText className="lesson-one-label">
              <h1>Explanation</h1>
              <p>
                Digital security covers a variety of practices and tools that
                defend against unauthorized access, hacking attempts, malware,
                and identity theft. Here are some of the core practices:
                <br></br>
                <ol>
                  <strong>
                    <li>Using Strong Passwords</li>
                  </strong>{' '}
                  - Create complex passwords that are unique to each account. A
                  strong password is generally at least 12 characters long and
                  combines uppercase and lowercase letters, numbers, and
                  symbols.
                  <br></br>
                  <strong>
                    <li>Two-Factor Authentication (2FA)</li>
                  </strong>
                  - 2FA adds an extra layer of protection by requiring a second
                  form of identification, like a code sent to your phone.
                  <br></br>
                  <strong>
                    <li>Recognizing Phishing Scams</li>
                  </strong>
                  - Phishing scams trick users into giving away sensitive
                  information, usually through fake emails or websites. Always
                  double-check email addresses and avoid clicking on suspicious
                  links.
                  <br></br>
                  <strong>
                    <li>Regular Software Updates</li>
                  </strong>{' '}
                  - Keeping apps and operating systems updated ensures you have
                  the latest security patches, which protect against
                  vulnerabilities that hackers might exploit.
                </ol>
              </p>
              <div className="info-box">
                <h2>Tip:</h2>
                <p>
                  Use a password manager to securely store and manage all your
                  passwords.
                </p>
              </div>
            </IonText>
          )}

          {currentPage === 3 && (
            <IonText className="lesson-one-label">
              <h1>Why It Matters</h1>
              <p>
                Cyber threats have increased in both frequency and
                sophistication, with millions of people affected every year by
                attacks on personal data. Digital security is crucial for
                several reasons:
                <br></br>
                <ol>
                  <strong>
                    <li>Protection of Personal Data</li>
                  </strong>
                  - Your photos, emails, financial details, and private
                  conversations can be valuable targets for attackers.
                  <br></br>
                  <strong>
                    <li>Financial Safety (2FA)</li>
                  </strong>
                  - Cybercriminals often target financial accounts, which can
                  lead to unauthorized transactions and financial loss.
                  <br></br>
                  <strong>
                    <li>Preventing Identity Theft</li>
                  </strong>
                  - Once someone gains access to your personal details, they
                  could impersonate you online or access sensitive accounts.
                </ol>
              </p>
              <div className="info-box">
                <h2>Real-Life Case:</h2>
                <p>
                  In recent years, high-profile companies have suffered data
                  breaches, exposing millions of users’ private information.
                  Proper digital security habits can help you minimize the risk
                  of falling victim to these threats.
                </p>
              </div>
            </IonText>
          )}

          {currentPage === 4 && (
            <IonText className="lesson-one-label">
              <h1>Action Steps</h1>
              <p>
                Here’s a set of foundational actions to strengthen your digital
                security right away:
                <br></br>
                <ol>
                  <strong>
                    <li>Start with Basic Security Practices:</li>
                  </strong>
                    - Regularly update passwords, ideally every few months, and avoid reusing passwords across multiple sites.
                  <br></br>
                    - Use strong passwords and a password manager to create and remember them.
                  <strong>
                    <li>Stay Informed on New Threats</li>
                  </strong>
                  - Cyber threats evolve quickly. Keep up-to-date with security
                  news and stay vigilant about emerging scams or new malware.
                  <br></br>
                  <strong>
                    <li>Evaluate Your Digital Footprint</li>
                  </strong>
                  - Regularly review your account security settings.
                  <br></br>
                  - Enable 2FA on critical accounts like email, banking, and social media.
                  <br></br>
                  - Delete unused accounts to reduce potential access points for attackers.
                </ol>
              </p>
              <div className="info-box">
                <h2>Quick Checklist:</h2>
                <p>
                  When did you last update your passwords? Do you have 2FA
                  enabled on important accounts? These small steps can make a
                  big difference.
                </p>
              </div>
            </IonText>
          )}

          {currentPage === 5 && (
            <IonText className="lesson-one-label">
              <h1>Example</h1>
              <p>
                Imagine you’ve logged into your online banking account on a
                shared or public computer. Without strong digital security
                practices, an unauthorized person could gain access to this
                account. Here’s how a few security practices could help:
                <br></br>
                <ul>
                  <strong>
                    <li>Two-Factor Authentication (2FA)</li>
                  </strong>{' '}
                  - it would send a verification code to your phone, preventing
                  anyone from accessing your account even if they had your
                  password.
                  <br></br>
                  <strong>
                    <li>Logout Reminders and Session Management</li>
                  </strong>{' '}
                  - Be sure to log out from any shared devices and check your
                  account settings for active sessions.
                </ul>
              </p>
              <div className="info-box">
                <h2>Takeaway:</h2>
                <p>
                  By incorporating these habits into your daily routine, you can
                  significantly lower the risks associated with online threats
                  and enjoy a safer digital life.
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

export default LessonOne;
