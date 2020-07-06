import React, { Component } from 'react'
import HeadNavFoot from '../../HeadNavFoot'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { getBanks } from '../../../redux/actions/BankActions'
import {addHsm} from './HsmCalls'

class AddHsm extends Component {


  
  componentDidMount() {
    const token = sessionStorage.getItem("token")
    this.props.getBanks(token);

    const script = document.createElement("script");
    script.src = "js/hsm.js";
    script.async = true;
    document.body.appendChild(script);
  }

  constructor(props) {
    super(props)
    this.state = {
      isPosted: false,

      isRequiredtenantId: false,
      //isRequiredtcpInterface: false,
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
      isRequiredzpkTcp: false,
      isRequiredzpkPosTcp: false,


      isRequiredFlagtenantId: false,
     // isRequiredFlagtcpInterface: false,
      isRequiredFlagsecurityModule: false,
      isRequiredFlagisTxnMgr: false,
      isRequiredFlagtxnTrack2ExpiryDateValidate: false,
      isRequiredFlagupdateHotcardStatus: false,
      isRequiredFlagacctProdLength: false,
      isRequiredFlagacctObjType: false,
      isRequiredFlagcheckLength: false,
      isRequiredFlagdoctypePinMailer: false,
      isRequiredFlagmaxPinLength: false,
      isRequiredFlagdecimalizationTable: false,
      isRequiredFlagpvkTcp: false,
      isRequiredFlagcvkTcp: false,
      isRequiredFlagzakAtm: false,
      isRequiredFlagzakPos: false,
      isRequiredFlagzpkTcp: false,
      isRequiredFlagzpkPosTcp: false,


    }
    this.HandleChange = this.HandleChange.bind(this);
    this.submitLoginForm = this.submitLoginForm.bind(this);
  }


  

 
  HandleChange = async (e) => {
    const errorFlag = e.target.name;
    const check = e.target.value;

    console.log(errorFlag);


    if (errorFlag === "tenantId") {
      console.log("Handle CHnage isRequiredtenantId-->", this.state.isRequiredtenantId);
      console.log("Chekc value in isRequiredtenantId", check)
      if (check) {
        this.setState({ isRequiredtenantId: true });

      } else {
        this.setState({ isRequiredtenantId: false, })
      }
    }


    // if (errorFlag === "tcpInterface") {
    //   console.log("Handle CHnage isRequiredtcpInterface-->", this.state.isRequiredtcpInterface);
    //   console.log("Chekc value in isRequiredtcpInterface", check)
    //   if (check) {
    //     this.setState({ isRequiredtcpInterface: true });

    //   } else {
    //     this.setState({ isRequiredtcpInterface: false, })
    //   }
    // }


    if (errorFlag === "securityModule") {
      console.log("Handle CHnage isRequiredsecurityModule-->", this.state.isRequiredsecurityModule);
      console.log("Chekc value in isRequiredsecurityModule", check)
      if (check) {
        this.setState({ isRequiredsecurityModule: true });

      } else {
        this.setState({ isRequiredsecurityModule: false, })
      }
    }


    if (errorFlag === "isTxnMgr") {
      console.log("Handle CHnage isRequiredisTxnMgr-->", this.state.isRequiredisTxnMgr);
      console.log("Chekc value in isRequiredisTxnMgr", check)
      if (check) {
        this.setState({ isRequiredisTxnMgr: true });

      } else {
        this.setState({ isRequiredisTxnMgr: false, })
      }
    }

    if (errorFlag === "txnTrack2ExpiryDateValidate") {
      console.log("Handle CHnage isRequiredtxnTrack2ExpiryDateValidate-->", this.state.isRequiredtxnTrack2ExpiryDateValidate);
      console.log("Chekc value in isRequiredtxnTrack2ExpiryDateValidate", check)
      if (check) {
        this.setState({ isRequiredtxnTrack2ExpiryDateValidate: true });

      } else {
        this.setState({ isRequiredtxnTrack2ExpiryDateValidate: false, })
      }
    }

    if (errorFlag === "updateHotcardStatus") {
      console.log("Handle CHnage isRequiredupdateHotcardStatus-->", this.state.isRequiredupdateHotcardStatus);
      console.log("Chekc value in isRequiredupdateHotcardStatus", check)
      if (check) {
        this.setState({ isRequiredupdateHotcardStatus: true });

      } else {
        this.setState({ isRequiredupdateHotcardStatus: false, })
      }
    }

    if (errorFlag === "acctProdLength") {
      console.log("Handle CHnage isRequiredacctProdLength-->", this.state.isRequiredacctProdLength);
      console.log("Chekc value in isRequiredacctProdLength", check)
      if (check) {
        this.setState({ isRequiredacctProdLength: true });

      } else {
        this.setState({ isRequiredacctProdLength: false, })
      }
    }

    if (errorFlag === "acctObjType") {
      console.log("Handle CHnage isRequiredacctObjType-->", this.state.isRequiredacctObjType);
      console.log("Chekc value in isRequiredacctObjType", check)
      if (check) {
        this.setState({ isRequiredacctObjType: true });

      } else {
        this.setState({ isRequiredacctObjType: false, })
      }
    }


    if (errorFlag === "checkLength") {

     
      console.log("Handle CHnage isRequiredcheckLength-->", this.state.isRequiredcheckLength);
      console.log("Chekc value in isRequiredcheckLength", check)
      if (check) {
        this.setState({ isRequiredcheckLength: true });

      } else {
        this.setState({ isRequiredcheckLength: false, })
      }
    }


    if (errorFlag === "doctypePinMailer") {
      console.log("Handle CHnage isRequireddoctypePinMailer-->", this.state.isRequireddoctypePinMailer);
      console.log("Chekc value in isRequireddoctypePinMailer", check)
      if (check) {
        this.setState({ isRequireddoctypePinMailer: true });

      } else {
        this.setState({ isRequireddoctypePinMailer: false, })
      }
    }


    if (errorFlag === "maxPinLength") {
      
      console.log("Handle CHnage isRequiredmaxPinLength-->", this.state.isRequiredmaxPinLength);
      console.log("Chekc value in isRequiredmaxPinLength", check)

      
      if (check) {
        this.setState({ isRequiredmaxPinLength: true });

      } else {
        this.setState({ isRequiredmaxPinLength: false, })
      }
    }



    if (errorFlag === "decimalizationTable") {
      console.log("Handle CHnage isRequireddecimalizationTable-->", this.state.isRequireddecimalizationTable);
      console.log("Chekc value in isRequireddecimalizationTable", check)
      if (check) {
        this.setState({ isRequireddecimalizationTable: true });

      } else {
        this.setState({ isRequireddecimalizationTable: false, })
      }
    }



    if (errorFlag === "pvkTcp") {
      console.log("Handle CHnage isRequiredpvkTcp-->", this.state.isRequiredpvkTcp);
      console.log("Chekc value in isRequiredpvkTcp", check)
      if (check) {
        this.setState({ isRequiredpvkTcp: true });

      } else {
        this.setState({ isRequiredpvkTcp: false, })
      }
    }


    if (errorFlag === "cvkTcp") {
      console.log("Handle CHnage isRequiredcvkTcp-->", this.state.isRequiredcvkTcp);
      console.log("Chekc value in isRequiredcvkTcp", check)
      if (check) {
        this.setState({ isRequiredcvkTcp: true });

      } else {
        this.setState({ isRequiredcvkTcp: false, })
      }
    }



    if (errorFlag === "zakAtm") {
      console.log("Handle CHnage isRequiredzakAtm-->", this.state.isRequiredzakAtm);
      console.log("Chekc value in isRequiredzakAtm", check)
      if (check) {
        this.setState({ isRequiredzakAtm: true });

      } else {
        this.setState({ isRequiredzakAtm: false, })
      }
    }



    if (errorFlag === "zakPos") {
      console.log("Handle CHnage isRequiredzakPos-->", this.state.isRequiredzakPos);
      console.log("Chekc value in isRequiredzakPos", check)
      if (check) {
        this.setState({ isRequiredzakPos: true });

      } else {
        this.setState({ isRequiredzakPos: false, })
      }
    }



    if (errorFlag === "zpkTcp") {
      console.log("Handle CHnage isRequiredzpkTcp-->", this.state.isRequiredzpkTcp);
      console.log("Chekc value in isRequiredzpkTcp", check)
      if (check) {
        this.setState({ isRequiredzpkTcp: true });

      } else {
        this.setState({ isRequiredzpkTcp: false, })
      }
    }




    if (errorFlag === "zpkPosTcp") {
      console.log("Handle CHnage isRequiredzpkPosTcp-->", this.state.isRequiredzpkPosTcp);
      console.log("Chekc value in isRequiredzpkPosTcp", check)
      if (check) {
        this.setState({ isRequiredzpkPosTcp: true });

      } else {
        this.setState({ isRequiredzpkPosTcp: false, })
      }
    }




  }


  submitLoginForm(e) {

    e.preventDefault();

    let submitFlag = true;


    if (this.state.isRequiredtenantId === false) {
      submitFlag = false;
      this.setState({ isRequiredFlagtenantId: true })

    } else {
      submitFlag = true;
      this.setState({ isRequiredFlagtenantId: false })
    }

    // if (this.state.isRequiredtcpInterface === false) {
    //   submitFlag = false;
    //   this.setState({ isRequiredFlagtcpInterface: true })
    // } else {
    //   submitFlag = true;
    //   this.setState({ isRequiredFlagtcpInterface: false })
    // }

    if (this.state.isRequiredsecurityModule === false) {
      submitFlag = false;

      this.setState({ isRequiredFlagsecurityModule: true })
    } else {
      submitFlag = true;
      this.setState({ isRequiredFlagsecurityModule: false })

    }




    if (this.state.isRequiredisTxnMgr === false) {
      submitFlag = false;

      this.setState({ isRequiredFlagisTxnMgr: true })
    } else {
      submitFlag = true;
      this.setState({ isRequiredFlagisTxnMgr: false })

    }



    if (this.state.isRequiredtxnTrack2ExpiryDateValidate === false) {
      submitFlag = false;

      this.setState({ isRequiredFlagtxnTrack2ExpiryDateValidate: true })
    } else {
      submitFlag = true;
      this.setState({ isRequiredFlagtxnTrack2ExpiryDateValidate: false })

    }



    if (this.state.isRequiredupdateHotcardStatus === false) {
      submitFlag = false;

      this.setState({ isRequiredFlagupdateHotcardStatus: true })
    } else {
      submitFlag = true;
      this.setState({ isRequiredFlagupdateHotcardStatus: false })

    }




    if (this.state.isRequiredacctProdLength === false) {
      submitFlag = false;

      this.setState({ isRequiredFlagacctProdLength: true })
    } else {
      submitFlag = true;
      this.setState({ isRequiredFlagacctProdLength: false })

    }


    if (this.state.isRequiredacctObjType === false) {
      submitFlag = false;

      this.setState({ isRequiredFlagacctObjType: true })
    } else {
      submitFlag = true;
      this.setState({ isRequiredFlagacctObjType: false })

    }




    if (this.state.isRequiredcheckLength === false) {
      submitFlag = false;

      this.setState({ isRequiredFlagcheckLength: true })
    } else {
      submitFlag = true;
      this.setState({ isRequiredFlagcheckLength: false })

    }


    if (this.state.isRequireddoctypePinMailer === false) {
      submitFlag = false;

      this.setState({ isRequiredFlagdoctypePinMailer: true })
    } else {
      submitFlag = true;
      this.setState({ isRequiredFlagdoctypePinMailer: false })

    }

    if (this.state.isRequiredmaxPinLength === false) {
      submitFlag = false;

      this.setState({ isRequiredFlagmaxPinLength: true })
    } else {
      submitFlag = true;
      this.setState({ isRequiredFlagmaxPinLength: false })

    }

    if (this.state.isRequireddecimalizationTable === false) {
      submitFlag = false;

      this.setState({ isRequiredFlagdecimalizationTable: true })
    } else {
      submitFlag = true;
      this.setState({ isRequiredFlagdecimalizationTable: false })

    }

    if (this.state.isRequiredpvkTcp === false) {
      submitFlag = false;

      this.setState({ isRequiredFlagpvkTcp: true })
    } else {
      submitFlag = true;
      this.setState({ isRequiredFlagpvkTcp: false })

    }


    if (this.state.isRequiredcvkTcp === false) {
      submitFlag = false;

      this.setState({ isRequiredFlagcvkTcp: true })
    } else {
      submitFlag = true;
      this.setState({ isRequiredFlagcvkTcp: false })

    }


    if (this.state.isRequiredzakAtm === false) {
      submitFlag = false;

      this.setState({ isRequiredFlagzakAtm: true })
    } else {
      submitFlag = true;
      this.setState({ isRequiredFlagzakAtm: false })

    }

    if (this.state.isRequiredzakPos === false) {
      submitFlag = false;

      this.setState({ isRequiredFlagzakPos: true })
    } else {
      submitFlag = true;
      this.setState({ isRequiredFlagzakPos: false })

    }

    if (this.state.isRequiredzpkTcp === false) {
      submitFlag = false;

      this.setState({ isRequiredFlagzpkTcp: true })
    } else {
      submitFlag = true;
      this.setState({ isRequiredFlagzpkTcp: false })

    }


    if (this.state.isRequiredzpkPosTcp === false) {
      submitFlag = false;

      this.setState({ isRequiredFlagzpkPosTcp: true })
    } else {
      submitFlag = true;
      this.setState({ isRequiredFlagzpkPosTcp: false })

    }





    // alert(submitFlag)
    if (submitFlag) {
      // alert("Form Submitted")
      this.processHsm(e);
    } else {
      alert("Kindly fill all Required Fields")
    }


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
      zpkTcp: this.refs.zpkTcp.value,
      zpkPosTcp: this.refs.zpkPosTcp.value
    }
    console.log(json)
    addHsm(json)
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
    const tenants = this.props.banks.map((bank, i) => {
      return (
        <option value={bank.tenantId}>{bank.bankName}</option>
      )
    })

    if (this.props.banks.length !== 0) {
      return (
        <div>
          {this.state.isPosted && <Redirect to="/hsmconfigs" />}
          <HeadNavFoot />
          {/* ================================================= Main Page Content - Start ==============================================*/}
          <main className="main-container">
            <div className="in-main">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12 px-0">
                    {/*============================================= Right Main Column Starts ===================================================*/}
                    {/* ***************************************************************************************** */}
                    <div className="right-main-column">
                      <div className="right-col-container">
                        {/*================================================ Body code starts Here ====================================================*/}
                        <div className="main-content">
                          <div className="in-mcontainer">
                            {/*============================================== breadcrumb starts ==============================================*/}
                            <div className="breadcrumb">
                              <ul className="lst-breadcrumb">
                                <li>
                                  <a href="javascript:;">Masters</a>
                                </li>
                                <li>
                                  <a href="javascript:;">HSM Configuration Master</a>
                                </li>
                                <li>
                                  Add HSM Configuration
                                    </li>
                              </ul>
                              {/*.lst-breadcrumb*/}
                            </div>
                            {/* .breadcrumb */}
                            {/*============================================== breadcrumb ends ==============================================*/}
                            {/*========================================== grid container starts ==========================================*/}
                            <div className="grid-container">
                              {/*======================== Department Master Datattables list starts ========================*/}
                              <div className="grid-header">
                                <div className="dt-header">
                                  <div className="row">
                                    <div className="col-sm-12 col-md-12">
                                      <h2>Add HSM Configuration</h2>
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
                                      <div className="ux-component">
                                        <label className="label-top"><em>*</em>Bank Name</label>
                                        <select ref="tenantId" name="tenantId" id="tenantId" onChange={this.HandleChange}
                                          required>
                                          <option value="">Select</option>
                                          <option value={0}>Generic</option>
                                          {tenants}
                                        </select>
                                        <u />
                                        <em className="field-message"> </em>
                                      </div>
                                      {this.state.isRequiredFlagtenantId ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>This Field is Required</div> : null
                                      }
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component">
                                        <label className="label-top"><em>*</em>TCP Interface</label>
                                        <select ref="tcpInterface" disabled>
                                          <option value="">Select</option>
                                          <option value="Y" selected>Yes</option>
                                          <option value="N">No</option>
                                        </select>
                                        <u />
                                        <em className="field-message"> </em>
                                      </div>

                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component">
                                        <label><em>*</em>Security Module</label>
                                        <input type="text" ref="securityModule" name="securityModule" id="securityModule"  onChange={this.HandleChange}
                                           required />
                                        <em className="field-message"> </em>
                                      </div>
                                      {this.state.isRequiredFlagsecurityModule
                                       ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>*This Field is Required 
                                        
                                        </div>
                                         : null
                                      }
                                      {this.state.isRequiredFlagsecurityModule
                                       ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>Only 20 Characters are allowed. 
                                        
                                        </div>
                                         : null
                                      }
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component">
                                        <label className="label-top"><em>*</em>Is Transaction Manager</label>
                                        <select ref="isTxnMgr" id="isTxnMgr" name="isTxnMgr" onChange={this.HandleChange}
                                          required>
                                          <option value="">Select</option>
                                          <option value="Y">Yes</option>
                                          <option value="N">No</option>
                                        </select>
                                        <u />
                                        <em className="field-message"> </em>
                                      </div>
                                      {this.state.isRequiredFlagisTxnMgr
                                       ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>This Field is Required</div> : null
                                      }
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component">
                                        <label className="label-top"><em>*</em>Transaction Track2 EXPDT Validate</label>
                                        <select ref="txnTrack2ExpiryDateValidate" id="txnTrack2ExpiryDateValidate" name="txnTrack2ExpiryDateValidate" onChange={this.HandleChange}
                                          required >
                                          <option value="">Select</option>
                                          <option value="Y">Yes</option>
                                          <option value="N">No</option>
                                        </select>
                                        <u />
                                        <em className="field-message"> </em>
                                      </div>
                                      {this.state.isRequiredFlagtxnTrack2ExpiryDateValidate
                                       ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>This Field is Required</div> : null
                                      }
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component">
                                        <label className="label-top"><em>*</em>Update Hotcard Status</label>
                                        <select ref="updateHotcardStatus" id="updateHotcardStatus" name="updateHotcardStatus" onChange={this.HandleChange}
                                          required>
                                          <option value="">Select</option>
                                          <option value="Y">Yes</option>
                                          <option value="N">No</option>
                                        </select>
                                        <u />
                                        <em className="field-message"> </em>
                                      </div>
                                      {this.state.isRequiredFlagupdateHotcardStatus
                                       ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>This Field is Required</div> : null
                                      }
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component">
                                        <label><em>*</em>ACCT_PRD_LEN</label>
                                        <input type="number" ref="acctProdLength" id="acctProdLength" name="acctProdLength"   onChange={this.HandleChange}
                                         max = "99999999" required />
                                        <em className="field-message"> </em>
                                      </div>
                                      {this.state.isRequiredFlagacctProdLength
                                       ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>This Field is Required</div> : null
                                      }
                                      {this.state.isRequiredFlagacctProdLength
                                       ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>*Only 8 Characters are Allowed.</div> : null
                                      }
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component">
                                        <label><em>*</em>Account Object Type</label>
                                        <input type="number" ref="acctObjType" id="acctObjType" name="acctObjType"  onChange={this.HandleChange}
                                          max="99999999" required />
                                        <em className="field-message"> </em>
                                      </div>
                                      {this.state.isRequiredFlagacctObjType
                                       ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>This Field is Required</div> : null
                                      }
                                      {this.state.isRequiredFlagacctObjType
                                       ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>*Only 8 Characters are Allowed.</div> : null
                                      }

                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component">
                                        <label><em>*</em>Check Length</label>
                                        <input type="number"   ref="checkLength" id="checkLength" name="checkLength" onChange={this.HandleChange}
                                             min="1"
                                             max = "99" />
                                        <em className="field-message"> </em>
                                      </div>

                                      {
                                      this.state.isRequiredFlagcheckLength
                                       ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>This Field is Required</div> : null
                                      }
                                      {
                                      this.state.isRequiredFlagcheckLength
                                       ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>Only 2 Digit Numbers are Allowed</div> : null
                                      }
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component">
                                        <label><em>*</em>Doctype PIN Mailer</label>
                                        <input type="text" ref="doctypePinMailer" id="doctypePinMailer" name="doctypePinMailer"  onChange={this.HandleChange}
                                          maxLength="8" required />
                                        <em className="field-message"> </em>
                                      </div>
                                      {this.state.isRequiredFlagdoctypePinMailer
                                       ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>This Field is Required</div> : null
                                      }
                                      {this.state.isRequiredFlagdoctypePinMailer
                                       ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>20 Characters are Allowed.</div> : null
                                      }
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component">
                                        <label><em>*</em>Max PIN Length</label>
                                        <input type="number" ref="maxPinLength" id="maxPinLength" name="maxPinLength"  onChange={this.HandleChange}
                                         min="1"
                                         max = "99"
                                         required />
                                        <em className="field-message"> </em>
                                      </div>
                                      {this.state.isRequiredFlagmaxPinLength
                                       ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>This Field is Required</div> : null
                                      }
                                      {this.state.isRequiredFlagmaxPinLength
                                       ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>*Only 1 or 2 digits are allowed</div> : null
                                      }
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component">
                                        <label><em>*</em>Decimalization Table</label>
                                        <input type="text" ref="decimalizationTable" id="decimalizationTable" name="decimalizationTable"   onChange={this.HandleChange}
                                          maxLength="20" required />
                                        <em className="field-message"> </em>
                                      </div>
                                      {this.state.isRequiredFlagdecimalizationTable
                                       ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>This Field is Required</div> : null
                                      }
                                      {this.state.isRequiredFlagdecimalizationTable
                                       ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>20 Characters are allowed.</div> : null
                                      }
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component">
                                        <label><em>*</em>PVK TCP</label>
                                        <input type="number" ref="pvkTcp" name="pvkTcp" id="pvkTcp"   onChange={this.HandleChange}
                                          min="1"
                                          max = "99999999"
                                          required />
                                        <em className="field-message"> </em>
                                      </div>
                                      {this.state.isRequiredFlagpvkTcp
                                       ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>This Field is Required</div> : null
                                      }
                                      {this.state.isRequiredFlagpvkTcp
                                       ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>Only Numbers are Allowed</div> : null
                                      }
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component">
                                        <label><em>*</em>CVK TCP</label>
                                        <input type="number" ref="cvkTcp" id="cvkTcp" name="cvkTcp"   onChange={this.HandleChange}
                                          min="1"
                                          max = "99999999"

                                          required />
                                        <em className="field-message"> </em>
                                      </div>
                                      {this.state.isRequiredFlagcvkTcp
                                       ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>This Field is Required</div> : null
                                      }
                                      {this.state.isRequiredFlagcvkTcp
                                       ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>Only Numbers are Allowed</div> : null
                                      }
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component">
                                        <label><em>*</em>ZAK ATM</label>
                                        <input type="number" ref="zakAtm" id="zakAtm" name="zakAtm"   onChange={this.HandleChange}
                                          min="1"
                                          max = "99999999"

                                          required />
                                        <em className="field-message"> </em>
                                      </div>
                                      {this.state.isRequiredFlagzakAtm
                                       ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>This Field is Required</div> : null
                                      }
                                      {this.state.isRequiredFlagzakAtm
                                       ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>Only Numbers are Allowed</div> : null
                                      }
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component">
                                        <label><em>*</em>ZAK POS</label>
                                        <input type="number" ref="zakPos" id="zakPos" name="zakPos"   onChange={this.HandleChange}
                                          min="1"
                                          max = "99999999"
                                          required />
                                        <em className="field-message"> </em>
                                      </div>
                                      {this.state.isRequiredFlagzakPos
                                       ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>This Field is Required</div> : null
                                      }
                                      {this.state.isRequiredFlagzakPos
                                       ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>Only numbers are Allowed</div> : null
                                      }
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component">
                                        <label><em>*</em>ZPK TCP</label>
                                        <input type="number" ref="zpkTcp" name="zpkTcp" id="zpkTcp"  onChange={this.HandleChange}
                                          min="1"
                                          max = "99999999"

                                          required />
                                        <em className="field-message"> </em>
                                      </div>
                                      {this.state.isRequiredFlagzpkTcp
                                       ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>This Field is Required</div> : null
                                      }
                                      {this.state.isRequiredFlagzpkTcp
                                       ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>Only Numbers are Allowed</div> : null
                                      }
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component">
                                        <label><em>*</em>ZPK POS TCP</label>
                                        <input type="number" ref="zpkPosTcp" id="zpkPosTcp" name="zpkPosTcp"   onChange={this.HandleChange}
                                         min="1"
                                         max = "99999999"
                                         required />
                                        <em className="field-message"> </em>
                                      </div>
                                      {this.state.isRequiredFlagzpkPosTcp
                                       ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>This Field is Required</div> : null
                                      }
                                      {this.state.isRequiredFlagzpkPosTcp
                                       ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>Only numbers are Allowed</div> : null
                                      }

                                    </div>
                                  </div>
                                  <div className="grid-footer mar20 pb-0 mt-4">
                                    <button className="button float-right"  onClick={this.submitLoginForm} >Submit</button>
                                    <Link to="/banks" className="button secondary" >Cancel</Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* .grid-container */}
                          </div>
                          {/* .in-mcontainer */}
                        </div>
                        {/* .main-content */}
                        {/*================================================ Body code starts Ends ====================================================*/}
                        {/* ***************************************************************************************** */}
                      </div>
                      {/* .right-col-container */}
                    </div>
                    {/*  .right-main-column */}
                    {/*============================================= Right Main Column Ends ===============================================================*/}
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
          {/* ===================================================================== Main Page Content - End ======================================================================*/}
        </div>
      )
    }
    else {
      return (
        <div>
          <HeadNavFoot />
          <div className="center">
            <div className="loading_box">

            </div>
          </div>
        </div>
      )
    }
  }
}


const mapStateToProps = (state) => {
  return {
    banks: state.banks,
  };
};

export default connect(mapStateToProps, { getBanks })(AddHsm)
