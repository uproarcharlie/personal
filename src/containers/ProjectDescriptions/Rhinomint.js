import React, { Component } from 'react';

//Styles
import  { PortAllText, PortButtonContainer, PortDescription, PortRow, UsedItem, UsedList, PortTitle, PortTitleContainer, ExpertiseImage  } from '../../theme/projectStyles';

export default class Rhinomint extends Component {
  render() {
    return (
      <div>
        <PortRow>
            <PortAllText>
              <PortTitleContainer>
                <PortTitle>Rhinomint</PortTitle>
                <PortButtonContainer>
                </PortButtonContainer>
              </PortTitleContainer>
              <ExpertiseImage src={require('../../assets/uproar.png')}></ExpertiseImage>
              <PortDescription>
                Rhinomint was a Laravel project built over the Christmas Holidays 2017/2018 where I built a cloud based Cryptocurrency mining web app that utilized the Coinhive API
                to do the mining, then returns how much Monero you have mined which you can withdraw to your own personal Cryptocurrency wallet. With the ever increasing difficulty to 
                mine and the reduced yield we never persued the project. Was fun though. :)
            </PortDescription>
              <UsedList>
                <UsedItem>Laravel</UsedItem>
                <UsedItem>javaScript</UsedItem>
                <UsedItem>Product Development</UsedItem>
                <UsedItem>scss</UsedItem>
                <UsedItem>Blockchain</UsedItem>
                <UsedItem>Cryptocurrency</UsedItem>
              </UsedList>
            </PortAllText>
          </PortRow>
      </div>
    )
  }
};


    	

          