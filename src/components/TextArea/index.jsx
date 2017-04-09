import React, { PropTypes } from 'react';
import styled from 'styled-components';

const TextBox = styled.textarea`
  min-width: 60%;
  height: 100%;
  border: none;
  margin: 4em 20%;
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
      placeholder="Start writing..."
      spellCheck="false"
      onChange={type}
      value={text}
    />
  );
}

TextArea.propTypes = propTypes;

export default TextArea;
