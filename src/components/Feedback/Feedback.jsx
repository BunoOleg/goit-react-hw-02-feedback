import React, {Component} from 'react';
import styles from './Feedback.module.css';

import Statistic from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Notification from '../Notification';
import Section from '../Section';
export default class Feedback extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleChangeStats = (event) => {
    this.setState((prevState) => {return {[event.target.name]: prevState[event.target.name] + 1}})
  }

  countTotalFeedback = () => {
    const {good, neutral, bad} = this.state;
    return good+neutral+bad
  }

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback() ? Math.round(this.state.good/this.countTotalFeedback()*100) : "0"
  }

  render () {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Please leave feedback</h1>
        <FeedbackOptions
        buttonsName={this.state}
        onLeaveFeedback={this.handleChangeStats}/>
        <Section 
          title="Statistics"
          >        
          {this.countTotalFeedback() ? 
            <Statistic 
              good={this.state.good} 
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}   
            />
          : <Notification message="There is no feedback"/>
          }
        </Section>
      </div>
    )
  }
}