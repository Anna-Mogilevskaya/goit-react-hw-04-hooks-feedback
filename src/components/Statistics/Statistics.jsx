import React from 'react';
import PropTypes from 'prop-types';

import { FeedBacksText } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <FeedBacksText>Good: {good}</FeedBacksText>
      <FeedBacksText>Neutral: {neutral}</FeedBacksText>
      <FeedBacksText>Bad: {bad}</FeedBacksText>
      <FeedBacksText>Total: {total}</FeedBacksText>
      <FeedBacksText>Positive feedback: {positivePercentage}%</FeedBacksText>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
