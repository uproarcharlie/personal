import React, { Component } from 'react';

//Styles
import  { PortAllText, PortButtonContainer, PortDescription, PortRow, UsedItem, UsedList, PortTitle, PortTitleContainer, ExpertiseImage } from '../../theme/projectStyles';

export default class MovieMatch extends Component {
  render() {
    return (
      <div>
          <PortRow>
        <PortAllText>
              <PortTitleContainer>
                <PortTitle>Movie Match</PortTitle>
                <PortButtonContainer>
                </PortButtonContainer>
              </PortTitleContainer>
              <ExpertiseImage src={require('../../assets/uproar.png')}></ExpertiseImage>
              <PortDescription>
                This Movie Match web app that I built is a simple ReactJS project that all the Movie Database API and returns a bunch of movies to the home page.
                You can click on any of the Movies to get more information.
            </PortDescription>
              <UsedList>
                <UsedItem>ReactJS</UsedItem>
                <UsedItem>The Movie Database API</UsedItem>
                <UsedItem>Product Development</UsedItem>
                <UsedItem>Design</UsedItem>
              </UsedList>
            </PortAllText>
          </PortRow>
      </div>
    )
  }
};
