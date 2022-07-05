import { Component } from 'react';
import { Box } from 'components/Box';
import { Section } from './Section/Section';
import { Feedback } from './Feedback/Feedback';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = opt => {
    const feedback = opt.currentTarget.dataset.feedback;
    this.setState(prevState => {
      return {
        [feedback]: prevState[feedback] + 1,
      };
    });
  };

  totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  positiveFeedbackPercent = () => {
    const total = this.totalFeedback();
    const { good } = this.state;

    return total !== 0 ? Math.round((good * 100) / total) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;

     return (
    <Box 
    bg='backgroundSection'
    display="flex"
    alignItems="center"
    justifyContent="center"
    flexDirection="column"
   
    >
       <Section 
       title="Please leave feedback">
        
          <Box>
            <Feedback
              options={this.state}
              changeFeedback={this.handleFeedback}
            />
          </Box>
        </Section>

        <Section title="Statistics">
          <Box>
            {this.totalFeedback() > 0 ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.totalFeedback()}
                positivePercent={this.positiveFeedbackPercent()}
              />
            ) : (
              <Notification message="There is no feedback" />
            )}
          </Box>
        </Section>
    </Box>
  ); 
  }

};
