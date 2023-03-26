import { Component } from 'react';
import PropTypes from 'prop-types';
import { Title } from './Section.styled';

export class Section extends Component {
  render() {
    return (
      <>
        <Title>{this.props.title}</Title>
        {this.props.children}
      </>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string,
};
