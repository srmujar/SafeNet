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
import './QuizTwo.css';
import { arrowForwardCircle, checkmarkCircle, home, reloadCircle } from 'ionicons/icons';

const QuizTwo: React.FC = () => {
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
          question: "Which of the following passwords is the most secure?",
          options: [ //1
              "a) R!mN1$-FgT78",
              "b) Password123",
              "c) qwerty@2023",
              "d) Admin2023"
            ],
            correctAnswer: "a) R!mN1$-FgT78"
        },
        {
          question: "What is a good practice for managing multiple passwords?",
          options: [ //2
              "a) Use the same password for all accounts for simplicity",
              "b) Write passwords on sticky notes and keep them on your desk",
              "c) Use a password manager to securely store and organize your passwords",
              "d) Save passwords in your browser without any additional protection"
          ],
          correctAnswer: "c) Use a password manager to securely store and organize your passwords"
        },
        {
          question: "What is the main reason for avoiding using personal information, like your name or birthday, in a password?",
          options: [ //3
              "a) It’s too difficult to remember",
              "b) Personal information is easy for attackers to guess or find online",
              "c) It’s too long to type",
              "d) It might confuse password recovery systems"
          ],
          correctAnswer: "b) Personal information is easy for attackers to guess or find online"
        },
        {
          question: "A strong password should include a combination of __________, __________, and __________.",
          options: [ //4
              "a) Symbols, words, and spaces",
              "b) Uppercase letters, lowercase letters, and symbols",
              "c) Personal information, uppercase letters, and emojis",
              "d) Numbers, dictionary words, and nicknames"
          ],
          correctAnswer: "b) Uppercase letters, lowercase letters, and symbols"
        },
        {
          question: "To make your password stronger, it should include a combination of uppercase letters, lowercase letters, numbers, and ________.",
          options: [ //5
              "a) Spaces",
              "b) Emojis",
              "c) Repeated letters",
              "d) Special characters (e.g., @, #, $)"
          ],
          correctAnswer: "d) Special characters (e.g., @, #, $)"
        },
        {
          question: "Password managers typically __________ passwords for each account, making them more secure.",
          options: [ //6
              "a) Encrypt and randomly generate",
              "b) Save weak and simple",
              "c) Avoid updating",
              "d) Store only partial"
          ],
          correctAnswer: "a) Encrypt and randomly generate"
        },
        {
          question: "Passwords like 'P@ssw0rd!' are considered secure enough for most accounts.",
          options: [ //7
              "a) True",
              "b) False"
          ],
          correctAnswer: "b) False"
        },
        {
          question: "Changing your password regularly can reduce the risk of unauthorized access to your accounts.",
          options: [ //8
              "a) True",
              "b) False"
          ],
          correctAnswer: "a) True"
        },
        {
          question: "You’ve used the same password for your email, social media, and bank accounts. One day, your social media account gets hacked. What should you do?",
          options: [ //9
              "a) Ignore the hack; it’s only one account",
              "b) Change the password for your social media account only",
              "c) Change the passwords for all accounts that use the same password and enable 2FA",
              "d) Close your social media account permanently"
          ],
          correctAnswer: "c) Change the passwords for all accounts that use the same password and enable 2FA"
        },
        {
          question: "You’ve been asked to create a password for a new online banking account. Which option below would be the best choice?",
          options: [ //10
              "a) YourName+2023",
              "b) Banking1234",
              "c) @Qw1$9FgXh76#",
              "d) Your favorite movie name"
          ],
          correctAnswer: "c) @Qw1$9FgXh76#"
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
        <IonContent fullscreen className="quiz-two-page-content">
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

export default QuizTwo;
