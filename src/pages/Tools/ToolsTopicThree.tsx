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
import './ToolsTopicThree.css';
import {
  arrowBackCircle,
  arrowForwardCircle,
  checkmarkCircle,
  lockClosed,
  warningOutline,
} from 'ionicons/icons';

const ToolsTopicThree: React.FC = () => {
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
      <IonContent fullscreen className="tools-topic-three-page-content">
        <div className="lesson-one-image-container">
          <img src="https://firebasestorage.googleapis.com/v0/b/image-b18d4.appspot.com/o/phishing.svg?alt=media&token=7bf203be-3955-4274-8b8c-f3ee152899b4" />
          <IonTitle className="lesson-one-title">
            Phishing Detection <br></br>and URL Safety Check
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
                  Phishing scams and unsafe URLs are key methods used by cybercriminals to compromise personal and organizational security. Tools designed for phishing detection and URL analysis can help users identify and avoid potential threats before they can cause harm.
                  </p>
                </>
              )}
              {currentPage === 2 && (
                <>
                  <h1>Why Use Tools for Phishing Detection and URL Safety?</h1>
                  <p>
                  Manually identifying phishing attempts can be challenging due to the sophistication of scams. Tools like Norton Web Safe, URLVoid, and others automate the process of analyzing URLs, allowing users to determine whether a site is malicious or legitimate in seconds.
                  </p>
                </>
              )}
              {currentPage === 3 && (
                <>
                  <h1>What These Tools Do</h1>
                  <p>
                  Each tool has its own unique strengths, ranging from analyzing the reputation of URLs to identifying phishing or malware-related threats. Here’s how they can help:
                  <ol>
                      <strong><li>Scan URLs for Threats </li></strong>
                        - Tools like CheckPhish and Norton Safe Web analyze links against a database of known threats, ensuring even the latest phishing attempts are flagged.
                        <strong><li>Check Website Reputation </li></strong> - URLVoid and Norton Safe Web provide insights into a site's trustworthiness, highlighting suspicious activity or poor user ratings.
                        <strong><li>Detect Phishing Activity </li></strong> - Community-based tools such as PhishTank confirm if a URL is associated with known phishing schemes.
                        <strong><li>Look for Warning Signs </li></strong> - Legitimate organizations rarely request sensitive information through email or text. Be cautious of urgent or threatening language.
                    </ol>
                  </p>
                </>
              )}
              {currentPage === 4 && (
                <>
                  <h1>How to Use These Tools</h1>
                  <p>
                    <ul>
                      <li>
                      Copy the suspicious URL from an email or message.
                      </li>
                      <li>
                      Paste it into one or more tools from the list provided below.
                      </li>
                      <li>
                      Review the report, which will highlight whether the URL is safe, flagged as phishing, or associated with malware.
                      </li>
                    </ul>
                  </p>
                </>
              )}
              {currentPage === 5 && (
                <>
                  <h1>What to Look for in the Reports</h1>
                  <p>
                    <ul>
                      <li>
                      <strong>If flagged as unsafe or phishing: </strong>Do not click the link. Report it to your email provider or organization.
                      </li>
                      <li>
                      <strong>If deemed safe: </strong>Proceed with caution. Always double-check for signs like secure "https://" in the URL or legitimate sender details.
                      </li>
                    </ul>
                  </p>
                  <div className="info-box">
                    <h2>Tip:</h2>
                    <p>
                    Save these tools for quick use and always stay cautious when dealing with unexpected or unfamiliar messages.
                    </p>
                  </div>
                </>
              )}

              <div className="topic-one-button-container">
                {(currentPage === 2 ||
                  currentPage === 3 ||
                  currentPage === 4 ||
                  currentPage === 5 ||
                  currentPage === 6) && (
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
                  <h2 className="tool-card-title">Norton Safe Web</h2>
                  <div className="tool-card-content">
                    <p className="tool-description">
                      <strong>Overview:</strong> Norton’s tool analyzes websites for safety and provides user ratings to indicate potential threats.
                    <br></br>
                    <br></br>
                    <strong>How It Works:</strong>
                    <ul className="tool-list">
                      <li>
                        <strong>Enter the URL:</strong> Submit the website address for analysis.
                      </li>
                      <li>
                        <strong>Safety Ratings:</strong> The tool gives a safety score based on known threats and user feedback.
                      </li>
                    </ul>
                    <p className="tool-description">
                      <strong>Best For:</strong> Identifying suspicious or malicious websites.
                    </p>
                  </p>
                  <a
                    href="https://safeweb.norton.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn"
                  >
                    Visit Norton Safe Web
                  </a>
                </div>
              </div>

              <div className="tool-card">
                <h2 className="tool-card-title">URLVoid</h2>
                  <div className="tool-card-content">
                    <p className="tool-description">
                      <strong>Overview:</strong> URLVoid checks the reputation of websites using multiple sources, providing insights on domain trustworthiness.
                      <br></br>
                      <br></br>
                      <strong>How It Works:</strong>
                      <ul className="tool-list">
                        <li>
                          <strong>Analyze URLs:</strong> Enter the link to check for warnings or blacklisting.
                        </li>
                        <li>
                          <strong>View Reports:</strong> Receive a detailed report on the site's safety and reputation.
                        </li>
                      </ul>
                    <p>
                      <strong>Best For:</strong> Checking the legitimacy and trustworthiness of websites.
                    </p>
                  </p>
                  <a
                    href="https://www.urlvoid.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn"
                  >
                    Visit URLVoid
                  </a>
                </div>
              </div>

                <div className="tool-card">
                  <h2 className="tool-card-title">Netcraft Anti-Phishing Toolbar</h2>
                  <div className="tool-card-content">
                    <p className="tool-description">
                      <strong>Overview:</strong> Netcraft provides a browser extension that blocks phishing sites and offers real-time threat intelligence.
                      <br></br>
                      <br></br>
                      <strong>How It Works:</strong>
                    <ul className="tool-list">
                      <li>
                      Installs as a toolbar or extension in your browser.
                      </li>
                      <li>
                      Actively blocks malicious sites and notifies you of potential phishing threats.
                      </li>
                    </ul>
                    <p>
                      <strong>Best For:</strong> Users who want continuous protection while browsing.
                    </p>
                    </p>
                    <a
                      href="https://www.netcraft.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn"
                    >
                      Visit Netcraft Anti-Phishing Toolbar
                    </a>
                  </div>
                </div>

                <div className="tool-card">
                  <h2 className="tool-card-title">CheckPhish</h2>
                  <div className="tool-card-content">
                    <p className="tool-description">
                      <strong>Overview:</strong> CheckPhish is an AI-powered tool that detects phishing sites by analyzing URL patterns and website content.
                      <br></br>
                      <br></br>
                      <strong>How It Works:</strong>
                    <ul className="tool-list">
                      <li>
                      Enter the URL in the tool to verify its authenticity.
                      </li>
                      <li>
                      CheckPhish provides a detailed analysis of the website and alerts users to suspicious patterns.
                      </li>
                    </ul>
                    <p>
                      <strong>Best For:</strong> Users who want advanced analysis of suspicious websites powered by AI.
                    </p>
                    </p>
                    <a
                      href="https://checkphish.ai/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn"
                    >
                      Visit CheckPhish
                    </a>
                  </div>
                </div>

                <div className="tool-card">
                  <h2 className="tool-card-title">CyberDefender WebShield
                  </h2>
                  <div className="tool-card-content">
                    <p className="tool-description">
                      <strong>Overview:</strong> A free tool for checking website safety and identifying phishing sites.
                      <br></br>
                      <br></br>
                      <strong>How It Works:</strong>
                    <ul className="tool-list">
                      <li>
                      Scan URLs to detect fake sites imitating legitimate ones.
                      </li>
                      <li>
                      Blocks access to known malicious sites.
                      </li>
                    </ul>
                    <p>
                      <strong>Best For:</strong> Detecting deceptive websites in real-time.
                    </p>
                    </p>
                    <a
                      href="https://www.cyberdefender.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn"
                    >
                      Visit CyberDefender WebShield
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

export default ToolsTopicThree;
