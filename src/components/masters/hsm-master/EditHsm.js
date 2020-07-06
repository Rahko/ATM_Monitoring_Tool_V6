import React, { Component } from "react";
import HeadNavFoot from "../../HeadNavFoot";
import { yesno } from "./HSMConstants";
import { Link, Redirect } from "react-router-dom";
import { updateHsm } from "./HsmCalls";

export default class EditHsm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {},
      //isRequiredtenantId: false,
      //isRequiredtcpInterface : false,
      hsm: props.location.state.hsm,
      bankname : props.location.state.bankname,

      isRequiredsecurityModule: false,
      isRequiredisTxnMgr: false,
      isRequiredtxnTrack2ExpiryDateValidate: false,
      isRequiredupdateHotcardStatus: false,
      isRequiredacctProdLength: false,
      isRequiredacctObjType: false,
      isRequiredcheckLength: false,
      isRequireddoctypePinMailer: false,
      isRequiredmaxPinLength: false,
      isRequireddecimalizationTable: false,
      isRequiredpvkTcp: false,
      isRequiredcvkTcp: false,
      isRequiredzakAtm: false,
      isRequiredzakPos: false,
      isRequiredzakTcp: false,
      isRequiredzakPosTcp: false,
    };
    this.HandleChange = this.HandleChange.bind(this);
    this.submitLoginForm = this.submitLoginForm.bind(this);
  }

  HandleChange = async (e) => {
    const errorFlag = e.target.name;
    const check = e.target.value;

    //alert(errorFlag);

    //it is disabled
    // if (errorFlag ==="tenantId") {
    //     //alert(this.state.isRequired);
    //     if (!check) {
    //         this.setState({ isRequiredtenantId: true });

    //     } else {
    //         this.setState({ isRequiredtenantId: false, })
    //     }
    // }
    //tcp interface is to be set Yes by Default
    // if (errorFlag ==="tcpInterface") {
    //     //alert(this.state.isRequired);
    //     if (!check) {
    //         this.setState({ isRequiredtcpInterface: true });

    //     } else {
    //         this.setState({ isRequiredtcpInterface: false, })
    //     }
    // }

    if (errorFlag === "securityModule") {
      //alert(this.state.isRequired);
      if (!check) {
        this.setState({ isRequiredsecurityModule: true });
      } else {
        this.setState({ isRequiredsecurityModule: false });
      }
    }
    if (errorFlag === "isTxnMgr") {
      //alert(this.state.isRequired);
      if (!check) {
        this.setState({ isRequiredisTxnMgr: true });
      } else {
        this.setState({ isRequiredisTxnMgr: false });
      }
    }
    if (errorFlag === "txnTrack2ExpiryDateValidate") {
      //alert(this.state.isRequired);
      if (!check) {
        this.setState({ isRequiredtxnTrack2ExpiryDateValidate: true });
      } else {
        this.setState({ isRequiredtxnTrack2ExpiryDateValidate: false });
      }
    }
    if (errorFlag === "updateHotcardStatus") {
      //alert(this.state.isRequired);
      if (!check) {
        this.setState({ isRequiredupdateHotcardStatus: true });
      } else {
        this.setState({ isRequiredupdateHotcardStatus: false });
      }
    }
    if (errorFlag === "acctProdLength") {
      //alert(this.state.isRequired);
      if (!check) {
        this.setState({ isRequiredacctProdLength: true });
      } else {
        this.setState({ isRequiredacctProdLength: false });
      }
    }
    if (errorFlag === "acctObjType") {
      //alert(this.state.isRequired);
      if (!check) {
        this.setState({ isRequiredacctObjType: true });
      } else {
        this.setState({ isRequiredacctObjType: false });
      }
    }
    if (errorFlag === "checkLength") {
      //alert(this.state.isRequired);
      if (!check) {
        this.setState({ isRequiredcheckLength: true });
      } else {
        this.setState({ isRequiredcheckLength: false });
      }
    }
    if (errorFlag === "doctypePinMailer") {
      //alert(this.state.isRequired);
      if (!check) {
        this.setState({ isRequireddoctypePinMailer: true });
      } else {
        this.setState({ isRequireddoctypePinMailer: false });
      }
    }

    //pos additional merchant address
    if (errorFlag === "maxPinLength") {
      //alert(this.state.isRequired);
      if (!check) {
        this.setState({ isRequiredmaxPinLength: true });
      } else {
        this.setState({ isRequiredmaxPinLength: false });
      }
    }
    if (errorFlag === "decimalizationTable") {
      //alert(this.state.isRequired);
      if (!check) {
        this.setState({ isRequireddecimalizationTable: true });
      } else {
        this.setState({ isRequireddecimalizationTable: false });
      }
    }
    if (errorFlag === "pvkTcp") {
      //alert(this.state.isRequired);
      if (!check) {
        this.setState({ isRequiredpvkTcp: true });
      } else {
        this.setState({ isRequiredpvkTcp: false });
      }
    }
    if (errorFlag === "cvkTcp ") {
      //alert(this.state.isRequired);
      if (!check) {
        this.setState({ isRequiredcvkTcp: true });
      } else {
        this.setState({ isRequiredcvkTcp: false });
      }
    }
    if (errorFlag === "zakAtm") {
      //alert(this.state.isRequired);
      if (!check) {
        this.setState({ isRequiredzakAtm: true });
      } else {
        this.setState({ isRequiredzakAtm: false });
      }
    }

    if (errorFlag === "zakPos") {
      //alert(this.state.isRequired);
      if (!check) {
        this.setState({ isRequiredzakPos: true });
      } else {
        this.setState({ isRequiredzakPos: false });
      }
    }
    if (errorFlag === "zakTcp") {
      //alert(this.state.isRequired);
      if (!check) {
        this.setState({ isRequiredzakTcp: true });
      } else {
        this.setState({ isRequiredzakTcp: false });
      }
    }
    if (errorFlag === "zakPosTcp") {
      //alert(this.state.isRequired);
      if (!check) {
        this.setState({ isRequiredzakPosTcp: true });
      } else {
        this.setState({ isRequiredzakPosTcp: false });
      }
    } // Card Details
  };

  submitLoginForm(e) {
    e.preventDefault();

    if (
      !this.state.isRequiredsecurityModule &&
      !this.state.isRequiredisTxnMgr &&
      !this.state.isRequiredtxnTrack2ExpiryDateValidate &&
      !this.state.isRequiredupdateHotcardStatus &&
      !this.state.isRequiredacctProdLength &&
      !this.state.isRequiredacctObjType &&
      !this.state.isRequiredcheckLength &&
      !this.state.isRequireddoctypePinMailer &&
      !this.state.isRequiredmaxPinLength &&
      !this.state.isRequireddecimalizationTable &&
      !this.state.isRequiredpvkTcp &&
      !this.state.isRequiredcvkTcp &&
      !this.state.isRequiredzakAtm &&
      !this.state.isRequiredzakPos &&
      !this.state.isRequiredzakTcp &&
      !this.state.isRequiredzakPosTcp
    ) {
      console.log("Form submitted");
      this.processHsm(e);
    } else {
      alert("Kindly Fill the Required Fields");
    }

    //}
  }

  processHsm() {
    const json = {
      tenantId: this.refs.tenantId.value,
      tcpInterface: this.refs.tcpInterface.value,
      securityModule: this.refs.securityModule.value,
      isTxnMgr: this.refs.isTxnMgr.value,
      txnTrack2ExpiryDateValidate: this.refs.txnTrack2ExpiryDateValidate.value,
      updateHotcardStatus: this.refs.updateHotcardStatus.value,
      acctProdLength: this.refs.acctProdLength.value,
      acctObjType: this.refs.acctObjType.value,
      checkLength: this.refs.checkLength.value,
      doctypePinMailer: this.refs.doctypePinMailer.value,
      maxPinLength: this.refs.maxPinLength.value,
      decimalizationTable: this.refs.decimalizationTable.value,
      pvkTcp: this.refs.pvkTcp.value,
      cvkTcp: this.refs.cvkTcp.value,
      zakAtm: this.refs.zakAtm.value,
      zakPos: this.refs.zakPos.value,
      zakTcp: this.refs.zakTcp.value,
      zakPosTcp: this.refs.zakPosTcp.value,
      zpkTcp : this.refs.zpkTcp.value,
      zpkPosTcp : this.refs.zpkPosTcp.value
    };

    console.log("Data send to API::", json);
    updateHsm(json)
    .then(res=>{
      if(res.status===200){
        alert(res.data)
        this.setState({isPosted : true})
      }
      else{
        alert("Error Occurred.")
      }
    })
  }
  render() {
    const hsm = this.state.hsm;

    return (
      <div>
        {this.state.isPosted && <Redirect to="/hsmconfigs" />}
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
                                <a href="javascript:;">
                                  HSM Configuration Master
                                </a>
                              </li>
                              <li>Edit HSM Configuration</li>
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
                                    <h2>Edit HSM Configuration</h2>
                                  </div>
                                  <div className="col-sm-12 col-md-12"></div>
                                </div>
                              </div>
                              {/* .dt-header */}
                            </div>
                            <div className="role-container">
                              <div className="role-content">
                                <div className="row">
                                  <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                    <div className="ux-component ux-readonly ux-disabled">
                                      <label className="label-top">
                                        <em>*</em>Bank Name
                                      </label>
                                      <input type="text" required defaultValue={hsm.tenantId} id="tenantId" ref="tenantId" name="tenantId" onChange={this.HandleChange} disabled hidden />
                                      <input type="text" required defaultValue={this.state.bankname}  disabled />
                                      
                                      <em className="field-message"> </em>
                                    </div>
                                  </div>
                                  <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                    <div className="ux-component ux-readonly ux-disabled">
                                      <label className="label-top">
                                        <em>*</em>TCP Interface
                                      </label>
                                      <select defaultValue={hsm.tcpInterface} ref="tcpInterface" name="tcpInterface" id="tcpInterface" disabled >
                                        {yesno()}
                                      </select>
                                      <u />
                                      <em className="field-message"> </em>
                                    </div>
                                  </div>
                                  <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                    <div className="ux-component ux-edit">
                                      <label className="field-active">
                                        <em>*</em>Security Module
                                      </label>
                                      <input type="text" required defaultValue={hsm.securityModule} id="securityModule" ref="securityModule" name="securityModule" onChange={this.HandleChange} placeholder="Security Module" />
                                      <em className="field-message"> </em>
                                      {this.state.isRequiredsecurityModule ? (
                                        <div
                                          style={{
                                            color: "red",
                                            textAlign: "left",
                                            display: "block",
                                            fontSize: "0.8rem",
                                          }}
                                        >
                                          This Field is Required
                                        </div>
                                      ) : null}
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                    <div className="ux-component ux-edit">
                                      <label className="label-top">
                                        <em>*</em>Is Transaction Manager
                                      </label>
                                      <select defaultValue={hsm.isTxnMgr} ref="isTxnMgr" id="isTxnMgr" onChange={this.HandleChange} name="isTxnMgr" >
                                        {yesno()}
                                      </select>
                                      <u />
                                      <em className="field-message"> </em>
                                      {this.state.isRequiredisTxnMgr ? (
                                        <div
                                          style={{
                                            color: "red",
                                            textAlign: "left",
                                            display: "block",
                                            fontSize: "0.8rem",
                                          }}
                                        >
                                          This Field is Required
                                        </div>
                                      ) : null}
                                    </div>
                                  </div>
                                  <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                    <div className="ux-component ux-edit">
                                      <label className="label-top">
                                        <em>*</em>Transaction Track2 EXPDT Validate
                                      </label>
                                      <select ref="txnTrack2ExpiryDateValidate" defaultValue={hsm.txnTrack2ExpiryDateValidate} onChange={this.HandleChange} name="txnTrack2ExpiryDateValidate" id="txnTrack2ExpiryDateValidate" >
                                        {yesno()}
                                      </select>
                                      <u />
                                      <em className="field-message"> </em>
                                      {this.state
                                        .isRequiredtxnTrack2ExpiryDateValidate ? (
                                        <div
                                          style={{
                                            color: "red",
                                            textAlign: "left",
                                            display: "block",
                                            fontSize: "0.8rem",
                                          }}
                                        >
                                          This Field is Required
                                        </div>
                                      ) : null}
                                    </div>
                                  </div>
                                  <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                    <div className="ux-component ux-edit">
                                      <label className="label-top">
                                        <em>*</em>Update Hotcard Status
                                      </label>
                                      <select ref="updateHotcardStatus" defaultValue={hsm.updateHotcardStatus} id="updateHotcardStatus" onChange={this.HandleChange} name="updateHotcardStatus" >
                                        {yesno()}
                                      </select>
                                      <u />
                                      <em className="field-message"> </em>
                                      {this.state
                                        .isRequiredupdateHotcardStatus ? (
                                        <div
                                          style={{
                                            color: "red",
                                            textAlign: "left",
                                            display: "block",
                                            fontSize: "0.8rem",
                                          }}
                                        >
                                          This Field is Required
                                        </div>
                                      ) : null}
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                    <div className="ux-component ux-edit">
                                      <label className="field-active">
                                        <em>*</em>ACCT_PRD_LEN
                                      </label>
                                      <input type="text" ref="acctProdLength" id="acctProdLength" onChange={this.HandleChange} name="acctProdLength" required defaultValue={hsm.acctProdLength} />
                                      <em className="field-message"> </em>
                                      {this.state.isRequiredacctProdLength ? (
                                        <div
                                          style={{
                                            color: "red",
                                            textAlign: "left",
                                            display: "block",
                                            fontSize: "0.8rem",
                                          }}
                                        >
                                          This Field is Required
                                        </div>
                                      ) : null}
                                    </div>
                                  </div>
                                  <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                    <div className="ux-component ux-edit">
                                      <label className="field-active">
                                        <em>*</em>Account Object Type
                                      </label>
                                      <input type="text" ref="acctObjType" id="acctObjType" name="acctObjType" onChange={this.HandleChange} required defaultValue={hsm.acctObjType} />
                                      <em className="field-message"> </em>
                                      {this.state.isRequiredacctObjType ? (
                                        <div
                                          style={{
                                            color: "red",
                                            textAlign: "left",
                                            display: "block",
                                            fontSize: "0.8rem",
                                          }}
                                        >
                                          This Field is Required
                                        </div>
                                      ) : null}
                                    </div>
                                  </div>
                                  <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                    <div className="ux-component ux-edit">
                                      <label className="field-active">
                                        <em>*</em>Check Length
                                      </label>
                                      <input type="text" ref="checkLength" id="checkLength" onChange={this.HandleChange} name="checkLength" required defaultValue={hsm.checkLength} />
                                      <em className="field-message"> </em>
                                      {this.state.isRequiredcheckLength ? (
                                        <div
                                          style={{
                                            color: "red",
                                            textAlign: "left",
                                            display: "block",
                                            fontSize: "0.8rem",
                                          }}
                                        >
                                          This Field is Required
                                        </div>
                                      ) : null}
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                    <div className="ux-component ux-edit">
                                      <label className="field-active">
                                        <em>*</em>Doctype PIN Mailer
                                      </label>
                                      <input type="text" ref="doctypePinMailer" id="doctypePinMailer" onChange={this.HandleChange} name="doctypePinMailer" required defaultValue={hsm.doctypePinMailer} />
                                      <em className="field-message"> </em>
                                      {this.state.isRequireddoctypePinMailer ? (
                                        <div
                                          style={{
                                            color: "red",
                                            textAlign: "left",
                                            display: "block",
                                            fontSize: "0.8rem",
                                          }}
                                        >
                                          This Field is Required
                                        </div>
                                      ) : null}
                                    </div>
                                  </div>
                                  <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                    <div className="ux-component ux-edit">
                                      <label className="field-active">
                                        <em>*</em>Max PIN Length
                                      </label>
                                      <input type="text" ref="maxPinLength" id="maxPinLength" onChange={this.HandleChange} name="maxPinLength" required defaultValue={hsm.maxPinLength} />
                                      <em className="field-message"> </em>
                                      {this.state.isRequiredmaxPinLength ? (
                                        <div
                                          style={{
                                            color: "red",
                                            textAlign: "left",
                                            display: "block",
                                            fontSize: "0.8rem",
                                          }}
                                        >
                                          This Field is Required
                                        </div>
                                      ) : null}
                                    </div>
                                  </div>
                                  <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                    <div className="ux-component ux-edit">
                                      <label className="field-active">
                                        <em>*</em>Decimalization Table
                                      </label>
                                      <input type="text" ref="decimalizationTable" id="decimalizationTable" onChange={this.HandleChange} name="decimalizationTable" required defaultValue={hsm.decimalizationTable} />
                                      <em className="field-message"> </em>
                                      {this.state
                                        .isRequireddecimalizationTable ? (
                                        <div
                                          style={{
                                            color: "red",
                                            textAlign: "left",
                                            display: "block",
                                            fontSize: "0.8rem",
                                          }}
                                        >
                                          This Field is Required
                                        </div>
                                      ) : null}
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                    <div className="ux-component ux-edit">
                                      <label className="field-active">
                                        <em>*</em>PVK TCP
                                      </label>
                                      <input type="text" ref="pvkTcp" id="pvkTcp" name="pvkTcp" onChange={this.HandleChange} required defaultValue={hsm.pvkTcp} />
                                      <em className="field-message"> </em>
                                      {this.state.isRequiredpvkTcp ? (
                                        <div
                                          style={{
                                            color: "red",
                                            textAlign: "left",
                                            display: "block",
                                            fontSize: "0.8rem",
                                          }}
                                        >
                                          This Field is Required
                                        </div>
                                      ) : null}
                                    </div>
                                  </div>
                                  <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                    <div className="ux-component ux-edit">
                                      <label className="field-active">
                                        <em>*</em>CVK TCP
                                      </label>
                                      <input type="text" ref="cvkTcp" id="cvkTcp" name="cvkTcp" onChange={this.HandleChange} required defaultValue={hsm.cvkTcp} />
                                      <em className="field-message"> </em>
                                      {this.state.isRequiredcvkTcp ? (
                                        <div
                                          style={{
                                            color: "red",
                                            textAlign: "left",
                                            display: "block",
                                            fontSize: "0.8rem",
                                          }}
                                        >
                                          This Field is Required
                                        </div>
                                      ) : null}
                                    </div>
                                  </div>
                                  <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                    <div className="ux-component ux-edit">
                                      <label className="field-active">
                                        <em>*</em>ZAK ATM
                                      </label>
                                      <input type="text" ref="zakAtm" id="zakAtm" name="zakAtm" onChange={this.HandleChange} required defaultValue={hsm.zakAtm} />
                                      <em className="field-message"> </em>
                                      {this.state.isRequiredzakAtm ? (
                                        <div
                                          style={{
                                            color: "red",
                                            textAlign: "left",
                                            display: "block",
                                            fontSize: "0.8rem",
                                          }}
                                        >
                                          This Field is Required
                                        </div>
                                      ) : null}
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                    <div className="ux-component ux-edit">
                                      <label className="field-active">
                                        <em>*</em>ZAK POS
                                      </label>
                                      <input type="text" ref="zakPos" id="zakPos" name="zakPos" onChange={this.HandleChange} required defaultValue={hsm.zakPos} />
                                      <em className="field-message"> </em>
                                      {this.state.isRequiredzakPos ? (
                                        <div
                                          style={{
                                            color: "red",
                                            textAlign: "left",
                                            display: "block",
                                            fontSize: "0.8rem",
                                          }}
                                        >
                                          This Field is Required
                                        </div>
                                      ) : null}
                                    </div>
                                  </div>
                                  <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                    <div className="ux-component ux-edit">
                                      <label className="field-active">
                                        <em>*</em>ZPK TCP
                                      </label>
                                      <input type="text" ref="zpkTcp" id="zpkTcp" name="zpkTcp" onChange={this.HandleChange} required defaultValue={hsm.zpkTcp} />
                                      <em className="field-message"> </em>
                                      {this.state.isRequiredzakTcp ? (
                                        <div
                                          style={{
                                            color: "red",
                                            textAlign: "left",
                                            display: "block",
                                            fontSize: "0.8rem",
                                          }}
                                        >
                                          This Field is Required
                                        </div>
                                      ) : null}
                                    </div>
                                  </div>
                                  <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                    <div className="ux-component ux-edit">
                                      <label className="field-active">
                                        <em>*</em>ZPK POS TCP
                                      </label>
                                      <input type="text" ref="zpkPosTcp" id="zpkPosTcp" name="zpkPosTcp" onChange={this.HandleChange} required defaultValue={hsm.zpkPosTcp} />
                                      <em className="field-message"> </em>
                                      {this.state.isRequiredzakPosTcp ? (
                                        <div
                                          style={{
                                            color: "red",
                                            textAlign: "left",
                                            display: "block",
                                            fontSize: "0.8rem",
                                          }}
                                        >
                                          This Field is Required
                                        </div>
                                      ) : null}
                                    </div>
                                  </div>
                                </div>
                                <div className="grid-footer mar20 pb-0 mt-4">
                                  <button className="button float-right" onClick={this.submitLoginForm} > Update </button>
                                  <Link className="button secondary" to={{pathname:"/hsmdetails" , state:{hsm:hsm, bankname:this.state.bankname}}} > Cancel </Link>
                                  {/* <button
                                    className="button secondary float-left"
                                    onClick="window.location.href='hsm-configuration-master-list-delete-success.html'"
                                  >
                                    Delete
                                  </button> */}
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
    );
  }
}
