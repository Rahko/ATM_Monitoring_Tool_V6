import Axios from "axios";
import {
  addAtmUrl,
  updateAtmUrl,
  screenDataUrl,
  stateDataUrl,
  fitDataUrl,
  goInServiceUrl,
  outOfServiceUrl,
  stopAtmUrl,
  startAtmUrl,
} from "../../Constants";

export function addAtm(json) {
  // const token = localStorage.getItem("token");
  const token = sessionStorage.getItem("token");
  return Axios.request({
    method: "POST",
    data: json,
    url: addAtmUrl,
    headers: { Authorization: token, "Content-Type": "application/json" },
  })
    .then((res) => res)
    // .catch((err) => console.log(err));
}

export function updateAtm(json) {
  const token = sessionStorage.getItem("token");
  return Axios.request({
    method: "PUT",
    data: json,
    url: updateAtmUrl,
    headers: { Authorization: token, "Content-Type": "application/json" },
  })
    .then((res) => res)
    // .catch((err) => alert(err));
}

export function startAtm(tenantId, ip) {
  const json = {
    tenantId: tenantId,
    atmIp: ip,
  };
  const token = sessionStorage.getItem("token");
  const header = { Authorization: token, "Content-Type": "application/json" };
  return Axios.request({
    method: "POST",
    data: json,
    url: startAtmUrl,
    headers: header,
  })
    .then((res) => res)
    // .catch((err) => alert(err));
}

export function stopAtm(tenantId, ip) {
  const json = {
    tenantId: tenantId,
    atmIp: ip,
  };
  const token = sessionStorage.getItem("token");
  const header = { Authorization: token, "Content-Type": "application/json" };
  return Axios.request({
    method: "POST",
    data: json,
    url: stopAtmUrl,
    headers: header,
  })
    .then((res) => res)
    // .catch((err) => alert(err));
}

export function sendOutOfService(tenantId, ip) {
  const json = {
    tenantId: tenantId,
    atmIp: ip,
  };
  const token = sessionStorage.getItem("token");
  const header = { Authorization: token, "Content-Type": "application/json" };
  return Axios.request({
    method: "POST",
    data: json,
    url: outOfServiceUrl,
    headers: header,
  })
    .then((res) => res)
    // .catch((err) => alert(err));
}

export function sendGoInService(tenantId, ip) {
  const json = {
    tenantId: tenantId,
    atmIp: ip,
  };
  const token = sessionStorage.getItem("token");
  const header = { Authorization: token, "Content-Type": "application/json" };
  return Axios.request({
    method: "POST",
    data: json,
    url: goInServiceUrl,
    headers: header,
  })
    .then((res) => res)
    // .catch((err) => alert(err));
}
export function sendFitData(tenantId, ip) {
  const json = {
    tenantId: tenantId,
    atmIp: ip,
  };
  const token = sessionStorage.getItem("token");
  const header = { Authorization: token, "Content-Type": "application/json" };
  return Axios.request({
    method: "POST",
    data: json,
    url: fitDataUrl,
    headers: header,
  })
    .then((res) => res)
    // .catch((err) => alert(err));
}

export function sendStateData(tenantId, ip) {
  const json = {
    tenantId: tenantId,
    atmIp: ip,
  };
  const token = sessionStorage.getItem("token");
  const header = { Authorization: token, "Content-Type": "application/json" };
  return Axios.request({
    method: "POST",
    data: json,
    url: stateDataUrl,
    headers: header,
  })
    .then((res) => res)
    // .catch((err) => alert(err));
}

export function sendScreenData(tenantId, ip) {
  const json = {
    tenantId: tenantId,
    atmIp: ip,
  };
  const token = sessionStorage.getItem("token");
  const header = { Authorization: token, "Content-Type": "application/json" };
  return Axios.request({
    method: "POST",
    data: json,
    url: screenDataUrl,
    headers: header,
  })
    .then((res) => res)
    // .catch((err) => alert(err));
}
