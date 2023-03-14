import { Component } from 'react';
import { Title } from './Title/title';
import { Statistics } from './Statistics/Statistics';

import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  updateFeedback = (button) => {
    this.setState(prevState => {
      return {
      [button]: prevState[button] + 1,
    }
  });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage = () => {
    return `${Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    )}%`
  }
  

  render() {
   


   
    return (
      <div>
        <Title title='Please leave feedback'/>
        <FeedbackOptions options={Object.keys(this.state)}
          onLeaveFeedback={this.updateFeedback} />
       
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback}
            goodPersentage={this.countPositiveFeedbackPercentage}
          />
          </div>
      );
  }
}


