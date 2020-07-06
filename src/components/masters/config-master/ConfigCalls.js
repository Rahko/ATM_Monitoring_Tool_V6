import { addConfigUrl, updateConfigUrl,removeConfigUrl } from "../../../Constants";
import Axios from "axios";
import {getConfigUrl} from '../../../Constants';

export function addConfig(json){
    const token = sessionStorage.getItem("token");
    return Axios.request({
        method: "POST",
        data: json,
        url: addConfigUrl,
        headers: { Authorization: token, "Content-Type": "application/json" },
    })
    .then(res => res)
        // .catch(err => alert(err));
}

export function removeConfig(json){
    const token = sessionStorage.getItem("token");
    return Axios.request({
        method: "POST",
        data: json,
        url: removeConfigUrl,
        headers: { Authorization: token, "Content-Type": "application/json" },
    })
    .then(res => res)
}

export function updateConfig(json){
    const token = sessionStorage.getItem("token");
    return Axios.request({
        method: "POST",
        data: json,
        url: updateConfigUrl,
        headers: { Authorization: token, "Content-Type": "application/json" },
    })
    .then(res => res)
}

export function getConfigs(json){
    console.log(json)
    const token = sessionStorage.getItem("token");
    const header ={ Authorization: token, "Content-Type": "application/json" };
    return Axios.request(
        {
            method:"POST",
            url : getConfigUrl,
            data : json,
            headers: header
        }
    ).then(res=>res)
}