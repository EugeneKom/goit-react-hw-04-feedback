import PropTypes from 'prop-types';
import { ButtonWrapper } from './FeddbackOptions.styled';

export const FeedbackOptions = ({ options }) => {
  return (
    <ButtonWrapper>
      <button type="button" name="good" onClick={options}>
        Good
      </button>
      <button type="button" name="neutral" onClick={options}>
        Neutral
      </button>
      <button type="button" name="bad" onClick={options}>
        Bad
      </button>
    </ButtonWrapper>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.func,
};
