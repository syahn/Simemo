import React, { Component } from 'react';
import TextArea from '../TextArea';
import styled from 'styled-components';

const AppContainer = styled.div`
  height: 100%;
`;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }


  render() {
    const { text } = this.state;
    return (
      <AppContainer>
        <TextArea
          text={text}
        />
      </AppContainer>

    );
  }
}

export default App;
