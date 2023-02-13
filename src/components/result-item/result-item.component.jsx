import './result-item.style.scss';

const ResultItem = ({ date, time, score }) => {
  return (
    <div className="result-item">
      <h2 className="result-item__header">{`Completed on ${date}`}</h2>
      <div className="result-item__content">
        <p className="result-item__label">
          <b>Elapsed Time:</b> {`${time} seconds`}
        </p>
        <p className="result-item__label">
          <b>Result:</b> {score}
        </p>
      </div>
    </div>
  );
};

export default ResultItem;
