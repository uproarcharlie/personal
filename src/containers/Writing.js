import React, { Component } from 'react';
import styled from 'styled-components';
import Iframe from 'react-iframe';

import { CenteredHeader } from './App.js'

//Style
const Date = styled.p`
  font-size: 12px;
`
const MediumContainer = styled.div`
  position: relative;
  margin: 0 auto;
  height: 1000px;
  
`;

class Writing extends Component {
  render() {
    return (
      <MediumContainer>
        <div>
          <CenteredHeader>I write about tech, life, and personal development.</CenteredHeader>
        </div>
        <Iframe url='https://medium.com/@uproarcharlie'
        height='95%'
         />
      </MediumContainer>
    );
  }
}

export default Writing;
