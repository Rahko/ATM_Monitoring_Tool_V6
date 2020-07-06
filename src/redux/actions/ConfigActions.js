import Axios from "axios";
import {  getHsmConfigUrl } from "../../Constants";
import {  getHsmConfigData } from "../../ActionConstants";


// export const getConfigs = (token) =>{
//     const header ={ Authorization: token, "Content-Type": "application/json" };
//     return dispatch => {
//         Axios.request(
//             {
//                 method:"GET",
//                 url : getConfigUrl,
//                 headers: header
//             }
//         ).then(res =>{
//             dispatch({
//                 type : getConfigsData,
//                 payload : res.data
//             })
//         })
//     }
// }


export const getHsmConfigs = (token) =>{
    const header ={ Authorization: token, "Content-Type": "application/json" };
    return dispatch => {
        Axios.request(
            {
                method:"GET",
                url : getHsmConfigUrl,
                headers: header
            }
        ).then(res =>{
            dispatch({
                type : getHsmConfigData,
                payload : res.data
            })
        })
    }
}