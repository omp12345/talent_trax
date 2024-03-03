import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlanet } from '../redux/planet/action';
import PlanetCard from './PlanetCard';
import { getshape } from '../redux/shapes/action';
import { getcolor } from '../redux/color/action';
import { getsize } from '../redux/size/action';
import { useLocation, useSearchParams } from 'react-router-dom';

function PlanetData() {
  const [search, _] = useSearchParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const text = search.get("text");
  const obj = {
    params: {
      shape: search.getAll('shape'),
      size: search.getAll('size'),
      color: search.getAll('color'),
      text: text,
    },
  };

  useEffect(() => {
    dispatch(getshape());
  }, []);

  useEffect(() => {
    dispatch(getcolor());
  }, []);

  useEffect(() => {
    dispatch(getsize());
  }, []);

  useEffect(() => {
    dispatch(getPlanet(obj));
  }, [location, text]);

  const planetdata = useSelector((state) => state.planetReducer.planet);

  // Filter the planets based on the text parameter
  const filteredPlanetData = text
    ? planetdata.filter((planet) => planet.name.toLowerCase().includes(text.toLowerCase()))
    : planetdata;

  return (
    <div>
      <br />
      {filteredPlanetData.map((planet) => (
        <PlanetCard key={planet.id} planet={planet} />
      ))}
    </div>
  );
}

export default PlanetData;
