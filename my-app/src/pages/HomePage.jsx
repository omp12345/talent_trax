import React from 'react';
import styled from 'styled-components';
import Sidebar from '../componets/Sidebar';
import PlanetData from '../componets/PlanetData';

const HomeContainer = styled.div`
  display: flex;
  align-items: stretch; /* Stretch children to the full height of the container */
`;

const HorizontalLine = styled.div`
  border-right: 1px solid gray;
  height: 100%; /* Height set to 100% to stretch to the full height */
  margin-right: 16px; /* Adjust margin as needed */
`;

function HomePage() {
  return (
    <HomeContainer className="homepage">
      <Sidebar />
      <HorizontalLine />
      <PlanetData />
    </HomeContainer>
  );
}

export default HomePage;
