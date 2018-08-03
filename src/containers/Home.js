import React, { Component } from 'react';

import { CenteredHeader } from './App.js'

class Home extends Component {
  render() {
    return (
      <div>
        <CenteredHeader>Hi! I'm Charlie, a tech founder & serial entreprenuer that loves to create.</CenteredHeader>
        <p>
          Most recently (late 2016) I founded a reward & eSports platform called Uproar which is a consumer facing, agnostic platform that rewards gamers for playing the games they love. 
        </p>
        <p>
          ​I'm an ideas guy that knows how to execute. In the past have built functioning MVP's used by thousands of people in anywhere between 36 hours (straight) and 30 days. With a wide range of interest & <a href='/expertise'>expretise</a>. I find myself getting excited with all kinds of projects. <a href='/contact'>Contact me</a> to collaborate. 
        </p>
        <p>
           Previously, I was a pro gamer, manufactoring and jewelry designer, head of product for a recycling startup and have built a cloud-based cryptocurrency mining app.
        </p>
        <p>
          I beleive that success comes when you merge you personal and professional <a href='/life'>life</a>, which allows me to immerse myself in all the activities that I get involved in. Some of my newest passions include; Surfing, Jiu Jitsu, transportation and investing.
        </p>
      </div>
    );
  }
}

export default Home;