import { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonWrapper } from './FeddbackOptions.styled';

export class FeedbackOptions extends Component {
  render() {
    return (
      <ButtonWrapper>
        <button type="button" name="good" onClick={this.props.options}>
          Good
        </button>
        <button type="button" name="neutral" onClick={this.props.options}>
          Neutral
        </button>
        <button type="button" name="bad" onClick={this.props.options}>
          Bad
        </button>
      </ButtonWrapper>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.func,
};
