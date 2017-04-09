import React, { PropTypes } from 'react';
import optionImage from '../../images/options.svg';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 48px;
  z-index: 1;
  background: #fff;
  border-bottom: 1px solid #e8e8e8;
`;

const Option = styled.a`
  display: inherit;
  text-align: right;
  margin: 11px 14px;
`;

const Logo = styled.span`
  margin: 9px auto;
  color: #1862ab;
  font-size: 28px;
`;

const propTypes = {

};
const defaultProps = {

};

function Header() {
  return(
    <HeaderContainer>
      <Logo>
        <strong>Simemo</strong>
      </Logo>
      <Option href="#">
        <img src={optionImage} alt="setting" width="24px"/>
      </Option>
    </HeaderContainer>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
