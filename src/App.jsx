import { useState } from "react";
import Game from "./components/Game";
import Result from "./components/Result";

function App() {
  const questions = [
    {
      title: "React - это ... ?",
      variants: ["Библиотека", "Фреймворк", "Приложение"],
      correct: 0,
    },
    {
      title: "Компонент - это ... ",
      variants: [
        "Приложение",
        "Часть приложения или страницы",
        "То, что я не знаю что такое",
      ],
      correct: 1,
    },
    {
      title: "Что такое JSX?",
      variants: [
        "Это простой HTML",
        "Это функция",
        "Это тот же HTML, но с возможностью выполнять JS-код",
      ],
      correct: 2,
    },
  ];
  const [step, setStep] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);

  const onClickVariant = (index) => {
    setStep(step + 1);
    if (index === questions[step].correct) {
      setCorrectAnswer(correctAnswer + 1);
    }
  };

  const onClickRestartButton = () => {
    setStep(0);
    setCorrectAnswer(0);
  };

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game
          questions={questions}
          step={step}
          onClickVariant={onClickVariant}
        />
      ) : (
        <Result
          correctAnswer={correctAnswer}
          questions={questions}
          onClickRestartButton={onClickRestartButton}
        />
      )}
    </div>
  );
}

export default App;
