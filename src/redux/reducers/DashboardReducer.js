import { getDashboardData } from "../../ActionConstants";


export const dashboard = (state=[],action) =>{
    switch(action.type){
        case getDashboardData : 
            return action.payload
        default:
            return state
    }
}