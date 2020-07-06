import React, { Component } from 'react'
import HeadNavFoot from '../../HeadNavFoot'
import {yesno} from './HSMConstants'
import { Link } from 'react-router-dom'
export default class HsmConfigDetails extends Component {

  constructor(props){
    super(props)
    this.state={
      hsm : props.location.state.hsm,
      bankname : props.location.state.bankname
    }
  }
  

  getBankName = (tenantId) =>{
    var bankname = this.props.banks.map(function (bank, index) {
      if(tenantId === bank.tenantId ){
        return bank.bankName
      }
    })
    return bankname;
  }

  render() {
    console.log(this.props)
    const hsm = this.state.hsm;
    const bankName = this.state.bankname
    // var bankName = this.state.bankname.toString();
    // // console.log(bankName)
    // bankName = bankName.replace(",", "")
    return (
      <div>
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
                              <a href="javascript:;">Masters</a>
                            </li>
                            <li>
                              <a href="javascript:;">HSM Configuration Master</a>
                            </li>
                            <li>
                              View HSM Configuration 
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
                                  <h2>View HSM Configuration</h2>
                                </div>
                                <div className="col-sm-12 col-md-12">
                                </div>
                              </div>
                            </div>
                            {/* .dt-header */}
                          </div>
                          <div className="role-container">
                            <div className="role-content">
                              <div className="row"> 
                                <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="label-top"><em>*</em>Bank Name</label>
                                    {/* <select disabled>
                                      
                                    </select> */}
                                    {/* <u /> */}
                                    <input type="text" required defaultValue={bankName} disabled /> 
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                                <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="label-top"><em>*</em>TCP Interface</label>
                                    <select defaultValue={hsm.tcpInterface} disabled>
                                      {yesno()}
                                    </select>
                                    <u />
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                                <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="field-active"><em>*</em>Security Module</label>
                                    <input type="text" required defaultValue={hsm.securityModule} disabled /> 
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                              </div>
                              <div className="row"> 
                                <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="label-top"><em>*</em>Is Transaction Manager</label>
                                    <select defaultValue={hsm.isTxnMgr} disabled>
                                      {yesno()}
                                    </select>
                                    <u />
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                                <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="label-top"><em>*</em>Transaction Track2 EXPDT Validate</label>
                                    <select defaultValue={hsm.txnTrack2ExpiryDateValidate} disabled>
                                     {yesno()}
                                    </select>
                                    <u />
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                                <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="label-top"><em>*</em>Update Hotcard Status</label>
                                    <select defaultValue={hsm.updateHotcardStatus} disabled>
                                      {yesno()}
                                    </select>
                                    <u />
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                              </div>
                              <div className="row"> 
                                <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="field-active"><em>*</em>ACCT_PRD_LEN</label>
                                    <input type="text" required defaultValue={hsm.acctProdLength} disabled />  
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                                <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="field-active"><em>*</em>Account Object Type</label>
                                    <input type="text" required defaultValue={hsm.acctObjType} disabled /> 
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                                <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="field-active"><em>*</em>Check Length</label>
                                    <input type="text" required defaultValue={hsm.checkLength} disabled /> 
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                              </div>
                              <div className="row"> 
                                <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="field-active"><em>*</em>Doctype PIN Mailer</label>
                                    <input type="text" required defaultValue={hsm.doctypePinMailer} disabled /> 
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                                <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="field-active"><em>*</em>Max PIN Length</label>
                                    <input type="text" required defaultValue={hsm.maxPinLength} disabled /> 
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                                <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="field-active"><em>*</em>Decimalization Table</label>
                                    <input type="text" required defaultValue={hsm.decimalizationTable} disabled /> 
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                              </div>
                              <div className="row"> 
                                <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="field-active"><em>*</em>PVK TCP</label>
                                    <input type="text" required defaultValue={hsm.pvkTcp} disabled /> 
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                                <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="field-active"><em>*</em>CVK TCP</label>
                                    <input type="text" required defaultValue={hsm.cvkTcp} disabled /> 
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                                <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="field-active"><em>*</em>ZAK ATM</label>
                                    <input type="text" required defaultValue={hsm.zakAtm} disabled /> 
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                              </div>
                              <div className="row"> 
                                <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="field-active"><em>*</em>ZAK POS</label>
                                    <input type="text" required defaultValue={hsm.zakPos} disabled /> 
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                                <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="field-active"><em>*</em>ZPK TCP</label>
                                    <input type="text" required defaultValue={hsm.zpkTcp} disabled /> 
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                                <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                  <div className="ux-component ux-readonly">
                                    <label className="field-active"><em>*</em>ZPK POS TCP</label>
                                    <input type="text" required defaultValue={hsm.zpkPosTcp} disabled /> 
                                    <em className="field-message"> </em>
                                  </div>
                                </div>
                              </div>
                              <div className="grid-footer mar20 pb-0 mt-4">
                                <Link className="button float-right" to={{pathname:"/edithsm", state:{hsm:hsm, bankname:bankName}}}>Edit</Link>
                                <Link className="button secondary" to="/hsmconfigs">Cancel</Link>
                                {/* <button className="button secondary float-left" onClick="">Delete</button> */}
                              </div>
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
    )
  }
}
