import React, { PropTypes } from 'react';
import styled from 'styled-components';

const StatusContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  top: 52px;
  justify-content: flex-end;
  right: 15px;
`;

const propTypes = {

};
const defaultProps = {

};

function Status({ length }) {
  return(
    <StatusContainer>
      <span>
        {length}&nbsp;chars
      </span>
    </StatusContainer>
  );
}

Status.propTypes = propTypes;
Status.defaultProps = defaultProps;

export default Status;
