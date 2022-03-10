import React, { useState } from 'react';
import Section from '../Section/';
import FeedbackOptions from '../FeedbackOptions/';
import Statistics from '../Statistics/';
import Notification from '../Notification/';

const FeedBackForm = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const objects = Object.keys({ good, neutral, bad });

  const handleFeedBackAdd = event => {
    const name = event.target.name;
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const totalFeedback = good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    return Math.ceil((good / totalFeedback) * 100);
  };

  const percentage = countPositiveFeedbackPercentage();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={objects}
          onLeaveFeedback={handleFeedBackAdd}
        />
      </Section>
      <Section title={'Statistics'}>
        {totalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={percentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};

export default FeedBackForm;
