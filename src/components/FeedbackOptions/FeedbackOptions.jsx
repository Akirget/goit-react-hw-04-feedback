import style from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <div className={style.div}>
        {options.map(option => {
          return (
            <button
              key={option}
              className={style.button}
              type="button"
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
