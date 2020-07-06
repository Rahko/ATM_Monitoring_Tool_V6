import React, { Component } from "react";
import { Link, Redirect } from 'react-router-dom';
import DatePicker from 'react-date-picker';
import HeadNavFoot from "../HeadNavFoot";
import './atm.css';
import {
  yesno,
  status,
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
import { addAtm } from "./AtmCalls";
import $ from 'jquery';

//import DatePicker from 'react-date-picker/dist/entry.nostyle'



export default class AddAtm extends Component {
  constructor(props) {
    super(props);
    //this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      bank: props.location.state.bank,

      data: "",
      navigate: false,
      // username: "",
      // password: "",
      fields: {},
      errors: {},
      keyDate: "",

      isPosted: false

    };
    this.handleChange = this.handleChange.bind(this);
    this.submitLoginForm = this.submitLoginForm.bind(this);

  }

  onChange1 = keyDate => this.setState({ keyDate })


  processAtm(e) {

    if (e) e.preventDefault();

    const newAtm = {
      //Atm Details
      atmId: this.refs.atmId.value,
      //atmStatus -- this.refs.tenantId.value, still thinking about this
      atmType: this.refs.atmType.value,
      tenantId: this.state.bank.tenantId,

      dipCard: this.refs.dipCard.value,
      dynamicKeyExchange: this.refs.dynamicKeyExchange.value,
      encTpk: this.refs.encTpk.value,
      isBNA: this.refs.isBNA.value,
      ip: this.refs.ip.value,
      isEMV: this.refs.isEMV.value,

      //Address Details
      atmName: this.refs.atmName.value,
      atmLocation: this.refs.atmLocation.value,
      atmState: this.refs.atmState.value,
      atmCountry: this.refs.atmCountry.value,
      atmPincode: this.refs.atmPincode.value,
      //pos additional merchant address

      //DUKPT Details
      sessionKey: this.refs.sessionKey.value,
      lastEncTpk: this.refs.lastEncTpk.value,
      luno: this.refs.luno.value,
      keyExchangeDt: this.state.keyDate,
      keyExchangeTime: this.refs.keyExchangeTime.value,
      keyExchangeDurationInMin: this.refs.keyExchangeDurationInMin.value,

      //TMK Details
      tmk: this.refs.tmk.value,
      tmkCom1: this.refs.tmkCom1.value,
      tmkCom2: this.refs.tmkCom2.value,

      // Currency Details
      typeDenom1: this.refs.typeDenom1.value,
      typeDenom2: this.refs.typeDenom2.value,
      typeDenom3: this.refs.typeDenom3.value,
      typeDenom4: this.refs.typeDenom4.value,

      type1Count: this.refs.type1Count.value,
      type2Count: this.refs.type2Count.value,
      type3Count: this.refs.type3Count.value,
      type4Count: this.refs.type4Count.value,

      vasYN: this.refs.vasYN.value,
      downloadFileName: this.refs.downloadFileName.value,



      // Card Details
      cardAuthCap: this.refs.cardAuthCap.value,
      cardCaptureCap: this.refs.cardCaptureCap.value,
      terminalOpEnv: this.refs.terminalOpEnv.value,

      cardholderData: this.refs.cardholderData.value,
      cardPresentData: this.refs.cardPresentData.value,
      cardInputMode: this.refs.cardInputMode.value,

      cardAuthMode: this.refs.cardAuthMode.value,
      cardholderAuth: this.refs.cardholderAuth.value,
      cardDataCap: this.refs.cardDataCap.value,

      terminalOutCap: this.refs.terminalOutCap.value,
      pincaptureCap: this.refs.pincaptureCap.value,
      cardDataOutCap: this.refs.cardDataOutCap.value,
      transactionCount: this.refs.transactionCount.value
    };

    console.log("data-->", newAtm);
    addAtm(newAtm).then(res => {

      if (res.status === 200) {
        alert(res.data);
        this.setState({
          data: newAtm,
          isPosted: true
        });
      }
      else {
        alert("Error Occurred.")
      }


    });

  }

  handleChange = (e) => {
    // console.log("date testing++")
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    // console.log("date testing++" + e.target.name + e.target.value)
    this.setState({
      fields
    });

  };

  submitLoginForm(e) {
    e.preventDefault();
    console.log("Submit login form_--" + this.validateForm());
    if (this.validateForm()) {

      let fields = this.state.fields; //!fields["tenantId"] && !fields["atmStatus"] && !fields["lastTxnNumber"]  && !fields["posAdditionalMerchantAddress"] && !fields["atmCountry"]

      if (!fields["atmId"] && !fields["encryptedTerminalPinKey"]
        && !fields["machineIp"] && !fields["atmName"] && !fields["atmLocation"]
        && !fields["atmZipCode"] 
        && !fields["atmType"] && !fields["atmDipCard"] && !fields["atmDynamicKeyEx"]
        && !fields["isATMBNA"] && !fields["isATMEMV"] && !fields["atmState"]
        && !fields["cardDataInCap"] && !fields["pinCap"]
        && !fields["termDataOpCap"] && !fields["cardDataOutputCap"] && !fields["cardHoldAuthEntry"]
        && !fields["cardHoldAuthMode"] && !fields["cardDataInputMode"] && !fields["cardPresentData"]
        && !fields["cardHolderPresentData"] && !fields["termOpEnv"] && !fields["cardCaptureCap"]
        && !fields["cardHolderAuthCap"] && !fields["vas"] && !fields["currency4Value_denom"]
        && !fields["currency3Value_denom"] && !fields["currency2Value_denom"] && !fields["currency1Value_denom"]
        && !fields["customizationFileName"] && !fields["currency4"] && !fields["currency3"]
        && !fields["currency2"] && !fields["currency1"]
        && !fields["tmkPart2"] && !fields["tmkPart1"] && !fields["tmk"]
        && !fields["dukptKeyExchangeDurationinMin"] && !fields["dukptKeyExchangeTime"] 
        //&& !fields["dukptKeyExchangeDate"]
        && !fields["luno"] && !fields["lastDukptSessionKey"] && !fields["dukptSessionKey"] && this.state.keyDate
      ) {

        fields["atmId"] = "";
        //fields["tenantId"] = "";
        fields["encryptedTerminalPinKey"] = "";
        fields["machineIp"] = "";
        fields["atmName"] = "";
        fields["atmLocation"] = "";
        fields["atmZipCode"] = "";
        //fields["posAdditionalMerchantAddress"] = "";
        //fields["atmStatus"] = "";
        fields["atmType"] = "";
        fields["atmDipCard"] = "";
        fields["atmDynamicKeyEx"] = "";
        fields["isATMBNA"] = "";
        fields["isATMEMV"] = "";
        fields["atmState"] = "";
        //fields["atmCountry"] = "";
        fields["cardDataInCap"] = "";
        fields["pinCap"] = "";
        fields["termDataOpCap"] = "";
        fields["cardDataOutputCap"] = "";
        fields["cardHoldAuthEntry"] = "";
        fields["cardHoldAuthMode"] = "";
        fields["cardDataInputMode"] = "";
        fields["cardPresentData"] = "";
        fields["cardHolderPresentData"] = "";
        fields["termOpEnv"] = "";
        fields["cardCaptureCap"] = "";
        fields["cardHolderAuthCap"] = "";
        fields["vas"] = "";
        fields["currency4Value_denom"] = "";
        fields["currency3Value_denom"] = "";
        fields["currency2Value_denom"] = "";
        fields["currency1Value_denom"] = "";
        fields["customizationFileName"] = "";
        fields["currency4"] = "";
        fields["currency3"] = "";
        fields["currency2"] = "";
        fields["currency1"] = "";
        // fields["lastTxnNumber"] = "";
        fields["tmkPart2"] = "";
        fields["tmkPart1"] = "";
        fields["tmk"] = "";
        fields["dukptKeyExchangeDurationinMin"] = "";
        fields["dukptKeyExchangeTime"] = "";
        fields["dukptKeyExchangeDate"] = "";
        fields["luno"] = "";
        fields["lastDukptSessionKey"] = "";
        fields["dukptSessionKey"] = "";
        fields["keyDate"] = "";
      }


      this.setState({ fields: fields });
      console.log("Form submitted");
      this.processAtm(e);
    }else{
      alert("Kindly Fill the Required Fields");
      }
  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //console.log("UserName:::"+fields.username);
    console.log("inside vlaidate form ::: atmId:::" + this.state.keyDate);


    if (!fields["atmId"]) {
      console.log(!fields["atmId"]);
      formIsValid = false;
      errors["atmId"] = "* 10 Characters are allowed.";
    }


    // if (!fields["tenantId"]) {
    //   console.log(!fields["tenantId"]);

    //   formIsValid = false;
    //   errors["tenantId"] = "This Field is Required.";
    // }

    if (!fields["encryptedTerminalPinKey"]) {
      console.log(!fields["encryptedTerminalPinKey"]);

      formIsValid = false;
      errors["encryptedTerminalPinKey"] = "This Field is Required.";
    }

// Example of VALID IP address

// 115.42.150.37
// 192.168.0.1
// 110.234.52.124
// Example of INVALID IP address

// 210.110 – must have 4 octets
// 255 – must have 4 octets
// y.y.y.y – only digits are allowed
// 255.0.0.y – only digits are allowed
// 666.10.10.20 – octet number must be between [0-255]
// 4444.11.11.11 – octet number must be between [0-255]
// 33.3333.33.3 – octet number must be between [0-255]

    if(typeof fields["machineIp"] !== "undefined"){

      if(!fields["machineIp"].match(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/)){
        console.log(!fields["machineIp"]);

        formIsValid = false;
        errors["machineIp"] = "IP is not valid.";
      }        
   }



    if (!fields["atmName"]) {
      console.log(!fields["atmName"]);

      formIsValid = false;
      errors["atmName"] = "*Only 20 Characters are Allowed.";
    }


    if (!fields["atmLocation"]) {
      console.log(!fields["atmLocation"]);

      formIsValid = false;
      errors["atmLocation"] = "*Only 15 Characters are Allowed.";
    }


   

    if(typeof fields["atmZipCode"] === "undefined"){

      //alert(!Number(fields["atmZipCode"]))
      fields["atmZipCode"] = "";

    if (!fields["atmZipCode"]) {
      console.log(!fields["atmZipCode"]);

      formIsValid = false;
      errors["atmZipCode"] = "Only 6 are digits are allowed.";
    }
     
    }else{
     if (!fields["atmZipCode"].match(/^[0-9]{1,6}$/)) {
       console.log(!fields["atmZipCode"]);

       formIsValid = false;
       errors["atmZipCode"] = "Only 6 are digits are allowed.";
     } 

    }


    // if (!fields["posAdditionalMerchantAddress"]) {
    //   console.log(!fields["posAdditionalMerchantAddress"]);

    //   formIsValid = false;
    //   errors["posAdditionalMerchantAddress"] = "This Field is Required.";
    // }


    // if (!fields["atmStatus"]) {
    //   console.log(!fields["atmStatus"]);

    //   formIsValid = false;
    //   errors["atmStatus"] = "This Field is Required.";
    // }


    if (!fields["atmType"]) {
      console.log(!fields["atmType"]);

      formIsValid = false;
      errors["atmType"] = "This Field is Required.";
    }


    if (!fields["atmDipCard"]) {
      console.log(!fields["atmDipCard"]);

      formIsValid = false;
      errors["atmDipCard"] = "This Field is Required.";
    }


    if (!fields["atmDynamicKeyEx"]) {
      console.log(!fields["atmDynamicKeyEx"]);

      formIsValid = false;
      errors["atmDynamicKeyEx"] = "This Field is Required.";
    }


    if (!fields["isATMBNA"]) {
      console.log(!fields["isATMBNA"]);

      formIsValid = false;
      errors["isATMBNA"] = "This Field is Required.";
    }




    if (!fields["isATMEMV"]) {

      console.log(!fields["isATMEMV"]);


      formIsValid = false;
      errors["isATMEMV"] = "This Field is Required.";
    }


    if (!fields["atmState"]) {
      console.log(!fields["atmState"]);

      formIsValid = false;
      errors["atmState"] = "This Field is Required.";
    }


    // if (!fields["atmCountry"]) {
    //   console.log(!fields["atmCountry"]);

    //   formIsValid = false;
    //   errors["atmCountry"] = "This Field is Required.";
    // }



    if (!fields["dukptSessionKey"]) {
      console.log(!fields["dukptSessionKey"]);

      formIsValid = false;
      errors["dukptSessionKey"] = "This Field is Required.";
    }


    if (!fields["lastDukptSessionKey"]) {
      console.log(!fields["lastDukptSessionKey"]);

      formIsValid = false;
      errors["lastDukptSessionKey"] = "This Field is Required.";
    }

    if(typeof fields["luno"] === "undefined"){

      fields["luno"] = " "
    if (!fields["luno"].match(/^[0-9]{1,4}$/)) {
      console.log(!fields["luno"]);

      formIsValid = false;
      errors["luno"] = "Only 4 digits are Allowed.";
    }
  }
  else{
    if (!fields["luno"].match(/^[0-9]{1,4}$/)) {
      console.log(!fields["luno"]);

      formIsValid = false;
      errors["luno"] = "Only 4 digits are Allowed.";
    }

  }


    // if (!fields["dukptKeyExchangeDate"]) {
    //   formIsValid = false;
    //   errors["dukptKeyExchangeDate"] = "This Field is Required.";
    // }


    if (this.state.keyDate == "") {
      console.log(this.state.keyDate);

      console.log("Inside if validateform for keyDate" + this.state.keyDate)
      formIsValid = false;
      errors["keyDate"] = "This Field is Required.";
    }



    // if (!fields["dukptKeyExchangeTime"]) {
    //   console.log(!fields["dukptKeyExchangeTime"]);

    //   formIsValid = false;
    //   errors["dukptKeyExchangeTime"] = "This Field is Required.";
    // }

    if(typeof fields["dukptKeyExchangeTime"] === "undefined"){

      fields["dukptKeyExchangeTime"] = " "
    if (!fields["dukptKeyExchangeTime"].match(/^[0-9]{1,4}$/)) {
      console.log(!fields["dukptKeyExchangeTime"]);

      formIsValid = false;
      errors["dukptKeyExchangeTime"] = "Only 4 digits are Allowed.";
    }
  }
  else{
    if (!fields["dukptKeyExchangeTime"].match(/^[0-9]{1,32}$/)) {
      console.log(!fields["dukptKeyExchangeTime"]);

      formIsValid = false;
      errors["dukptKeyExchangeTime"] = "This Field is Required.";
    }

  }

  if(typeof fields["dukptKeyExchangeDurationinMin"] === "undefined"){

    fields["dukptKeyExchangeDurationinMin"] = " "
  if (!fields["dukptKeyExchangeDurationinMin"].match(/^[0-9]{1,2}$/)) {
    console.log(!fields["dukptKeyExchangeDurationinMin"]);

    formIsValid = false;
    errors["dukptKeyExchangeDurationinMin"] = "Only 2 digits are Allowed.";
  }
}
else{
  if (!fields["dukptKeyExchangeDurationinMin"].match(/^[0-9]{1,2}$/)) {
    console.log(!fields["dukptKeyExchangeDurationinMin"]);

    formIsValid = false;
    errors["dukptKeyExchangeDurationinMin"] = "Only 2 digits are Allowed.";
  }

}


    // if (!fields["dukptKeyExchangeDurationinMin"]) {
    //   console.log(!fields["dukptKeyExchangeDurationinMin"]);

    //   formIsValid = false;
    //   errors["dukptKeyExchangeDurationinMin"] = "This Field is Required.";
    // }


    if (!fields["tmk"]) {
      console.log(!fields["tmk"]);

      formIsValid = false;
      errors["tmk"] = "This Field is Required.";
    }


    if (!fields["tmkPart1"]) {
      formIsValid = false;
      console.log(!fields["tmkPart1"]);

      errors["tmkPart1"] = "This Field is Required.";
    }


    if (!fields["tmkPart2"]) {
      console.log(!fields["tmkPart2"]);
      formIsValid = false;
      errors["tmkPart2"] = "This Field is Required.";
    }


    // if (!fields["lastTxnNumber"]) {
    //   console.log(!fields["lastTxnNumber"]);
    //   formIsValid = false;
    //   errors["lastTxnNumber"] = "This Field is Required.";
    // }


    // if (!fields["currency1"]) {
    //   console.log(!fields["currency1"]);
    //   formIsValid = false;
    //   errors["currency1"] = "This Field is Required.";
    // }

    
  if(typeof fields["currency1"] === "undefined"){

    fields["currency1"] = " "
  if (!fields["currency1"].match(/^[0-9]{1,4}$/)) {
    console.log(!fields["currency1"]);

    formIsValid = false;
    errors["currency1"] = "Only 4 digits are Allowed.";
  }
}
else{
  if (!fields["currency1"].match(/^[0-9]{1,4}$/)) {
    console.log(!fields["currency1"]);

    formIsValid = false;
    errors["currency1"] = "Only 4 digits are Allowed.";
  }

}

 
if(typeof fields["currency2"] === "undefined"){

  fields["currency2"] = " "
if (!fields["currency2"].match(/^[0-9]{1,4}$/)) {
  console.log(!fields["currency2"]);

  formIsValid = false;
  errors["currency2"] = "Only 4 digits are Allowed.";
}
}
else{
if (!fields["currency2"].match(/^[0-9]{1,4}$/)) {
  console.log(!fields["currency2"]);

  formIsValid = false;
  errors["currency2"] = "Only 4 digits are Allowed.";
}

}


if(typeof fields["currency3"] === "undefined"){

  fields["currency3"] = " "
if (!fields["currency3"].match(/^[0-9]{1,4}$/)) {
  console.log(!fields["currency3"]);

  formIsValid = false;
  errors["currency3"] = "Only 4 digits are Allowed.";
}
}
else{
if (!fields["currency3"].match(/^[0-9]{1,4}$/)) {
  console.log(!fields["currency3"]);

  formIsValid = false;
  errors["currency3"] = "Only 4 digits are Allowed.";
}

}



if(typeof fields["currency4"] === "undefined"){

  fields["currency4"] = " "
if (!fields["currency4"].match(/^[0-9]{1,4}$/)) {
  console.log(!fields["currency4"]);

  formIsValid = false;
  errors["currency4"] = "Only 4 digits are Allowed.";
}
}
else{
if (!fields["currency4"].match(/^[0-9]{1,4}$/)) {
  console.log(!fields["currency4"]);

  formIsValid = false;
  errors["currency4"] = "Only 4 digits are Allowed.";
}

}



    // if (!fields["currency2"]) {
    //   console.log(!fields["currency2"]);
    //   formIsValid = false;
    //   errors["currency2"] = "This Field is Required.";
    // }


    // if (!fields["currency3"]) {
    //   console.log(!fields["currency3"]);
    //   formIsValid = false;
    //   errors["currency3"] = "This Field is Required.";
    // }

    // if (!fields["currency4"]) {
    //   console.log(!fields["currency4"]);
    //   formIsValid = false;
    //   errors["currency4"] = "This Field is Required.";
    // }

    if (!fields["customizationFileName"]) {
      console.log(!fields["customizationFileName"]);
      formIsValid = false;
      errors["customizationFileName"] = "This Field is Required.";
    }

    if (!fields["currency1Value_denom"]) {
      console.log(!fields["currency1Value_denom"]);
      formIsValid = false;
      errors["currency1Value_denom"] = "This Field is Required.";
    }

    if (!fields["currency2Value_denom"]) {
      console.log(!fields["currency2Value_denom"]);
      formIsValid = false;
      errors["currency2Value_denom"] = "This Field is Required.";
    }

    if (!fields["currency3Value_denom"]) {
      console.log(!fields["currency3Value_denom"]);
      formIsValid = false;
      errors["currency3Value_denom"] = "This Field is Required.";
    }

    if (!fields["currency4Value_denom"]) {
      console.log(!fields["currency4Value_denom"]);
      formIsValid = false;
      errors["currency4Value_denom"] = "This Field is Required.";
    }

    if (!fields["vas"]) {
      console.log(!fields["vas"]);
      formIsValid = false;
      errors["vas"] = "This Field is Required.";
    }

    if (!fields["cardHolderAuthCap"]) {
      console.log(!fields["cardHolderAuthCap"]);
      formIsValid = false;
      errors["cardHolderAuthCap"] = "This Field is Required.";
    }

    if (!fields["cardCaptureCap"]) {
      console.log(!fields["cardCaptureCap"]);
      formIsValid = false;
      errors["cardCaptureCap"] = "This Field is Required.";
    }

    if (!fields["termOpEnv"]) {
      console.log(!fields["termOpEnv"]);
      formIsValid = false;
      errors["termOpEnv"] = "This Field is Required.";
    }

    if (!fields["cardHolderPresentData"]) {
      console.log(!fields["cardHolderPresentData"]);
      formIsValid = false;
      errors["cardHolderPresentData"] = "This Field is Required.";
    }

    if (!fields["cardPresentData"]) {
      console.log(!fields["cardPresentData"]);
      formIsValid = false;
      errors["cardPresentData"] = "This Field is Required.";
    }

    if (!fields["cardDataInputMode"]) {
      console.log(!fields["cardDataInputMode"]);
      formIsValid = false;
      errors["cardDataInputMode"] = "This Field is Required.";
    }

    if (!fields["cardHoldAuthMode"]) {
      console.log(!fields["cardHoldAuthMode"]);
      formIsValid = false;
      errors["cardHoldAuthMode"] = "This Field is Required.";
    }

    if (!fields["cardHoldAuthEntry"]) {
      console.log(!fields["cardHoldAuthEntry"]);
      formIsValid = false;
      errors["cardHoldAuthEntry"] = "This Field is Required.";
    }

    if (!fields["cardDataOutputCap"]) {
      console.log(!fields["cardDataOutputCap"]);
      formIsValid = false;
      errors["cardDataOutputCap"] = "This Field is Required.";
    }

    if (!fields["termDataOpCap"]) {
      console.log(!fields["termDataOpCap"]);
      formIsValid = false;
      errors["termDataOpCap"] = "This Field is Required.";
    }

    if (!fields["pinCap"]) {
      console.log(!fields["pinCap"]);
      formIsValid = false;
      errors["pinCap"] = "This Field is Required.";
    }

    if (!fields["cardDataInCap"]) {
      console.log(!fields["cardDataInCap"]);
      formIsValid = false;
      errors["cardDataInCap"] = "This Field is Required.";
    }



    console.log("inside ValidateForm MEthod()----" + formIsValid)


    this.setState({
      errors: errors
    });
    return formIsValid;


  }

  render() {
    // console.log("Bank : ", this.state.keyDate)
    const bank = this.state.bank
    return (
      <div>
        {this.state.isPosted && <Redirect to={{ pathname: "/bankdash", state: { item: bank } }} />}
        <HeadNavFoot />
        {
          // bank && 
          //<div>
          //</div>

        }

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
                                <Link to={{ pathname: "/bankdash", state: { item: bank } }}>{bank.bankName} Bank</Link>
                              </li>
                              <li>
                                {bank.bankName} Banks ATM List
                              </li>
                              <li>
                                Add ATM
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
                                    <h2>Add ATM</h2>
                                  </div>
                                  <div className="col-sm-12 col-md-12">
                                  </div>
                                </div>
                              </div>
                              {/* .dt-header */}
                            </div>
                            <div className="role-container">
                              <div className="role-content ">
                                <form action="#">
                                  <div className="row">
                                    <div className="col-12">
                                      <h4>ATM Details</h4>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component ux-edit">
                                        <label className="field-active"><em>*</em>ATM ID</label>
                                        <input type="text" ref="atmId" name="atmId" id="atmId"
                                          onKeyUp={this.handleChange}
                                          placeholder="ATM ID"
                                          maxLength="10"
                                          required />
                                        <em className="field-message"> </em>
                                      </div>
                                      <div
                                        style=
                                        {{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}

                                      >{this.state.errors.atmId}</div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component ux-edit">
                                        <label className="field-active"><em>*</em>ATM Status</label>
                                        <select ref="atmStatus"
                                          onChange={this.handleChange}
                                          name="atmStatus"
                                          id="atmStatus"
                                          disabled>
                                          {status()}
                                        </select>
                                        <u />
                                        <em className="field-message"> </em>
                                      </div>
                                      {/* <div
                                        style=
                                        {{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}

                                      >{this.state.errors.atmStatus}</div> */}
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component ux-edit">
                                        <label className="field-active"><em>*</em>ATM Type</label>
                                        <select ref="atmType"
                                          onChange={this.handleChange}
                                          name="atmType"
                                          id="atmType">
                                          {types()}
                                        </select>
                                        <u />
                                        <em className="field-message"> </em>
                                      </div>
                                      <div
                                        style=
                                        {{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}

                                      >{this.state.errors.atmType}</div>

                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component ux-edit">
                                        <label className="field-active"><em>*</em>ATM Tenant ID</label>
                                        <input type="text" ref="tenantId"
                                          name="tenantId"
                                          id="tenantId"
                                          //onKeyUp={this.handleChange}
                                          defaultValue={bank.tenantId}
                                          disabled
                                        />
                                        <em className="field-message"> </em>
                                      </div>
                                      {/* <div
                                        style=
                                        {{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}

                                      >{this.state.errors.tenantId}</div> */}
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component ux-edit">
                                        <label className="field-active"><em>*</em>ATM Dipcard Card Reader</label>
                                        <select ref="dipCard"
                                          onChange={this.handleChange}
                                          name="atmDipCard" id="atmDipCard">
                                          {yesno()}
                                        </select>
                                        <u />
                                        <em className="field-message"> </em>
                                      </div>
                                      <div
                                        style=
                                        {{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}

                                      >{this.state.errors.atmDipCard}</div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component ux-edit">
                                        <label className="field-active"><em>*</em>ATM Dyanamic Key Exchange</label>
                                        <select ref="dynamicKeyExchange" onChange={this.handleChange} name="atmDynamicKeyEx" id="atmDynamicKeyEx" >
                                          {yesno()}
                                        </select>
                                        <u />
                                        <em className="field-message"> </em>
                                      </div>
                                      <div
                                        style=
                                        {{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}

                                      >{this.state.errors.atmDynamicKeyEx}</div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component ux-edit">
                                        <label className="field-active"><em>*</em>Encrypted Terminal Pin Key</label>
                                        <input type="text" required ref="encTpk" onKeyUp={this.handleChange} name="encryptedTerminalPinKey" placeholder="Encrypted Terminal Pin Key" id="encryptedTerminalPinKey" maxLength="64" />
                                        <em className="field-message"> </em>
                                      </div>
                                      <div
                                        style=
                                        {{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}

                                      >{this.state.errors.encryptedTerminalPinKey}</div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component ux-edit">
                                        <label className="field-active"><em>*</em>ATM is BNA</label>
                                        <select ref="isBNA" onChange={this.handleChange} id="isATMBNA" name="isATMBNA">
                                          {yesno()}
                                        </select>
                                        <u />
                                        <em className="field-message"> </em>
                                      </div>
                                      <div
                                        style=
                                        {{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}

                                      >{this.state.errors.isATMBNA}</div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component ux-edit">
                                        <label className="field-active"><em>*</em>ATM Machine IP</label>
                                        <input type="text" required onKeyUp={this.handleChange} ref="ip" id="machineIp" placeholder="ATM Machine IP" name="machineIp" />
                                        <em className="field-message"> </em>
                                      </div>
                                      

                                      <div
                                      id="machineIp_validate_isRequired"
                                        style=
                                        {{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}

                                      >{this.state.errors.machineIp}</div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component ux-edit">
                                        <label className="field-active"><em>*</em>ATM is EMV Enable ?</label>
                                        <select ref="isEMV" onChange={this.handleChange} id="isATMEMV" name="isATMEMV" >
                                          <option value="">Select</option>
                                          <option value="true">Yes</option>
                                          <option value="false">No</option>
                                        </select>
                                        <u />
                                        <em className="field-message"> </em>
                                      </div>
                                      <div
                                        style=
                                        {{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}

                                      >{this.state.errors.isATMEMV}</div>
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
                                      <div className="ux-component ux-edit">
                                        <label className="field-active"><em>*</em>ATM Name</label>
                                        <input type="text" maxLength="20" required onKeyUp={this.handleChange} placeholder="ATM Name" ref="atmName" id="atmName" name="atmName" />
                                        <em className="field-message"> </em>
                                      </div>
                                      <div
                                        style=
                                        {{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}

                                      >{this.state.errors.atmName}</div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component ux-edit">
                                        <label className="field-active"><em>*</em>ATM Location</label>
                                        <input type="text" maxLength="15" required placeholder="ATM Location" onKeyUp={this.handleChange} ref="atmLocation" id="atmLocation" name="atmLocation" />
                                        <em className="field-message"> </em>
                                      </div>
                                      <div
                                        style=
                                        {{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}

                                      >{this.state.errors.atmLocation}</div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component ux-edit">
                                        <label className="field-active"><em>*</em>ATM State</label>
                                        <select ref="atmState" onChange={this.handleChange} id="atmState" name="atmState">
                                          {states()}
                                        </select>
                                        <u />
                                        <em className="field-message"> </em>
                                      </div>
                                      <div
                                        style=
                                        {{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}

                                      >{this.state.errors.atmState}</div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component ux-edit">
                                        <label className="field-active"><em>*</em>ATM Country</label>
                                        <input type="text" defaultValue="IN" ref="atmCountry" id="atmCountry" name="atmCountry" disabled />
                                        <u />
                                        <em className="field-message"> </em>
                                      </div>
                                      {/* <div
                                        style=
                                        {{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}

                                      >{this.state.errors.atmCountry}</div> */}
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component ux-edit">
                                        <label className="field-active"><em>*</em>ATM Zip Code</label>
                                        <input type="number" max="999999" required ref="atmPincode" placeholder="ATM Zip Code" onKeyUp={this.handleChange} id="atmZipCode" name="atmZipCode" />
                                        <em className="field-message"> </em>
                                      </div>
                                      <div
                                        style=
                                        {{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}

                                      >{this.state.errors.atmZipCode}</div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component ux-edit">
                                        <label className="field-active"><em>*</em>POS Additional Merchant Address</label>
                                        <input type="text" ref="posAdditionalMerchantAddress"
                                        placeholder="POS Additional Merchant Address"
                                          //onKeyUp={this.handleChange}
                                          id="posAdditionalMerchantAddress"
                                          name="posAdditionalMerchantAddress"
                                          disabled />
                                        <em className="field-message"> </em>
                                      </div>
                                      {/* <div
                                        style=
                                        {{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}

                                      >{this.state.errors.posAdditionalMerchantAddress}</div> */}
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
                                      <div className="ux-component ux-edit">
                                        <label className="field-active"><em>*</em>DUKPT Session Key</label>
                                        <input type="text" maxLength="64" placeholder="DUKPT Session Key" required ref="sessionKey" onKeyUp={this.handleChange} name="dukptSessionKey" id="dukptSessionKey" />
                                        <em className="field-message"> </em>
                                      </div>
                                      <div
                                        style=
                                        {{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}

                                      >{this.state.errors.dukptSessionKey}</div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component ux-edit">
                                        <label className="field-active"><em>*</em>Last DUKPT Session Key</label>
                                        <input type="text" maxLength="64"  required ref="lastEncTpk" placeholder="Last DUKPT Session Key" onKeyUp={this.handleChange} name="lastDukptSessionKey" id="lastDukptSessionKey" />
                                        <em className="field-message"> </em>
                                      </div>
                                      <div
                                        style=
                                        {{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}

                                      >{this.state.errors.lastDukptSessionKey}</div>
                                    </div>

                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component ux-edit">
                                        <label className="field-active"><em>*</em>Logical Unit No (LUNO)</label>
                                        <input type="number" placeholder="Logical Unit No (LUNO)" required ref="luno" onKeyUp={this.handleChange} id="luno" name="luno" />
                                        <em className="field-message"> </em>
                                      </div>
                                      <div
                                        style=
                                        {{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}

                                      >{this.state.errors.luno}</div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    {/* <div className="col-12 col-sm-12 col-xl-3 col-lg-6 col-md-6">
                                      <div className="ux-component ux-edit">
                                        <label className="field-active">DUKPT Key Exchange Date</label>
                                        <input className="datepicker1" type="text" placeholder="DD/MM/YYYY" onClickCapture={(e) => { this.handleChange(e) }} ref="dukptKeyExchangeDate" id="dukptKeyExchangeDate" name="dukptKeyExchangeDate" />
                                        <a className="calendar" />

                                        <em className="field-message"> </em>
                                      </div>

                                      <div
                                        style=
                                        {{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}

                                      >{this.state.errors.dukptKeyExchangeDate}</div>
                                    </div> */}
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-6 col-md-6">
                                      
                                      <label className="field-active">DUKPT Key Exchange Date</label>
                                      <div className="ux-component1"> 
                                      <DatePicker
                                        onChange={this.onChange1}
                                        value={this.state.keyDate}

                                        id="keyDate"
                                        name="keyDate"
                                        ref="keyExchangeDt"
                                        dateFormat="MMMM d, yyyy h:mm aa"
                                      />



                                      </div>
                                      <div
                                        style=
                                        {{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}

                                      >{this.state.errors.keyDate}</div>

                                    </div>

                                    <div class="col-12 col-sm-12 col-xl-3 col-lg-6 col-md-6">
                                      <div class="ux-component ux-edit">
                                        <label className="field-active"><em>*</em>DUKPT Key Exchange Time</label>
                                        <input type="number" placeholder="DUKPT Key Exchange Time" required ref="keyExchangeTime" onKeyUp={this.handleChange} name="dukptKeyExchangeTime" id="dukptKeyExchangeTime" />
                                        <em class="field-message"> </em>
                                      </div>
                                      <div
                                        style=
                                        {{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}

                                      >{this.state.errors.dukptKeyExchangeTime}</div>
                                    </div>



                                    <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                      <div className="ux-component ux-edit">
                                        <label className="field-active"><em>*</em>DUKPT Key Exchange Duration in Min</label>
                                        <input type="number" required placeholder="DUKPT Key Exchange Duration in Min"  ref="keyExchangeDurationInMin" onKeyUp={this.handleChange} name="dukptKeyExchangeDurationinMin" id="dukptKeyExchangeDurationinMin" />
                                        <em className="field-message"> </em>
                                      </div>
                                      <div
                                        style=
                                        {{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}

                                      >{this.state.errors.dukptKeyExchangeDurationinMin}</div>
                                    </div>

                                  </div>
                                  <div className="row">

                                  </div>
                                  <div className="vspacer20" />
                                  <div className="row">
                                    <div className="col-12">
                                      <h4>TMK Details</h4>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component ux-edit">
                                        <label className="field-active"><em>*</em>Terminal Master Key (TMK)</label>
                                        <input type="text" placeholder="Terminal Master Key (TMK)" required ref="tmk"  maxLength="64" onKeyUp={this.handleChange} id="tmk" name="tmk" />
                                        <em className="field-message"> </em>
                                      </div>
                                      <div
                                        style=
                                        {{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}

                                      >{this.state.errors.tmk}</div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component ux-edit">
                                        <label className="field-active"><em>*</em>TMK Part-1</label>
                                        <input type="text" placeholder="TMK Part-1" required ref="tmkCom1" maxLength="32" onKeyUp={this.handleChange} id="tmkPart1" name="tmkPart1" />
                                        <em className="field-message"> </em>
                                      </div>
                                      <div
                                        style=
                                        {{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}

                                      >{this.state.errors.tmkPart1}</div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component ux-edit">
                                        <label className="field-active"><em>*</em>TMK Part-2</label>
                                        <input type="text" placeholder="TMK Part-2" required ref="tmkCom2" maxLength="32" onKeyUp={this.handleChange} id="tmkPart2" name="tmkPart2" />
                                        <em className="field-message"> </em>
                                      </div>
                                      <div
                                        style=
                                        {{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}

                                      >{this.state.errors.tmkPart2}</div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component ux-edit">
                                        <label className="field-active"><em>*</em>Last Transaction Number</label>
                                        <input type="text" ref="transactionCount" maxLength="32" defaultValue={0} disabled onKeyUp={this.handleChange} id="transactionCount" name="transactionCount" />
                                        <em className="field-message"> </em>
                                      </div>
                                      {/* <div
                                        style=
                                        {{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}

                                      >{this.state.errors.lastTxnNumber}</div> */}
                                    </div>
                                  </div>
                                  <div className="vspacer20" />
                                  <div className="row">
                                    <div className="col-12">
                                      <h4>Currency Details</h4>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component">
                                        <label className="label-top"><em>*</em>Currency 1 Denom</label>
                                        <select  ref="typeDenom1" onChange={this.handleChange} id="currency1Value_denom" name="currency1Value_denom" >
                                          {currencyVals()}
                                        </select>
                                        <u />
                                        <em className="field-message"> </em>
                                      </div>
                                      <div
                                        style=
                                        {{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}

                                      >{this.state.errors.currency1Value_denom}</div>

                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component ux-edit">
                                        <label className="field-active"><em>*</em>Currency 1 Count</label>
                                       <input type="number" required ref="type1Count" onKeyUp={this.handleChange} placeholder="Currency 1 Count" id="currency1" name="currency1" />
                                        <em className="field-message"> </em>
                                      </div>
                                      <div
                                        style=
                                        {{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}

                                      >{this.state.errors.currency1}</div>
                                      
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component">
                                        <label className="label-top"><em>*</em>Currency 2 Denom</label>
                                        <select ref="typeDenom2" onChange={this.handleChange} id="currency2Value_denom" name="currency2Value_denom">
                                          {currencyVals()}
                                        </select>
                                        <u />
                                        <em className="field-message"> </em>
                                      </div>
                                      <div
                                        style=
                                        {{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}

                                      >{this.state.errors.currency2Value_denom}</div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component ux-edit">
                                        <label className="field-active"><em>*</em>Currency 2 Count</label>
                                        <input type="number" required  ref="type2Count" onKeyUp={this.handleChange} id="currency2" placeholder="Currency 2 Count" name="currency2" />
                                        <em className="field-message"> </em>
                                      </div>
                                      <div
                                        style=
                                        {{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}

                                      >{this.state.errors.currency2}</div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component">
                                        <label className="label-top"><em>*</em>Currency 3 Denom</label>
                                        <select ref="typeDenom3" onChange={this.handleChange} id="currency3Value_denom" name="currency3Value_denom" >
                                          {currencyVals()}
                                        </select>
                                        <u />
                                        <em className="field-message"> </em>
                                      </div>
                                      <div
                                        style=
                                        {{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}

                                      >{this.state.errors.currency3Value_denom}</div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component ux-edit">
                                        <label className="field-active"><em>*</em>Currency 3 Count</label>
                                        <input type="number" required  ref="type3Count" onKeyUp={this.handleChange} id="currency3" placeholder="Currency 3 Count" name="currency3" />
                                        <em className="field-message"> </em>
                                      </div>
                                      <div
                                        style=
                                        {{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}

                                      >{this.state.errors.currency3}</div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component">
                                        <label className="label-top"><em>*</em>Currency 4 Denom</label>
                                        <select ref="typeDenom4" onChange={this.handleChange} id="currency4Value_denom" name="currency4Value_denom">
                                          {currencyVals()}
                                        </select>
                                        <u />
                                        <em className="field-message"> </em>

                                      </div>
                                      <div
                                        style=
                                        {{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}

                                      >{this.state.errors.currency4Value_denom}</div>

                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component">
                                        <label className="field-active"><em>*</em>Currency 4 Count</label>
                                        <input type="number" required  ref="type4Count" onKeyUp={this.handleChange} id="currency4" placeholder="Currency 4 Count" name="currency4" />
                                        <em className="field-message"> </em>
                                      </div>
                                      <div
                                        style=
                                        {{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}

                                      >{this.state.errors.currency4}</div>

                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component">
                                        <label className="field-active"><em>*</em>Customization File Name</label>
                                        <input type="text" maxLength="50" required ref="downloadFileName" onKeyUp={this.handleChange} id="customizationFileName" placeholder="Customization File Name" name="customizationFileName" />
                                        <em className="field-message"> </em>
                                      </div>
                                      <div
                                        style=
                                        {{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}

                                      >{this.state.errors.customizationFileName}</div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component">
                                        <label className="field-active"><em>*</em>Value Addition Service(VAS)</label>
                                        <select ref="vasYN" id="vas" onChange={this.handleChange} name="vas">
                                          {yesno()}
                                        </select>
                                        <u />
                                        <em className="field-message"> </em>
                                        <div
                                        style=
                                        {{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}

                                      >{this.state.errors.vas}</div>
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
                                      <div className="ux-component ux-edit">
                                        <label className="field-active"><em>*</em>Card Holder Authentication Capability</label>
                                        <select ref="cardAuthCap" onChange={this.handleChange} id="cardHolderAuthCap" name="cardHolderAuthCap" >
                                          {cardholderAuthCapability()}
                                        </select>
                                        <u />
                                        <em className="field-message"> </em>
                                      </div>
                                      <div
                                        style=
                                        {{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}

                                      >{this.state.errors.cardHolderAuthCap}</div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component ux-edit">
                                        <label className="field-active"><em>*</em>Card Capture Capability</label>
                                        <select ref="cardCaptureCap" onChange={this.handleChange} id="cardCaptureCap" name="cardCaptureCap">
                                          {cardCaptureCapability()}
                                        </select>
                                        <u />
                                        <em className="field-message"> </em>
                                      </div>
                                      <div
                                        style=
                                        {{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}

                                      >{this.state.errors.cardCaptureCap}</div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component ux-edit">
                                        <label className="field-active"><em>*</em>Terminal Operational Environment</label>
                                        <select ref="terminalOpEnv" id="termOpEnv" onChange={this.handleChange} name="termOpEnv" >
                                          {terminalOperatingEnv()}
                                        </select>
                                        <u />
                                        <em className="field-message"> </em>
                                      </div>
                                      <div
                                        style=
                                        {{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}

                                      >{this.state.errors.termOpEnv}</div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component ux-edit">
                                        <label className="field-active"><em>*</em>Card Holder Data</label>
                                        <select ref="cardholderData" onChange={this.handleChange} id="cardHolderPresentData" name="cardHolderPresentData">
                                          {cardHolderData()}
                                        </select>
                                        <u />
                                        <em className="field-message"> </em>
                                      </div>
                                      <div
                                        style=
                                        {{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}

                                      >{this.state.errors.cardHolderPresentData}</div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component ux-edit">
                                        <label className="field-active"><em>*</em>Card Present Data</label>
                                        <select ref="cardPresentData" onChange={this.handleChange} id="cardPresentData" name="cardPresentData">
                                          {cardPresentData()}
                                        </select>
                                        <u />
                                        <em className="field-message"> </em>
                                      </div>
                                      <div
                                        style=
                                        {{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}

                                      >{this.state.errors.cardPresentData}</div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component ux-edit">
                                        <label className="field-active"><em>*</em>Card Data Input Mode</label>
                                        <select ref="cardInputMode" onChange={this.handleChange} id="cardDataInputMode" name="cardDataInputMode" >
                                          {cardDataInputMode()}
                                        </select>
                                        <u />
                                        <em className="field-message"> </em>
                                      </div>
                                      <div
                                        style=
                                        {{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}

                                      >{this.state.errors.cardDataInputMode}</div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component ux-edit">
                                        <label className="field-active"><em>*</em>Card Holder Authentication Method</label>
                                        <select ref="cardAuthMode" onChange={this.handleChange} id="cardHoldAuthMode" name="cardHoldAuthMode" >
                                          {cardholderAuthMode()}
                                        </select>
                                        <u />
                                        <em className="field-message"> </em>
                                      </div>
                                      <div
                                        style=
                                        {{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}

                                      >{this.state.errors.cardHoldAuthMode}</div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component ux-edit">
                                        <label className="field-active"><em>*</em>Card Holder Authentication Entity</label>
                                        <select ref="cardholderAuth" onChange={this.handleChange} id="cardHoldAuthEntry" name="cardHoldAuthEntry" >
                                          {cardholderAuthEntity()}
                                        </select>
                                        <u />
                                        <em className="field-message"> </em>
                                      </div>
                                      <div
                                        style=
                                        {{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}

                                      >{this.state.errors.cardHoldAuthEntry}</div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component ux-edit">
                                        <label className="field-active"><em>*</em>Card Data Output Capability</label>
                                        <select ref="cardDataOutCap" onChange={this.handleChange} id="cardDataOutputCap" name="cardDataOutputCap">
                                          {cardDataOutputCapability()}
                                        </select>
                                        <u />
                                        <em className="field-message"> </em>
                                      </div>
                                      <div
                                        style=
                                        {{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}

                                      >{this.state.errors.cardDataOutputCap}</div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component ux-edit">
                                        <label className="field-active"><em>*</em>Terminal Data Output Capability</label>
                                        <select ref="terminalOutCap" onChange={this.handleChange} id="termDataOpCap" name="termDataOpCap" >
                                          {terminalDataOutputCapability()}
                                        </select>
                                        <u />
                                        <em className="field-message"> </em>
                                      </div>
                                      <div
                                        style=
                                        {{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}

                                      >{this.state.errors.termDataOpCap}</div>

                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component ux-edit">
                                        <label className="field-active"><em>*</em>PIN Capture Capability</label>
                                        <select ref="pincaptureCap" onChange={this.handleChange} id="pinCap" name="pinCap" >
                                          {pinCaptureCapability()}
                                        </select>
                                        <u />
                                        <em className="field-message"> </em>
                                      </div>
                                      <div
                                        style=
                                        {{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}

                                      >{this.state.errors.pinCap}</div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component ux-edit">
                                        <label className="field-active"><em>*</em>Card Data Input Capability</label>
                                        <select ref="cardDataCap" onChange={this.handleChange} id="cardDataInCap" name="cardDataInCap" >
                                          {cardDataInputCapability()}
                                        </select>
                                        <u />
                                        <em className="field-message"> </em>
                                      </div>
                                      <div
                                        style=
                                        {{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}

                                      >{this.state.errors.cardDataInCap}</div>

                                    </div>
                                  </div>
                                  <div className="grid-footer mar20 pb-0 mt-4">
                                    <button className="button float-right" onClick={this.submitLoginForm} >Submit</button>
                                    <Link to={{ pathname: "/bankdash", state: { item: bank } }} className="button secondary" >Cancel</Link>
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
    )
  }
}
