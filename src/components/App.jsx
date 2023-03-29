import { useEffect, useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Section } from './Section/Section.jsx';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [rating, setRating] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const [totalFeedback, setTotalFeedback] = useState(0);
  const [positiveFeedback, setPositiveFeedback] = useState(0);

  function handlOptionsCount({ target: { name } }) {
    switch (name) {
      case 'good':
        setRating({ ...rating, [name]: rating[name] + 1 });
        break;
      case 'neutral':
        setRating({ ...rating, [name]: rating[name] + 1 });
        break;
      case 'bad':
        setRating({ ...rating, [name]: rating[name] + 1 });
        break;
      default:
        console.log(`bad value of ${name}`);
    }
  }

  useEffect(() => {
    setTotalFeedback(rating.good + rating.bad + rating.neutral);

    setPositiveFeedback(((rating.good / totalFeedback) * 100).toFixed(1));
  }, [rating, totalFeedback]);

  return (
    <div
      style={{
        display: 'flex',
        fontFamily: 'cursive',
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 30,
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions options={handlOptionsCount} />
      </Section>
      <Section title="Statistics">
        {totalFeedback ? (
          <Statistics
            good={rating.good}
            neutral={rating.neutral}
            bad={rating.bad}
            total={totalFeedback}
            positiveFeedback={positiveFeedback}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </div>
  );
};
