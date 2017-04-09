import React, { Component } from 'react';
import TextArea from '../TextArea';
import styled from 'styled-components';
import Header from '../Header';
import Status from '../Status';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.loadedState,
      length: this.props.loadedState.length,
    };
  }

  type = e => {
    this.setState({
      text: e.target.value,
      length: e.target.value.length
    });
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
    const { text, length } = this.state;
    return (
      <AppContainer>
        <Header />
        <Status
          length={length}
        />
        <TextArea
          text={text}
          type={this.type}
        />
      </AppContainer>
    );
  }
}

export default App;
