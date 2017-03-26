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
      text: this.props.loadedState
    };
  }

  type = e => {
    this.setState({ text: e.target.value });
    this.saveState(e.target.value);
  }

  saveState = state => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('textState', serializedState);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { text } = this.state;
    return (
      <AppContainer>
        <TextArea
          text={text}
          type={this.type}
        />
      </AppContainer>
    );
  }
}

export default App;
