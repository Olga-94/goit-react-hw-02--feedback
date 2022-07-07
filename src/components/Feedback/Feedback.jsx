import PropTypes from 'prop-types';
import { Item } from './Feedback.styled';
import { Button } from '../Button/Buttons';
import { Box } from 'components/Box';

export const Feedback = ({ options, changeFeedback }) => {
  options = Object.keys(options);

  return (
    <Box 
    as="ul"
    display="flex"
    justifyContent="center"
    >
      {options.map(option => (
        <Item key={option}>
          <Button feedback={option} onClick={changeFeedback} />
        </Item>
      ))}
    </Box>
  );
};

Feedback.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  changeFeedback: PropTypes.func.isRequired,
};

