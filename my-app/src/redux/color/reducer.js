import { GET_PLANET_COLOR, GET_PLANET_COLOR_ERROR, GET_PLANET_COLOR_REQUEST } from "./actionTypes"

const initState = {
    isLoading: false,
    isError: false,
    color: [],
}

export const reducer = (state = initState, {type,payload}) => {
    switch(type){
        case GET_PLANET_COLOR_REQUEST:
            return {...state, isLoading:true}
            case GET_PLANET_COLOR_ERROR:
                return {...state, isLoading:false,isError:true}
                case GET_PLANET_COLOR:
                    return {...state, isLoading:false, color:[...payload]}
                    
        default:
            return state;
    }
}