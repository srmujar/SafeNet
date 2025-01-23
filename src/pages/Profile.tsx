import React, { useState } from 'react';
import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonText, IonButton, IonItem, IonInput, IonRouterLink, IonButtons, IonBackButton, IonCard, IonCardHeader, IonCardTitle, IonIcon, IonModal, IonHeader, IonToolbar, IonLabel, IonTitle, IonToast } from '@ionic/react';
import './Profile.css';  // Import the CSS file where your styles are defined
import { arrowForward, arrowForwardCircleSharp, arrowForwardOutline, caretForward, create, information, informationCircle, key, lockClosed, pencil, playForward } from 'ionicons/icons';

const Profile: React.FC = () => {
  // States for each modal
  const [isEditNameModalOpen, setEditNameModalOpen] = useState(false);
  const [isChangePasswordModalOpen, setChangePasswordModalOpen] = useState(false);
  const [isAboutAppModalOpen, setAboutAppModalOpen] = useState(false);

  return (
    <IonPage>
      <IonContent fullscreen className="profile-page-content">
        <div className="profile-image-container">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/image-b18d4.appspot.com/o/profile.svg?alt=media&token=0b30dbe5-ca5c-45fe-8baa-7d916c413846"
          />
        </div>
        <div className="profile-content-container">
          <div className="profile-content-name">
            <IonText>Jane Doe</IonText>
          </div>
          <div className="profile-content-email">
            <IonText>jane.doe@gmail.com</IonText>
          </div>
        </div>
        <IonGrid className="login-grid-container profile-grid">
          <IonText>
            <h1 className="profile-label">Profile</h1>
          </IonText>
          <IonRow>
            <IonCol size="12">
              <IonCard 
                className="profile-card-container"
                onClick={() => setEditNameModalOpen(true)} // Open the modal
                >
                <div className="profile-card-content">
                  <IonIcon icon={pencil}></IonIcon>
                  <IonCardTitle>Edit Name</IonCardTitle>
                </div>
                <IonIcon icon={caretForward}></IonIcon>
              </IonCard>
            </IonCol>
            <IonCol size="12">
              <IonCard 
                className="profile-card-container"
                onClick={() => setChangePasswordModalOpen(true)}>
                <div className="profile-card-content">
                  <IonIcon icon={lockClosed}></IonIcon>
                  <IonCardTitle>Change Password</IonCardTitle>
                </div>
                <IonIcon icon={caretForward}></IonIcon>
              </IonCard>
            </IonCol>
            <IonCol size="12">
              <IonCard
                className="profile-card-container about-app-container"
                onClick={() => setAboutAppModalOpen(true)}>
                <div className="profile-card-content">
                  <IonIcon icon={informationCircle}></IonIcon>
                  <IonCardTitle>About App</IonCardTitle>
                </div>
                <IonIcon icon={caretForward}></IonIcon>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonButton
                className="profile-logout-button"
                expand="full"
                routerLink="/main"
              >
                Log Out
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>

        {/* Edit Name Modal */}
        <IonModal className="profile-modal" isOpen={isEditNameModalOpen}>
          <IonHeader>
            <IonToolbar className="edit-name-toolbar">
              <IonButtons slot="end">
                <IonButton className="edit-name-close" onClick={() => setEditNameModalOpen(false)}>Close</IonButton>
              </IonButtons>
              <div className="edit-name-header">
                <IonIcon icon={pencil}></IonIcon>
                <IonTitle>Edit Name</IonTitle>
              </div>
            </IonToolbar>
          </IonHeader>
          <IonContent className="edit-name-page">
            <IonGrid className="edit-name-container">
              <IonRow>
                <IonCol>
                  <IonItem className="edit-name-item" lines="none">
                    <IonInput
                      placeholder="First Name"></IonInput>
                  </IonItem>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonItem className="edit-name-item" lines="none">
                    <IonInput
                      placeholder="Last Name"></IonInput>
                  </IonItem>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonButton className="profile-save-button" id="open-toast" expand="full">
                    Save
                  </IonButton>
                  <IonToast trigger="open-toast" message="Changes saved successfully" duration={5000}></IonToast>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonContent>
        </IonModal>

        {/* Change Password Modal */}
        <IonModal className="profile-modal" isOpen={isChangePasswordModalOpen}>
          <IonHeader>
            <IonToolbar className="edit-name-toolbar">
              <IonButtons slot="end">
                <IonButton className="edit-name-close" onClick={() => setChangePasswordModalOpen(false)}>Close</IonButton>
              </IonButtons>
              <div className="edit-name-header">
                <IonIcon icon={lockClosed}></IonIcon>
                <IonTitle>Change Password</IonTitle>
              </div>
            </IonToolbar>
          </IonHeader>
          <IonContent className="edit-name-page">
            <IonGrid className="edit-name-container">
              <IonRow>
                <IonCol>
                  <IonItem className="edit-name-item" lines="none">
                    <IonInput
                      placeholder="Old Password"
                      type="password"></IonInput>
                  </IonItem>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonItem className="edit-name-item" lines="none">
                    <IonInput
                      placeholder="New Password"
                      type="password"></IonInput>
                  </IonItem>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonItem className="edit-name-item" lines="none">
                    <IonInput
                      placeholder="Confirm Password"
                      type="password"></IonInput>
                  </IonItem>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonButton className="profile-save-button" id="open-toast" expand="full">
                    Save
                  </IonButton>
                  <IonToast trigger="open-toast" message="Changes saved successfully" duration={5000}></IonToast>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonContent>
        </IonModal>

        {/* About App Modal */}
        <IonModal className="profile-modal" isOpen={isAboutAppModalOpen}>
          <IonHeader>
            <IonToolbar className="edit-name-toolbar">
              <IonButtons slot="end">
                <IonButton className="edit-name-close" onClick={() => setAboutAppModalOpen(false)}>Close</IonButton>
              </IonButtons>
              <div className="edit-name-header">
                <IonIcon icon={informationCircle}></IonIcon>
                <IonTitle>About App</IonTitle>
              </div>
            </IonToolbar>
          </IonHeader>
          <IonContent className="edit-name-page">
            <IonGrid className="edit-name-container">
              <IonText className="about-app-label">
                <h1>About SafeNet</h1>
                <p>
                SafeNet: Secure Your Digital Life is an ionic application that is designed to educate users on best practices for maintaining digital security and protecting their online privacy. The app provides a range of practical tips, guidelines, and tools to help users protect their personal information, recognize and avoid online threats, and ensure safe and secure internet use. The app will provide users with essential knowledge and tools for maintaining digital security and privacy through step-by-step interactive tutorials and online resources. The app aims to raise awareness about online threats, provide actionable tips for safe internet use, and promote better digital habits to protect personal information and reduce vulnerability to cyberattacks.
                </p>
                <h2>Mission</h2>
                <p>
                SafeNet helps people protect their digital lives. We provide simple tools and tips to make cybersecurity easy to understand and use.
                </p>
                <h2>Vision</h2>
                <p>
                We want everyone to feel safe and confident online. SafeNet’s goal is to be the best platform for teaching digital safety and stopping cyber threats.
                </p>
                <h2>About the Team</h2>
                <p>
                We are the Group 3, a team of IT students working on SafeNet: Secure Your Digital Life for our Human-Computer Interaction 2 subject. Our aim is to create an app that teaches users how to stay safe online. 
                </p>
                <h2>Team Members</h2>
                <ul className="team-members-list">
                  <li className="team-member-item">
                    <span className="member-name">Amplayo, Michael</span>
                  </li>
                  <li className="team-member-item">
                    <span className="member-name">Baita, Arlen Sean G.</span>
                  </li>
                  <li className="team-member-item">
                    <span className="member-name">Emia, Corazon G.</span>
                  </li>
                  <li className="team-member-item">
                    <span className="member-name">Mujar, Sharareham I.</span>
                  </li>
                </ul>
                <p className="trademark">© 2024 SafeNet</p>
              </IonText>
            </IonGrid>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
