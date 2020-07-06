import React, { Component } from "react";
import HeadNavFoot from "../HeadNavFoot";
import { Link, Redirect } from "react-router-dom";
import { startBank, stopBank } from "./BankCalls";

export default class BankDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      bank: props.location.state.bank,
      posted:false
      // bank: {
      //   tenantId: 11011,
      //   bankName: "SDCC",
      //   pvk: "41",
      //   zpkAtm: "297",
      //   vkAtm: "278",
      //   zpkPos: "02",
      //   cvkPos: "278",
      //   cbsInterfaceIp: "172.21.0.121",
      //   cbsInterfacePort: 9100,
      //   cbsInterfaceIp_1: "172.21.0.121",
      //   cbsInterfacePort_1: 9101,
      //   cbsInterfaceUrl: "http://10.10.2.48,omni",
      //   nfsIp: "172.21.3.110",
      //   nfsPort: 4970,
      //   posEcomIp: "192.168.171.20",
      //   posEcomPort: 9012,
      //   acqIp: "10.10.2.48",
      //   acqPort: 7001,
      //   hsmIp: "10.10.2.49",
      //   hsmPort: 7002,
      //   hwHsmIp: "10.100.62.223",
      //   hwHsmPort: 5501,
      //   atmNdcPort: 7000,
      //   atmD912Port: 7000,
      //   bdsTimeout: 1500,
      //   pinVerifyTimeout: 10000,
      //   acqId: 508731,
      //   desAlg: 1,
      //   bankStatus: 1,
      //   isDke: "N",
      //   isSafeNetHsm: "Y",
      //   zmkAtm: 279,
      //   zmkPos: 6,
      //   isOmniCbs: "Y",
      //   hsmUrl: "http://10.100.9.71:8084/api/receive-request",
      // },
    };
  }

  callStartBank = (tenant)=> {
    startBank(this.state.bank.tenantId).then(res=>{
      
      if(res.status===200){
        alert(res.data);
        this.setState({
          posted : true
        })  
      }
      else{
        alert("Error Occurred")
      }
    })
  }

  callStopBank =(tenant) =>{
    stopBank(this.state.bank.tenantId).then(res=>{
      if(res.status===200){
        alert(res.data);
        this.setState({
          posted: true
        })
      }
      else{
        alert("Error Occurred")
      }
      
    })
  }

  yesno = () =>{
    let items=[];
    items.push(<option value="Y">Yes</option>)
    items.push(<option value="N">No</option>)
    return items;
  }

  render() {
    const bank = this.state.bank;
    return (
      <div>
        <HeadNavFoot />
        {/* Your Code here */}


        
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
                              {bank.bankName} Bank
                            </li>
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
                                  <h2>{bank.bankName} Bank</h2>
                                </div>
                                <div className="col-sm-12 col-md-12">
                                </div>
                              </div>
                            </div>
                            {/* .dt-header */}
                          </div>
                          {/* <div className="grid-header1 text-left">
                          <div className="row">
                            <div class="col-12 col-lg-10 col-md-12">
                                <button class="button secondary" onclick=" location.href='#' ">Start Bank</button>
                              <button class="button secondary" onclick=" location.href='#' ">Stop Bank</button>
                            </div>
                            <div className="grid-header1 text-left">
                              <Link to={{pathname:"/editbank", state:{bank:bank}}} className="button float-right">Edit</Link>   
                            </div>
                          </div>
                          </div> */}
                          {/* <div class="vspacer10"></div> */}
                          <div class="grid-header1 text-left">
                              <div class="row">
                                <div class="col-12 col-lg-10 col-md-12">
                                  <button class="button secondary" onClick={()=>this.callStartBank(bank.tenantId)}>Start Bank</button>
                                  <button class="button secondary" onClick={()=>this.callStopBank(bank.tenantId)}>Stop Bank</button>
                                </div>
                                <div class="col-12 col-lg-2 col-md-12">
                                <Link to={{pathname:"/editbank", state:{bank:bank}}} className="button float-right">Edit</Link>   
                                </div>
                              </div>   
                            </div>
                          <div class="vspacer20"></div>
                          <div className="role-container">
                            <div className="role-content">
                              <div className="row">
                                <div className="col-12 col-xl-2 col-lg-3 col-md-4 col-sm-12 text-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={180} height={180} viewBox="0 0 244.535 261.998">
                                    <g id="Filled_outline" data-name="Filled outline" transform="translate(-4 -2)">
                                      <path id="Path_17824" data-name="Path 17824" d="M9,17H209.864V174.2H9Z" transform="translate(16.835 50.5)" fill="#ffd782" />
                                      <path id="Path_17825" data-name="Path 17825" d="M7,13H225.331V30.466H7Z" transform="translate(10.101 37.033)" fill="#195c85" />
                                      <path id="Path_17826" data-name="Path 17826" d="M240.8,46.666H5L122.9,3Z" transform="translate(3.368 3.367)" fill="#2d75bb" />
                                      <path id="Path_17827" data-name="Path 17827" d="M5,57H240.8V74.466H5Z" transform="translate(3.368 185.164)" fill="#195c85" />
                                      <path id="Path_17828" data-name="Path 17828" d="M7,53H225.331V70.466H7Z" transform="translate(10.101 171.698)" fill="#2d75bb" />
                                      <path id="Path_17829" data-name="Path 17829" d="M25,37H86.133v69.866H25Z" transform="translate(70.701 117.832)" fill="#d3843d" />
                                      <path id="Path_17830" data-name="Path 17830" d="M86.133,53.833H25L55.566,32Z" transform="translate(70.701 100.999)" fill="#195c85" />
                                      <path id="Path_17831" data-name="Path 17831" d="M21,17H38.466V174.2H21Z" transform="translate(57.234 50.5)" fill="#f9bb4b" />
                                      <path id="Path_17832" data-name="Path 17832" d="M39,17H56.466V174.2H39Z" transform="translate(117.833 50.5)" fill="#f9bb4b" />
                                      <path id="Path_17833" data-name="Path 17833" d="M42.1,41A13.1,13.1,0,0,1,55.2,54.1V93.4H29V54.1A13.1,13.1,0,0,1,42.1,41Z" transform="translate(84.167 131.299)" fill="#fcf05a" />
                                      <g id="Group_6100" data-name="Group 6100" transform="translate(43.301 84.966)">
                                        <path id="Path_17834" data-name="Path 17834" d="M29,21H55.2V51.566H29Z" transform="translate(40.866 -21)" fill="#f4f4e6" />
                                        <path id="Path_17835" data-name="Path 17835" d="M13,21H30.466V47.2H13Z" transform="translate(-13 -21)" fill="#f4f4e6" />
                                        <path id="Path_17836" data-name="Path 17836" d="M13,39H30.466V65.2H13Z" transform="translate(-13 39.599)" fill="#f4f4e6" />
                                        <path id="Path_17837" data-name="Path 17837" d="M13,31H30.466V48.466H13Z" transform="translate(-13 12.666)" fill="#f4f4e6" />
                                      </g>
                                      <path id="Path_17838" data-name="Path 17838" d="M12,48h8.733v8.733H12Z" transform="translate(26.934 154.865)" fill="#d3843d" />
                                      <path id="Path_17839" data-name="Path 17839" d="M16,48h8.733v8.733H16Z" transform="translate(40.401 154.865)" fill="#d3843d" />
                                      <path id="Path_17840" data-name="Path 17840" d="M47,21H64.466V47.2H47Z" transform="translate(144.766 63.966)" fill="#f4f4e6" />
                                      <path id="Path_17841" data-name="Path 17841" d="M47,39H64.466V65.2H47Z" transform="translate(144.766 124.565)" fill="#f4f4e6" />
                                      <path id="Path_17842" data-name="Path 17842" d="M47,31H64.466V48.466H47Z" transform="translate(144.766 97.632)" fill="#f4f4e6" />
                                      <path id="Path_17843" data-name="Path 17843" d="M46,48h8.733v8.733H46Z" transform="translate(141.4 154.865)" fill="#d3843d" />
                                      <path id="Path_17844" data-name="Path 17844" d="M50,48h8.733v8.733H50Z" transform="translate(154.866 154.865)" fill="#d3843d" />
                                      <path id="Path_17845" data-name="Path 17845" d="M12.735,220.331V237.8H4V264H248.532V237.8H239.8V220.331h-8.733V71.866H239.8V54.4h4.367a4.367,4.367,0,0,0,1.515-8.462L127.782,2.271a4.367,4.367,0,0,0-3.03,0L6.853,45.937A4.367,4.367,0,0,0,8.368,54.4h4.367V71.866h8.733V220.331Zm227.064,26.2v8.733H12.735v-8.733ZM126.267,11.022,219.8,45.667H32.73ZM21.468,54.4h209.6v8.733H21.468ZM222.332,71.866V220.331H178.666V71.866Zm-52.4,0V220.331H161.2V71.866Zm-43.666,96.066A17.466,17.466,0,0,0,108.8,185.4v34.933h-8.733V159.2h52.4v61.133h-8.733V185.4A17.466,17.466,0,0,0,126.267,167.932ZM135,185.4v34.933H117.534V185.4a8.733,8.733,0,1,1,17.466,0Zm-25.671-34.933,16.938-12.1,16.938,12.1ZM128.8,129.445a4.367,4.367,0,0,0-5.074,0l-23.663,16.9V71.866h52.4v74.481ZM91.334,71.866V220.331H82.6V71.866Zm-17.466,0V220.331H30.2V71.866Zm157.2,157.2V237.8H21.468v-8.733Z" transform="translate(0 0)" />
                                      <path id="Path_17846" data-name="Path 17846" d="M28,59.3H62.933V20H28Zm8.733-30.566H54.2V50.566H36.733Z" transform="translate(80.8 60.6)" />
                                      <path id="Path_17847" data-name="Path 17847" d="M38.2,20H12V54.933H38.2ZM29.466,46.2H20.733V28.733h8.733Z" transform="translate(26.934 60.6)" />
                                      <path id="Path_17848" data-name="Path 17848" d="M38.2,38H12V72.933H38.2ZM29.466,64.2H20.733V46.733h8.733Z" transform="translate(26.934 121.199)" />
                                      <path id="Path_17849" data-name="Path 17849" d="M38.2,30H12V56.2H38.2ZM29.466,47.466H20.733V38.733h8.733Z" transform="translate(26.934 94.266)" />
                                      <path id="Path_17850" data-name="Path 17850" d="M12,48h8.733v8.733H12Z" transform="translate(26.934 154.865)" />
                                      <path id="Path_17851" data-name="Path 17851" d="M16,48h8.733v8.733H16Z" transform="translate(40.401 154.865)" />
                                      <path id="Path_17852" data-name="Path 17852" d="M72.2,20H46V54.933H72.2ZM63.466,46.2H54.733V28.733h8.733Z" transform="translate(141.4 60.6)" />
                                      <path id="Path_17853" data-name="Path 17853" d="M72.2,38H46V72.933H72.2ZM63.466,64.2H54.733V46.733h8.733Z" transform="translate(141.4 121.199)" />
                                      <path id="Path_17854" data-name="Path 17854" d="M72.2,30H46V56.2H72.2ZM63.466,47.466H54.733V38.733h8.733Z" transform="translate(141.4 94.266)" />
                                      <path id="Path_17855" data-name="Path 17855" d="M46,48h8.733v8.733H46Z" transform="translate(141.4 154.865)" />
                                      <path id="Path_17856" data-name="Path 17856" d="M50,48h8.733v8.733H50Z" transform="translate(154.866 154.865)" />
                                    </g>
                                  </svg>
                                </div>
                                <div className="col-12 col-xl-10 col-lg-9 col-md-8 col-sm-12">
                                  <div className="row">
                                    <div className="col-6 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                      <h5><span>Bank Name</span></h5>
                                      <h5>{bank.bankName} Bank</h5>
                                    </div>
                                    {/* <div className="col-6 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                      <h5><span>Bank ID</span></h5>
                                      <h5>{bank.id}</h5>
                                    </div> */}
                                  </div>
                                  <div className="vspacer10" />
                                  <div className="row">
                                    <div className="col-6 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                      <h5><span>Acquirer ID</span></h5>
                                      <h5>{bank.acqId}</h5>
                                    </div>
                                    <div className="col-6 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                      <h5><span>Tenant ID</span></h5>
                                      <h5>{bank.tenantId}</h5>
                                    </div>
                                    {/* <div className="col-6 col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                      <h5><span>CBS Interface Machine IP</span></h5>
                                      <h5>{bank.cbsInterfaceIp}</h5>
                                    </div> */}
                                  </div>
                                  <div class="row">
                                      <div class="col-6 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                        <h5><span>CBS Interface Machine IP</span></h5>
                                        {/* <h5>192.139.1.11</h5> */}
                                        <h5>{bank.cbsInterfaceIp}</h5>
                                      </div>
                                      <div class="col-6 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                        <h5><span>CBS Interface Machine Port</span></h5>
                                        <h5>{bank.cbsInterfacePort}</h5>
                                      </div>
                                      
                                      <div class="col-6 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                        <h5><span>CBS Reversal Interface Machine IP</span></h5>
                                        <h5>{bank.cbsInterfaceIp_1}</h5>
                                      </div>
                                      
                                      <div class="col-6 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                        <h5><span>CBS Reversal Interface Machine Port</span></h5>
                                        <h5>{bank.cbsInterfacePort_1}</h5>
                                      </div>
                                    </div>
                                    
                                </div>
                              </div> 
                              <div className="vspacer20" />   
                              <div className="row">
                                <div className="col-12">
                                  <h4>General</h4>
                                </div>
                              </div>
                              <div className="row"> 
                                <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="field-active"><em>*</em>Acquire ID</label>
                                    <input type="text" required defaultValue={bank.acqId} disabled /> 
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                                <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="field-active"><em>*</em>Acquire IP</label>
                                    <input type="text" required defaultValue={bank.acqIp} disabled /> 
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                                <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="field-active"><em>*</em>Acquire Port</label>
                                    <input type="text" required defaultValue={bank.acqPort} disabled /> 
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                              </div>
                              <div className="row"> 
                                
                                <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="field-active"><em>*</em>ATM D912 Port</label>
                                    <input type="text" required defaultValue={bank.atmD912Port} disabled /> 
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                                <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="field-active"><em>*</em>ATM NDC Port</label>
                                    <input type="text" required defaultValue={bank.atmNdcPort} disabled /> 
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                                <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                  <div className="ux-component ux-readonly ux-disabled1">
                                    <label className="field-active"><em>*</em>Tenant ID</label>
                                    <input className="atm" type="text" required defaultValue={bank.tenantId} disabled /> 
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                              </div>
                              <div className="row"> 
                                
                                <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                  <div className="ux-component ux-readonly ux-disabled1">
                                    <label className="field-active"><em>*</em>Bank Name</label>
                                    <input className="atm" type="text" required defaultValue={bank.bankName} disabled /> 
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                                <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="field-active"><em>*</em>Bank Status</label>
                                    <input type="text" required defaultValue={bank.bankStatus} disabled /> 
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                              </div>
                              <div className="vspacer20" />
                              <div className="row">
                                <div className="col-12">
                                  <h4>CBS &amp; HSM Details</h4>
                                </div>
                              </div>
                              <div className="row"> 
                                <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="field-active"><em>*</em>CBS Interface Machine IP</label>
                                    <input type="text" required defaultValue={bank.cbsInterfaceIp} disabled /> 
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                                <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="field-active"><em>*</em>CBS Reversal Interface Machine IP</label>
                                    <input type="text" required defaultValue={bank.cbsInterfaceIp_1} disabled /> 
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                                <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="field-active"><em>*</em>CBS Interface Machine Port</label>
                                    <input type="text" required defaultValue={bank.cbsInterfacePort} disabled /> 
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                              </div>
                              <div className="row"> 
                                <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="field-active"><em>*</em>CBS Reversal Interface Machine Port</label>
                                    <input type="text" required defaultValue={bank.cbsInterfacePort_1} disabled /> 
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                                <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="field-active"><em>*</em>CBS Interface Machine URL</label>
                                    <input type="text" required defaultValue={bank.cbsInterfaceUrl} disabled /> 
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                                <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="field-active"><em>*</em>Card Verification Key(CVK) For ATM</label>
                                    <input type="text" required defaultValue={bank.cvkAtm} disabled /> 
                                    <em className="field-message"> </em>
                                  </div>
                              </div>
                              <div className="row"> 
                                </div>
                                <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="field-active"><em>*</em>Card Verification Key(CVK) For POS</label>
                                    <input type="text" required defaultValue={bank.cvkPos} disabled /> 
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                                <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="field-active"><em>*</em>Des Algorithm</label>
                                    <input type="text" required defaultValue={bank.desAlg} disabled /> 
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                                <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="field-active"><em>*</em>HSM Interface Application IP</label>
                                    <input type="text" required defaultValue={bank.hsmIp} disabled /> 
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                              </div>
                              <div className="row"> 

                                <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="field-active"><em>*</em>HSM Interface Application Port</label>
                                    <input type="text" required defaultValue={bank.hsmPort} disabled /> 
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                                <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="field-active"><em>*</em>HSM Interface H/W IP</label>
                                    <input type="text" required defaultValue={bank.hwHsmIp} disabled /> 
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                                <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="field-active"><em>*</em>HSM Interface H/W Port</label>
                                    <input type="text" required defaultValue={bank.hwHsmPort} disabled /> 
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                              </div>
                              <div className="row"> 
                                
                                <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="label-top"><em>*</em>HSM H/W is Safenet</label>
                                    <select defaultValue={bank.isSafeNetHsm} disabled>
                                      <option value="Y">Yes</option>
                                      <option value="N">No</option>
                                    </select>
                                    <u />
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                                <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="field-active"><em>*</em>ATM NPCI Connectivity IP</label>
                                    <input type="text" required defaultValue={bank.nfsIp} disabled /> 
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                                <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="field-active"><em>*</em>ATM NPCI Connectivity Port</label>
                                    <input type="text" required defaultValue={bank.nfsPort} disabled /> 
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                              </div>
                              <div className="row"> 
                                
                                <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="field-active"><em>*</em>PIN Verification Timeout in Sec</label>
                                    <input type="text" required defaultValue={bank.pinVerifyTimeout} disabled /> 
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                                <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="field-active"><em>*</em>POS NPCI Connectivity IP</label>
                                    <input type="text" required defaultValue={bank.posEcomIp} disabled /> 
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                                <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="field-active"><em>*</em>POS NPCI Connectivity Port</label>
                                    <input type="text" required defaultValue={bank.posEcomPort} disabled /> 
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                              </div>
                              <div className="row"> 
                                <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="field-active"><em>*</em>PIN Verification Key (PVK) for Issue Card</label>
                                    <input type="text" required defaultValue={bank.pvk} disabled /> 
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                              </div>
                              {/* <div className="row"> 
                                <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="field-active"><em>*</em>Request Que Name</label>
                                    <input type="text" required defaultValue="req-Que" disabled /> 
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                                <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="field-active"><em>*</em>Response Que Name</label>
                                    <input type="text" required defaultValue="resp-Que" disabled /> 
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                                <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="field-active"><em>*</em>Unsolisted Message Que Name</label>
                                    <input type="text" required defaultValue="resp-Que" disabled /> 
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                              </div> */}
                              <div className="vspacer20" />
                              <div className="row">
                                <div className="col-12">
                                  <h4>Zonal Details</h4>
                                </div>
                              </div>
                              <div className="row"> 
                                <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="field-active"><em>*</em>Zonal PIN Verification Key(ZPK) for ATM</label>
                                    <input type="text" required defaultValue={bank.zpkAtm} disabled /> 
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                                <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="field-active"><em>*</em>Zonal PIN Verification Key(ZPK) for POS</label>
                                    <input type="text" required defaultValue={bank.zpkPos} disabled /> 
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                                <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="label-top"><em>*</em>NPCI Dynamic Key Option</label>
                                    <select defaultValue={bank.isDke} disabled>
                                      {this.yesno()}
                                    </select>
                                    <u />
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                              </div>
                              <div className="row"> 
                                <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="field-active"><em>*</em>Zonal Master Key(ZMK) for ATM</label>
                                    <input type="text" required defaultValue={bank.zmkAtm} disabled /> 
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                                <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="field-active"><em>*</em>Zonal Master Key(ZMK) for POS</label>
                                    <input type="text" required defaultValue={bank.zmkPos} disabled /> 
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                                <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="label-top"><em>*</em>OMNI as CBS</label>
                                    <select defaultValue={bank.isOmniCbs} disabled>
                                      {this.yesno()}
                                    </select>
                                    <u />
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                              </div>
                              <div className="row"> 
                                <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="label-top"><em>*</em>NPCI Message Authentication Code(Mac Option)</label>
                                    <select defaultValue={bank.isMac} disabled>
                                      {this.yesno()}
                                    </select>
                                    <u />
                                    <em className="field-message"> </em>
                                  </div> 
                                </div>
                                <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="field-active"><em>*</em>Zonal Authentication Key(ZAK) for ATM</label>
                                    <input type="text" required defaultValue={bank.zakAtm} disabled /> 
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                                <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="field-active"><em>*</em>Zonal Authentication Key(ZAK) for POS</label>
                                    <input type="text" required defaultValue={bank.zakPos} disabled /> 
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                              </div>
                              <div className="row"> 
                                <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="field-active"><em>*</em>Zonal Authentication Key(ZAK)</label>
                                    <input type="text" required defaultValue={bank.zak} disabled /> 
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                                <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="label-top"><em>*</em>HSM URL</label>
                                    <input type="text" required defaultValue={bank.hsmUrl} disabled /> 
                                    <u />
                                    <em className="field-message"> </em>
                                  </div> 
                                </div>
                                <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="field-active"><em>*</em>SMS Vendor URL for OTP Message</label>
                                    <input type="text" required defaultValue={bank.smsUrl} disabled /> 
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                              </div>
                              {/* <div className="row"> 
                                <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="field-active"><em>*</em>SMS Vendor URL for OTP Message</label>
                                    <input type="text" required defaultValue="Need to check" disabled /> 
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                              </div> */}
                              <div className="grid-footer mar20 pb-0 mt-4">
                                {/* <button className="button float-right showbtn">Update</button> */}
                                {/* <button className="button secondary">Cancel</button> */}
                                <Link to={{pathname:"/bankdash", state:{item:bank}}} className="button secondary">Cancel</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* .grid-container */}
                        <div className="vspacer50" />
                        {/*============================ grid container ends ============================*/}
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
    
      {this.state.posted && <Redirect to={{pathname:"/bankdash", state:{item:bank}}} />}

      </div>
    );
  }
}
