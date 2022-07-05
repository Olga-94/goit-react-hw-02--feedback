import PropTypes from 'prop-types';
import { FaRegCommentAlt, FaRegChartBar } from 'react-icons/fa';
import { Title, Wrapper} from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Wrapper>
      {title && (
        <Title>
          {title}
          {title === 'Please leave feedback' && <FaRegCommentAlt />}
          {title === 'Statistics' && <FaRegChartBar />}
        </Title>
      )}

      {children}
    </Wrapper>
  );
};
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array,
};

