import React, { Component } from 'react';

//Styles
import  { PortAllText, PortButtonContainer, PortDescription, PortRow, UsedItem, UsedList, PortTitle, PortTitleContainer, ExpertiseImage  } from '../../theme/projectStyles';


export default class Uproar extends Component {
  render() {
    return (
      <div>
        <PortRow>
            <PortAllText>
              <PortTitleContainer>
                <PortTitle>Uproar</PortTitle>
              </PortTitleContainer>
              <ExpertiseImage src={require('../../assets/uproar.png')}></ExpertiseImage>
              <PortDescription>
                We started Uproar in September 2016 as an agnostic reward platform for gaming and eSports after running oporated an MVP that proved initial traction. 
                Once we gagued the interest from the community we proceeded the project and raised our first round of capital to build the product.
                Almost 2 years down the line our B2C platform has over 300,000 users and we have also launched a B2B SaaS product that gives brands 
                and game developers the oportunity to use the software we have built and use it for their own use cases. Thoughout this time I helped lead the team
                in all aspects of the business from development to governence and fundraising.
            </PortDescription>
              <UsedList>
                <UsedItem>CEO</UsedItem>
                <UsedItem>Product Development</UsedItem>
                <UsedItem>Business Development</UsedItem>
                <UsedItem>Fundraising</UsedItem>
                <UsedItem>Growth Hacking</UsedItem>
                <UsedItem>Governence</UsedItem>
                <UsedItem>Due Dilligence</UsedItem>
                <UsedItem>Gamification</UsedItem>
                <UsedItem>eSports / Gaming </UsedItem>
              </UsedList>
            </PortAllText>
          </PortRow>
      </div>
    )
  }
};
