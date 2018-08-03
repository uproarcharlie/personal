import React, { Component } from 'react';
import styled from 'styled-components';

const LifeThumbnail = styled.img`
  width: 70%;
  display: block;
  margin: 0 auto;
`;

const LifeHeader = styled.h4`
  font-size: 1.25em;
  text-align: center;
`;

const LifeQuote = styled.h3`
  
  font-size: 1.25em;
  text-align: center;
  padding-bottom: 20px;
  width: 60%;
  display: block;
  margin: 0 auto;
`;

const LifeProjectBlurb = styled.div`
  padding: 4% 0;
  width: 75%;
  margin: auto;
`

const LifeRow = styled.div`
  margin: 20px -15px;
`

class Life extends Component {
  render() {
    return (
      <div>
        <div>
          <LifeQuote>“The purpose of life is to live it, to taste experience to the utmost, to reach out eagerly and without fear for newer and richer experience.” 
― Eleanor Roosevelt</LifeQuote>
        </div>
        {/*Row 1*/}
        <LifeRow className="row">
          <div className="col-md-6 col-sm-12">
            <a href="#" target="_blank">
              <LifeThumbnail src="http://i66.tinypic.com/2q80nia.jpg"/>
              <LifeHeader>Jiu Jitsu</LifeHeader>
            </a>
            <LifeProjectBlurb>Placeholder</LifeProjectBlurb>
          </div>
          <div className="col-md-6 col-sm-12">
            <a href="#" target="_blank">
              <LifeThumbnail src="http://i65.tinypic.com/2rcbtb6.jpg"/>
              <LifeHeader>Placeholder</LifeHeader>
            </a>
            <LifeProjectBlurb>Placeholder</LifeProjectBlurb>
          </div>
        </LifeRow>
        {/*Row 2*/}
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <a href="#" target="_blank">
              <LifeThumbnail src="http://i65.tinypic.com/ezh3eh.jpg"/>
              <LifeHeader>Placeholder</LifeHeader>
            </a>
            <LifeProjectBlurb>Placeholder</LifeProjectBlurb>
          </div>
          <div className="col-md-6 col-sm-12">
            <a href="#" target="_blank">
              <LifeThumbnail src="http://i64.tinypic.com/16lw755.jpg"/>
              <LifeHeader>Placeholder</LifeHeader>
            </a>
            <LifeProjectBlurb>Placeholder</LifeProjectBlurb>
          </div>
        </div>
      </div>
    );
  }
}

export default Life;
