const Game = ({ questions, step, onClickVariant }) => {
  const percentage = Math.round((step / questions.length) * 100);

  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${percentage}%` }}
          className="progress-inner"
        ></div>
      </div>
      <h1>{questions[step].title}</h1>
      <ul>
        {questions[step].variants.map((variant, index) => {
          return (
            <li onClick={() => onClickVariant(index)} key={variant}>
              {variant}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Game;
