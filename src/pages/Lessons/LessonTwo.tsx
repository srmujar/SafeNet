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
import './LessonTwo.css';
import {
  arrowForwardCircle,
  arrowBackCircle,
  checkmark,
  checkmarkCircle,
} from 'ionicons/icons';

const LessonTwo: React.FC = () => {
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
      <IonButtons>
        <IonBackButton defaultHref="/tabs/home"></IonBackButton>
      </IonButtons>
      <IonContent fullscreen className="lesson-two-page-content">
        <div className="lesson-one-image-container">
          <img src="https://firebasestorage.googleapis.com/v0/b/image-b18d4.appspot.com/o/strongpass.svg?alt=media&token=f1c75dd7-af5f-4f75-9f9f-3cbf3c412c89" />
          <IonTitle className="lesson-one-title">Creating <br></br>Strong Passwords</IonTitle>
        </div>
        <IonGrid className="lesson-one-grid-container">
          {currentPage === 1 && (
            <IonText className="lesson-one-label">
              <h1>Introduction</h1>
              <p>
                Passwords are the keys to your online accounts. They help
                protect your personal information, like your emails, photos, and
                banking details, from being accessed by people who shouldn’t
                have them. In today’s digital world, strong passwords are more
                important than ever. Weak passwords, like “123456” or
                “password,” are easy for hackers to guess, putting your accounts
                at risk.
              </p>
              <div className="info-box">
                <h2>Did You Know?</h2>
                <p>
                  More than 70% of data breaches happen because of weak or
                  reused passwords. By making your passwords stronger, you can
                  reduce these risks and protect your information from being
                  stolen.
                </p>
              </div>
            </IonText>
          )}

          {currentPage === 2 && (
            <IonText className="lesson-one-label">
              <h1>Explanation</h1>
              <p>
                Digital security includes different practices and tools that
                help protect us from hackers, malware, and identity theft. One
                of the most basic but effective ways to protect your accounts is
                by using strong passwords. Here’s how to create strong
                passwords:
                <br></br>
                <ol>
                  <strong>
                    <li>Use More Characters</li>
                  </strong>
                  - A strong password should be at least 12 characters long. The
                  longer, the better.
                  <br></br>
                  <strong>
                    <li>Mix It Up</li>
                  </strong>
                  - Combine uppercase letters, lowercase letters, numbers, and
                  symbols (like #, @, or $).
                  <br></br>
                  <strong>
                    <li>Avoid Common Words</li>
                  </strong>
                  - Don't use easy-to-guess words like your name, “password,” or
                  simple patterns like “12345.”
                  <br></br>
                  <strong>
                    <li>Unique for Every Account:</li>
                  </strong>{' '}
                  - Never use the same password for multiple accounts. If one
                  account is hacked, all your accounts are at risk.
                </ol>
              </p>
              <div className="info-box">
                <h2>Tip:</h2>
                <p>
                  Consider using a password manager. This is a tool that helps
                  you store and create strong, unique passwords for each of your
                  accounts, so you don’t have to remember them all.
                </p>
              </div>
            </IonText>
          )}

          {currentPage === 3 && (
            <IonText className="lesson-one-label">
              <h1>Why It Matters</h1>
              <p>
                Using strong passwords is one of the easiest and most effective
                ways to protect yourself from cyber threats. Without strong
                passwords, you risk exposing your personal data, allowing
                hackers to steal your financial information or even your
                identity. Here’s why strong passwords are so important:
                <br></br>
                <ol>
                  <strong>
                    <li>Protects Personal Information</li>
                  </strong>
                  - Your personal details, like your emails, photos, and
                  financial information, can be valuable to hackers. A strong
                  password helps keep them safe.
                  <br></br>
                  <strong>
                    <li>Secures Financial Accounts</li>
                  </strong>
                  - Hackers often target bank accounts. If your password is
                  weak, they can gain access and steal your money.
                  <br></br>
                  <strong>
                    <li>Prevents Identity Theft</li>
                  </strong>
                  - If someone gains access to your personal details, they can
                  impersonate you online, making unauthorized purchases or even
                  opening new accounts in your name.
                </ol>
              </p>
              <div className="info-box">
                <h2>Real-Life Examples:</h2>
                <p>
                  Several high-profile companies have been hacked because
                  employees used weak passwords. In one case, hackers gained
                  access to millions of users' personal information because the
                  company’s staff used simple passwords that were easy to guess.
                </p>
              </div>
            </IonText>
          )}

          {currentPage === 4 && (
            <IonText className="lesson-one-label">
              <h1>Action Steps</h1>
              <p>
                Here’s how you can start creating stronger passwords today:
                <br></br>
                <ol>
                  <strong>
                    <li>Use Strong Passwords:</li>
                  </strong>
                    - Choose passwords that are at least 12 characters long,
                      combining letters, numbers, and symbols.
                    <br></br>
                    - Avoid using common words or phrases that hackers could
                      easily guess.
                    
                  <strong>
                    <li>Use a Password Manager</li>
                  </strong>
                  - A password manager will store your passwords securely and
                  generate strong passwords for each of your accounts.
                  <br></br>
                  <strong>
                    <li>Enable Two-Factor Authentication (2FA)</li>
                  </strong>
                  - This adds an extra layer of security by requiring a second
                  form of identification, such as a code sent to your phone,
                  before you can log in.
                  <br></br>
                  <strong>
                    <li>Update Passwords Regularly</li>
                  </strong>
                  - Change your passwords every few months, especially for
                  important accounts like email or banking.
                  <br></br>
                  <strong>
                    <li>Don’t Reuse Passwords</li>
                  </strong>
                  - Use different passwords for different accounts. That way, if
                  one account is hacked, the others will stay safe.
                  <br></br>
                </ol>
              </p>
              <div className="info-box">
                <h2>Quick Tip:</h2>
                <p>
                  When was the last time you updated your passwords? Check your
                  most important accounts, and make sure you’ve used strong
                  passwords. Consider enabling two-factor authentication on
                  accounts that offer it for extra security.
                </p>
              </div>
            </IonText>
          )}

          {currentPage === 5 && (
            <IonText className="lesson-one-label">
              <h1>Example</h1>
              <p>
                Let’s say you log into your online banking account on a public
                computer. If your password is weak, hackers could easily guess
                it and steal your money. Here’s how strong password practices
                could help protect you:
                <br></br>
                <ul>
                  <li>
                    <strong>Two-Factor Authentication (2FA)</strong> would send
                    a code to your phone, so even if someone knows your
                    password, they can’t access your account without the code.
                  </li>
                  <br></br>
                  <strong>
                    <li>Session Management</li>
                  </strong>
                  - Be sure to log out of shared computers after you’re done,
                  and regularly check your account settings for any active
                  sessions that you didn’t authorize.
                </ul>
              </p>
              <div className="info-box">
                <h2>Takeaway:</h2>
                <p>
                  By following these steps and creating stronger passwords, you
                  can protect your accounts and reduce the risk of being
                  targeted by hackers.
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

export default LessonTwo;
