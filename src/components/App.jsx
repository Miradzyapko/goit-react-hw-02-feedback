import React, { Component } from 'react';
import { Section  } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Container } from './Container/Container.styled';
export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  updateFeedback =(button) => {
    this.setState(prevState => {
      return {
      [button]: prevState[button] + 1,
    }
  });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const goodPersentage = ((good / this.countTotalFeedback()) * 100).toFixed(0) ;
    return goodPersentage;
    
  };
  

  render() {
   


   
    return (
      <Container>
        <Section title='Please leave feedback'>
        <FeedbackOptions 
        options={Object.keys(this.state)}
          onLeaveFeedback={this.updateFeedback}
           />
           </Section>
           {this.countTotalFeedback() > 0 ? 
       
       (
    
       <Section title='Statistics'>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            goodPersentage={this.countPositiveFeedbackPercentage()}
          />
          </Section>
       ) : (
        <Notification message={"There is no feedback"} /> 
    )
    }
    </Container>
    )
    }

  }

