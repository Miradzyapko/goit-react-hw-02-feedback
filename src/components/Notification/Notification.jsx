
import React from "react";
import PropTypes from 'prop-types';

import { Wrapper, Paragraf } from './Notification.styled'

export const Notification = ({ message }) => {
    return (
     <Wrapper>
            <Paragraf>{message}
                
            </Paragraf>
       </Wrapper>
)}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};
