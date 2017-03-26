import React, { PropTypes } from 'react';
import styled from 'styled-components';

const TextBox = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  padding: 0 18em;
  margin: 6em 0;
  position: relative;
  line-height: 2em;
  font-size: 16px;
  font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif';

  &:focus {
    outline: none;
  }
`;

const propTypes = {
  text: PropTypes.string,
  type: PropTypes.func
};

function TextArea({ text, type }) {
  return(
    <TextBox
      placeholder="Start write..."
      spellCheck="false"
      onChange={type}
      value={text}
    />
  );
}

TextArea.propTypes = propTypes;

export default TextArea;
