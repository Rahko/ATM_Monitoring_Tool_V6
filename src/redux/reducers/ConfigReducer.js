import { getHsmConfigData } from "../../ActionConstants";


// export const configs = (state=[], action) => {

//     switch(action.type){
//         case getConfigsData :
//             return [...action.payload]
//         default :
//             return state
//     }
// }

export const hsmConfigs = (state=[],action) =>{

    switch(action.type){
        case getHsmConfigData :
            return [...action.payload]
        default :
            return state
    }    
}