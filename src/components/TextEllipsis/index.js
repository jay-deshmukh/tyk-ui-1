import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '../Tooltip';
/**
 * TextEllipsis component helps you to hide a part of a text,
 * but displaying it when it's being hovered.
 * The entire text is displayed with the help of Tooltip component
 */

const TextEllipsis = ({ text, limit }) => (
  text.length > limit
    ? (
      <Tooltip render={text}>
        {text.substring(0, limit)}
        ...
      </Tooltip>
    )
    : text
);

TextEllipsis.propTypes = {
  /** Text to be shrinked by TextEllipsis */
  text: PropTypes.string,
  /** Number of characters that TextEllipsis would leave visible */
  limit: PropTypes.number,
};

export default TextEllipsis;
