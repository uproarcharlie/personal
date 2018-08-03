import styled from "styled-components";
import { ColorScheme } from '../theme/styleConstants.js';

export const SectionTitle = styled.h2`
  text-align: center;
  flex: 1;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
`;

export const PortRow = styled.div`
  margin: 0;
  padding-top: 20px;
  padding-bottom: 20px;
  display: block;
  @media (max-width: 600px) {
    padding-top: 10px;
    padding-bottom: 10px;

`;

export const ExpertiseImage = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  display: block;
  margin: 0 auto;
`;

export const PortAllText = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const PortTitleContainer = styled.div`
  position: relative;
  margin: 0 auto;
  align-items: baseline;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-end;
  align-content: stretch;

  @media (max-width: 600px) {
    display: inline;
  }
`;

export const PortTitle = styled.h2`
  flex: 1;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

export const PortButton = styled.a`
  padding: 10px 15px;
  background: 0 0;
  border: 2px solid ${ColorScheme.secondary};
  border-radius: 3px;
  margin: 0 5px;
  color: ${ColorScheme.secondary};
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
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

export const PortButtonContainer = styled.div`
  width: 30%;
  margin: 0 auto;

  @media (max-width: 600px) {
    margin-top: 15px;
    width: 50%;
  }
`;

export const PortDescription = styled.p`
  display: block;
  margin: 15px 0;
`;

export const UsedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
`;

export const UsedItem = styled.ul`
  display: inline-block;
  padding: 7px 7px 5px;
  margin-right: 5px;
  margin-bottom: 10px;
  color: #fff;
  background: ${ColorScheme.secondary};
  border-radius: 3px;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.5px;
`;