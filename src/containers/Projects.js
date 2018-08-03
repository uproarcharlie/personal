import React, { Component } from "react";


//Slides
import Uproar from '../containers/ProjectDescriptions/Uproar';
import MovieMatch from '../containers/ProjectDescriptions/MovieMatch';
import Rhinomint from '../containers/ProjectDescriptions/Rhinomint';
import Gamer4Good from '../containers/ProjectDescriptions/Gamer4Good';

//Style
import  { SectionTitle } from '../theme/projectStyles';



export default class Projects extends Component {
    render() {
      return(
            <div>
          <SectionTitle>Recent Projects:</SectionTitle>
         
            <Uproar />
              <Rhinomint />
                <Gamer4Good />
                  <MovieMatch />
                  

          </div>
        )
    }
};
