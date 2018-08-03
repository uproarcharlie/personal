import React, { Component } from 'react';

//Styles
import  { PortAllText, PortButtonContainer, PortDescription, PortRow, UsedItem, UsedList, PortTitle, PortTitleContainer, ExpertiseImage  } from '../../theme/projectStyles';

export default class Gamer4Good extends Component {
  render() {
    return (
      <div>
        <PortRow>
            <PortAllText>
              <PortTitleContainer>
                <PortTitle>Gamer 4 Good</PortTitle>
                <PortButtonContainer>
                </PortButtonContainer>
              </PortTitleContainer>
              <ExpertiseImage src={require('../../assets/Gamer4Good.png')}></ExpertiseImage>
              <PortDescription>
                Gamer 4 Good was an initiative that gamified recycling for Universities in the US. What we wanted to do was move the needle and try to
                encourage college students to recycle more and smarter. It turns out that gamifying the recycling process and creating competitions between serority houses works,
                in the 2 weeks that we ran the competition we were able to recycling 3x what the college would normally recycle in a year.
            </PortDescription>
              <UsedList>
                <UsedItem>Sustainability</UsedItem>
                <UsedItem>Gamification</UsedItem>
                <UsedItem>PHP</UsedItem>
                <UsedItem>HTML</UsedItem>
                <UsedItem>CSS</UsedItem>
                <UsedItem>Product Development</UsedItem>
                <UsedItem>Design</UsedItem>
                <UsedItem>Product Management</UsedItem>
              </UsedList>
            </PortAllText>
          </PortRow>
      </div>
    )
  }
};
