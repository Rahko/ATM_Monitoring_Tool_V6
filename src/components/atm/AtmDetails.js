import React, { Component } from "react";
import { Link, Redirect } from 'react-router-dom'
import HeadNavFoot from "../HeadNavFoot";
import {
  yesno,
  currencyVals,
  states,
  cardholderAuthCapability,
  cardholderAuthMode,
  cardCaptureCapability,
  cardDataInputCapability,
  cardDataOutputCapability,
  cardholderAuthEntity,
  cardHolderData,
  cardPresentData,
  cardDataInputMode,
  terminalOperatingEnv,
  terminalDataOutputCapability,
  pinCaptureCapability,
  types,
} from "./AtmConstants";
import { updateAtm, startAtm, stopAtm, sendOutOfService, sendGoInService, sendFitData, sendStateData, sendScreenData } from './AtmCalls';

export default class AtmDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bank: props.location.state.bank,
      atm: props.location.state.item,
      isPosted: false
      // bank: {
      //   bankName: "SDCC"
      // },
      // atm: {
      //   id: 162,
      //   tenantId: 11011,
      //   atmId: "ATMV000124",
      //   luno: "0124",
      //   ip: "172.21.0.134",
      //   typeDenom1: 100,
      //   typeDenom2: 100,
      //   typeDenom3: 100,
      //   typeDenom4: 1000,
      //   type1Count: 1000,
      //   type2Count: 1000,
      //   type3Count: 1000,
      //   type4Count: 1000,
      //   atmStatus: 0,
      //   transactionCount: 0,
      //   atmType: "NDC",
      //   dipCard: "Y",
      //   tmk: "02",
      //   encTpk: "06",
      //   lastEncTpk: "@lenc",
      //   keyExchangeDt: "2019-11-17T18:30:00.000+0000",
      //   keyExchangeTime: 0,
      //   keyExchangeDurationInMin: 1,
      //   dynamicKeyExchange: "N",
      //   sessionKey: "  abc ",
      //   isBNA: "Y",
      //   vasYN: "N",
      //   downloadFileName: "CustomisationData_dip_rec_JPG.ini",
      //   atmName: "TEST",
      //   atmLocation: "MUMBAI",
      //   atmState: "MH",
      //   atmCountry: "IN",
      //   cardAuthCap: 2,
      //   cardAuthMode: 2,
      //   cardCaptureCap: 0,
      //   cardDataCap: 1,
      //   cardDataOutCap: 0,
      //   cardholderAuth: 0,
      //   cardholderData: 1,
      //   cardInputMode: 2,
      //   cardPresentData: 2,
      //   atmPincode: 412201,
      //   terminalOpEnv: 0,
      //   terminalOutCap: 3,
      //   pincaptureCap: 3,
      //   posData: 0,
      //   isEMV: false,
      //   availableCash: 1300000,
      // },

    };
  }
  componentDidMount() {
    // const script = document.createElement("script");
    // script.src = `js/effectScripts.js`;
    // script.async = true;
    // document.body.appendChild(script);
  }

  // processForm(e) {

  //   const newAtm = {

  //     //Atm Details
  //     atmId: this.refs.atmId.value,
  //     //atmStatus -- still thinking about this
  //     atmType: this.refs.atmType.value,
  //     tenantId: this.refs.tenantId.value,
  //     dipCard: this.refs.dipCard.value,
  //     dynamicKeyExchange: this.refs.dynamicKeyExchange.value,
  //     encTpk: this.refs.encTpk.value,
  //     isBNA: this.refs.isBNA.value,
  //     ip: this.refs.ip.value,
  //     isEMV: this.refs.isEMV.value,

  //     //Address Details
  //     atmName: this.refs.atmName.value,
  //     atmLocation: this.refs.atmLocation.value,
  //     atmState: this.refs.atmState.value,
  //     atmCountry: this.refs.atmCountry.value,
  //     atmPincode: this.refs.atmPincode.value,
  //     //pos additional merchant address

  //     //DUKPT Details
  //     sessionKey: this.refs.sessionKey.value,
  //     lastEncTpk: this.refs.lastEncTpk.value,
  //     luno: this.refs.luno.value,
  //     keyExchangeDt: this.refs.keyExchangeDt.value,
  //     keyExchangeTime: this.refs.keyExchangeTime.value,
  //     keyExchangeDurationInMin: this.refs.keyExchangeDurationInMin.value,

  //     //TMK Details
  //     tmk: this.refs.tmk.value,
  //     tmkCom1: this.refs.tmkCom1.value,
  //     tmkCom2: this.refs.tmkCom2.value,

  //     // Currency Details
  //     typeDenom1: this.refs.typeDenom1.value,
  //     typeDenom2: this.refs.typeDenom2.value,
  //     typeDenom3: this.refs.typeDenom3.value,
  //     typeDenom4: this.refs.typeDenom4.value,

  //     type1Count: this.refs.type1Count.value,
  //     type2Count: this.refs.type2Count.value,
  //     type3Count: this.refs.type3Count.value,
  //     type4Count: this.refs.type4Count.value,

  //     vasYN: this.refs.vasYN.value,
  //     downloadFileName: this.refs.downloadFileName.value,



  //     // Card Details
  //     cardAuthCap: this.refs.cardAuthCap.value,
  //     cardCaptureCap: this.refs.cardCaptureCap.value,
  //     terminalOpEnv: this.refs.terminalOpEnv.value,

  //     cardholderData: this.refs.cardholderData.value,
  //     cardPresentData: this.refs.cardPresentData.value,
  //     cardInputMode: this.refs.cardInputMode.value,

  //     cardAuthMode: this.refs.cardAuthMode.value,
  //     cardholderAuth: this.refs.cardholderAuth.value,
  //     cardDataCap: this.refs.cardDataCap.value,

  //     terminalOutCap: this.refs.terminalOutCap.value,
  //     pincaptureCap: this.refs.pincaptureCap.value,
  //     cardDataOutCap: this.refs.cardDataOutCap.value,
  //   };
  //   console.log(newAtm)
  //   updateAtm(newAtm);
  // }

  // handleChange = (e) => {
  //   this.setState({ [e.target.name]: e.target.value });
  //   console.log(this.state);
  // };


  startCommand = (tenantId, ip) => {
    startAtm(tenantId, ip).then(res => {
      alert(res.data);
      if (res.status === 200) {
        alert(res.data)
        this.setState({ isPosted: true })
      }
      else {
        alert("Error Occurred")
      }
    })
  }
  stopCommand = (tenantId, ip) => {
    stopAtm(tenantId, ip).then(res => {
      alert(res.data);
      if (res.status === 200) {
        alert(res.data)
        this.setState({ isPosted: true })
      }
      else {
        alert("Error Occurred")
      }
    })
  }
  outOfServiceCommand = (tenantId, ip) => {
    sendOutOfService(tenantId, ip).then(res => {
      alert(res.data);
      if (res.status === 200) {
        alert(res.data)
        this.setState({ isPosted: true })
      }
      else {
        alert("Error Occurred")
      }
    })
  }
  goInServiceCommand = (tenantId, ip) => {
    sendGoInService(tenantId, ip).then(res => {
      alert(res.data);
      if (res.status === 200) {
        alert(res.data)
        this.setState({ isPosted: true })
      }
      else {
        alert("Error Occurred")
      }
    })
  }
  fitDataCommand = (tenantId, ip) => {
    sendFitData(tenantId, ip).then(res => {
      alert(res.data);
      if (res.status === 200) {
        alert(res.data)
        this.setState({ isPosted: true })
      }
      else {
        alert("Error Occurred")
      }
    })
  }
  stateDataCommand = (tenantId, ip) => {
    sendStateData(tenantId, ip).then(res => {
      alert(res.data);
      if (res.status === 200) {
        alert(res.data)
        this.setState({ isPosted: true })
      }
      else {
        alert("Error Occurred")
      }
    })
  }
  screenDataCommand = (tenantId, ip) => {
    sendScreenData(tenantId, ip).then(res => {
      alert(res.data);
      if (res.status === 200) {
        alert(res.data)
        this.setState({ isPosted: true })
      }
      else {
        alert("Error Occurred")
      }
    })
  }

  render() {
    console.log(this.state);
    const bank = this.state.bank;
    const tenantId = bank.tenantId;
    const atm = this.state.atm;
    const ip = atm.ip;
    return (
      <div>

        {this.state.isPosted && <Redirect to={{ pathname: "/bankdash", state: { item: bank } }} />}

        <HeadNavFoot />


        {/* ================================= Main Page Content - Start ===============================*/}
        <main className="main-container">
          <div className="in-main">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 px-0">
                  {/*============================== Right Main Column Starts ==================================*/}
                  {/* ***************************************************************************************** */}
                  <div className="right-main-column">
                    <div className="right-col-container">
                      {/*================================ Body code starts Here ===================================*/}
                      <div className="main-content">
                        <div className="in-mcontainer">
                          {/*=============================== breadcrumb starts ===============================*/}
                          <div className="breadcrumb">
                            <ul className="lst-breadcrumb">
                              <li>
                                <Link to="/banks">Banks</Link>
                              </li>
                              <li>
                                <Link to={{ pathname: "/bankdash", state: { item: bank } }}>{bank.bankName}</Link>
                              </li>
                              <li>
                                <Link to={{ pathname: "", }}>{bank.bankName} ATM List</Link>
                              </li>
                              <li>View ATM</li>
                            </ul>
                            {/*.lst-breadcrumb*/}
                          </div>
                          {/* .breadcrumb */}
                          {/*=============================== breadcrumb ends ===============================*/}
                          {/*============================ grid container starts ============================*/}
                          <div className="grid-container">
                            {/*================ Department Master Datattables list starts ================*/}
                            <div className="grid-header">
                              <div className="dt-header">
                                <div className="row">
                                  <div className="col-sm-12 col-md-12">
                                    <h2>View ATM</h2>
                                  </div>
                                  <div className="col-sm-12 col-md-12">
                                  </div>
                                </div>
                              </div>
                              {/* .dt-header */}
                            </div>
                            <div className="grid-header1 text-left">
                              <div className="row">
                                <div className="col-12 col-lg-10 col-md-12">
                                  <button class="button secondary" onClick={() => this.startCommand(tenantId, ip)}>Start ATM</button>
                                  <button class="button secondary" onClick={() => this.stopCommand(tenantId, ip)}>Stop ATM</button>
                                  <button class="button secondary" onClick={() => this.outOfServiceCommand(tenantId, ip)}>Send Out Service Command</button>
                                  <button class="button secondary" onClick={() => this.goInServiceCommand(tenantId, ip)}>send Go In Service Command</button>
                                  <button class="button secondary" onClick={() => this.fitDataCommand(tenantId, ip)}>Send Fit Data</button>
                                  <button class="button secondary" onClick={() => this.stateDataCommand(tenantId, ip)}>Send State Data</button>
                                  <button class="button secondary" onClick={() => this.screenDataCommand(tenantId, ip)}>Send Screen Data</button>
                                </div>
                                <div className="col-12 col-lg-2 col-md-12">
                                  <Link to={{ pathname: "/atm/edit", state: { item: atm, bank: bank } }} className="button float-right">Edit</Link>
                                </div>
                              </div>
                            </div>
                            <div className="vspacer20" />
                            <div className="role-container">
                              <div className="role-content">
                                <form action="#">
                                  <div className="row">
                                    <div className="col-12 col-xl-2 col-lg-3 col-md-4 col-sm-12 text-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 213.493 262.333" width={180} height={180}>
                                        <g transform="translate(-24.975)">
                                          <path id="Path_17759" data-name="Path 17759" d="M64.307,2.5H58.035a4.385,4.385,0,0,0-4.372,4.372V255.336a4.385,4.385,0,0,0,4.372,4.372h6.272a4.385,4.385,0,0,0,4.372-4.372V6.872A4.385,4.385,0,0,0,64.307,2.5Z" transform="translate(0.71 0.062)" fill="#f5c84c" />
                                          <path id="Path_17760" data-name="Path 17760" d="M198.328,2.5h-6.272a4.385,4.385,0,0,0-4.372,4.372V255.336a4.385,4.385,0,0,0,4.372,4.372h6.272a4.385,4.385,0,0,0,4.372-4.372V6.872A4.385,4.385,0,0,0,198.328,2.5Z" transform="translate(4.025 0.062)" fill="#f5c84c" />
                                          <path id="Path_17761" data-name="Path 17761" d="M68.316,7.627H190.637v26H68.316Z" transform="translate(1.072 0.189)" fill="#3caadc" />
                                          <path id="Path_17762" data-name="Path 17762" d="M68.316,33H190.637v9.735H68.316Z" transform="translate(1.072 0.816)" fill="#3a70bf" />
                                          <path id="Path_17763" data-name="Path 17763" d="M68.316,42.5H88.487V93.737H68.316Z" transform="translate(1.072 1.051)" fill="#c7d7e5" />
                                          <path id="Path_17764" data-name="Path 17764" d="M168,42.5h20.171V93.737H168Z" transform="translate(3.538 1.051)" fill="#c7d7e5" />
                                          <path id="Path_17765" data-name="Path 17765" d="M88,42.5h81.979V93.737H88Z" transform="translate(1.559 1.051)" fill="#f5c84c" />
                                          <path id="Path_17813" data-name="Path 17813" d="M88,42.5h81.979V93.737H88Z" transform="translate(1.559 9.249)" fill="#f5c84c" />
                                          <path id="Path_17766" data-name="Path 17766" d="M68.316,59.608H88.487V75.781H68.316Z" transform="translate(1.072 1.475)" fill="#edf4fc" />
                                          <path id="Path_17767" data-name="Path 17767" d="M168,59.608h20.171V75.781H168Z" transform="translate(3.538 1.475)" fill="#edf4fc" />
                                          <path id="Path_17768" data-name="Path 17768" d="M190.718,251.9V141.5H68.4V251.9a4.381,4.381,0,0,1-3.378,4.245v.126H195.09a4.385,4.385,0,0,1-4.372-4.371Z" transform="translate(0.991 3.5)" fill="#3a70bf" />
                                          <path id="Path_17769" data-name="Path 17769" d="M178.954,255.429V180.839a5.353,5.353,0,0,0-5.338-5.338H84.786a5.353,5.353,0,0,0-5.338,5.338v74.591Z" transform="translate(1.347 4.341)" fill="#5290db" />
                                          <path id="Path_17770" data-name="Path 17770" d="M102.334,161.193V156.1a3.614,3.614,0,0,1,3.6-3.6H89.982a1.482,1.482,0,0,0-1.482,1.482v7.285a1.481,1.481,0,0,0,1.482,1.482H102.7A3.543,3.543,0,0,1,102.334,161.193Z" transform="translate(1.571 3.772)" fill="#173f7f" />
                                          <path id="Path_17771" data-name="Path 17771" d="M166.439,152.5H150.483a3.615,3.615,0,0,1,3.6,3.6v5.09a3.547,3.547,0,0,1-.369,1.555h12.721a1.482,1.482,0,0,0,1.482-1.482v-7.285A1.481,1.481,0,0,0,166.439,152.5Z" transform="translate(3.105 3.772)" fill="#173f7f" />
                                          <circle id="Ellipse_481" data-name="Ellipse 481" cx="5.636" cy="5.636" r="5.636" transform="translate(124.912 236.202)" fill="#c7d7e5" />
                                          <path id="Path_17772" data-name="Path 17772" d="M151.682,152.5H105.6a3.615,3.615,0,0,0-3.6,3.6v5.09a3.614,3.614,0,0,0,3.6,3.6h46.079a3.615,3.615,0,0,0,3.6-3.6V156.1A3.614,3.614,0,0,0,151.682,152.5Z" transform="translate(1.905 3.772)" fill="#c7d7e5" />
                                          <path id="Path_17773" data-name="Path 17773" d="M68.316,92.5v20.495h83.916a1.451,1.451,0,0,1-1.451-1.452V104.2a1.452,1.452,0,0,1,1.451-1.452h26.222A1.451,1.451,0,0,1,179.9,104.2v7.344a1.452,1.452,0,0,1-1.451,1.452h12.184V92.5Z" transform="translate(1.072 2.288)" fill="#3a70bf" />
                                          <path id="Path_17774" data-name="Path 17774" d="M176.1,112.5v15.306a2.115,2.115,0,0,1-2.114,2.114H156.7a2.115,2.115,0,0,1-2.114-2.114V112.5H68.316v29.717H190.637V112.5Z" transform="translate(1.072 2.783)" fill="#c7d7e5" />
                                          <path id="Path_17775" data-name="Path 17775" d="M176.462,102.5H150.24a1.451,1.451,0,0,0-1.451,1.452V111.3a1.452,1.452,0,0,0,1.451,1.452h26.222a1.451,1.451,0,0,0,1.451-1.452v-7.344A1.45,1.45,0,0,0,176.462,102.5Z" transform="translate(3.063 2.536)" fill="#5290db" />
                                          <path id="Path_17776" data-name="Path 17776" d="M152.5,112.5v15.306a2.115,2.115,0,0,0,2.114,2.114h17.292a2.115,2.115,0,0,0,2.114-2.114V112.5Z" transform="translate(3.155 2.783)" fill="#edf4fc" />
                                          <path id="Path_17777" data-name="Path 17777" d="M38.557,220.051a2.874,2.874,0,1,0,3.438,2.817A2.871,2.871,0,0,0,38.557,220.051Z" transform="translate(0.279 5.442)" fill="#87d147" />
                                          <path id="Path_17778" data-name="Path 17778" d="M217.684,129.051a2.874,2.874,0,1,0-.564,5.691,2.874,2.874,0,0,0,.564-5.691Z" transform="translate(4.682 3.191)" fill="#3caadc" />
                                          <path id="Path_17779" data-name="Path 17779" d="M37.84,194.995H35.718v-2.121a2.874,2.874,0,0,0-5.749,0v2.121h-2.12a2.874,2.874,0,1,0,0,5.749h2.12v2.121a2.874,2.874,0,1,0,5.749,0v-2.121H37.84a2.874,2.874,0,0,0,0-5.749Z" transform="translate(0 4.7)" fill="#3caadc" />
                                          <path id="Path_17780" data-name="Path 17780" d="M217.684,41.051a2.872,2.872,0,1,0,2.311,2.817A2.866,2.866,0,0,0,217.684,41.051Z" transform="translate(4.682 1.014)" fill="#f5c84c" />
                                          <path id="Path_17781" data-name="Path 17781" d="M233.567,20.085a10.1,10.1,0,0,1-8.1-7.935.183.183,0,0,0-.36,0,10.1,10.1,0,0,1-8.1,7.935.178.178,0,0,0,0,.353,10.1,10.1,0,0,1,8.1,7.935.183.183,0,0,0,.36,0,10.1,10.1,0,0,1,8.1-7.935A.178.178,0,0,0,233.567,20.085Z" transform="translate(4.747 0.297)" fill="#ef4460" />
                                          <path id="Path_17782" data-name="Path 17782" d="M64.369,262.333H58.1a6.942,6.942,0,0,1-6.933-6.934V6.934A6.942,6.942,0,0,1,58.1,0h6.272A6.942,6.942,0,0,1,71.3,6.934V255.4A6.941,6.941,0,0,1,64.369,262.333ZM58.1,5.124a1.812,1.812,0,0,0-1.81,1.811V255.4a1.812,1.812,0,0,0,1.81,1.811h6.272a1.812,1.812,0,0,0,1.81-1.811V6.934a1.812,1.812,0,0,0-1.81-1.811Z" transform="translate(0.648 0)" />
                                          <path id="Path_17783" data-name="Path 17783" d="M198.39,262.333h-6.272a6.942,6.942,0,0,1-6.933-6.934V6.934A6.942,6.942,0,0,1,192.117,0h6.272a6.942,6.942,0,0,1,6.933,6.934V255.4A6.942,6.942,0,0,1,198.39,262.333ZM192.117,5.124a1.812,1.812,0,0,0-1.81,1.811V255.4a1.812,1.812,0,0,0,1.81,1.811h6.272a1.812,1.812,0,0,0,1.81-1.811V6.934a1.812,1.812,0,0,0-1.81-1.811Z" transform="translate(3.963)" />
                                          <path id="Path_17784" data-name="Path 17784" d="M115.669,125.124h-3.138a2.562,2.562,0,1,1,0-5.124h3.138a2.562,2.562,0,1,1,0,5.124Z" transform="translate(2.102 2.968)" />
                                          <path id="Path_17785" data-name="Path 17785" d="M127.669,125.124h-3.138a2.562,2.562,0,1,1,0-5.124h3.138a2.562,2.562,0,0,1,0,5.124Z" transform="translate(2.399 2.968)" />
                                          <path id="Path_17786" data-name="Path 17786" d="M139.669,125.124h-3.138a2.562,2.562,0,0,1,0-5.124h3.138a2.562,2.562,0,1,1,0,5.124Z" transform="translate(2.696 2.968)" />
                                          <path id="Path_17787" data-name="Path 17787" d="M115.669,134.124h-3.138a2.562,2.562,0,0,1,0-5.124h3.138a2.562,2.562,0,0,1,0,5.124Z" transform="translate(2.102 3.191)" />
                                          <path id="Path_17788" data-name="Path 17788" d="M127.669,134.124h-3.138a2.562,2.562,0,0,1,0-5.124h3.138a2.562,2.562,0,0,1,0,5.124Z" transform="translate(2.399 3.191)" />
                                          <path id="Path_17789" data-name="Path 17789" d="M139.669,134.124h-3.138a2.562,2.562,0,0,1,0-5.124h3.138a2.562,2.562,0,1,1,0,5.124Z" transform="translate(2.696 3.191)" />
                                          <path id="Path_17790" data-name="Path 17790" d="M94.908,105.124H80.562a2.562,2.562,0,0,1,0-5.124H94.908a2.562,2.562,0,0,1,0,5.124Z" transform="translate(1.312 2.474)" />
                                          <path id="Path_17792" data-name="Path 17792" d="M2.562,35A2.561,2.561,0,0,1,0,32.44V2.562a2.562,2.562,0,0,1,5.124,0V32.439A2.562,2.562,0,0,1,2.562,35Z" transform="translate(113.628 59.371) rotate(-90)" />
                                          <path id="Path_17810" data-name="Path 17810" d="M2.562,35A2.561,2.561,0,0,1,0,32.44V2.562a2.562,2.562,0,0,1,5.124,0V32.439A2.562,2.562,0,0,1,2.562,35Z" transform="translate(113.628 67.569) rotate(-90)" />
                                          <path id="Path_17811" data-name="Path 17811" d="M2.562,35A2.561,2.561,0,0,1,0,32.44V2.562a2.562,2.562,0,0,1,5.124,0V32.439A2.562,2.562,0,0,1,2.562,35Z" transform="translate(113.628 75.767) rotate(-90)" />
                                          <path id="Path_17812" data-name="Path 17812" d="M2.562,35A2.561,2.561,0,0,1,0,32.44V2.562a2.562,2.562,0,0,1,5.124,0V32.439A2.562,2.562,0,0,1,2.562,35Z" transform="translate(113.628 83.965) rotate(-90)" />
                                          <path id="Path_17793" data-name="Path 17793" d="M190.7,36.251H68.378a2.561,2.561,0,0,1-2.562-2.562v-26a2.561,2.561,0,0,1,2.562-2.562H190.7a2.561,2.561,0,0,1,2.562,2.562v26A2.561,2.561,0,0,1,190.7,36.251ZM70.94,31.128h117.2V10.251H70.94Z" transform="translate(1.01 0.127)" />
                                          <path id="Path_17794" data-name="Path 17794" d="M190.7,45.359H68.378A2.561,2.561,0,0,1,65.816,42.8V33.062A2.561,2.561,0,0,1,68.378,30.5H190.7a2.561,2.561,0,0,1,2.562,2.562V42.8A2.561,2.561,0,0,1,190.7,45.359ZM70.94,40.235h117.2V35.624H70.94Z" transform="translate(1.01 0.754)" />
                                          <path id="Path_17795" data-name="Path 17795" d="M88.549,96.361H68.378A2.561,2.561,0,0,1,65.816,93.8V42.562A2.561,2.561,0,0,1,68.378,40H88.549a2.561,2.561,0,0,1,2.562,2.562V93.8A2.561,2.561,0,0,1,88.549,96.361ZM70.94,91.237H85.987V45.124H70.94Z" transform="translate(1.01 0.989)" />
                                          <path id="Path_17796" data-name="Path 17796" d="M188.233,96.361H168.062A2.561,2.561,0,0,1,165.5,93.8V42.562A2.561,2.561,0,0,1,168.062,40h20.171a2.561,2.561,0,0,1,2.562,2.562V93.8A2.561,2.561,0,0,1,188.233,96.361Zm-17.609-5.124h15.047V45.124H170.624Z" transform="translate(3.476 0.989)" />
                                          <path id="Path_17797" data-name="Path 17797" d="M170.041,96.361H88.062A2.561,2.561,0,0,1,85.5,93.8V42.562A2.561,2.561,0,0,1,88.062,40h81.979a2.561,2.561,0,0,1,2.562,2.562V93.8A2.561,2.561,0,0,1,170.041,96.361ZM90.624,91.237h76.855V45.124H90.624Z" transform="translate(1.497 0.989)" />
                                          <path id="Path_17798" data-name="Path 17798" d="M88.549,78.406H68.378a2.561,2.561,0,0,1-2.562-2.562V59.67a2.561,2.561,0,0,1,2.562-2.562H88.549a2.561,2.561,0,0,1,2.562,2.562V75.843A2.562,2.562,0,0,1,88.549,78.406ZM70.94,73.282H85.987V62.232H70.94Z" transform="translate(1.01 1.413)" />
                                          <path id="Path_17799" data-name="Path 17799" d="M188.233,78.406H168.062a2.561,2.561,0,0,1-2.562-2.562V59.67a2.561,2.561,0,0,1,2.562-2.562h20.171a2.561,2.561,0,0,1,2.562,2.562V75.843A2.562,2.562,0,0,1,188.233,78.406Zm-17.609-5.124h15.047V62.232H170.624Z" transform="translate(3.476 1.413)" />
                                          <path id="Path_17800" data-name="Path 17800" d="M195.152,258.894H65.083a2.562,2.562,0,0,1-2.562-2.562v-.126a2.563,2.563,0,0,1,1.974-2.494,1.824,1.824,0,0,0,1.4-1.752v-110.4A2.561,2.561,0,0,1,68.459,139H190.78a2.561,2.561,0,0,1,2.562,2.562v110.4a1.812,1.812,0,0,0,1.81,1.811,2.562,2.562,0,1,1,0,5.124ZM65.083,256.206h.01Zm5.7-2.436H188.457a6.935,6.935,0,0,1-.24-1.811V144.124H71.021V251.96a6.954,6.954,0,0,1-.239,1.811Z" transform="translate(0.929 3.438)" />
                                          <path id="Path_17801" data-name="Path 17801" d="M179.016,258.053H79.51a2.561,2.561,0,0,1-2.562-2.562V180.9a7.908,7.908,0,0,1,7.9-7.9h88.83a7.908,7.908,0,0,1,7.9,7.9v74.592A2.561,2.561,0,0,1,179.016,258.053ZM82.072,252.93h94.382V180.9a2.779,2.779,0,0,0-2.776-2.776H84.848a2.779,2.779,0,0,0-2.776,2.776Z" transform="translate(1.286 4.279)" />
                                          <path id="Path_17802" data-name="Path 17802" d="M102.765,165.371H90.044A4.048,4.048,0,0,1,86,161.328v-7.285A4.047,4.047,0,0,1,90.044,150H106a2.562,2.562,0,1,1,0,5.124,1.057,1.057,0,0,0-1.042,1.042v5.09a1,1,0,0,0,.112.437,2.559,2.559,0,0,1-2.3,3.678Zm-11.641-5.124h8.71v-4.082a6.133,6.133,0,0,1,.088-1.042h-8.8Z" transform="translate(1.51 3.711)" />
                                          <path id="Path_17803" data-name="Path 17803" d="M166.5,165.371H153.78a2.561,2.561,0,0,1-2.3-3.68,1,1,0,0,0,.112-.437v-5.09a1.056,1.056,0,0,0-1.042-1.042,2.562,2.562,0,1,1,0-5.124H166.5a4.048,4.048,0,0,1,4.044,4.043v7.285a4.048,4.048,0,0,1-4.044,4.045Zm-9.79-5.124h8.71v-5.124h-8.8a6.127,6.127,0,0,1,.088,1.042Zm9.79-5.124h.01Z" transform="translate(3.043 3.711)" />
                                          <path id="Path_17804" data-name="Path 17804" d="M128.2,244.4a8.2,8.2,0,1,1,8.2-8.2A8.207,8.207,0,0,1,128.2,244.4Zm0-11.272a3.074,3.074,0,1,0,3.074,3.074A3.078,3.078,0,0,0,128.2,233.124Z" transform="translate(2.351 5.64)" />
                                          <path id="Path_17805" data-name="Path 17805" d="M151.744,167.421H105.665a6.173,6.173,0,0,1-6.166-6.166v-5.09A6.173,6.173,0,0,1,105.665,150h46.079a6.173,6.173,0,0,1,6.166,6.166v5.09A6.173,6.173,0,0,1,151.744,167.421Zm-46.078-12.3a1.056,1.056,0,0,0-1.042,1.042v5.09a1.056,1.056,0,0,0,1.042,1.042h46.079a1.057,1.057,0,0,0,1.042-1.042v-5.09a1.056,1.056,0,0,0-1.042-1.042Z" transform="translate(1.844 3.711)" />
                                          <path id="Path_17806" data-name="Path 17806" d="M190.7,115.618H178.514a2.562,2.562,0,0,1-1.11-4.872v-5.376h-24v5.376a2.562,2.562,0,0,1-1.11,4.872H68.378a2.561,2.561,0,0,1-2.562-2.562V92.562A2.561,2.561,0,0,1,68.378,90H190.7a2.561,2.561,0,0,1,2.562,2.562v20.495A2.561,2.561,0,0,1,190.7,115.618Zm-8.17-5.124h5.608V95.124H70.94v15.371h77.34V104.26a4.018,4.018,0,0,1,4.014-4.013h26.222a4.018,4.018,0,0,1,4.014,4.013v6.234Z" transform="translate(1.01 2.226)" />
                                          <path id="Path_17807" data-name="Path 17807" d="M190.7,144.841H68.378a2.561,2.561,0,0,1-2.562-2.562V112.562A2.561,2.561,0,0,1,68.378,110h86.266a2.561,2.561,0,0,1,2.562,2.562v14.859h16.4V112.562A2.561,2.561,0,0,1,176.164,110H190.7a2.561,2.561,0,0,1,2.562,2.562v29.717A2.561,2.561,0,0,1,190.7,144.841ZM70.94,139.717h117.2V115.124h-9.411v12.746a4.68,4.68,0,0,1-4.676,4.675H156.757a4.68,4.68,0,0,1-4.675-4.675V115.124H70.94Z" transform="translate(1.01 2.721)" />
                                          <path id="Path_17808" data-name="Path 17808" d="M176.524,115.371H150.3a4.018,4.018,0,0,1-4.014-4.013v-7.345A4.018,4.018,0,0,1,150.3,100h26.222a4.018,4.018,0,0,1,4.014,4.013v7.345A4.018,4.018,0,0,1,176.524,115.371Zm-25.111-5.124h24v-5.124h-24Zm25.111-5.124h.01Z" transform="translate(3.001 2.474)" />
                                          <path id="Path_17809" data-name="Path 17809" d="M171.967,132.544H154.675A4.68,4.68,0,0,1,150,127.869V112.562A2.561,2.561,0,0,1,152.562,110h21.52a2.561,2.561,0,0,1,2.562,2.562v15.308A4.681,4.681,0,0,1,171.967,132.544Zm-16.844-5.124h16.4v-12.3h-16.4Z" transform="translate(3.093 2.721)" />
                                        </g>
                                      </svg>
                                    </div>
                                    <div className="col-12 col-xl-10 col-lg-9 col-md-8 col-sm-12">
                                      <div className="row">
                                        <div className="col-12">
                                          <div className="status-container">
                                            <h5>
                                              <span>Status</span>
                                            </h5>
                                            <label className="selection p-10">
                                              {atm.atmStatus === 0 ? (
                                                <h5 className="approve">
                                                  Active
                                                </h5>
                                              ) : atm.atmStatus === 1 ? (
                                                <h5 className="reject">
                                                  Inactive
                                                </h5>
                                              ) : (
                                                    <h5 className="out">
                                                      Out of Services
                                                    </h5>
                                                  )}
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="vspacer10" />
                                      <div className="row">
                                        <div className="col-12 col-xl-11 col-lg-12 col-md-12 col-sm-12">
                                          <div className="row">
                                            <div className="col-6 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                              <h5>
                                                <span>ATM IP</span>
                                              </h5>
                                              <h5>{atm.ip}</h5>
                                            </div>
                                            <div className="col-6 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                              <h5>
                                                <span>ATM ID</span>
                                              </h5>
                                              <h5>{atm.atmId}</h5>
                                            </div>
                                            <div className="col-6 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                              <h5>
                                                <span>ATM Name</span>
                                              </h5>
                                              <h5>{atm.atmName}</h5>
                                            </div>
                                            <div className="col-6 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                              <h5>
                                                <span>ATM Location</span>
                                              </h5>
                                              <h5>{atm.atmLocation}</h5>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="vspacer40" />
                                  <div>
                                    <div className="row">
                                      <div className="col-12">
                                        <h4>ATM Details</h4>
                                      </div>
                                    </div>

                                    <div className="row">
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component ux-readonly ux-disabled1">
                                          <label className="field-active"><em>*</em>ATM ID</label>
                                          <input className="atm" type="text" required ref="atmId" defaultValue={atm.atmId} disabled />
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component ux-readonly">
                                          <label className="label-top">
                                            <em>*</em>ATM Status
                                                        </label>
                                          <select defaultValue={atm.atmStatus} ref="atmStatus" disabled>
                                            <option value="Select">
                                              Select
                                                          </option>
                                            <option
                                              value="0"
                                            >
                                              Active
                                                          </option>
                                            <option
                                              value="1"
                                            >
                                              Inactive
                                                          </option>
                                            <option
                                              value="2"
                                            >
                                              Out of Service
                                                          </option>
                                          </select>
                                          <u />
                                          <em className="field-message">
                                            {" "}
                                          </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component ux-readonly">
                                          <label className="label-top">
                                            <em>*</em>ATM Type
                                                        </label>
                                          <select
                                            defaultValue={atm.atmType}
                                            ref="atmType"
                                            disabled
                                          >
                                            {types()}
                                          </select>
                                          <u />
                                          <em className="field-message">
                                            {" "}
                                          </em>
                                        </div>
                                      </div>
                                    </div>


                                    <div className="row">
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component ux-readonly">
                                          <label className="field-active">
                                            <em>*</em>Encrypted
                                                          Terminal Pin Key
                                                        </label>
                                          <input
                                            type="text"
                                            required
                                            defaultValue={atm.encTpk}
                                            ref="encTpk"
                                            disabled
                                          />
                                          <em className="field-message">
                                            {" "}
                                          </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component ux-readonly">
                                          <label className="label-top">
                                            <em>*</em>ATM is BNA
                                                        </label>
                                          <select
                                            defaultValue={atm.isBNA}
                                            ref="isBNA"
                                            disabled
                                          >
                                            {yesno()}
                                          </select>
                                          <u />
                                          <em className="field-message">
                                            {" "}
                                          </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component ux-readonly">
                                          <label className="field-active">
                                            <em>*</em>ATM Machine IP
                                                        </label>
                                          <input
                                            type="text"
                                            required
                                            defaultValue={atm.ip}
                                            ref="ip"
                                            disabled
                                          />
                                          <em className="field-message">
                                            {" "}
                                          </em>
                                        </div>
                                      </div>
                                    </div>


                                    <div className="row">
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component ux-readonly">
                                          <label className="label-top">
                                            <em>*</em>ATM is EMV
                                                          Enable ?
                                                        </label>
                                          <select
                                            defaultValue={atm.isEMV}
                                            ref="isEMV"
                                            disabled
                                          >
                                            <option value="true">
                                              Yes
                                                          </option>
                                            <option value="false">
                                              No
                                                          </option>
                                          </select>
                                          <u />
                                          <em className="field-message">
                                            {" "}
                                          </em>
                                        </div>
                                      </div>
                                    </div>




                                    <div className="vspacer20" />
                                    <div className="row">
                                      <div className="col-12">
                                        <h4>ATM Address Details</h4>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component ux-readonly">
                                          <label className="field-active"><em>*</em>ATM Name</label>
                                          <input type="text" required defaultValue={atm.atmName} ref="atmName" disabled />
                                          <em className="field-message">{" "} </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component ux-readonly">
                                          <label className="field-active"><em>*</em>ATM Location</label>
                                          <input type="text" required defaultValue={atm.atmLocation} ref="atmLocation" disabled />
                                          <em className="field-message">{" "} </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component ux-readonly">
                                          <label className="label-top"><em>*</em>ATM State</label>
                                          <select required defaultValue={atm.atmState} ref="atmState" disabled>
                                            {states()}
                                          </select>
                                          <u></u>
                                          <em className="field-message">{" "} </em>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component ux-readonly">
                                          <label className="label-top"><em>*</em>ATM Country</label>
                                          <input type="text" required defaultValue={atm.atmCountry} ref="atmCountry" disabled />
                                          <u></u>
                                          <em className="field-message"> {" "}</em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component ux-readonly">
                                          <label className="field-active"><em>*</em>ATM Zip Code</label>
                                          <input type="text" required defaultValue={atm.atmPincode} ref="atmPincode" disabled />
                                          <em className="field-message">{" "} </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component ux-readonly">
                                          <label className="field-active"><em>*</em>POS Additional Merchant Address</label>
                                          <input type="text" required defaultValue={atm.atmName.concat(" ").concat(atm.atmLocation)} disabled />
                                          <em className="field-message">{" "} </em>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="vspacer20" />
                                    <div className="row">
                                      <div className="col-12">
                                        <h4>DUKPT Details</h4>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component ux-readonly">
                                          <label className="field-active">
                                            <em>*</em>DUKPT Session
                                                          Key
                                                        </label>
                                          <input
                                            type="text"
                                            required
                                            defaultValue={
                                              atm.sessionKey
                                            }
                                            ref="sessionKey"
                                            disabled
                                          />
                                          <em className="field-message">
                                            {" "}
                                          </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component ux-readonly">
                                          <label className="field-active">
                                            <em>*</em>Last DUKPT
                                                          Session Key
                                                        </label>
                                          <input
                                            type="text"
                                            required
                                            defaultValue={
                                              atm.lastEncTpk
                                            }
                                            ref="lastEncTpk"
                                            disabled
                                          />
                                          <em className="field-message">
                                            {" "}
                                          </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component ux-readonly">
                                          <label className="field-active">
                                            <em>*</em>Logical Unit No
                                                          (LUNO)
                                                        </label>
                                          <input
                                            type="text"
                                            required
                                            defaultValue={atm.luno}
                                            ref="luno"
                                            disabled
                                          />
                                          <em className="field-message">
                                            {" "}
                                          </em>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-6 col-md-6">
                                        <div className="ux-component ux-readonly">
                                          <label className="label-top">
                                            <em>*</em>DUKPT Key
                                                          Exchange Date
                                                        </label>
                                          <input
                                            className="datepicker2"
                                            type="text"
                                            placeholder="DD/MM/YYYY"
                                            defaultValue={new Date(atm.keyExchangeDt).toDateString()}

                                            ref="keyExchangeDt"
                                          // disabled
                                          />
                                          <a className="calendar disabled" />
                                          <em className="field-message">
                                            {" "}
                                          </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-6 col-md-6">
                                        <div className="ux-component ux-readonly">
                                          <label className="field-active">
                                            <em>*</em>DUKPT Key
                                                          Exchange Time
                                                        </label>
                                          <input
                                            type="text"
                                            required
                                            defaultValue={
                                              atm.keyExchangeTime
                                            }
                                            ref="keyExchangeTime"
                                            disabled
                                          />
                                          <em className="field-message">
                                            {" "}
                                          </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                        <div className="ux-component ux-readonly">
                                          <label className="field-active">
                                            <em>*</em>DUKPT Key
                                                          Exchange Duration in Min
                                                        </label>
                                          <input
                                            type="text"
                                            required
                                            defaultValue={
                                              atm.keyExchangeDurationInMin
                                            }
                                            ref="keyExchangeDurationInMin"
                                            disabled
                                          />
                                          <em className="field-message">
                                            {" "}
                                          </em>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="vspacer20" />
                                    <div className="row">
                                      <div className="col-12">
                                        <h4>TMK Details</h4>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component ux-readonly">
                                          <label className="field-active">
                                            <em>*</em>Terminal Master
                                                          Key (TMK)
                                                        </label>
                                          <input
                                            type="text"
                                            required
                                            defaultValue={atm.tmk}
                                            ref="tmk"
                                            disabled
                                          />
                                          <em className="field-message">
                                            {" "}
                                          </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component ux-readonly">
                                          <label className="field-active">
                                            <em>*</em>TMK Part-1
                                                        </label>
                                          <input
                                            type="text"
                                            required
                                            defaultValue={atm.tmkCom1}
                                            ref="tmkCom1"
                                            disabled
                                          />
                                          <em className="field-message">
                                            {" "}
                                          </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component ux-readonly">
                                          <label className="field-active">
                                            <em>*</em>TMK Part-2
                                                        </label>
                                          <input
                                            type="text"
                                            required
                                            defaultValue={atm.tmkCom1}
                                            ref="tmkCom2"
                                            disabled
                                          />
                                          <em className="field-message">
                                            {" "}
                                          </em>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component ux-readonly">
                                          <label className="field-active">
                                            <em>*</em>Last Tranaction
                                                          Number
                                                        </label>
                                          <input
                                            type="text"
                                            required
                                            defaultValue={
                                              atm.transactionCount
                                            }
                                            ref="transactionCount"
                                            disabled
                                          />
                                          <em className="field-message">
                                            {" "}
                                          </em>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="vspacer20" />
                                    <div class="row">
                                      <div class="col-12">
                                        <h4>Currency Details</h4>
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div class="ux-component ux-readonly">
                                          <label class="label-top"><em>*</em>Currency 1 Denom</label>
                                          <select defaultValue={atm.typeDenom1} ref="typeDenom1" disabled>
                                            {currencyVals()}
                                          </select>
                                          <u></u>
                                          <em class="field-message"> </em>
                                        </div>
                                      </div>
                                      <div class="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div class="ux-component ux-readonly">
                                          <label class="field-active"><em>*</em>Currency 1 Count</label>
                                          <input
                                            type="text"
                                            required
                                            defaultValue={atm.type1Count}
                                            ref="type1Count"
                                            disabled
                                          />
                                          <em class="field-message"> </em>
                                        </div>
                                      </div>
                                      <div class="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div class="ux-component ux-readonly">
                                          <label class="label-top"><em>*</em>Currency 2 Denom</label>
                                          <select defaultValue={atm.typeDenom2} ref="typeDenom2" disabled>
                                            {currencyVals()}
                                          </select>
                                          <u></u>
                                          <em class="field-message"> </em>
                                        </div>
                                      </div>
                                      <div class="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div class="ux-component ux-readonly">
                                          <label class="field-active"><em>*</em>Currency 2 Count</label>
                                          <input
                                            type="text"
                                            required
                                            defaultValue={atm.type2Count}
                                            ref="type2Count"
                                            disabled
                                          />
                                          <em class="field-message"> </em>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div class="ux-component ux-readonly">
                                          <label class="label-top"><em>*</em>Currency 3 Denom</label>
                                          <select defaultValue={atm.typeDenom3} ref="typeDenom3" disabled>
                                            {currencyVals()}
                                          </select>
                                          <u></u>
                                          <em class="field-message"> </em>
                                        </div>
                                      </div>
                                      <div class="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div class="ux-component ux-readonly">
                                          <label class="field-active"><em>*</em>Currency 3 Count</label>
                                          <input
                                            type="text"
                                            required
                                            defaultValue={atm.type3Count}
                                            ref="type3Count"
                                            disabled
                                          />
                                          <em class="field-message"> </em>
                                        </div>
                                      </div>
                                      <div class="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div class="ux-component ux-readonly">
                                          <label class="label-top"><em>*</em>Currency 4 Denom</label>
                                          <select defaultValue={atm.typeDenom4} ref="typeDenom4" disabled>
                                            {currencyVals()}
                                          </select>
                                          <u></u>
                                          <em class="field-message"> </em>
                                        </div>
                                      </div>
                                      <div class="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div class="ux-component ux-readonly">
                                          <label class="field-active"><em>*</em>Currency 4 Count</label>
                                          <input
                                            type="text"
                                            required
                                            defaultValue={atm.type4Count}
                                            ref="type4Count"
                                            disabled
                                          />
                                          <em class="field-message"> </em>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div class="ux-component ux-readonly">
                                          <label class="field-active"><em>*</em>Customization File Name</label>
                                          <input
                                            type="text"
                                            required
                                            defaultValue={
                                              atm.downloadFileName
                                            }
                                            ref="downloadFileName"
                                            disabled
                                          />
                                          <em class="field-message"> </em>
                                        </div>
                                      </div>
                                      <div class="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div class="ux-component ux-readonly">
                                          <label class="label-top"><em>*</em>Value Addition Service(VAS)</label>
                                          <select
                                            defaultValue={atm.vasYN}
                                            ref="vasYN"
                                            disabled
                                          >
                                            {yesno()}
                                          </select>
                                          <u></u>
                                          <em class="field-message"> </em>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="vspacer20" />
                                    <div className="row">
                                      <div className="col-12">
                                        <h4>Card Details</h4>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component ux-readonly">
                                          <label className="label-top">
                                            <em>*</em>Card Holder Authentication Capability
                                                              </label>
                                          <select
                                            defaultValue={
                                              atm.cardAuthCap
                                            }
                                            ref="cardAuthCap"
                                            disabled
                                          >
                                            {cardholderAuthCapability()}
                                          </select>
                                          <u />
                                          <em className="field-message">
                                            {" "}
                                          </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component ux-readonly">
                                          <label className="label-top">
                                            <em>*</em>Card Capture Capability
                                                              </label>
                                          <select
                                            defaultValue={
                                              atm.cardCaptureCap
                                            }
                                            ref="cardCaptureCap"
                                            disabled
                                          >
                                            {cardCaptureCapability()}
                                          </select>
                                          <u />
                                          <em className="field-message">
                                            {" "}
                                          </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component ux-readonly">
                                          <label className="label-top">
                                            <em>*</em>Terminal Operational Environment
                                                              </label>
                                          <select
                                            defaultValue={
                                              atm.terminalOpEnv
                                            }
                                            ref="terminalOpEnv"
                                            disabled
                                          >
                                            {terminalOperatingEnv()}
                                          </select>
                                          <u />
                                          <em className="field-message">
                                            {" "}
                                          </em>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component ux-readonly">
                                          <label className="label-top">
                                            <em>*</em>Card Holder Data
                                                              </label>
                                          <select
                                            defaultValue={
                                              atm.cardholderData
                                            }
                                            ref="cardholderData"
                                            disabled
                                          >
                                            {cardHolderData()}
                                          </select>
                                          <u />
                                          <em className="field-message">
                                            {" "}
                                          </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component ux-readonly">
                                          <label className="label-top">
                                            <em>*</em>Card Present
                                                              Data
                                                              </label>
                                          <select
                                            defaultValue={
                                              atm.cardPresentData
                                            }
                                            ref="cardPresentData"
                                            disabled
                                          >
                                            {cardPresentData()}
                                          </select>
                                          <u />
                                          <em className="field-message">
                                            {" "}
                                          </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component ux-readonly">
                                          <label className="label-top">
                                            <em>*</em>Card Data Input
                                                              Mode
                                                              </label>
                                          <select
                                            defaultValue={
                                              atm.cardInputMode
                                            }
                                            ref="cardInputMode"
                                            disabled
                                          >
                                            {cardDataInputMode()}
                                          </select>
                                          <u />
                                          <em className="field-message">
                                            {" "}
                                          </em>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component ux-readonly">
                                          <label className="label-top">
                                            <em>*</em>Card Holder
                                                              Authentication Mode
                                                              </label>
                                          <select
                                            defaultValue={
                                              atm.cardAuthMode
                                            }
                                            ref="cardAuthMode"
                                            disabled
                                          >
                                            {cardholderAuthMode()}
                                          </select>
                                          <u />
                                          <em className="field-message">
                                            {" "}
                                          </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component ux-readonly">
                                          <label className="label-top">
                                            <em>*</em>Card Holder
                                                              Authentication Entity
                                                              </label>
                                          <select
                                            defaultValue={
                                              atm.cardholderAuth
                                            }
                                            ref="cardholderAuth"
                                            disabled
                                          >
                                            {cardholderAuthEntity()}
                                          </select>
                                          <u />
                                          <em className="field-message">
                                            {" "}
                                          </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component ux-readonly">
                                          <label className="label-top">
                                            <em>*</em>Card Data Output
                                                              Capability
                                                              </label>
                                          <select
                                            defaultValue={
                                              atm.cardDataOutCap
                                            }
                                            ref="cardDataOutCap"
                                            disabled
                                          >
                                            {cardDataOutputCapability()}
                                          </select>
                                          <u />
                                          <em className="field-message">
                                            {" "}
                                          </em>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component ux-readonly">
                                          <label className="label-top">
                                            <em>*</em>Terminal Data
                                                              Output Capability
                                                              </label>
                                          <select
                                            defaultValue={
                                              atm.terminalOutCap
                                            }
                                            ref="terminalOutCap"
                                            disabled
                                          >
                                            {terminalDataOutputCapability()}
                                          </select>
                                          <u />
                                          <em className="field-message">
                                            {" "}
                                          </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component ux-readonly">
                                          <label className="label-top">
                                            <em>*</em>PIN Capture
                                                              Capability
                                                              </label>
                                          <select
                                            defaultValue={
                                              atm.pincaptureCap
                                            }
                                            ref="pincaptureCap"
                                            disabled
                                          >
                                            {pinCaptureCapability()}
                                          </select>
                                          <u />
                                          <em className="field-message">
                                            {" "}
                                          </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component ux-readonly">
                                          <label className="label-top">
                                            <em>*</em>Card Data Input
                                                              Capability
                                                              </label>
                                          <select
                                            defaultValue={
                                              atm.cardDataCap
                                            }
                                            ref="cardDataCap"
                                            disabled
                                          >
                                            {cardDataInputCapability()}
                                          </select>
                                          <u />
                                          <em className="field-message">
                                            {" "}
                                          </em>
                                        </div>
                                      </div>
                                    </div>

                                  </div>
                                  <div className="grid-footer mar20 pb-0 mt-4">
                                    <Link to={{ pathname: "/bankdash", state: { item: bank } }} className="button secondary ">Cancel</Link>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                          {/* .grid-container */}
                          <div className="vspacer50" />
                        </div>
                        {/* .in-mcontainer */}
                      </div>
                      {/* .main-content */}
                      {/*================================ Body code starts Ends ===================================*/}
                      {/* ***************************************************************************************** */}
                    </div>
                    {/* .right-col-container */}
                  </div>
                  {/*  .right-main-column */}
                  {/*============================== Right Main Column Ends ==========================================*/}
                  {/* *********************************************************************************************** */}
                </div>
                {/*  col-12 */}
              </div>
              {/* row */}
            </div>
            {/* .container-fluid  */}
          </div>
          {/* .in-main */}
        </main>
        {/* .main-container */}
        {/* ============================================== Main Page Content - End ===============================================*/}

      </div>
    );
  }
}
