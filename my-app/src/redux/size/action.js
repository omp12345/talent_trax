
import axios from "axios";
import { GET_PLANET_SIZE, GET_PLANET_SIZE_ERROR, GET_PLANET_SIZE_REQUEST } from "./actionTypes";


export const getsize = (data) => (dispatch) => {
    dispatch({type:GET_PLANET_SIZE_REQUEST})
    axios.get(`http://localhost:8080/sizes`,data)
    .then((res)=> {
        console.log(res.data)
      dispatch({type:GET_PLANET_SIZE,payload:res.data})
    })
    .catch((err)=> {
      dispatch({type:GET_PLANET_SIZE_ERROR})
    })
  };
