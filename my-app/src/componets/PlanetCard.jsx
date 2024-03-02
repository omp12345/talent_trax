import React from 'react';
import { useSelector } from 'react-redux';

function PlanetCard({ planet }) {
  const shapedata = useSelector((state) => state.shapeReducer.shapes);
  const sizedata = useSelector((state) => state.sizeReducer.size);
  const colordata = useSelector((state) => state.colorReducer.color);
  const shape = shapedata.find((shape) => shape.id === planet.shape);
  const color = colordata.find((color) => color.id === planet.color);
  const size = sizedata.find((size) => size.id === planet.size);

  return (
    <div>
      <h4 style={{opacity:"0.8"}}>{planet.name}</h4>
    
      <p>
        {shape && color && size
          ? `${planet.name} has ${color.name} color and ${shape.name} shape and size is ${size.name}`
          : 'Loading....'}
      </p>
      
    </div>
  );
}

export default PlanetCard;
