import { GET_PLANET_SIZE, GET_PLANET_SIZE_ERROR, GET_PLANET_SIZE_REQUEST } from "./actionTypes"

const initState = {
    isLoading: false,
    isError: false,
    size: [],
}

export const reducer = (state = initState, {type,payload}) => {
    switch(type){
        case GET_PLANET_SIZE_REQUEST:
            return {...state, isLoading:true}
            case GET_PLANET_SIZE_ERROR:
                return {...state, isLoading:false,isError:true}
                case GET_PLANET_SIZE:
                    return {...state, isLoading:false, size:[...payload]}
                    
        default:
            return state;
    }
}