import React from 'react';
import styled from 'styled-components';
import Sidebar from '../componets/Sidebar';
import PlanetData from '../componets/PlanetData';

const HomeContainer = styled.div`
  display: flex;
 
  align-items: stretch;
 
   /* Stretch children to the full height of the container */

  @media (max-width: 768px) {
    flex-direction: column; /* Change to a column layout on smaller screens */
  }
`;

const HorizontalLine = styled.div`
  border-right: 1px solid gray;
  height: 100%;
  margin-right: 16px;

  @media (max-width: 768px) {
    border-right: none; /* Remove border on smaller screens */
    border-bottom: 2px solid gray; /* Add a bottom border for a horizontal line effect */
    height: auto; /* Adjust height to fit content */
    margin-right: 0;
    margin-bottom: 16px;
  }
`;

function HomePage() {
  return (
    <div>
    <HomeContainer className="homepage">
      <Sidebar />
     <div>
     <HorizontalLine />
     </div>
      <PlanetData />
    </HomeContainer>
    </div>
  );
}

export default HomePage;
