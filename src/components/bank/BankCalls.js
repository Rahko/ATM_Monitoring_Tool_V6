import Axios from "axios";
import { addBankUrl, getBankTxnUrl, updateBankUrl, stopBankUrl, startBankUrl } from "../../Constants";

export function addBank(json) {
  // const token = localStorage.getItem("token");
  const token = sessionStorage.getItem("token");
  return Axios.request({
    method: "POST",
    data: json,
    url: addBankUrl,
    headers: { Authorization: token, "Content-Type": "application/json" },
  })
  .then(res => res)
}


export function updateBank(json){
  const token = sessionStorage.getItem("token");
  return Axios.request({
    method: "PUT",
    data: json,
    url: updateBankUrl,
    headers: { Authorization: token, "Content-Type": "application/json" },
  })
  .then(res => res)
}



export function getGraphPoints(tenantId) {
  const json = {
    tenantId: tenantId,
  };
  // const token = localStorage.getItem("token");
  const token = sessionStorage.getItem("token");
  const header = { Authorization: token, "Content-Type": "application/json" };

  return Axios.request({
    method: "POST",
    url: getBankTxnUrl,
    data: json,
    headers: header,
  })
  .then(res=>res)
  .catch(err=>console.log(err))
}



export function startBank(tenantId){
  const json={
    tenantId: tenantId
  }
  const token = sessionStorage.getItem("token");
  const header = { Authorization: token, "Content-Type": "application/json" };

  return Axios.request({
    method : "POST",
    data: json,
    headers: header,
    url: startBankUrl
  })
  .then(res=>res)
  // .catch(err=> alert(err))
}

export function stopBank(tenantId){
  const json={
    tenantId: tenantId
  }
  const token = sessionStorage.getItem("token");
  const header = { Authorization: token, "Content-Type": "application/json" };

  return Axios.request({
    method : "POST",
    data: json,
    headers: header,
    url: stopBankUrl
  })
  .then(res=>res)
  // .catch(err=> alert(err))
}