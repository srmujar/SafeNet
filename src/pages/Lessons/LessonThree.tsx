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
import './LessonThree.css';
import {
  arrowForwardCircle,
  arrowBackCircle,
  checkmark,
  checkmarkCircle,
} from 'ionicons/icons';

const LessonThree: React.FC = () => {
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
      <IonContent fullscreen className="lesson-three-page-content">
        <div className="lesson-one-image-container">
          <img src="https://firebasestorage.googleapis.com/v0/b/image-b18d4.appspot.com/o/phishingdetection.svg?alt=media&token=e3819c81-612a-4c8d-8166-c6cd06203794" />
          <IonTitle className="lesson-one-title">Recognizing <br></br> Phishing Attacks</IonTitle>
        </div>
        <IonGrid className="lesson-one-grid-container">
          {currentPage === 1 && (
            <IonText className="lesson-one-label">
              <h1>Introduction</h1>
              <p>
                Phishing attacks are a type of cybercrime where attackers try to
                trick you into giving away personal information, like passwords,
                credit card details, or other sensitive data. They often do this
                through fake emails, messages, or websites that look real but
                are actually designed to steal your information. Phishing can
                happen to anyone, and recognizing these attacks early is key to
                protecting yourself online.
              </p>
              <div className="info-box">
                <h2>Did You Know?</h2>
                <p>
                  In 2021, nearly 90% of cyberattacks involved phishing.
                  Learning how to recognize phishing scams can prevent you from
                  falling victim to these attacks.
                </p>
              </div>
            </IonText>
          )}

          {currentPage === 2 && (
            <IonText className="lesson-one-label">
              <h1>Explanation</h1>
              <p>
                Phishing attacks often look like legitimate communications from
                trusted companies, making them difficult to spot. However, there
                are common signs to look out for:
                <br></br>
                <ol>
                  <strong>
                    <li>Suspicious Email Addresses</li>
                  </strong>
                  - Phishing emails often come from addresses that look similar
                  to, but aren’t quite the same as, the real company’s email
                  (for example, support@amzon.com instead of
                  support@amazon.com).
                  <br></br>
                  <strong>
                    <li>Urgent Requests</li>
                  </strong>
                  - Phishing attempts often try to create a sense of urgency,
                  asking you to act immediately, such as “Your account has been
                  compromised! Click here to secure it now.”
                  <br></br>
                  <strong>
                    <li>Unusual Links</li>
                  </strong>
                  - Be cautious of links that don’t seem to lead to the official
                  website. Hover your mouse over the link to see the actual URL,
                  and check if it matches the legitimate website.
                  <br></br>
                  <strong>
                    <li>Unexpected Attachments</li>
                  </strong>{' '}
                  - Don’t open attachments or download files from unknown
                  sources. These can contain malware that infects your device.
                </ol>
              </p>
              <div className="info-box">
                <h2>Tip:</h2>
                <p>
                  Always verify any email, message, or link by contacting the
                  company or person directly using contact information from
                  their official website.
                </p>
              </div>
            </IonText>
          )}

          {currentPage === 3 && (
            <IonText className="lesson-one-label">
              <h1>Why It Matters</h1>
              <p>
                Phishing attacks can have serious consequences, including
                identity theft, financial loss, and the spread of malware.
                Recognizing these attacks early helps you stay safe online.
                <br></br>
                <ol>
                  <strong>
                    <li>Protects Personal Data</li>
                  </strong>
                  - Phishing attacks are designed to steal your sensitive
                  information, such as passwords or social security numbers.
                  <br></br>
                  <strong>
                    <li>Prevents Financial Loss</li>
                  </strong>
                  - If attackers steal your banking or credit card details, they
                  can make unauthorized purchases or withdrawals.
                  <br></br>
                  <strong>
                    <li>Stops Identity Theft</li>
                  </strong>
                  - By stealing your personal information, attackers can
                  impersonate you online and cause serious damage to your
                  reputation.
                </ol>
              </p>
              <div className="info-box">
                <h2>Real-Life Example:</h2>
                <p>
                  A large company’s employees were tricked into clicking on
                  phishing emails, giving hackers access to their company’s
                  data. The attackers were able to steal private information and
                  cause financial damage. This incident could have been
                  prevented if employees had recognized the phishing attempt.
                </p>
              </div>
            </IonText>
          )}

          {currentPage === 4 && (
            <IonText className="lesson-one-label">
              <h1>Action Steps</h1>
              <p>
                Here’s what you can do to protect yourself from phishing
                attacks:
                <br></br>
                <ol>
                  <strong>
                    <li>Check the Email Address:</li>
                  </strong>
                  - Always verify the sender’s email address. If it looks
                  suspicious or doesn’t match the official domain, it’s likely a
                  phishing attempt.
                  <strong>
                    <li>Look for Red Flags</li>
                  </strong>
                  - Be cautious of emails that ask for personal information,
                  especially if they create urgency or come from unknown
                  sources.
                  <br></br>
                  <strong>
                    <li>Hover Over Links</li>
                  </strong>
                  - Hover your mouse over any links to see if they lead to a
                  legitimate website. Never click on a link if you’re unsure.
                  <br></br>
                  <strong>
                    <li>Don’t Open Unknown Attachments</li>
                  </strong>
                  - Avoid opening attachments or downloading files from
                  untrusted sources.
                  <br></br>
                  <strong>
                    <li>Verify Requests</li>
                  </strong>
                  - If you receive an unexpected email or message asking for
                  sensitive information, contact the company directly using
                  contact info from their official website, not the details in
                  the email.
                  <br></br>
                </ol>
              </p>
              <div className="info-box">
                <h2>Quick Tip:</h2>
                <p>
                  If an email looks suspicious, don’t open it. Simply delete it
                  or mark it as spam. Always be cautious with unsolicited emails
                  or messages.
                </p>
              </div>
            </IonText>
          )}

          {currentPage === 5 && (
            <IonText className="lesson-one-label">
              <h1>Example</h1>
              <p>
                Imagine you receive an email from what seems to be your bank,
                saying that your account has been compromised and you need to
                click a link to secure it. If you hover over the link, it shows
                a strange, misspelled URL that’s different from your bank’s real
                website. This is a phishing attempt. By not clicking the link
                and verifying the request through your bank’s official contact
                methods, you avoid falling for the scam.
              </p>
              <div className="info-box">
                <h2>Takeaway:</h2>
                <p>
                  Recognizing phishing attempts is crucial in preventing online
                  scams. Stay vigilant and double-check any suspicious emails or
                  messages before you click.
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

export default LessonThree;
