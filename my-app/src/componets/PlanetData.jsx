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
  const obj = {
    params: {
      shape: search.getAll('shape'),
      size: search.getAll('size'),
      color: search.getAll('color'),
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

  const planetdata = useSelector((state) => state.planetReducer.planet);

  useEffect(() => {
    dispatch(getPlanet(obj));
  }, [location]);

  return (
    <div>
      <br />
      {planetdata.map((planet) => (
        <PlanetCard key={planet.id} planet={planet} />
      ))}
    </div>
  );
}

export default PlanetData;
