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
import './QuizOne.css';
import { arrowForwardCircle, checkmarkCircle, home, reloadCircle } from 'ionicons/icons';

const QuizOne: React.FC = () => {
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
          question: "What is the minimum recommended password length for strong security?",
          options: [
              "a) 6 characters",
              "b) 8 characters",
              "c) 12 characters",
              "d) 16 characters"
            ],
            correctAnswer: "c) 12 characters"
        },
        {
          question: "What is the main purpose of a VPN (Virtual Private Network)?",
          options: [
              "a) To make websites load faster",
              "b) To hide your IP address and encrypt your internet connection",
              "c) To monitor your online activity",
              "d) To increase your internet speed"
          ],
          correctAnswer: "b) To hide your IP address and encrypt your internet connection"
        },
        {
          question: "Which of the following is a sign of a phishing website?",
          options: [
              "a) A legitimate URL starting with 'https://' ",
              "b) A suspicious URL with unusual characters or spelling errors",
              "c) A website with a professional design",
              "d) A website with SSL certificates"
          ],
          correctAnswer: "b) A suspicious URL with unusual characters or spelling errors"
        },
        {
          question: "A secure website will always have a URL that begins with '_________'.",
          options: [
              "a) https://",
              "b) http://",
              "c) ftp://",
              "d) file://"
          ],
          correctAnswer: "a) https://"
        },
        {
          question: "You should change your passwords __________.",
          options: [
              "a) Once a year",
              "b) Every 6 months",
              "c) Only when you forget them",
              "d) Every few months or after a breach"
          ],
          correctAnswer: "d) Every few months or after a breach"
        },
        {
          question: "Enabling __________ on important accounts adds an extra layer of security to protect against unauthorized access.",
          options: [
              "a) Anti-virus software",
              "b) Two-factor authentication (2FA)",
              "c) Pop-up blockers",
              "d) Auto-fill"
          ],
          correctAnswer: "b) Two-factor authentication (2FA)"
        },
        {
          question: "Two-factor authentication (2FA) requires a second piece of information besides your password to log into an account.",
          options: [
              "a) True",
              "b) False"
          ],
          correctAnswer: "a) True"
        },
        {
          question: "Public Wi-Fi networks are always safe to use for online banking.",
          options: [
              "a) True",
              "b) False"
          ],
          correctAnswer: "b) False"
        },
        {
          question: "You receive an email from your bank asking you to click a link and verify your account information. What should you do?",
          options: [
              "a) Forward the email to your friends",
              "b) Click the link and follow the instructions",
              "c) Ignore the email, it's probably legitimate",
              "d) Contact your bank directly using the number on their website to verify if the email is real"
          ],
          correctAnswer: "d) Contact your bank directly using the number on their website to verify if the email is real"
        },
        {
          question: "You receive a pop-up notification claiming your computer is infected with malware and asks you to download a tool to fix it. What should you do?",
          options: [
              "a) Download the tool to remove the infection",
              "b) Click “OK” to stop the pop-up",
              "c) Close the pop-up and run a scan with your antivirus software",
              "d) Ignore it and continue using your computer"
          ],
          correctAnswer: "c) Close the pop-up and run a scan with your antivirus software"
        }
    ];

    const currentQuestionData = questions[currentQuestion - 1];
    // Calculate the progress percentage
    const progress = (currentQuestion / totalQuestions) * 100;

    const resetQuiz = () => {
      setCurrentQuestion(1);
      setSelectedAnswers(new Array(totalQuestions).fill(''));
      setScore(0);
      setQuizFinished(false);
      setAnswerRevealed(false);
      setIsCorrect(false);
    };

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
    // const handleSubmit = () => {
    //   let calculatedScore = 0;
    //   questions.forEach((question, index) => {
    //     if (selectedAnswers[index] === question.correctAnswer) {
    //       calculatedScore += 1;
    //     }
    //   });
    //   setScore(calculatedScore);
    //   setQuizFinished(true);
    // };    

    const handleNextQuestion = () => {
      if (currentQuestion === totalQuestions) {
        setQuizFinished(true);
        // handleSubmit();
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
        <IonContent fullscreen className="quiz-one-page-content">
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
                      onClick={resetQuiz}
                      // onClick={() => window.location.reload()}
                    >
                      <IonIcon icon={reloadCircle}/>
                    </IonButton>
                    <IonButton
                      fill="clear"
                      routerLink="/tabs/quiz"
                      onClick={resetQuiz}
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

export default QuizOne;
