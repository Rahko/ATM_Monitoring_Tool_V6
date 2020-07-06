import React, { Component } from 'react';
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
import { updateAtm } from './AtmCalls';

export default class EditAtm extends Component {



    constructor(props) {
        super(props);
        this.state = {
            bank: props.location.state.bank,
            atm: props.location.state.item,
            dataPosted: false,
            // bank: {
            //     bankName: "KDCC"
            // },
            // atm: {
            //     atmId: "101010",
            //     atmName: "ATM00#33",
            //     atmLocation: "Mumbai",
            //     atmStatus: "0",
            //     ip: "172.325.23.2"
            // },

            fields: {},
            errors: {},
            keyExchangeDt: "",
            isRequired: false,
            isRequiredatmStatus: false,
            isRequiredatmType: false,
            isRequiredtenantId: false,
            isRequireddipCard: false,
            isRequireddynamicKeyExchange: false,
            isRequiredencTpk: false,
            isRequiredisBNA: false,
            isRequiredip: false,
            isRequiredisEMV: false,

            //Address Details
            isRequiredatmName: false,
            isRequiredatmLocation: false,
            isRequiredatmState: false,
            isRequiredatmCountry: false,
            isRequiredatmPincode: false,
            //pos additional merchant address

            //DUKPT Details
            isRequiredsessionKey: false,
            isRequiredlastEncTpk: false,
            isRequiredluno: false,
            isRequiredkeyExchangeDt: false,
            isRequiredkeyExchangeTime: false,
            isRequiredkeyExchangeDurationInMin: false,

            //TMK Details
            isRequiredtmk: false,
            isRequiredtmkCom1: false,
            isRequiredtmkCom2: false,

            // Currency Details
            isRequiredtypeDenom1: false,
            isRequiredtypeDenom2: false,
            isRequiredtypeDenom3: false,
            isRequiredtypeDenom4: false,

            isRequiredtype1Count: false,
            isRequiredtype2Count: false,
            isRequiredtype3Count: false,
            isRequiredtype4Count: false,

            isRequiredvasYN: false,
            isRequireddownloadFileName: false,



            // Card Details
            isRequiredcardAuthCap: false,
            isRequiredcardCaptureCap: false,
            isRequiredterminalOpEnv: false,

            isRequiredcardholderData: false,
            isRequiredcardPresentData: false,
            isRequiredcardInputMode: false,

            isRequiredcardAuthMode: false,
            isRequiredcardholderAuth: false,
            isRequiredcardDataCap: false,

            isRequiredterminalOutCap: false,
            isRequiredpincaptureCap: false,
            isRequiredcardDataOutCap: false,
            isRequiredposAdditionalMerchantAddress: false,
            isRequiredtransactionCount: false,
            isRequiredcardholderAuthCap: false
        }
        this.HandleChange = this.HandleChange.bind(this);
        this.submitLoginForm = this.submitLoginForm.bind(this);
    }


    HandleChange = async (e) => {
        const errorFlag = e.target.name;
        const check = e.target.value;

        //alert(errorFlag);

        if (errorFlag == "atmId") {
            //alert(this.state.isRequired);
            if (!check) {
                this.setState({ isRequired: true });

            } else {
                this.setState({ isRequired: false, })
            }
        }
        if (errorFlag == "atmStatus") {
            //alert(this.state.isRequired);
            if (!check) {
                this.setState({ isRequiredatmStatus: true });

            } else {
                this.setState({ isRequiredatmStatus: false, })
            }
        }

        if (errorFlag == "atmType") {
            //alert(this.state.isRequired);
            if (!check) {
                this.setState({ isRequiredatmType: true });

            } else {
                this.setState({ isRequiredatmType: false, })
            }
        }
        if (errorFlag == "tenantId") {
            //alert(this.state.isRequired);
            if (!check) {
                this.setState({ isRequiredtenantId: true });

            } else {
                this.setState({ isRequiredtenantId: false, })
            }
        }
        if (errorFlag == "dipCard") {
            //alert(this.state.isRequired);
            if (!check) {
                this.setState({ isRequireddipCard: true });

            } else {
                this.setState({ isRequireddipCard: false, })
            }
        }
        if (errorFlag == "dynamicKeyExchange") {
            //alert(this.state.isRequired);
            if (!check) {
                this.setState({ isRequireddynamicKeyExchange: true });

            } else {
                this.setState({ isRequireddynamicKeyExchange: false, })
            }
        }
        if (errorFlag == "encTpk") {
            //alert(this.state.isRequired);
            if (!check) {
                this.setState({ isRequiredencTpk: true });

            } else {
                this.setState({ isRequiredencTpk: false, })
            }
        }
        if (errorFlag == "isBNA") {
            //alert(this.state.isRequired);
            if (!check) {
                this.setState({ isRequiredisBNA: true });

            } else {
                this.setState({ isRequiredisBNA: false, })
            }
        }
        if (errorFlag == "ip") {
            //alert(this.state.isRequired);
            if (!check.match(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/)) {
                this.setState({ isRequiredip: true });

            } else {
                this.setState({ isRequiredip: false, })
            }
        }
        if (errorFlag == "isEMV") {
            //alert(this.state.isRequired);
            if (!check) {
                this.setState({ isRequiredisEMV: true });

            } else {
                this.setState({ isRequiredisEMV: false, })
            }
        }

        //pos additional merchant address
        if (errorFlag == "atmName") {
            //alert(this.state.isRequired);
            if (!check) {
                this.setState({ isRequiredatmName: true });

            } else {
                this.setState({ isRequiredatmName: false, })
            }
        }
        if (errorFlag == "atmLocation") {
            //alert(this.state.isRequired);
            if (!check) {
                this.setState({ isRequiredatmLocation: true });

            } else {
                this.setState({ isRequiredatmLocation: false, })
            }
        }
        if (errorFlag == "atmState") {
            //alert(this.state.isRequired);
            if (!check) {
                this.setState({ isRequiredatmState: true });

            } else {
                this.setState({ isRequiredatmState: false, })
            }
        }
        if (errorFlag == "atmCountry") {
            //alert(this.state.isRequired);
            if (!check) {
                this.setState({ isRequiredatmCountry: true });

            } else {
                this.setState({ isRequiredatmCountry: false, })
            }
        }
        if (errorFlag == "atmPincode") {
            //alert(this.state.isRequired);
            if (!check.match(/^[0-9]{1,6}$/)) {
                this.setState({ isRequiredatmPincode: true });

            } else {
                this.setState({ isRequiredatmPincode: false, })
            }
        }

        if (errorFlag == "sessionKey") {
            //alert(this.state.isRequired);
            if (!check) {
                this.setState({ isRequiredsessionKey: true });

            } else {
                this.setState({ isRequiredsessionKey: false, })
            }
        }
        if (errorFlag == "lastEncTpk") {
            //alert(this.state.isRequired);
            if (!check) {
                this.setState({ isRequiredatmStatus: true });

            } else {
                this.setState({ isRequiredatmStatus: false, })
            }
        } if (errorFlag == "luno") {
            //alert(this.state.isRequired);
            if (!check) {
                this.setState({ isRequiredluno: true });

            } else {
                this.setState({ isRequiredluno: false, })
            }
        } if (errorFlag == "keyExchangeDt") {
            //alert(this.state.isRequired);
            if (!check) {
                this.setState({ isRequiredkeyExchangeDt: true });

            } else {
                this.setState({ isRequiredkeyExchangeDt: false, })
            }
        } if (errorFlag == "keyExchangeTime") {
            //alert(this.state.isRequired);
            if (!check.match(/^[0-9]{1,2}$/)) {
                this.setState({ isRequiredkeyExchangeTime: true });

            } else {
                this.setState({ isRequiredkeyExchangeTime: false, })
            }
        } if (errorFlag == "keyExchangeDurationInMin") {
            //alert(this.state.isRequired);
            if (!check.match(/^[0-9]{1,2}$/)) {
                this.setState({ isRequiredkeyExchangeDurationInMin: true });

            } else {
                this.setState({ isRequiredkeyExchangeDurationInMin: false, })
            }
        }


        if (errorFlag == "tmk") {
            //alert(this.state.isRequired);
            if (!check) {
                this.setState({ isRequiredtmk: true });

            } else {
                this.setState({ isRequiredtmk: false, })
            }
        } if (errorFlag == "tmkCom1") {
            //alert(this.state.isRequired);
            if (!check) {
                this.setState({ isRequiredtmkCom1: true });

            } else {
                this.setState({ isRequiredtmkCom1: false, })
            }
        } if (errorFlag == "tmkCom2") {
            //alert(this.state.isRequired);
            if (!check) {
                this.setState({ isRequiredtmkCom2: true });

            } else {
                this.setState({ isRequiredtmkCom2: false, })
            }
        } if (errorFlag == "typeDenom1") {
            //alert(this.state.isRequired);
            if (!check) {
                this.setState({ isRequiredtypeDenom1: true });

            } else {
                this.setState({ isRequiredtypeDenom1: false, })
            }
        } if (errorFlag == "typeDenom2") {
            //alert(this.state.isRequired);
            if (!check) {
                this.setState({ isRequiredtypeDenom2: true });

            } else {
                this.setState({ isRequiredtypeDenom2: false, })
            }
        } if (errorFlag == "typeDenom3") {
            //alert(this.state.isRequired);
            if (!check) {
                this.setState({ isRequiredtypeDenom3: true });

            } else {
                this.setState({ isRequiredtypeDenom3: false, })
            }
        } if (errorFlag == "typeDenom4") {
            //alert(this.state.isRequired);
            if (!check) {
                this.setState({ isRequiredtypeDenom4: true });

            } else {
                this.setState({ isRequiredtypeDenom4: false, })
            }
        } if (errorFlag == "type1Count") {
            //alert(this.state.isRequired);
            if (!check.match(/^[0-9]{1,4}$/)) {
                this.setState({ isRequiredtype1Count: true });

            } else {
                this.setState({ isRequiredtype1Count: false, })
            }
        } if (errorFlag == "type2Count") {
            //alert(this.state.isRequired);
            if (!check.match(/^[0-9]{1,4}$/)) {
                this.setState({ isRequiredtype2Count: true });

            } else {
                this.setState({ isRequiredtype2Count: false, })
            }
        } if (errorFlag == "type3Count") {
            //alert(this.state.isRequired);
            if (!check.match(/^[0-9]{1,4}$/)) {
                this.setState({ isRequiredtype3Count: true });

            } else {
                this.setState({ isRequiredtype3Count: false, })
            }
        } if (errorFlag == "type4Count") {
            //alert(this.state.isRequired);
            if (!check.match(/^[0-9]{1,4}$/)) {
                this.setState({ isRequiredtype4Count: true });

            } else {
                this.setState({ isRequiredtype4Count: false, })
            }
        } if (errorFlag == "vasYN") {
            //alert(this.state.isRequired);
            if (!check) {
                this.setState({ isRequiredvasYN: true });

            } else {
                this.setState({ isRequiredvasYN: false, })
            }
        } if (errorFlag == "downloadFileName") {
            //alert(this.state.isRequired);
            if (!check) {
                this.setState({ isRequireddownloadFileName: true });

            } else {
                this.setState({ isRequireddownloadFileName: false, })
            }
        }




        if (errorFlag == "cardAuthCap") {
            //alert(this.state.isRequired);
            if (!check) {
                this.setState({ isRequiredcardAuthCap: true });

            } else {
                this.setState({ isRequiredcardAuthCap: false, })
            }
        }

        if (errorFlag == "cardCaptureCap") {
            //alert(this.state.isRequired);
            if (!check) {
                this.setState({ isRequiredcardCaptureCap: true });

            } else {
                this.setState({ isRequiredcardCaptureCap: false, })
            }
        }
        if (errorFlag == "terminalOpEnv") {
            //alert(this.state.isRequired);
            if (!check) {
                this.setState({ isRequiredterminalOpEnv: true });

            } else {
                this.setState({ isRequiredterminalOpEnv: false, })
            }
        }
        if (errorFlag == "cardholderData") {
            //alert(this.state.isRequired);
            if (!check) {
                this.setState({ isRequiredcardholderData: true });

            } else {
                this.setState({ isRequiredcardholderData: false, })
            }
        }
        if (errorFlag == "cardPresentData") {
            //alert(this.state.isRequired);
            if (!check) {
                this.setState({ isRequiredcardPresentData: true });

            } else {
                this.setState({ isRequiredcardPresentData: false, })
            }
        }
        if (errorFlag == "cardInputMode") {
            //alert(this.state.isRequired);
            if (!check) {
                this.setState({ isRequiredcardInputMode: true });

            } else {
                this.setState({ isRequiredcardInputMode: false, })
            }
        }
        if (errorFlag == "cardAuthMode") {
            //alert(this.state.isRequired);
            if (!check) {
                this.setState({ isRequiredcardAuthMode: true });

            } else {
                this.setState({ isRequiredcardAuthMode: false, })
            }
        }
        if (errorFlag == "cardholderAuth") {
            //alert(this.state.isRequired);
            if (!check) {
                this.setState({ isRequiredcardholderAuth: true });

            } else {
                this.setState({ isRequiredcardholderAuth: false, })
            }
        }
        if (errorFlag == "cardDataCap") {
            //alert(this.state.isRequired);
            if (!check) {
                this.setState({ isRequiredcardDataCap: true });

            } else {
                this.setState({ isRequiredcardDataCap: false, })
            }
        }
        if (errorFlag == "terminalOutCap") {
            //alert(this.state.isRequired);
            if (!check) {
                this.setState({ isRequiredterminalOutCap: true });

            } else {
                this.setState({ isRequiredterminalOutCap: false, })
            }
        }
        if (errorFlag == "pincaptureCap") {
            //alert(this.state.isRequired);
            if (!check) {
                this.setState({ isRequiredpincaptureCap: true });

            } else {
                this.setState({ isRequiredpincaptureCap: false, })
            }
        }
        if (errorFlag == "cardDataOutCap") {
            //alert(this.state.isRequired);
            if (!check) {
                this.setState({ isRequiredcardDataOutCap: true });

            } else {
                this.setState({ isRequiredcardDataOutCap: false, })
            }
        }
        if (errorFlag == "isRequiredtransactionCount") {
            //alert(this.state.isRequired);
            if (!check) {
                this.setState({ transactionCount: true });

            } else {
                this.setState({ transactionCount: false, })
            }
        }
        if (errorFlag == "isRequiredposAdditionalMerchantAddress") {
            //alert(this.state.isRequired);
            if (!check) {
                this.setState({ posAdditionalMerchantAddress: true });

            } else {
                this.setState({ posAdditionalMerchantAddress: false, })
            }
        }
        if (errorFlag == "isRequiredcardholderAuthCap") {
            //alert(this.state.isRequired);
            if (!check) {
                this.setState({ cardholderAuthCap: true });

            } else {
                this.setState({ cardholderAuthCap: false, })
            }
        }








        // Card Details


    }



    onChange1 = keyExchangeDt => this.setState({ keyExchangeDt })

    submitLoginForm(e) {
        e.preventDefault();


        if (!this.state.isRequired &&
            !this.state.isRequiredatmStatus &&
            !this.state.isRequiredatmType &&
            !this.state.isRequiredtenantId &&
            !this.state.isRequireddipCard &&
            !this.state.isRequireddynamicKeyExchange &&
            !this.state.isRequiredencTpk &&
            !this.state.isRequiredisBNA &&
            !this.state.isRequiredip &&
            !this.state.isRequiredisEMV &&
            !this.state.isRequiredatmName &&
            !this.state.isRequiredatmLocation &&
            !this.state.isRequiredatmState &&
            !this.state.isRequiredatmCountry &&
            !this.state.isRequiredatmPincode &&
            !this.state.isRequiredsessionKey &&
            !this.state.isRequiredlastEncTpk &&
            !this.state.isRequiredluno &&
            !this.state.isRequiredkeyExchangeDt &&
            !this.state.isRequiredkeyExchangeTime &&
            !this.state.isRequiredkeyExchangeDurationInMin &&
            !this.state.isRequiredtmk &&
            !this.state.isRequiredtmkCom1 &&
            !this.state.isRequiredtmkCom2 &&
            !this.state.isRequiredtypeDenom1 &&
            !this.state.isRequiredtypeDenom2 &&
            !this.state.isRequiredtypeDenom3 &&
            !this.state.isRequiredtypeDenom4 &&
            !this.state.isRequiredtype1Count &&
            !this.state.isRequiredtype2Count &&
            !this.state.isRequiredtype3Count &&
            !this.state.isRequiredtype4Count &&

            !this.state.isRequiredvasYN &&
            !this.state.isRequireddownloadFileName &&
            !this.state.isRequiredcardAuthCap &&
            !this.state.isRequiredcardCaptureCap &&
            !this.state.isRequiredterminalOpEnv &&

            !this.state.isRequiredcardholderData &&
            !this.state.isRequiredcardPresentData &&
            !this.state.isRequiredcardInputMode &&

            !this.state.isRequiredcardAuthMode &&
            !this.state.isRequiredcardholderAuth &&
            !this.state.isRequiredcardDataCap &&

            !this.state.isRequiredterminalOutCap &&
            !this.state.isRequiredpincaptureCap &&
            !this.state.isRequiredcardDataOutCap &&
            !this.state.isRequiredposAdditionalMerchantAddress &&
            !this.state.isRequiredtransactionCount &&
            !this.state.isRequiredcardholderAuthCap

        ) {


            console.log("Form submitted");
            this.processForm(e);



        }
        else {

            alert("Kindly Fill the Required Fields");
        }



        //}


    }


    processForm(e) {

        const newAtm = {
            id: this.refs.id.value,
            //Atm Details
            atmId: this.refs.atmId.value,
            //atmStatus -- still thinking about this
            atmType: this.refs.atmType.value,
            tenantId: this.refs.tenantId.value,
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
            keyExchangeDt: this.state.keyExchangeDt,
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

        };
        console.log(newAtm)
        updateAtm(newAtm).then(res => {

            if (res.status === 200) {
                alert(res.data);
                this.setState({
                    dataPosted: true
                })
            }
            else {
                alert("Error Occurred.")
            }

        });
    }


    render() {
        console.log(this.state);
        const bank = this.state.bank;
        const atm = this.state.atm;
        return (
            <div>
                {this.state.dataPosted && <Redirect to={{ pathname: "/atmdetails", state: { item: atm, bank: bank } }} />}
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
                                                                <Link to={{ pathname: "/bankdash", state: { item: bank } }}>{bank.bankName}</Link>

                                                            </li>
                                                            <li>
                                                                <Link to={{ pathname: "", }}>{bank.bankName} ATM List</Link>
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
                                                                        <h2>Edit ATM</h2>
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
                                                                            <div className="ux-component">
                                                                                <label className="label-top"><em>*</em>ATM ID</label>
                                                                                <input type="text" ref="atmId" name="atmId" id="atmId"
                                                                                    // onKeyUp={this.HandleChange}
                                                                                    onChange={this.HandleChange}
                                                                                    defaultValue={atm.atmId}
                                                                                    disabled
                                                                                    required />
                                                                                <em className="field-message"> </em>
                                                                            </div>
                                                                            {/* <div
                                                                                style=
                                                                                {{
                                                                                    color: "red", textAlign: "left",
                                                                                    display: "block",
                                                                                    fontSize: "0.8rem"
                                                                                }}

                                                                            >{this.state.errors.atmId}</div> */}

                                                                            {this.state.isRequired ?

                                                                                <div style={{
                                                                                    color: "red", textAlign: "left",
                                                                                    display: "block",
                                                                                    fontSize: "0.8rem"
                                                                                }}>This Field is Required</div> : null
                                                                            }
                                                                        </div>
                                                                        <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                                                            <div className="ux-component">
                                                                                <label className="label-top"><em>*</em>ATM Status</label>
                                                                                <select ref="atmStatus"
                                                                                    onChange={this.HandleChange}
                                                                                    name="atmStatus"
                                                                                    defaultValue={atm.atmStatus}
                                                                                    id="atmStatus">
                                                                                    {status()}
                                                                                </select>
                                                                                <u />
                                                                                <em className="field-message"> </em>
                                                                            </div>
                                                                            {this.state.isRequiredatmStatus ?

                                                                                <div style={{
                                                                                    color: "red", textAlign: "left",
                                                                                    display: "block",
                                                                                    fontSize: "0.8rem"
                                                                                }}>This Field is Required</div> : null
                                                                            }

                                                                        </div>
                                                                        <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                                                            <div className="ux-component">
                                                                                <label className="label-top"><em>*</em>ATM Type</label>
                                                                                <select ref="atmType"
                                                                                    onChange={this.HandleChange}
                                                                                    name="atmType"
                                                                                    defaultValue={atm.atmType}
                                                                                    id="atmType">
                                                                                    {types()}
                                                                                </select>
                                                                                <u />
                                                                                <em className="field-message"> </em>
                                                                            </div>
                                                                            {this.state.isRequiredatmType ?

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
                                                                                <label className="label-top"><em>*</em>ATM Tenant ID</label>
                                                                                <input className="atm" type="text" ref="tenantId"
                                                                                    name="tenantId"
                                                                                    defaultValue={
                                                                                        atm.tenantId
                                                                                    }
                                                                                    id="tenantId"
                                                                                    onKeyUp={this.HandleChange}
                                                                                    disabled
                                                                                    required />

                                                                                <em className="field-message"> </em>
                                                                            </div>
                                                                            {this.state.isRequiredtenantId ?

                                                                                <div style={{
                                                                                    color: "red", textAlign: "left",
                                                                                    display: "block",
                                                                                    fontSize: "0.8rem"
                                                                                }}>This Field is Required</div> : null
                                                                            }
                                                                        </div>
                                                                        <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                                                            <div className="ux-component">
                                                                                <label className="label-top"><em>*</em>ATM Dipcard Card Reader</label>
                                                                                <select
                                                                                    ref="dipCard"
                                                                                    onChange={this.HandleChange}
                                                                                    name="dipCard" id="dipCard"
                                                                                    defaultValue={atm.dipCard}
                                                                                    ref="dipCard"

                                                                                >
                                                                                    {yesno()}
                                                                                </select>
                                                                                <u />
                                                                                <em className="field-message"> </em>
                                                                            </div>
                                                                            {this.state.isRequireddipCard ?

                                                                                <div style={{
                                                                                    color: "red", textAlign: "left",
                                                                                    display: "block",
                                                                                    fontSize: "0.8rem"
                                                                                }}>This Field is Required</div> : null
                                                                            }
                                                                        </div>
                                                                        <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                                                            <div className="ux-component">
                                                                                <label className="label-top"><em>*</em>ATM Dyanamic Key Exchange</label>

                                                                                <select
                                                                                    defaultValue={
                                                                                        atm.dynamicKeyExchange
                                                                                    }
                                                                                    ref="dynamicKeyExchange"
                                                                                    name="dynamicKeyExchange" id="dynamicKeyExchange"
                                                                                    onChange={this.HandleChange}
                                                                                >
                                                                                    {yesno()}
                                                                                </select>
                                                                                <u />
                                                                                <em className="field-message"> </em>
                                                                            </div>
                                                                            {this.state.isRequireddynamicKeyExchange ?

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
                                                                                <label className="label-top"><em>*</em>Encrypted Terminal Pin Key</label>
                                                                                <input
                                                                                    type="text"
                                                                                    required
                                                                                    defaultValue={atm.encTpk}
                                                                                    onKeyUp={this.HandleChange}
                                                                                    name="encTpk"
                                                                                    id="encTpk"
                                                                                    ref="encTpk"
                                                                                    maxLength="64"

                                                                                />
                                                                                <em className="field-message"> </em>
                                                                            </div>
                                                                            {this.state.isRequiredencTpk ?

                                                                                <div style={{
                                                                                    color: "red", textAlign: "left",
                                                                                    display: "block",
                                                                                    fontSize: "0.8rem"
                                                                                }}>This Field is Required</div> : null
                                                                            }
                                                                        </div>
                                                                        <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                                                            <div className="ux-component">
                                                                                <label className="label-top"><em>*</em>ATM is BNA</label>

                                                                                <select
                                                                                    defaultValue={atm.isBNA}
                                                                                    ref="isBNA"
                                                                                    onChange={this.HandleChange} id="isBNA" name="isBNA"
                                                                                >
                                                                                    {yesno()}
                                                                                </select>
                                                                                <u />
                                                                                <em className="field-message"> </em>
                                                                            </div>
                                                                            {this.state.isRequiredisBNA ?

                                                                                <div style={{
                                                                                    color: "red", textAlign: "left",
                                                                                    display: "block",
                                                                                    fontSize: "0.8rem"
                                                                                }}>This Field is Required</div> : null
                                                                            }
                                                                        </div>
                                                                        <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                                                            <div className="ux-component">
                                                                                <label className="label-top"><em>*</em>ATM Machine IP</label>

                                                                                <input
                                                                                    type="text"
                                                                                    required
                                                                                    defaultValue={atm.ip}
                                                                                    id="ip"
                                                                                    name="ip"
                                                                                    ref="ip"
                                                                                    onChange={this.HandleChange}

                                                                                />
                                                                                <em className="field-message"> </em>

                                                                            </div>
                                                                            {this.state.isRequiredip ?

                                                                                <div id="isRequiredip" style={{
                                                                                    color: "red", textAlign: "left",
                                                                                    display: "block",
                                                                                    fontSize: "0.8rem"
                                                                                }}>Enter Valid IP</div> : null
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                                                            <div className="ux-component">
                                                                                <label className="label-top"><em>*</em>ATM is EMV Enable ?</label>

                                                                                <select
                                                                                    defaultValue={atm.isEMV}
                                                                                    ref="isEMV"
                                                                                    id="isEMV" name="isEMV"
                                                                                    onChange={this.HandleChange}

                                                                                >
                                                                                    <option value="true">
                                                                                        Yes
                                                                                    </option>
                                                                                    <option value="false,">
                                                                                        No
                                                                                    </option>
                                                                                </select>
                                                                                <u />
                                                                                <em className="field-message"> </em>
                                                                            </div>
                                                                            {this.state.isRequiredisEMV ?

                                                                                <div style={{
                                                                                    color: "red", textAlign: "left",
                                                                                    display: "block",
                                                                                    fontSize: "0.8rem"
                                                                                }}>This Field is Required</div> : null
                                                                            }
                                                                        </div>
                                                                        <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                                                            <div className="ux-component ux-readonly">
                                                                                <input type="text" ref="id" defaultValue={atm.id} hidden />
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
                                                                            <div className="ux-component">
                                                                                <label className="label-top"><em>*</em>ATM Name</label>

                                                                                <input type="text" maxLength="20" required onKeyUp={this.HandleChange} id="atmName" name="atmName" defaultValue={atm.atmName} ref="atmName" disabled />
                                                                                <em className="field-message"> </em>
                                                                            </div>
                                                                            {this.state.isRequiredatmName ?

                                                                                <div style={{
                                                                                    color: "red", textAlign: "left",
                                                                                    display: "block",
                                                                                    fontSize: "0.8rem"
                                                                                }}>This Field is Required</div> : null
                                                                            }
                                                                        </div>
                                                                        <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                                                            <div className="ux-component">
                                                                                <label className="label-top"><em>*</em>ATM Location</label>
                                                                                <input type="text" maxLength="15" required defaultValue={atm.atmLocation} onKeyUp={this.HandleChange} ref="atmLocation" id="atmLocation" name="atmLocation" />
                                                                                <em className="field-message"> </em>
                                                                            </div>
                                                                            {this.state.isRequiredatmLocation ?

                                                                                <div style={{
                                                                                    color: "red", textAlign: "left",
                                                                                    display: "block",
                                                                                    fontSize: "0.8rem"
                                                                                }}>This Field is Required</div> : null
                                                                            }
                                                                        </div>
                                                                        <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                                                            <div className="ux-component">
                                                                                <label className="label-top"><em>*</em>ATM State</label>
                                                                                <select required defaultValue={atm.atmState} ref="atmState" onChange={this.HandleChange} id="atmState" name="atmState" >
                                                                                    {states()}
                                                                                </select>
                                                                                <u />
                                                                                <em className="field-message"> </em>
                                                                            </div>
                                                                            {this.state.isRequiredatmState ?

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
                                                                                <label className="label-top"><em>*</em>ATM Country</label>

                                                                                <input type="text" required defaultValue={atm.atmCountry} onChange={this.HandleChange} ref="atmCountry" id="atmCountry" name="atmCountry" />
                                                                                <u />
                                                                                <em className="field-message"> </em>
                                                                            </div>
                                                                            {this.state.isRequiredatmCountry ?

                                                                                <div style={{
                                                                                    color: "red", textAlign: "left",
                                                                                    display: "block",
                                                                                    fontSize: "0.8rem"
                                                                                }}>This Field is Required</div> : null
                                                                            }
                                                                        </div>
                                                                        <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                                                            <div className="ux-component">
                                                                                <label className="label-top"><em>*</em>ATM Zip Code</label>

                                                                                <input type="number" required maxLength="6" defaultValue={atm.atmPincode} onKeyUp={this.HandleChange} ref="atmPincode" id="atmPincode" name="atmPincode" />
                                                                                <em className="field-message"> </em>
                                                                            </div>
                                                                            {this.state.isRequiredatmPincode ?

                                                                                <div style={{
                                                                                    color: "red", textAlign: "left",
                                                                                    display: "block",
                                                                                    fontSize: "0.8rem"
                                                                                }}>Only 6 Digits are Allowed.</div> : null
                                                                            }
                                                                        </div>
                                                                        <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                                                            <div className="ux-component">
                                                                                <label className="label-top"><em>*</em>POS Additional Merchant Address</label>
                                                                                <input type="text" required ref="posAdditionalMerchantAddress"
                                                                                    onKeyUp={this.HandleChange}
                                                                                    id="posAdditionalMerchantAddress"
                                                                                    name="posAdditionalMerchantAddress"
                                                                                    defaultValue={atm.atmName.concat(" ").concat(atm.atmLocation)} disabled />

                                                                                <em className="field-message"> </em>
                                                                            </div>
                                                                            {this.state.isRequiredposAdditionalMerchantAddress ?

                                                                                <div style={{
                                                                                    color: "red", textAlign: "left",
                                                                                    display: "block",
                                                                                    fontSize: "0.8rem"
                                                                                }}>This Field is Required</div> : null
                                                                            }
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
                                                                            <div className="ux-component">
                                                                                <label className="label-top"><em>*</em>DUKPT Session Key</label>
                                                                                <input
                                                                                    type="text"
                                                                                    required
                                                                                    defaultValue={
                                                                                        atm.sessionKey
                                                                                    }
                                                                                    ref="sessionKey"
                                                                                    onKeyUp={this.HandleChange}
                                                                                    name="sessionKey"
                                                                                    id="sessionKey"
                                                                                    maxLength="64"
                                                                                />
                                                                                <em className="field-message"> </em>
                                                                            </div>
                                                                            {this.state.isRequiredsessionKey ?

                                                                                <div style={{
                                                                                    color: "red", textAlign: "left",
                                                                                    display: "block",
                                                                                    fontSize: "0.8rem"
                                                                                }}>This Field is Required</div> : null
                                                                            }
                                                                        </div>
                                                                        <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                                                            <div className="ux-component">
                                                                                <label className="label-top"><em>*</em>Last DUKPT Session Key</label>
                                                                                <input
                                                                                    type="text"
                                                                                    required
                                                                                    onKeyUp={this.HandleChange}
                                                                                    name="lastEncTpk"
                                                                                    id="lastEncTpk"
                                                                                    defaultValue={
                                                                                        atm.lastEncTpk
                                                                                    }
                                                                                    ref="lastEncTpk"
                                                                                    maxLength="64"
                                                                                />
                                                                                <em className="field-message"> </em>
                                                                            </div>
                                                                            {this.state.isRequiredlastEncTpk ?

                                                                                <div style={{
                                                                                    color: "red", textAlign: "left",
                                                                                    display: "block",
                                                                                    fontSize: "0.8rem"
                                                                                }}>This Field is Required</div> : null
                                                                            }
                                                                        </div>

                                                                        <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                                                            <div className="ux-component">
                                                                                <label className="label-top"><em>*</em>Logical Unit No (LUNO)</label>
                                                                                <input
                                                                                    type="text"
                                                                                    required
                                                                                    onKeyUp={this.HandleChange}
                                                                                    id="luno" name="luno"
                                                                                    defaultValue={atm.luno}
                                                                                    ref="luno"
                                                                                    disabled
                                                                                    maxLength="4"
                                                                                />
                                                                                <em className="field-message"> </em>
                                                                            </div>
                                                                            {this.state.isRequiredluno ?

                                                                                <div style={{
                                                                                    color: "red", textAlign: "left",
                                                                                    display: "block",
                                                                                    fontSize: "0.8rem"
                                                                                }}>This Field is Required</div> : null
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                    <div className="row">
                                                                        {/* <div className="col-12 col-sm-12 col-xl-3 col-lg-6 col-md-6">
                                            <div className="ux-component">
                                              <label className="label-top">DUKPT Key Exchange Date</label>
                                              <input className="datepicker1" type="text" placeholder="DD/MM/YYYY" onClickCapture={(e) => { this.HandleChange(e) }} ref="dukptKeyExchangeDate" id="dukptKeyExchangeDate" name="dukptKeyExchangeDate" />
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

                                                                            <DatePicker
                                                                                onChange={this.HandleChange}
                                                                                value={this.state.keyExchangeDt}

                                                                                id="keyExchangeDt"
                                                                                name="keyExchangeDt"

                                                                                defaultValue={
                                                                                    atm.keyExchangeDt
                                                                                }
                                                                                ref="keyExchangeDt"
                                                                                dateFormat="MMMM d, yyyy h:mm aa"
                                                                            />




                                                                            {this.state.isRequiredkeyExchangeDt ?

                                                                                <div style={{
                                                                                    color: "red", textAlign: "left",
                                                                                    display: "block",
                                                                                    fontSize: "0.8rem"
                                                                                }}>This Field is Required</div> : null
                                                                            }

                                                                        </div>

                                                                        <div class="col-12 col-sm-12 col-xl-3 col-lg-6 col-md-6">
                                                                            <div class="ux-component">
                                                                                <label className="label-top"><em>*</em>DUKPT Key Exchange Time</label>
                                                                                <input type="number" required

                                                                                    onKeyUp={this.HandleChange}
                                                                                    defaultValue={
                                                                                        atm.keyExchangeTime
                                                                                    }
                                                                                    ref="keyExchangeTime"


                                                                                    name="keyExchangeTime" id="keyExchangeTime" />
                                                                                <em class="field-message"> </em>
                                                                            </div>
                                                                            {this.state.isRequiredkeyExchangeTime ?

                                                                                <div style={{
                                                                                    color: "red", textAlign: "left",
                                                                                    display: "block",
                                                                                    fontSize: "0.8rem"
                                                                                }}>Only 1 or 2 digits are Allowed</div> : null
                                                                            }
                                                                        </div>



                                                                        <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                                                            <div className="ux-component">
                                                                                <label className="label-top"><em>*</em>DUKPT Key Exchange Duration in Min</label>
                                                                                <input type="number" required

                                                                                    defaultValue={
                                                                                        atm.keyExchangeDurationInMin
                                                                                    }
                                                                                    ref="keyExchangeDurationInMin"
                                                                                    onKeyUp={this.HandleChange}
                                                                                    name="keyExchangeDurationInMin"

                                                                                    id="keyExchangeDurationInMin" />
                                                                                <em className="field-message"> </em>
                                                                            </div>
                                                                            {this.state.isRequiredkeyExchangeDurationInMin ?

                                                                                <div style={{
                                                                                    color: "red", textAlign: "left",
                                                                                    display: "block",
                                                                                    fontSize: "0.8rem"
                                                                                }}>Only 1 or 2 digits are Allowed</div> : null
                                                                            }
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
                                                                            <div className="ux-component">
                                                                                <label className="label-top"><em>*</em>Terminal Master Key (TMK)</label>
                                                                                <input type="text" required
                                                                                    onKeyUp={this.HandleChange}
                                                                                    defaultValue={atm.tmk}
                                                                                    ref="tmk"
                                                                                    maxLength="64"
                                                                                    id="tmk" name="tmk" />
                                                                                <em className="field-message"> </em>
                                                                            </div>
                                                                            {this.state.isRequiredtmk ?

                                                                                <div style={{
                                                                                    color: "red", textAlign: "left",
                                                                                    display: "block",
                                                                                    fontSize: "0.8rem"
                                                                                }}>This Field is Required</div> : null
                                                                            }
                                                                        </div>
                                                                        <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                                                            <div className="ux-component">
                                                                                <label className="label-top"><em>*</em>TMK Part-1</label>
                                                                                <input type="text" required
                                                                                    ref="tmkCom1" onKeyUp={this.HandleChange}
                                                                                    defaultValue={atm.tmkCom1}
                                                                                    maxLength="32"

                                                                                    id="tmkCom1" name="tmkCom1" />
                                                                                <em className="field-message"> </em>
                                                                            </div>
                                                                            {this.state.isRequiredtmkCom1 ?

                                                                                <div style={{
                                                                                    color: "red", textAlign: "left",
                                                                                    display: "block",
                                                                                    fontSize: "0.8rem"
                                                                                }}>This Field is Required</div> : null
                                                                            }
                                                                        </div>
                                                                        <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                                                            <div className="ux-component">
                                                                                <label className="label-top"><em>*</em>TMK Part-2</label>
                                                                                <input type="text" required
                                                                                    ref="tmkCom2" onKeyUp={this.HandleChange}
                                                                                    id="tmkCom2" name="tmkCom2"
                                                                                    maxLength="32"
                                                                                    defaultValue={atm.tmkCom2}
                                                                                />
                                                                                <em className="field-message"> </em>
                                                                            </div>
                                                                            {this.state.isRequiredtmkCom2 ?

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
                                                                                <label className="label-top"><em>*</em>Last Transaction Number</label>
                                                                                <input type="text" required ref="transactionCount"
                                                                                    defaultValue={
                                                                                        atm.transactionCount
                                                                                    }
                                                                                    ref="transactionCount"

                                                                                    onKeyUp={this.HandleChange}
                                                                                    id="transactionCount"
                                                                                    name="transactionCount" />
                                                                                <em className="field-message"> </em>
                                                                            </div>
                                                                            {this.state.isRequiredtransactionCount ?

                                                                                <div style={{
                                                                                    color: "red", textAlign: "left",
                                                                                    display: "block",
                                                                                    fontSize: "0.8rem"
                                                                                }}>This Field is Required</div> : null
                                                                            }
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
                                                                            <div class="ux-component  ux-edit">
                                                                                <label class="label-top"><em>*</em>Currency 1 Denom</label>
                                                                                <select defaultValue={atm.typeDenom1} onChange={this.HandleChange} id="typeDenom1" name="typeDenom1" ref="typeDenom1" >
                                                                                    {currencyVals()}
                                                                                </select>
                                                                                <u></u>
                                                                                <em class="field-message"> </em>
                                                                            </div>
                                                                            {this.state.isRequiredtypeDenom1 ?

                                                                                <div style={{
                                                                                    color: "red", textAlign: "left",
                                                                                    display: "block",
                                                                                    fontSize: "0.8rem"
                                                                                }}>This Field is Required</div> : null
                                                                            }

                                                                        </div>
                                                                        <div class="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                                                            <div class="ux-component  ux-edit">
                                                                                <label class="field-active"><em>*</em>Currency 1 Count</label>
                                                                                <input type="number" required
                                                                                    onKeyUp={this.HandleChange}
                                                                                    defaultValue={atm.type1Count}
                                                                                    ref="type1Count"
                                                                                    placeholder="Currency 1 Count"

                                                                                    id="type1Count" name="type1Count" />
                                                                                <em class="field-message"> </em>
                                                                            </div>
                                                                            {this.state.isRequiredtype1Count ?

                                                                                <div style={{
                                                                                    color: "red", textAlign: "left",
                                                                                    display: "block",
                                                                                    fontSize: "0.8rem"
                                                                                }}>Only 4 digits are Allowed</div> : null
                                                                            }
                                                                        </div>

                                                                        <div class="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                                                            <div class="ux-component  ux-edit">
                                                                                <label class="label-top"><em>*</em>Currency 2 Denom</label>
                                                                                <select defaultValue={atm.typeDenom2} ref="typeDenom2" onChange={this.HandleChange} id="typeDenom2" name="typeDenom2" >
                                                                                    {currencyVals()}
                                                                                </select>
                                                                                <u></u>
                                                                                <em class="field-message"> </em>
                                                                            </div>
                                                                            {this.state.isRequiredtypeDenom2 ?

                                                                                <div style={{
                                                                                    color: "red", textAlign: "left",
                                                                                    display: "block",
                                                                                    fontSize: "0.8rem"
                                                                                }}>This Field is Required</div> : null
                                                                            }
                                                                        </div>
                                                                        <div class="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                                                            <div class="ux-component  ux-edit">
                                                                                <label class="field-active"><em>*</em>Currency 2 Count</label>
                                                                                <input type="number" required ref="type2Count"
                                                                                    onKeyUp={this.HandleChange} id="type2Count" name="type2Count"
                                                                                    defaultValue={atm.type2Count}

                                                                                />
                                                                                <em class="field-message"> </em>
                                                                            </div>
                                                                            {this.state.isRequiredtype2Count ?

                                                                                <div style={{
                                                                                    color: "red", textAlign: "left",
                                                                                    display: "block",
                                                                                    fontSize: "0.8rem"
                                                                                }}>Only 4 digits are Allowed</div> : null
                                                                            }
                                                                        </div>
                                                                    </div>

                                                                    <div class="row">
                                                                        <div class="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                                                            <div class="ux-component  ux-edit">
                                                                                <label class="label-top"><em>*</em>Currency 3 Denom</label>
                                                                                <select defaultValue={atm.typeDenom3} onChange={this.HandleChange} ref="typeDenom3" id="typeDenom3" name="typeDenom3" >
                                                                                    {currencyVals()}
                                                                                </select>
                                                                                <u></u>
                                                                                <em class="field-message"> </em>
                                                                            </div>
                                                                            {this.state.isRequiredtypeDenom3 ?

                                                                                <div style={{
                                                                                    color: "red", textAlign: "left",
                                                                                    display: "block",
                                                                                    fontSize: "0.8rem"
                                                                                }}>This Field is Required</div> : null
                                                                            }
                                                                        </div>
                                                                        <div class="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                                                            <div class="ux-component  ux-edit">
                                                                                <label class="field-active"><em>*</em>Currency 3 Count</label>
                                                                                <input type="number" required
                                                                                    onKeyUp={this.HandleChange} id="type3Count" name="type3Count"
                                                                                    defaultValue={atm.type3Count}
                                                                                    ref="type3Count" />
                                                                                <em class="field-message"> </em>
                                                                            </div>
                                                                            {this.state.isRequiredtype3Count ?

                                                                                <div style={{
                                                                                    color: "red", textAlign: "left",
                                                                                    display: "block",
                                                                                    fontSize: "0.8rem"
                                                                                }}>Only 4 digits are Allowed</div> : null
                                                                            }
                                                                        </div>
                                                                        <div class="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                                                            <div class="ux-component  ux-edit">
                                                                                <label class="label-top"><em>*</em>Currency 4 Denom</label>
                                                                                <select defaultValue={atm.typeDenom4} onChange={this.HandleChange} ref="typeDenom4" id="typeDenom4" name="typeDenom4">
                                                                                    {currencyVals()}
                                                                                </select>
                                                                                <u></u>
                                                                                <em class="field-message"> </em>
                                                                            </div>
                                                                            {this.state.isRequiredtypeDenom4 ?

                                                                                <div style={{
                                                                                    color: "red", textAlign: "left",
                                                                                    display: "block",
                                                                                    fontSize: "0.8rem"
                                                                                }}>This Field is Required</div> : null
                                                                            }
                                                                        </div>
                                                                        <div class="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                                                            <div class="ux-component  ux-edit">
                                                                                <label class="field-active"><em>*</em>Currency 4 Count</label>
                                                                                <input type="number" required ref="type4Count" onKeyUp={this.HandleChange}
                                                                                    id="type4Count" name="type4Count"
                                                                                    defaultValue={atm.type4Count}
                                                                                />
                                                                                <em class="field-message"> </em>
                                                                            </div>
                                                                            {this.state.isRequiredtype4Count ?

                                                                                <div style={{
                                                                                    color: "red", textAlign: "left",
                                                                                    display: "block",
                                                                                    fontSize: "0.8rem"
                                                                                }}>Only 4 digits are Allowed</div> : null
                                                                            }
                                                                        </div>

                                                                    </div>
                                                                    <div class="row">
                                                                        <div class="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                                                            <div class="ux-component  ux-edit">
                                                                                <label class="field-active"><em>*</em>Customization File Name</label>
                                                                                <input type="text" required onKeyUp={this.HandleChange}
                                                                                    id="downloadFileName" name="downloadFileName"
                                                                                    defaultValue={
                                                                                        atm.downloadFileName
                                                                                    }
                                                                                    maxLength="50"
                                                                                    ref="downloadFileName" />
                                                                                <em class="field-message"> </em>
                                                                            </div>
                                                                            {this.state.isRequireddownloadFileName ?

                                                                                <div style={{
                                                                                    color: "red", textAlign: "left",
                                                                                    display: "block",
                                                                                    fontSize: "0.8rem"
                                                                                }}>This Field is Required</div> : null
                                                                            }
                                                                        </div>
                                                                        <div class="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                                                            <div class="ux-component  ux-edit">
                                                                                <label class="label-top"><em>*</em>Value Addition Service(VAS)</label>
                                                                                <select
                                                                                    defaultValue={atm.vasYN}
                                                                                    ref="vasYN"
                                                                                    id="vasYN"
                                                                                    name="vasYN"
                                                                                    onChange={this.HandleChange}
                                                                                >
                                                                                    {yesno()}
                                                                                </select>
                                                                                <u></u>
                                                                                <em class="field-message"> </em>
                                                                            </div>
                                                                            {this.state.isRequiredvasYN ?

                                                                                <div style={{
                                                                                    color: "red", textAlign: "left",
                                                                                    display: "block",
                                                                                    fontSize: "0.8rem"
                                                                                }}>This Field is Required</div> : null
                                                                            }
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
                                                                            <div className="ux-component">
                                                                                <label className="label-top"><em>*</em>Card Holder Authentication Capability</label>

                                                                                <select
                                                                                    id="cardAuthCap"
                                                                                    name="cardAuthCap"
                                                                                    onChange={this.HandleChange}
                                                                                    defaultValue={
                                                                                        atm.cardAuthCap
                                                                                    }
                                                                                    ref="cardAuthCap"
                                                                                >
                                                                                    {cardholderAuthCapability()}
                                                                                </select>
                                                                                <u />
                                                                                <em className="field-message"> </em>
                                                                            </div>
                                                                            {this.state.isRequiredcardholderAuthCap ?

                                                                                <div style={{
                                                                                    color: "red", textAlign: "left",
                                                                                    display: "block",
                                                                                    fontSize: "0.8rem"
                                                                                }}>This Field is Required</div> : null
                                                                            }
                                                                        </div>
                                                                        <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                                                            <div className="ux-component">
                                                                                <label className="label-top"><em>*</em>Card Capture Capability</label>

                                                                                <select
                                                                                    onChange={this.HandleChange} id="cardCaptureCap" name="cardCaptureCap"
                                                                                    defaultValue={
                                                                                        atm.cardCaptureCap
                                                                                    }
                                                                                    ref="cardCaptureCap"
                                                                                >
                                                                                    {cardCaptureCapability()}
                                                                                </select>
                                                                                <u />
                                                                                <em className="field-message"> </em>
                                                                            </div>
                                                                            {this.state.isRequiredcardCaptureCap ?

                                                                                <div style={{
                                                                                    color: "red", textAlign: "left",
                                                                                    display: "block",
                                                                                    fontSize: "0.8rem"
                                                                                }}>This Field is Required</div> : null
                                                                            }
                                                                        </div>
                                                                        <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                                                            <div className="ux-component">
                                                                                <label className="label-top"><em>*</em>Terminal Operational Environment</label>

                                                                                <select
                                                                                    id="terminalOpEnv"
                                                                                    onChange={this.HandleChange}
                                                                                    name="terminalOpEnv"
                                                                                    defaultValue={
                                                                                        atm.terminalOpEnv
                                                                                    }
                                                                                    ref="terminalOpEnv"
                                                                                >
                                                                                    {terminalOperatingEnv()}
                                                                                </select>
                                                                                <u />
                                                                                <em className="field-message"> </em>
                                                                            </div>
                                                                            {this.state.isRequiredterminalOpEnv ?

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
                                                                                <label className="label-top"><em>*</em>Card Holder Present Data</label>

                                                                                <select
                                                                                    defaultValue={
                                                                                        atm.cardholderData
                                                                                    }
                                                                                    id="cardholderData"
                                                                                    name="cardholderData"
                                                                                    onChange={this.HandleChange}
                                                                                    ref="cardholderData"
                                                                                >
                                                                                    {cardHolderData()}
                                                                                </select>
                                                                                <u />
                                                                                <em className="field-message"> </em>
                                                                            </div>
                                                                            {this.state.isRequiredcardholderData ?

                                                                                <div style={{
                                                                                    color: "red", textAlign: "left",
                                                                                    display: "block",
                                                                                    fontSize: "0.8rem"
                                                                                }}>This Field is Required</div> : null
                                                                            }
                                                                        </div>
                                                                        <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                                                            <div className="ux-component">
                                                                                <label className="label-top"><em>*</em>Card Present Data</label>

                                                                                <select
                                                                                    defaultValue={
                                                                                        atm.cardPresentData
                                                                                    }
                                                                                    onChange={this.HandleChange} id="cardPresentData" name="cardPresentData"
                                                                                    ref="cardPresentData"
                                                                                >
                                                                                    {cardPresentData()}
                                                                                </select>
                                                                                <u />
                                                                                <em className="field-message"> </em>
                                                                            </div>
                                                                            {this.state.isRequiredcardPresentData ?

                                                                                <div style={{
                                                                                    color: "red", textAlign: "left",
                                                                                    display: "block",
                                                                                    fontSize: "0.8rem"
                                                                                }}>This Field is Required</div> : null
                                                                            }
                                                                        </div>
                                                                        <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                                                            <div className="ux-component">
                                                                                <label className="label-top"><em>*</em>Card Data Input Mode</label>

                                                                                <select
                                                                                    defaultValue={
                                                                                        atm.cardInputMode
                                                                                    }
                                                                                    onChange={this.HandleChange} id="cardInputMode" name="cardInputMode"
                                                                                    ref="cardInputMode"
                                                                                >
                                                                                    {cardDataInputMode()}
                                                                                </select>
                                                                                <u />
                                                                                <em className="field-message"> </em>
                                                                            </div>
                                                                            {this.state.isRequiredcardInputMode ?

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
                                                                                <label className="label-top"><em>*</em>Card Holder Authentication Method</label>

                                                                                <select
                                                                                    defaultValue={
                                                                                        atm.cardAuthMode
                                                                                    }
                                                                                    onChange={this.HandleChange} id="cardAuthMode" name="cardAuthMode"
                                                                                    ref="cardAuthMode"
                                                                                >
                                                                                    {cardholderAuthMode()}
                                                                                </select>
                                                                                <u />
                                                                                <em className="field-message"> </em>
                                                                            </div>
                                                                            {this.state.isRequiredcardAuthMode ?

                                                                                <div style={{
                                                                                    color: "red", textAlign: "left",
                                                                                    display: "block",
                                                                                    fontSize: "0.8rem"
                                                                                }}>This Field is Required</div> : null
                                                                            }
                                                                        </div>
                                                                        <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                                                            <div className="ux-component">
                                                                                <label className="label-top"><em>*</em>Card Holder Authentication Entry</label>

                                                                                <select
                                                                                    defaultValue={
                                                                                        atm.cardholderAuth
                                                                                    }
                                                                                    ref="cardholderAuth"
                                                                                    onChange={this.HandleChange} id="cardholderAuth" name="cardholderAuth"
                                                                                >
                                                                                    {cardholderAuthEntity()}
                                                                                </select>
                                                                                <u />
                                                                                <em className="field-message"> </em>
                                                                            </div>
                                                                            {this.state.isRequiredcardholderAuth ?

                                                                                <div style={{
                                                                                    color: "red", textAlign: "left",
                                                                                    display: "block",
                                                                                    fontSize: "0.8rem"
                                                                                }}>This Field is Required</div> : null
                                                                            }
                                                                        </div>
                                                                        <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                                                            <div className="ux-component">
                                                                                <label className="label-top"><em>*</em>Card Data Output Capability</label>

                                                                                <select
                                                                                    defaultValue={
                                                                                        atm.cardDataOutCap
                                                                                    }
                                                                                    ref="cardDataOutCap"
                                                                                    onChange={this.HandleChange} id="cardDataOutCap" name="cardDataOutCap"
                                                                                >
                                                                                    {cardDataOutputCapability()}
                                                                                </select>
                                                                                <u />
                                                                                <em className="field-message"> </em>
                                                                            </div>
                                                                            {this.state.isRequiredcardDataOutCap ?

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
                                                                                <label className="label-top"><em>*</em>Terminal Data Output Capability</label>

                                                                                <select
                                                                                    defaultValue={
                                                                                        atm.terminalOutCap
                                                                                    }
                                                                                    ref="terminalOutCap"
                                                                                    onChange={this.HandleChange} id="terminalOutCap" name="terminalOutCap"
                                                                                >
                                                                                    {terminalDataOutputCapability()}
                                                                                </select>
                                                                                <u />
                                                                                <em className="field-message"> </em>
                                                                            </div>
                                                                            {this.state.isRequiredterminalOutCap ?

                                                                                <div style={{
                                                                                    color: "red", textAlign: "left",
                                                                                    display: "block",
                                                                                    fontSize: "0.8rem"
                                                                                }}>This Field is Required</div> : null
                                                                            }

                                                                        </div>
                                                                        <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                                                            <div className="ux-component">
                                                                                <label className="label-top"><em>*</em>PIN Capture Capability</label>

                                                                                <select
                                                                                    defaultValue={
                                                                                        atm.pincaptureCap
                                                                                    }
                                                                                    onChange={this.HandleChange} id="pincaptureCap" name="pincaptureCap"
                                                                                    ref="pincaptureCap"
                                                                                >
                                                                                    {pinCaptureCapability()}
                                                                                </select>
                                                                                <u />
                                                                                <em className="field-message"> </em>
                                                                            </div>
                                                                            {this.state.isRequiredpincaptureCap ?

                                                                                <div style={{
                                                                                    color: "red", textAlign: "left",
                                                                                    display: "block",
                                                                                    fontSize: "0.8rem"
                                                                                }}>This Field is Required</div> : null
                                                                            }
                                                                        </div>
                                                                        <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                                                            <div className="ux-component">
                                                                                <label className="label-top"><em>*</em>Card Data Input Capability</label>

                                                                                <select
                                                                                    defaultValue={
                                                                                        atm.cardDataCap
                                                                                    }
                                                                                    ref="cardDataCap"
                                                                                    onChange={this.HandleChange} id="cardDataCap" name="cardDataCap"
                                                                                >
                                                                                    {cardDataInputCapability()}
                                                                                </select>
                                                                                <u />
                                                                                <em className="field-message"> </em>
                                                                            </div>
                                                                            {this.state.isRequiredcardDataCap ?

                                                                                <div style={{
                                                                                    color: "red", textAlign: "left",
                                                                                    display: "block",
                                                                                    fontSize: "0.8rem"
                                                                                }}>This Field is Required</div> : null
                                                                            }

                                                                        </div>
                                                                    </div>
                                                                    <div className="grid-footer mar20 pb-0 mt-4">
                                                                        <button className="button float-right" onClick={this.submitLoginForm} >Submit</button>
                                                                        <Link className="button secondary" to={{ pathname: "/atmdetails", state: { item: atm, bank: bank } }}>Cancel</Link>
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
