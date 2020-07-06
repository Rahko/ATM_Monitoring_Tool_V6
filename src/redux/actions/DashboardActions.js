import Axios from "axios"
import { getDashUrl } from "../../Constants"
import { getDashboardData } from "../../ActionConstants"



export const getDashboard = (token) => {
    console.log(token)
    const header ={ Authorization: token, "Content-Type": "application/json" };
    return dispatch =>{
        Axios.request(
            {
                method:"GET",
                url : getDashUrl,
                headers: header
            }).then(res =>{
            dispatch({
                type : getDashboardData,
                payload : res.data
            })
        })
        .catch(err => console.log(err))
    }

}