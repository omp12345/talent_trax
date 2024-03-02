import { GET_PLANET_SHAPES, GET_PLANET_SHAPES_ERROR, GET_PLANET_SHAPES_REQUEST } from "./actionTypes"

const initState = {
    isLoading: false,
    isError: false,
    shapes: [],
}

export const reducer = (state = initState, {type,payload}) => {
    switch(type){
        case GET_PLANET_SHAPES_REQUEST:
            return {...state, isLoading:true}
            case GET_PLANET_SHAPES_ERROR:
                return {...state, isLoading:false,isError:true}
                case GET_PLANET_SHAPES:
                    return {...state, isLoading:false, shapes:[...payload]}
                    
        default:
            return state;
    }
}