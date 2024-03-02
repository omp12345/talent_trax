import { GET_PLANET, GET_PLANET_ERROR, GET_PLANET_REQUEST } from "./actionTypes"

const initState = {
    isLoading: false,
    isError: false,
    planet: [],
}

export const reducer = (state = initState, {type,payload}) => {
    switch(type){
        case GET_PLANET_REQUEST:
            return {...state, isLoading:true}
            case GET_PLANET_ERROR:
                return {...state, isLoading:false,isError:true}
                case GET_PLANET:
                    return {...state, isLoading:false, planet:[...payload]}
                    
        default:
            return state;
    }
}