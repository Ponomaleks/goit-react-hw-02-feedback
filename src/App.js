import './App.css';
import Section from './components/Section';
// import Button from './components/Button';
import Statistics from './components/Statistics';
import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  handleClick = e => {
    const name = e.target.name;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((a, b) => a + b, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback()
      ? Math.round((this.state.good / this.countTotalFeedback()) * 100)
      : 0;
  };

  render() {
    const TotalFeedback = this.countTotalFeedback();
    const PositiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Pease leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            type="button"
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        {this.countTotalFeedback() ? (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={0}
              positivePercentage={0}
              total={TotalFeedback}
              positivePercentage={PositiveFeedbackPercentage}
            />
          </Section>
        ) : (
          <p>Not feedback given</p>
        )}
      </>
    );
  }
}

export default App;
