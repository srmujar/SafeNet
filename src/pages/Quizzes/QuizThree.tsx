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
import './QuizThree.css';
import { arrowForwardCircle, checkmarkCircle, home, reloadCircle } from 'ionicons/icons';

const QuizThree: React.FC = () => {
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
          question: "Which of the following is a common sign of a phishing email?",
          options: [ //1
              "a) A professional tone and no spelling errors",
              "b) A sense of urgency or threats (e.g., 'Your account will be locked')",
              "c) A personal email address from a known contact",
              "d) Detailed instructions for troubleshooting"
            ],
            correctAnswer: "b) A sense of urgency or threats (e.g., 'Your account will be locked')"
        },
        {
          question: "If an email claims to be from your bank but asks for sensitive information like your password, what should you do?",
          options: [ //2
              "a) Reply to the email with the requested information.",
              "b) Click the link to verify the claim.",
              "c) Contact your bank directly using official contact details.",
              "d) Delete the email without checking."
          ],
          correctAnswer: "c) Contact your bank directly using official contact details."
        },
        {
          question: "Which URL is likely to be suspicious?",
          options: [ //3
              "a) https://www.paypal.com",
              "b) http://secure-paypal.com",
              "c) https://accounts.google.com",
              "d) https://www.amazon.com"
          ],
          correctAnswer: "b) http://secure-paypal.com"
        },
        {
          question: "A phishing email often contains ______ to manipulate users into taking action.",
          options: [ //4
              "a) Emotional Appeals",
              "b) Compliments",
              "c) Legal Documents",
              "d) Technical Jargon"
          ],
          correctAnswer: "a) Emotional Appeals"
        },
        {
          question: "______ is a method used by attackers to impersonate legitimate websites to steal login credentials.",
          options: [ //5
              "a) Pharming",
              "b) Spoofing",
              "c) Spamming",
              "d) Typo-squatting"
          ],
          correctAnswer: "b) Spoofing"
        },
        {
          question: "Always verify a link’s destination by ______ before clicking it.",
          options: [ //6
              "a) Reading the subject line",
              "b) Clicking the link to test it",
              "c) Hovering your mouse over the link",
              "d) Calling the sender"
          ],
          correctAnswer: "c) Hovering your mouse over the link"
        },
        {
          question: "A legitimate email from a financial institution will always address you by your name.",
          options: [ //7
              "a) True",
              "b) False"
          ],
          correctAnswer: "a) True"
        },
        {
          question: "It is safe to open email attachments from unknown senders as long as your antivirus software is updated.",
          options: [ //8
              "a) True",
              "b) False"
          ],
          correctAnswer: "b) False"
        },
        {
          question: "You receive an email from 'support@amazon-secure.com' claiming there is an issue with your recent order. The email contains a link labeled 'Verify Order.' What should you do?",
          options: [ //9
              "a) Click the link to check your order status.",
              "b) Forward the email to your friend for advice.",
              "c) Ignore the email completely.",
              "d) Log in to your Amazon account directly through their website or app to verify the claim."
          ],
          correctAnswer: "d) Log in to your Amazon account directly through their website or app to verify the claim."
        },
        {
          question: "You receive a text from your 'bank' stating unusual activity on your account and asking you to confirm details via a provided link. The text looks legitimate but came from an unfamiliar number. What is your next step?",
          options: [ //10
              "a) Reply to the text asking for clarification.",
              "b) Click the link to check the suspicious activity.",
              "c) Delete the text without taking further action.",
              "d) Call your bank using the number on their official website."
          ],
          correctAnswer: "d) Call your bank using the number on their official website."
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
        <IonContent fullscreen className="quiz-three-page-content">
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
                    //   onClick={() => window.location.reload()}
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

export default QuizThree;
