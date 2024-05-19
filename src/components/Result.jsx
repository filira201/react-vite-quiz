const Result = ({ correctAnswer, questions, onClickRestartButton }) => {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>
        Вы правильно ответили на{" "}
        <span style={{ color: "#ff006e" }}>{correctAnswer}</span> вопроса из{" "}
        {questions.length}
      </h2>
      {questions.map((question) => {
        return (
          <div key={question.title}>
            <h1>{question.title}</h1>
            <ul>
              {question.variants.map((variant, index) => {
                return (
                  <li
                    style={
                      question.correct === index
                        ? { border: "2px solid #37d50b" }
                        : { border: "2px solid #ff1e00" }
                    }
                    key={variant}
                  >
                    {variant}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
      <button onClick={onClickRestartButton}>Попробовать снова</button>
    </div>
  );
};

export default Result;
