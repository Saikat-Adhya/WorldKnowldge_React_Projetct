import React, { useState } from "react";
import questions from "../api/questions.json"; // Direct import

const Quiz = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (option) => {
    const correct = questions[currentQ].answer;
    if (option === correct) {
      setScore(score + 1);
    }

    const next = currentQ + 1;
    if (next < questions.length) {
      setCurrentQ(next);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQ(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div>
      {showResult ? (
        <div>
          <h2>Quiz Completed!</h2>
          <p>Your Score: {score} / {questions.length}</p>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div>
          <h2>{questions[currentQ].question}</h2>
          {questions[currentQ].options.map((option, index) => (
            <div key={index}>
              <button onClick={() => handleOptionClick(option)}>
                {option}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Quiz;
