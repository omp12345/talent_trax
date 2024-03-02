import { useEffect } from "react";
import { GET_PLANET_COLOR, GET_PLANET_COLOR_ERROR, GET_PLANET_COLOR_REQUEST } from "../color/actionTypes";
import axios from "axios";

export const getcolor = (data) => (dispatch) => {
    dispatch({type:GET_PLANET_COLOR_REQUEST})
    axios.get(`http://localhost:8080/colors`,data)
    .then((res)=> {
        console.log( "color" , res.data)
      dispatch({type:GET_PLANET_COLOR,payload:res.data})
    })
    .catch((err)=> {
      dispatch({type:GET_PLANET_COLOR_ERROR})
    })
  };
 