import { getAtmsData } from "../../ActionConstants"


export const atms = (state=[],action) =>{
    // console.log(getAtmData)
    switch(action.type){
        case getAtmsData:
            return [...action.payload]
        default :
            return state
    }
}