import styled from "styled-components";
import { ColorScheme } from "../theme/styleConstants";

export const InfoTitle = styled.h3`
  text-align: center;  
  flex: 1;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

export const SectionTitle = styled.h2`
  text-align: center;
  flex: 1;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  padding-bottom: 10px;
`;

export const InfoButton = styled.a`
cursor: pointer;
Display: block;
width: 100%;  
padding-bottom: 10px;
  padding: 10px 15px;
  background: 0 0;
  border: 2px solid ${ColorScheme.secondary};
  border-radius: 3px;
  
  color: ${ColorScheme.secondary};
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
  transition: all 0.3s ease;
  &:hover {
    background: ${ColorScheme.primary};
    color: #fff;
    border-color: ${ColorScheme.primary};
  }

  @media (max-width: 600px) {
    padding: 5px 7px;
  }
`;

export const InfoButtonContainer = styled.div`
  margin-bottom: 15px;
  width: 100%;

  @media (max-width: 600px) {
    margin-bottom: 5px;

  }
  `;

  
  export const ModalHeaderImage = styled.img`
  object-fit: cover;
  
  width: 100%;
  height: 200px;
  `;

  export const ModalTitle = styled.h1`
  color: ${ColorScheme.primary};
  `;


  