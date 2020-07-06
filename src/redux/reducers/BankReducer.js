import { getBanksData, getBankDashboard } from "../../ActionConstants"


export const banks = (state=[] ,action) => {
    switch(action.type){
        case getBanksData :
            return [...action.payload]
        default:
            return state
    }
}


export const bankDash = (state=[] , action) => {
    switch(action.type){
        case getBankDashboard :
            return action.payload
        default:
            return state
    }
}