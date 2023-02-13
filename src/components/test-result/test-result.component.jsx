import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './test-result.style.scss';

const TestResult = () => {
  const score = useSelector((state) => state.test.result.score);
  const time = useSelector((state) => state.test.result.time);

  return (
    <div className="test-result">
      <span className="test-result__label">
        <b>Elapsed Time:</b> {`${time} seconds`}
      </span>
      <span className="test-result__label">
        <b>Result:</b> {`${score} out of 10`}
      </span>
      <NavLink className="btn-link" to="/">
        Take the test again
      </NavLink>
    </div>
  );
};

export default TestResult;
