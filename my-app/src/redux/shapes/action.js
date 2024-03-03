import axios from "axios";
import { GET_PLANET_SHAPES, GET_PLANET_SHAPES_ERROR, GET_PLANET_SHAPES_REQUEST } from "./actionTypes";

export const getshape = (data) => (dispatch) => {
    dispatch({type:GET_PLANET_SHAPES_REQUEST})
    axios.get(`https://mock-api-x1tu.onrender.com/shapes`,data)
    .then((res)=> {
        console.log(res.data)
      dispatch({type:GET_PLANET_SHAPES,payload:res.data})
    })
    .catch((err)=> {
      dispatch({type:GET_PLANET_SHAPES_ERROR})
    })
  };