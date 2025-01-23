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
import './ToolsTopicOne.css';
import {
  arrowBackCircle,
  arrowForwardCircle,
  checkmarkCircle,
  lockClosed,
  warningOutline,
} from 'ionicons/icons';

const ToolsTopicOne: React.FC = () => {
  const [segment, setSegment] = useState('guide'); //for nested tabs

  const [expandedSection, setExpandedSection] = useState<string | null>(null);

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
      <IonContent fullscreen className="tools-topic-one-page-content">
        <div className="lesson-one-image-container">
          <img src="https://firebasestorage.googleapis.com/v0/b/image-b18d4.appspot.com/o/malwaredetection.svg?alt=media&token=1962ed47-4001-4d2e-8564-cea7a59400cb" />
          <IonTitle className="lesson-one-title">
              Malware Detection <br></br> and File Analysis
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
                  Malware detection and file analysis are crucial for keeping your digital devices and personal data safe from malicious software. Cybercriminals use various methods to spread malware, including deceptive file downloads, phishing attachments, and infected websites. Tools designed for malware detection can help identify these threats quickly, ensuring your device stays safe.
                  </p>
                </>
              )}
              {currentPage === 2 && (
                <>
                  <h1>Why Use Malware Detection Tools?</h1>
                  <p>
                  Manually detecting malware can be tricky since malicious files often disguise themselves as harmless. Using tools like VirusTotal, Malwarebytes, and others can help you analyze files and URLs in real-time, flagging potential threats that might otherwise go unnoticed.
                  </p>
                </>
              )}
              {currentPage === 3 && (
                <>
                  <h1>What These Tools Do</h1>
                  <p>
                  Each tool serves a different purpose in protecting your devices from malware, but they all share a common goal—keeping you safe from cyber threats. Here's how they can help:
                    <ul>
                      <li>
                        <strong>Scan Files for Malware: </strong>Tools like VirusTotal allow you to upload files to scan them with multiple antivirus engines, detecting known threats quickly.
                      </li>
                      <li>
                        <strong>Analyze URLs for Safety: </strong>
                        Tools such as Google Safe Browsing and Metadefender check links for signs of malicious behavior, like phishing or malware distribution.
                      </li>
                      <li>
                        <strong>Detect Malicious Software: </strong>Some tools, like Hybrid Analysis, focus on real-time protection, scanning files and websites automatically to catch threats as soon as they appear.
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
                      <strong><li>For Files: </li></strong>If you download a file or receive an email attachment from an unknown source, upload it to a malware detection tool.
                        <strong><li>For URLs: </li></strong>If you come across a suspicious link in an email or online, paste the URL into one of the safety check tools.
                        <strong><li>Review the Report: </li></strong>The tool will provide a safety report showing if the file or URL is clean or flagged for potential issues.
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
                      <strong>If flagged as dangerous:</strong> Do not open or download the file, and avoid clicking on the URL. Consider reporting it to your email provider or organization.
                      </li>
                      <li>
                      <strong>If clean:</strong> While the tool shows no threats, always stay cautious. Look for signs of a legitimate source (e.g., secure website connection and known senders).
                      </li>
                    </ul>
                  </p>
                  <div className="info-box">
                    <h2>Tip:</h2>
                    <p>
                    Bookmark these tools for quick use and always be cautious when dealing with files or links from untrusted sources.
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
                  <h2 className="tool-card-title">VirusTotal</h2>
                  <div className="tool-card-content">
                    <p className="tool-description">
                      <strong>Overview:</strong> VirusTotal is a comprehensive
                      tool that analyzes files and URLs using over 70 antivirus
                      engines to detect potential threats, including malware,
                      phishing attempts, and other malicious content.
                    <br></br>
                    <br></br>
                    <strong>How It Works:</strong>
                    <ul className="tool-list">
                      <li>
                        <strong>Upload a File or URL:</strong> Submit any file
                        or link you suspect might contain malware.
                      </li>
                      <li>
                        <strong>Scanning Process:</strong> VirusTotal scans the
                        submitted content and displays results from multiple
                        antivirus engines.
                      </li>
                    </ul>
                    <p className="tool-description">
                      <strong>Best For:</strong> General users looking for
                      quick, reliable scans of files or links from multiple
                      security providers.
                    </p>
                  </p>
                  <a
                    href="https://www.virustotal.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn"
                  >
                    Visit VirusTotal
                  </a>
                </div>
              </div>

              <div className="tool-card">
                <h2 className="tool-card-title">Hybrid Analysis</h2>
                  <div className="tool-card-content">
                    <p className="tool-description">
                      <strong>Overview:</strong> Hybrid Analysis specializes in
                      in-depth malware detection, using a virtual sandbox to
                      analyze files and provide detailed insights into malware
                      behavior.
                      <br></br>
                      <br></br>
                      <strong>How It Works:</strong>
                      <ul className="tool-list">
                        <li>
                          <strong>Upload Suspicious Files:</strong> Submit a
                          potentially harmful file for scanning.
                        </li>
                        <li>
                          <strong>Sandbox Analysis:</strong> The file is tested in
                        a virtual environment, observing behavior and detecting
                        signs of malicious activities.
                        </li>
                      </ul>
                    <p>
                      <strong>Best For:</strong> Advanced users and
                      cybersecurity professionals who need a detailed risk
                      assessment and behavioral analysis.
                    </p>
                  </p>
                  <a
                    href="https://www.hybrid-analysis.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn"
                  >
                    Visit Hybrid Analysis
                  </a>
                </div>
              </div>

                <div className="tool-card">
                  <h2 className="tool-card-title">Metadefender</h2>
                  <div className="tool-card-content">
                    <p className="tool-description">
                      <strong>Overview:</strong> Metadefender offers extensive
                      scanning for files, URLs, and IP addresses, using multiple
                      antivirus engines to ensure accurate threat detection.
                      <br></br>
                      <br></br>
                      <strong>How It Works:</strong>
                    <ul className="tool-list">
                      <li>
                        <strong>Enter File, URL, or IP:</strong> Submit any
                        content for scanning.
                      </li>
                      <li>
                        <strong>Threat Assessment Report:</strong> Metadefender
                        analyzes the content and delivers a detailed report on
                        any risks found.
                      </li>
                    </ul>
                    <p>
                      <strong>Best For:</strong> Users looking for robust
                      scanning across various types of content with high
                      detection rates for malware.
                    </p>
                    </p>
                    <a
                      href="https://metadefender.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn"
                    >
                      Visit Metadefender
                    </a>
                  </div>
                </div>

                <div className="tool-card">
                  <h2 className="tool-card-title">Google Safe Browsing</h2>
                  <div className="tool-card-content">
                    <p className="tool-description">
                      <strong>Overview:</strong> Google Safe Browsing checks
                      URLs against a database of unsafe sites and warns users if
                      a site is distributing malware or potentially phishing.
                      <br></br>
                      <br></br>
                      <strong>How It Works:</strong>
                    <ul className="tool-list">
                      <li>
                        <strong>Paste a URL:</strong> Enter the link to check
                        its safety.
                      </li>
                      <li>
                        <strong>Database Lookup:</strong> Google checks the URL
                        against flagged unsafe sites.
                      </li>
                    </ul>
                    <p>
                      <strong>Best For:</strong> Quick URL checks to verify the
                      safety of links before interacting with them.
                    </p>
                    </p>
                    <a
                      href="https://transparencyreport.google.com/safe-browsing/search?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn"
                    >
                      Visit Google Safe Browsing
                    </a>
                  </div>
                </div>

                <div className="tool-card">
                  <h2 className="tool-card-title">PhishTank</h2>
                  <div className="tool-card-content">
                    <p className="tool-description">
                      <strong>Overview:</strong> PhishTank is a community-driven
                      database for identifying phishing URLs, where users can
                      report and verify phishing attempts.
                      <br></br>
                      <br></br>
                      <strong>How It Works:</strong>
                    <ul className="tool-list">
                      <li>
                        <strong>Search for a URL:</strong> Enter a URL to check
                        if it's flagged as a phishing attempt.
                      </li>
                      <li>
                        <strong>Community Verification:</strong> Users
                        contribute to verifying phishing URLs for enhanced
                        accuracy.
                      </li>
                    </ul>
                    <p>
                      <strong>Best For:</strong> Detecting phishing scams and
                      protecting your personal accounts from unauthorized
                      access.
                    </p>
                    </p>
                    <a
                      href="https://www.phishtank.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn"
                    >
                      Visit PhishTank
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

export default ToolsTopicOne;
