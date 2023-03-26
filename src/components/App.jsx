import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Section } from './Section/Section.jsx';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0,
  };

  handlOptions = ({ target: { name } }) => {
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    this.setState(prevState => {
      const totalFeedback = prevState.good + prevState.bad + prevState.neutral;
      return { ...prevState, total: totalFeedback };
    });
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => {
      const totalPercentage = (
        (prevState.good / prevState.total) *
        100
      ).toFixed(1);
      return { ...prevState, positiveFeedback: totalPercentage };
    });
  };

  render() {
    const { good, neutral, bad, total, positiveFeedback } = this.state;
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
          <FeedbackOptions options={this.handlOptions} />
        </Section>
        <Section title="Statistics">
          {this.state.total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positiveFeedback={positiveFeedback}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
  }
}
