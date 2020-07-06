import Axios from "axios";
import { addHsmUrl, updateHsmUrl } from "../../../Constants";


export function addHsm(json){

    const token = sessionStorage.getItem("token");
    const header = { Authorization: token, "Content-Type": "application/json" };

    return Axios.request({
        method : "POST",
        data: json,
        headers: header,
        url: addHsmUrl
    })
    .then(res=>res)
}

export function updateHsm(json){

    const token = sessionStorage.getItem("token");
    const header = { Authorization: token, "Content-Type": "application/json" };

    return Axios.request({
        method : "POST",
        data: json,
        headers: header,
        url: updateHsmUrl
    })
    .then(res=>res)
}