import { Component } from 'react';
import { InfoTitle } from './Notification.styled';

export class Notification extends Component {
  render() {
    return <InfoTitle>{this.props.message}</InfoTitle>;
  }
}
