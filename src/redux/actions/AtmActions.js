import { getAtmsUrl } from "../../Constants";
import { getAtmsData } from "../../ActionConstants";
import Axios from "axios";



export const getAtms = (tenant,token) => {
    const header ={ Authorization: token, "Content-Type": "application/json" };
    const json = {
        tenantId: tenant
    };
    return dispatch => {
    Axios
      .request({
        method: "POST",
        url: getAtmsUrl,
        data: json,
        headers: header
      })
      .then(response => {
        console.log(response)
        dispatch({
            type : getAtmsData,
            payload : response.data
        })
      })
    };
  };