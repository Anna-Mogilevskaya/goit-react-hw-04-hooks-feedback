import React from 'react';
import PropTypes from 'prop-types';

import { OptionButton } from './FeedBackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <form>
      <label>
        {options.map(option => (
          <OptionButton
            key={option}
            type="button"
            onClick={onLeaveFeedback}
            name={option}
          >
            {option}
          </OptionButton>
        ))}
      </label>
    </form>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  good: PropTypes.func,
  neutral: PropTypes.func,
  bad: PropTypes.func,
  onLeaveFeedback: PropTypes.func,
};
