import React from 'react';
import PropTypes from 'prop-types';

import { NotificMessage } from './Notification.styled';

const Notification = ({ message }) => (
  <NotificMessage>{message}</NotificMessage>
);

export default Notification;

Notification.prototypes = {
  message: PropTypes.number,
};
