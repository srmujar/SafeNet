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
import './ToolsTopicFour.css';
import {
  arrowBackCircle,
  arrowForwardCircle,
  checkmarkCircle,
  lockClosed,
  warningOutline,
} from 'ionicons/icons';

const ToolsTopicFour: React.FC = () => {
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
      <IonContent fullscreen className="tools-topic-four-page-content">
        <div className="lesson-one-image-container">
          <img src="https://firebasestorage.googleapis.com/v0/b/image-b18d4.appspot.com/o/wifitools.svg?alt=media&token=87b398fb-2858-4ace-931f-01290e09ea5d" />
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
                  Securing your network and Wi-Fi is essential to protect your personal and sensitive data from unauthorized access. Tools designed to monitor and improve network and Wi-Fi security can help users identify vulnerabilities, detect threats, and take proactive measures to ensure their network is safe from cyberattacks.
                  </p>
                </>
              )}
              {currentPage === 2 && (
                <>
                  <h1>Why Use Tools for Network and Wi-Fi Security?</h1>
                  <p>
                  Network and Wi-Fi security can be challenging to manage manually due to the variety of threats such as weak passwords, unauthorized devices, and security holes. Tools like Wireshark, NetSpot, and others make it easier to analyze your network's security and help identify potential risks that may compromise your devices and data.
                  </p>
                </>
              )}
              {currentPage === 3 && (
                <>
                  <h1>What These Tools Do</h1>
                  <p>
                  Each network and Wi-Fi security tool has unique features that help you safeguard your network:
                  <ol>
                      <strong><li>Scan for Network Vulnerabilities </li></strong>
                        - Tools like Wireshark and Fing analyze network traffic to detect any suspicious activity or unauthorized connections, ensuring your network remains secure.
                        <strong><li>Analyze Wi-Fi Networks </li></strong> - NetSpot and Wi-Fi Analyzer provide detailed reports on the strength, security, and configuration of Wi-Fi networks, helping you identify areas of weakness or unauthorized access.
                        <strong><li>Monitor Network Traffic </li></strong> - Tools like Wireshark allow you to monitor and capture data packets flowing through your network, helping you identify malicious activity or vulnerabilities.
                        <strong><li>Check Network Configuration </li></strong> - Tools like the Network Configuration Scanner help check your router's settings and provide tips for enhancing security, including changes to default credentials and encryption settings.
                    </ol>
                  </p>
                </>
              )}
              {currentPage === 4 && (
                <>
                  <h1>How to Use These Tools</h1>
                  <p>
                    <ol>
                      <strong><li>Download and Install: </li></strong>Install one or more of the tools listed below on your device.
                      <strong><li>Scan Your Network: </li></strong>Run a scan to detect vulnerabilities, unauthorized devices, or potential security issues.
                      <strong><li>Review the Results: </li></strong>The tool will highlight any weak points in your network or Wi-Fi security, such as insecure connections or devices not authorized to access the network.
                      <strong><li>Implement Security Measures: </li></strong>Follow the tool's recommendations to improve your network security, such as updating passwords, enabling encryption, or restricting access to authorized devices only.
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
                      <strong>Weak Encryption: </strong>If the tool detects that your Wi-Fi network is using outdated or insecure encryption methods (such as WEP), switch to a stronger one like WPA3
                      </li>
                      <li>
                      <strong>Unauthorized Devices: </strong>If the tool identifies unauthorized devices on your network, remove them immediately and change your Wi-Fi password.
                      </li>
                      <li>
                      <strong>Network Traffic Anomalies: </strong>Look out for unusual patterns in network traffic, which could indicate malicious activity such as hacking attempts or malware communication.
                      </li>
                    </ul>
                  </p>
                  <div className="info-box">
                    <h2>Tip:</h2>
                    <p>
                    Regularly monitor your network’s health and perform security checks using these tools to prevent unauthorized access and ensure your devices are secure. Always keep your router's firmware up-to-date to patch any known security vulnerabilities.
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
                  <h2 className="tool-card-title">Wireshark</h2>
                  <div className="tool-card-content">
                    <p className="tool-description">
                      <strong>Overview:</strong> Wireshark is a powerful tool for analyzing network traffic. It allows users to capture data packets and examine the details of network communication.
                    <br></br>
                    <br></br>
                    <strong>How It Works:</strong>
                    <ul className="tool-list">
                      <li>
                        <strong>Capture Packets:</strong> Start Wireshark and select the network interface to monitor.
                      </li>
                      <li>
                        <strong>Analyze Traffic:</strong> Review the captured packets for signs of unusual or unauthorized activity.
                      </li>
                    </ul>
                    <p className="tool-description">
                      <strong>Best For:</strong> Advanced users who need deep insights into network traffic and security vulnerabilities.
                    </p>
                  </p>
                  <a
                    href="https://www.wireshark.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn"
                  >
                    Visit Wireshark
                  </a>
                </div>
              </div>

              <div className="tool-card">
                <h2 className="tool-card-title">NetSpot</h2>
                  <div className="tool-card-content">
                    <p className="tool-description">
                      <strong>Overview:</strong> NetSpot is a Wi-Fi analysis tool that helps you analyze your wireless network coverage, find dead spots, and check for interference.
                      <br></br>
                      <br></br>
                      <strong>How It Works:</strong>
                      <ul className="tool-list">
                        <li>
                          <strong>Scan Your Network:</strong> Run a Wi-Fi survey in your location.
                        </li>
                        <li>
                          <strong>Review Coverage Map:</strong> The tool provides a detailed map of signal strength and any areas that may need improvement.
                        </li>
                      </ul>
                    <p>
                      <strong>Best For:</strong> Users looking to optimize Wi-Fi coverage and ensure a secure, high-performance connection.
                    </p>
                  </p>
                  <a
                    href="https://www.netspotapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn"
                  >
                    Visit NetSpot
                  </a>
                </div>
              </div>

                <div className="tool-card">
                  <h2 className="tool-card-title">Fing</h2>
                  <div className="tool-card-content">
                    <p className="tool-description">
                      <strong>Overview:</strong> Fing is a network scanner that helps you discover devices connected to your Wi-Fi network. It can detect unauthorized devices and vulnerabilities.
                      <br></br>
                      <br></br>
                      <strong>How It Works:</strong>
                    <ul className="tool-list">
                      <li>
                        <strong>Scan Your Network:</strong> Scan your Wi-Fi to identify all connected devices.
                      </li>
                      <li>
                        <strong>Check for Vulnerabilities:</strong> Fing will alert you to any suspicious devices or security risks.
                        </li>
                    </ul>
                    <p>
                      <strong>Best For:</strong> Home users who want to check which devices are connected to their network and ensure no unauthorized access.
                    </p>
                    </p>
                    <a
                      href="https://www.fing.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn"
                    >
                      Visit Fing
                    </a>
                  </div>
                </div>

                <div className="tool-card">
                  <h2 className="tool-card-title">Wi-Fi Analyzer</h2>
                  <div className="tool-card-content">
                    <p className="tool-description">
                      <strong>Overview:</strong> Wi-Fi Analyzer is a simple app that helps you measure the strength of Wi-Fi signals and identify optimal channels to avoid interference.
                      <br></br>
                      <br></br>
                      <strong>How It Works:</strong>
                    <ul className="tool-list">
                      <li>
                        <strong>Scan for Networks:</strong> Open the app and scan for nearby Wi-Fi networks.
                      </li>
                      <li>
                        <strong>Analyze Signal Strength:</strong> The tool shows you the signal strength and helps you find the least crowded channel for better performance.
                      </li>
                    </ul>
                    <p>
                      <strong>Best For:</strong> Users who want to optimize their Wi-Fi performance and security.
                    </p>
                    </p>
                    <a
                      href="https://www.wifianalyzer.info/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn"
                    >
                      Visit Wi-Fi Analyzer
                    </a>
                  </div>
                </div>

                <div className="tool-card">
                  <h2 className="tool-card-title">Router Password Cracker
                  </h2>
                  <div className="tool-card-content">
                    <p className="tool-description">
                      <strong>Overview:</strong> This tool helps identify weak or default passwords on your router, allowing you to secure your network.
                      <br></br>
                      <br></br>
                      <strong>How It Works:</strong>
                    <ul className="tool-list">
                      <li>
                        <strong>Test Router Passwords:</strong> Input your router's credentials and check if they are secure.
                      </li>
                      <li>
                        <strong>Get Recommendations:</strong> The tool will provide tips on creating stronger passwords or changing default ones.
                      </li>
                    </ul>
                    <p>
                      <strong>Best For:</strong> Users who want to ensure their router is using strong, secure passwords.
                    </p>
                    </p>
                    <a
                      href="https://www.routerpasswords.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn"
                    >
                      Visit Router Password Cracker
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

export default ToolsTopicFour;
