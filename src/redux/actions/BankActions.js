import Axios from "axios"
import { getBanksUrl , getBankDashUrl} from "../../Constants"
import { getBanksData, getBankDashboard } from "../../ActionConstants"


export const getBanks = (token) =>{
    const header ={ Authorization: token, "Content-Type": "application/json" };
    return dispatch => {
        Axios.request(
            {
                method:"GET",
                url : getBanksUrl,
                headers: header
            }
        ).then(res =>{
            dispatch({
                type : getBanksData,
                payload : res.data
            })
        })
    }
}


export const getBankDash = (tenant,token) =>{
    const json = {
        tenantId: tenant
    };
    const header ={ Authorization: token, "Content-Type": "application/json" };
    return dispatch => {
    Axios
      .request({
        method: "POST",
        url: getBankDashUrl,
        data: json,
        headers: header
      })
      .then(response => {
        console.log(response)
        dispatch({
            type : getBankDashboard,
            payload : response.data
        })
      })
    };
}