import React, { useState } from 'react';
import {
  IonContent,
  IonPage,
  IonGrid,
  IonButtons,
  IonBackButton,
  IonRow,
  IonCol,
  IonText,
  IonProgressBar,
  IonButton,
  IonIcon
} from '@ionic/react';
import './QuizFour.css';
import { arrowForwardCircle, checkmarkCircle, home, reloadCircle } from 'ionicons/icons';

const QuizFour: React.FC = () => {
    const totalQuestions = 10;
    const [currentQuestion, setCurrentQuestion] = useState(1); // Tracks the current question
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>(new Array(totalQuestions).fill('')); // Tracks the selected answer
    const [score, setScore] = useState(0); // Tracks the score
    const [quizFinished, setQuizFinished] = useState(false); // Tracks if quiz is finished
    const [answerRevealed, setAnswerRevealed] = useState(false); // Tracks if the correct answer is revealed
    const [isCorect, setIsCorrect] = useState(false); // Tracks if the selected answer is correct

    // Define the questions and answers
    const questions = [
        {
          question: "Which of the following actions is the safest to perform on public Wi-Fi?",
          options: [ //1
              "a) Online banking transactions",
              "b) Streaming videos on a secure app",
              "c) Accessing sensitive work documents without a VPN",
              "d) Sharing personal information via email"
            ],
            correctAnswer: "b) Streaming videos on a secure app"
        },
        {
          question: "What is a key feature to look for when connecting to public Wi-Fi?",
          options: [ //2
              "a) Strong signal strength",
              "b) An open, no-password connection",
              "c) A password-protected network",
              "d) The network’s name starts with 'Free'"
          ],
          correctAnswer: "c) A password-protected network"
        },
        {
          question: "How can you ensure a secure connection when using public Wi-Fi?",
          options: [ //3
              "a) Relying on your antivirus software",
              "b) Turning off your firewall",
              "c) Using a Virtual Private Network (VPN)",
              "d) Disconnecting from Wi-Fi when not in use"
          ],
          correctAnswer: "c) Using a Virtual Private Network (VPN)"
        },
        {
          question: "Public Wi-Fi networks are often targets for ______ attacks, where hackers intercept data being transmitted.",
          options: [ //4
              "a) Phishing",
              "b) Man-in-the-Middle",
              "c) Malware",
              "d) Spoofing"
          ],
          correctAnswer: "b) Man-in-the-Middle"
        },
        {
          question: "One way to enhance security on public Wi-Fi is by disabling ______ on your device, which prevents automatic connections to networks.",
          options: [ //5
              "a) Auto-connect",
              "b) Location services",
              "c) File sharing",
              "d) Data roaming"
          ],
          correctAnswer: "a) Auto-connect"
        },
        {
          question: "When using public Wi-Fi, make sure ______ is enabled in your browser to ensure your connection is secure.",
          options: [ //6
              "a) HTTP",
              "b) SSL",
              "c) VPN",
              "d) HTTPS"
          ],
          correctAnswer: "d) HTTPS"
        },
        {
          question: "Using public Wi-Fi to browse social media is always safe.",
          options: [ //7
              "a) True",
              "b) False"
          ],
          correctAnswer: "b) False"
        },
        {
          question: "It's a good practice to keep file sharing and AirDrop features turned off when connected to public Wi-Fi.",
          options: [ //8
              "a) True",
              "b) False"
          ],
          correctAnswer: "a) True"
        },
        {
          question: "You’re at a coffee shop and connect to public Wi-Fi. The network name looks legitimate, but your browser warns you that the website you’re visiting doesn’t use HTTPS. What should you do?",
          options: [ //9
              "a) Continue browsing but avoid entering personal information.",
              "b) Ignore the warning and proceed with your activity.",
              "c) Report the website as unsafe.",
              "d) Disconnect from the network and only reconnect using a VPN."
          ],
          correctAnswer: "d) Disconnect from the network and only reconnect using a VPN."
        },
        {
          question: "While using public Wi-Fi at an airport, you receive a pop-up asking you to install an update to access the internet. What should you do?",
          options: [ //10
              "a) Install the update to proceed.",
              "b) Use your mobile data to download the update.",
              "c) Disconnect from the network and avoid using public Wi-Fi.",
              "d) Ignore the pop-up and connect without installing anything."
          ],
          correctAnswer: "c) Disconnect from the network and avoid using public Wi-Fi."
        }
    ];

    const currentQuestionData = questions[currentQuestion - 1];
    // Calculate the progress percentage
    const progress = (currentQuestion / totalQuestions) * 100;

    const handleSelectAnswer = (answer: string) => {
      if (answerRevealed) return; // Prevent further selections once an answer is chosen
    
      const isAnswerCorrect = answer === currentQuestionData.correctAnswer;
      setIsCorrect(isAnswerCorrect);
      setAnswerRevealed(true);
    
      // Update selected answers
      const updatedAnswers = [...selectedAnswers];
      updatedAnswers[currentQuestion - 1] = answer;
      setSelectedAnswers(updatedAnswers);
    
      // Increment score if correct
      if (isAnswerCorrect) setScore(score + 1);
    };    

    // Function to calculate and display the score
    const handleSubmit = () => {
      let calculatedScore = 0;
      questions.forEach((question, index) => {
        if (selectedAnswers[index] === question.correctAnswer) {
          calculatedScore += 1;
        }
      });
      setScore(calculatedScore);
      setQuizFinished(true);
    };    

    const handleNextQuestion = () => {
      if (currentQuestion === totalQuestions) {
        handleSubmit();
      } else {
        setCurrentQuestion(currentQuestion + 1);
        setAnswerRevealed(false);
        setIsCorrect(false);
      }
    };    

  return (
    <IonPage>
        <IonButtons>
            <IonBackButton defaultHref="/tabs/quiz"></IonBackButton>
        </IonButtons>
        <IonContent fullscreen className="quiz-four-page-content">
          <IonGrid className="quiz-grid-container">
            {!quizFinished ? (
              <>
                <IonRow className="quiz-row">
                  <IonCol size="12" className="quiz-text-col">
                    <IonText className="question-number">
                      Question {currentQuestion} of {totalQuestions}
                    </IonText>
                    <IonRow className="quiz-row">
                      <IonCol size="12" className="quiz-progress-col">
                        <IonProgressBar value={progress / 100} color="warning" />
                      </IonCol>
                    </IonRow>
                    <IonText>
                      <p className="question-text">{currentQuestionData?.question}</p>
                    </IonText>
                  </IonCol>
                </IonRow>
                <IonRow className="quiz-row">
                  <IonCol size="12" className="quiz-options-col">
                    {currentQuestionData?.options.map((option, index) => (
                      <IonButton
                        key={index}
                        className={`quiz-options-button ${
                          answerRevealed && option === currentQuestionData.correctAnswer
                            ? "correct"
                            : answerRevealed &&
                              selectedAnswers[currentQuestion - 1] === option
                            ? "incorrect"
                            : ""
                        }`}
                        expand="block"
                        disabled={answerRevealed}
                        onClick={() => handleSelectAnswer(option)}
                      >
                        <div className="quiz-option-text">{option}</div>
                      </IonButton>
                    ))}
                  </IonCol>
                </IonRow>
                <IonRow className="quiz-row">
                  <IonCol size="12" className="quiz-button-col">
                    {selectedAnswers[currentQuestion - 1] && (
                      <div className="quiz-button-container">
                      <IonButton
                        className="topic-one-next-button"
                        fill="clear"
                        shape="round"
                        onClick={handleNextQuestion}
                      >
                        {currentQuestion === totalQuestions ? "Submit" : "Next"}
                        <IonIcon
                          className="topic-one-icon"
                          icon={
                            currentQuestion === totalQuestions
                              ? checkmarkCircle
                              : arrowForwardCircle
                          }
                          slot="end"
                        ></IonIcon>
                        
                      </IonButton>
                      </div>
                    )}
                  </IonCol>
                </IonRow>
              </>
            ) : (
              // Overlay
              <div className="quiz-overlay">
                <div className="quiz-overlay-content">
                  <h2>Quiz Completed!</h2>
                  <p>Your Score: <strong>{score} / {totalQuestions}</strong></p>
                  <div className="quiz-overlay-button">
                    <IonButton
                      fill='clear'
                      onClick={() => window.location.reload()}
                    >
                      <IonIcon icon={reloadCircle}/>
                    </IonButton>
                    <IonButton
                      fill="clear"
                      routerLink="/tabs/quiz"
                    >
                      <IonIcon icon={home}/>
                    </IonButton>
                  </div>
                </div>
              </div>
            )}
          </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default QuizFour;
