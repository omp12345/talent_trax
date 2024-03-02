import { GET_PLANET, GET_PLANET_ERROR, GET_PLANET_REQUEST } from "./actionTypes"
import axios from "axios"



export const getPlanet = (data) => (dispatch) => {
    dispatch({type:GET_PLANET_REQUEST})
    axios.get(`http://localhost:8080/planets`,data)
    .then((res)=> {
        console.log(res.data)
      dispatch({type:GET_PLANET,payload:res.data})
    })
    .catch((err)=> {
      dispatch({type:GET_PLANET_ERROR})
    })
  };
 