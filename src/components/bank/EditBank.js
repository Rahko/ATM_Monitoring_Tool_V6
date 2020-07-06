import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import HeadNavFoot from '../HeadNavFoot';
import { addBank, updateBank } from './BankCalls';

export default class EditBank extends React.Component {

  componentDidMount() {

    const script = document.createElement("script");
    script.src = "js/hsm.js";
    script.async = true;
    document.body.appendChild(script);
  }

  constructor(props) {
    super(props);
    console.log("Edit Bank page")
    this.state = {
      bank: props.location.state.bank,
      isPosted: false,
      isRequiredacqId: false,

      isRequiredacqIp: false,
      
      isRequiredacqPort: false,
      isRequiredatmD912Port: false,
      isRequiredatmNdcPort: false,
      // isRequiredtenantId: false,
      // isRequiredbankName: false,
      isRequiredbankStatus: false,

     // isRequiredbdsTimeout: false,
      isRequiredcbsInterfaceIp: false,
      isRequiredcbsInterfaceIp_1: false,

      isRequiredcbsInterfacePort: false,
      isRequiredcbsInterfacePort_1: false,
      isRequiredcbsInterfaceUrl: false,
      isRequiredcvkAtm: false,
      isRequiredcvkPos: false,
      isRequireddesAlg: false,

      //HSM Details
      isRequiredhsmIp: false,
      isRequiredhsmPort: false,
      isRequiredhwHsmIp: false,
      isRequiredhwHsmPort: false,
      isRequiredisSafeNetHsm: false,
      isRequirednfsIp: false,
      isRequirednfsPort: false,
      isRequiredpinVerifyTimeout: false,
      isRequiredposEcomIp: false,
      isRequiredposEcomPort: false,
      isRequiredpvk: false,

      //Zonal Details
      isRequiredzpkAtm: false,
      isRequiredzpkPos: false,
      isRequiredisDke: false,
      isRequiredzmkAtm: false,
      isRequiredzmkPos: false,
      isRequiredisOmniCbs: false,
      isRequiredisMac: false,
      isRequiredzakAtm: false,
      isRequiredzakPos: false,
      isRequiredzak: false,
      isRequiredhsmUrl: false,
      isRequiredsmsUrl: false

    };
    this.HandleChange = this.HandleChange.bind(this);
    this.submitLoginForm = this.submitLoginForm.bind(this);

  }

  HandleChange = async (e) => {
    const errorFlag = e.target.name;
    const check = e.target.value;

    console.log(errorFlag);


    console.log("Handle CHnage acqId-->",this.state.isRequiredacqId);
    console.log("Handle CHnage acqIp----->",this.state.isRequiredacqIp);

    if (errorFlag === "acqId") {
      console.log("Handle CHnage acqId-->",this.state.isRequiredacqId);
      console.log("Chekc value in acqId",check)
      if (!check) {
        this.setState({ isRequiredacqId: true });

      } else {
        this.setState({ isRequiredacqId: false, })
      }
    }
    if (errorFlag === "acqIp") {
      //console.log(this.state.isRequired);
      console.log(" acqIp-->",this.state.isRequiredacqIp);
      if (!check) {
        this.setState({ isRequiredacqIp: true });

      } else {
        this.setState({ isRequiredacqIp: false, })
      }
    }

    if (errorFlag === "acqPort") {
      //console.log(this.state.isRequired);
      if (!check) {
        this.setState({ isRequiredacqPort: true });

      } else {
        this.setState({ isRequiredacqPort: false, })
      }
    }
    if (errorFlag === "atmD912Port") {
      //console.log(this.state.isRequired);
      if (!check) {
        this.setState({ isRequiredatmD912Port: true });

      } else {
        this.setState({ isRequiredatmD912Port: false, })
      }
    }
    if (errorFlag === "atmNdcPort") {
      //console.log(this.state.isRequired);
      if (!check) {
        this.setState({ isRequiredatmNdcPort: true });

      } else {
        this.setState({ isRequiredatmNdcPort: false, })
      }
    }
    // if (errorFlag === "tenantId") {
    //   //console.log(this.state.isRequired);
    //   if (!check) {
    //     this.setState({ isRequiredtenantId: true });

    //   } else {
    //     this.setState({ isRequiredtenantId: false, })
    //   }
    // }
    // if (errorFlag === "bankName") {
    //   //console.log(this.state.isRequired);
    //   if (!check) {
    //     this.setState({ isRequiredbankName: true });

    //   } else {
    //     this.setState({ isRequiredbankName: false, })
    //   }
    // }
    if (errorFlag === "bankStatus") {
      //console.log(this.state.isRequired);
      if (!check) {
        this.setState({ isRequiredbankStatus: true });

      } else {
        this.setState({ isRequiredbankStatus: false, })
      }
    }
    // if (errorFlag === "bdsTimeout") {
    //   //console.log(this.state.isRequired);
    //   if (!check) {
    //     this.setState({ isRequiredbdsTimeout: true });

    //   } else {
    //     this.setState({ isRequiredbdsTimeout: false, })
    //   }
    // }
    if (errorFlag === "cbsInterfaceIp") {
      //console.log(this.state.isRequired);
      if (!check) {
        this.setState({ isRequiredcbsInterfaceIp: true });

      } else {
        this.setState({ isRequiredcbsInterfaceIp: false, })
      }
    }
    if (errorFlag === "cbsInterfaceIp_1") {
      //console.log(this.state.isRequired);
      if (!check) {
        this.setState({ isRequiredcbsInterfaceIp_1: true });

      } else {
        this.setState({ isRequiredcbsInterfaceIp_1: false, })
      }
    }
    if (errorFlag === "cbsInterfacePort") {
      //console.log(this.state.isRequired);
      if (!check) {
        this.setState({ isRequiredcbsInterfacePort: true });

      } else {
        this.setState({ isRequiredcbsInterfacePort: false, })
      }
    }
    if (errorFlag === "cbsInterfacePort_1") {
      //console.log(this.state.isRequired);
      if (!check) {
        this.setState({ isRequiredcbsInterfacePort_1: true });

      } else {
        this.setState({ isRequiredcbsInterfacePort_1: false, })
      }
    }
    if (errorFlag === "cbsInterfaceUrl") {
      //console.log(this.state.isRequired);
      if (!check) {
        this.setState({ isRequiredcbsInterfaceUrl: true });

      } else {
        this.setState({ isRequiredcbsInterfaceUrl: false, })
      }
    }
    if (errorFlag === "cvkAtm") {
      //console.log(this.state.isRequired);
      if (!check) {
        this.setState({ isRequiredcvkAtm: true });

      } else {
        this.setState({ isRequiredcvkAtm: false, })
      }
    }

    if (errorFlag === "cvkPos") {
      //console.log(this.state.isRequired);
      if (!check) {
        this.setState({ isRequiredcvkPos: true });

      } else {
        this.setState({ isRequiredcvkPos: false, })
      }
    }
    // if (errorFlag === "desAlg") {
    //   //console.log(this.state.isRequired);
    //   if (!check) {
    //     this.setState({ isRequireddesAlg: true });

    //   } else {
    //     this.setState({ isRequireddesAlg: false, })
    //   }
    // }


    if (errorFlag === "hsmIp") {
      //console.log(this.state.isRequired);
      if (!check) {
        this.setState({ isRequiredhsmIp: true });

      } else {
        this.setState({ isRequiredhsmIp: false, })
      }
    } if (errorFlag === "hsmPort") {
      //console.log(this.state.isRequired);
      if (!check) {
        this.setState({ isRequiredhsmPort: true });

      } else {
        this.setState({ isRequiredhsmPort: false, })
      }
    } if (errorFlag === "hwHsmIp") {
      //console.log(this.state.isRequired);
      if (!check) {
        this.setState({ isRequiredhwHsmIp: true });

      } else {
        this.setState({ isRequiredhwHsmIp: false, })
      }
    } if (errorFlag === "hwHsmPort") {
      //console.log(this.state.isRequired);
      if (!check) {
        this.setState({ isRequiredhwHsmPort: true });

      } else {
        this.setState({ isRequiredhwHsmPort: false, })
      }
    }

    if (errorFlag === "isSafeNetHsm") {
      //console.log(this.state.isRequired);
      if (!check) {
        this.setState({ isRequiredisSafeNetHsm: true });

      } else {
        this.setState({ isRequiredisSafeNetHsm: false, })
      }
    }

    
    


    if (errorFlag === "nfsIp") {
      //console.log(this.state.isRequired);
      if (!check) {
        this.setState({ isRequirednfsIp: true });

      } else {
        this.setState({ isRequirednfsIp: false, })
      }
    }
    if (errorFlag === "nfsPort") {
      //console.log(this.state.isRequired);
      if (!check) {
        this.setState({ isRequirednfsPort: true });

      } else {
        this.setState({ isRequirednfsPort: false, })
      }
    }if (errorFlag === "pinVerifyTimeout") {
      //console.log(this.state.isRequired);
      if (!check) {
        this.setState({ isRequiredpinVerifyTimeout: true });

      } else {
        this.setState({ isRequiredpinVerifyTimeout: false, })
      }
    }if (errorFlag === "posEcomIp") {
      //console.log(this.state.isRequired);
      if (!check) {
        this.setState({ isRequiredposEcomIp: true });

      } else {
        this.setState({ isRequiredposEcomIp: false, })
      }
    }if (errorFlag === "posEcomPort") {
      //console.log(this.state.isRequired);
      if (!check) {
        this.setState({ isRequiredposEcomPort: true });

      } else {
        this.setState({ isRequiredposEcomPort: false, })
      }
    }if (errorFlag === "pvk") {
      //console.log(this.state.isRequired);
      if (!check) {
        this.setState({ isRequiredpvk: true });

      } else {
        this.setState({ isRequiredpvk: false, })
      }
    }
    if (errorFlag === "zpkAtm") {
      //console.log(this.state.isRequired);
      if (!check) {
        this.setState({ isRequiredzpkAtm: true });

      } else {
        this.setState({ isRequiredzpkAtm: false, })
      }
    } if (errorFlag === "zpkPos") {
      //console.log(this.state.isRequired);
      if (!check) {
        this.setState({ isRequiredzpkPos: true });

      } else {
        this.setState({ isRequiredzpkPos: false, })
      }
    } if (errorFlag === "isDke") {
      //console.log(this.state.isRequired);
      if (!check) {
        this.setState({ isRequiredisDke: true });

      } else {
        this.setState({ isRequiredisDke: false, })
      }
    } if (errorFlag === "zmkPos") {
      //console.log(this.state.isRequired);
      if (!check) {
        this.setState({ isRequiredzmkPos: true });

      } else {
        this.setState({ isRequiredzmkPos: false, })
      }
    } if (errorFlag === "zmkAtm") {
      //console.log(this.state.isRequired);
      if (!check) {
        this.setState({ isRequiredzmkAtm: true });

      } else {
        this.setState({ isRequiredzmkAtm: false, })
      }
    } if (errorFlag === "isOmniCbs") {
      //console.log(this.state.isRequired);
      if (!check) {
        this.setState({ isRequiredisOmniCbs: true });

      } else {
        this.setState({ isRequiredisOmniCbs: false, })
      }
    } if (errorFlag === "isMac") {
      //console.log(this.state.isRequired);
      if (!check) {
        this.setState({ isRequiredisMac: true });

      } else {
        this.setState({ isRequiredisMac: false, })
      }
    }
    if (errorFlag === "zakAtm") {
      //console.log(this.state.isRequired);
      if (!check) {
        this.setState({ isRequiredzakAtm: true });

      } else {
        this.setState({ isRequiredzakAtm: false, })
      }
    } if (errorFlag === "zakPos") {
      //console.log(this.state.isRequired);
      if (!check) {
        this.setState({ isRequiredzakPos: true });

      } else {
        this.setState({ isRequiredzakPos: false, })
      }
    } if (errorFlag === "zak") {
      //console.log(this.state.isRequired);
      if (!check) {
        this.setState({ isRequiredzak: true });

      } else {
        this.setState({ isRequiredzak: false, })
      }
    } if (errorFlag === "hsmUrl") {
      //console.log(this.state.isRequired);
      if (!check) {
        this.setState({ isRequiredhsmUrl: true });

      } else {
        this.setState({ isRequiredhsmUrl: false, })
      }
    } if (errorFlag === "smsUrl") {
      //console.log(this.state.isRequired);
      if (!check) {
        this.setState({ isRequiredsmsUrl: true });

      } else {
        this.setState({ isRequiredsmsUrl: false, })
      }
    }




  }

  submitLoginForm(e) {
    e.preventDefault();

    if (
      !this.state.isRequiredacqId  &&

      !this.state.isRequiredacqIp  &&
      
      !this.state.isRequiredacqPort  &&

      !this.state.isRequiredatmD912Port  &&
      !this.state.isRequiredatmNdcPort  &&
      // !this.state.isRequiredtenantId  &&
      // !this.state.isRequiredbankName  &&
      !this.state.isRequiredbankStatus  &&

      !this.state.isRequiredcbsInterfaceIp  &&
      !this.state.isRequiredcbsInterfaceIp_1  &&

      !this.state.isRequiredcbsInterfacePort  &&
      !this.state.isRequiredcbsInterfacePort_1  &&
      !this.state.isRequiredcbsInterfaceUrl  &&
      !this.state.isRequiredcvkAtm  &&
      !this.state.isRequiredcvkPos  &&
     // !this.state.isRequireddesAlg &&
      !this.state.isRequiredhsmIp  &&
      !this.state.isRequiredhsmPort  &&
      !this.state.isRequiredhwHsmIp  &&
      !this.state.isRequiredhwHsmPort  &&
      !this.state.isRequiredisSafeNetHsm  &&
      !this.state.isRequirednfsIp  &&
      !this.state.isRequirednfsPort  &&
      !this.state.isRequiredpinVerifyTimeout  &&
      !this.state.isRequiredposEcomIp  &&
      !this.state.isRequiredposEcomPort  &&
      !this.state.isRequiredpvk  &&
      !this.state.isRequiredzpkAtm  &&
      !this.state.isRequiredzpkPos  &&
      !this.state.isRequiredisDke  &&
      !this.state.isRequiredzmkAtm  &&
      !this.state.isRequiredzmkPos  &&
      !this.state.isRequiredisOmniCbs  &&
      !this.state.isRequiredisMac  &&
      !this.state.isRequiredzakAtm  &&
      !this.state.isRequiredzakPos  &&
      !this.state.isRequiredzak  &&
      !this.state.isRequiredhsmUrl  &&
      !this.state.isRequiredsmsUrl 
    ) {
      console.log("Form submitted");
      this.processBank(e);
    } else {
      alert("Kindly Fill the Required Fields");
    }

    //}
  }

  processBank(e) {
    let json = {
      //General
      id: this.refs.id.value,

      acqId: this.refs.acqId.value,
      acqIp: this.refs.acqIp.value,
      acqPort: this.refs.acqPort.value,
      atmD912Port: this.refs.atmD912Port.value,
      atmNdcPort: this.refs.atmNdcPort.value,
      tenantId: this.refs.tenantId.value,
      bankName: this.refs.bankName.value,
      bankStatus: this.refs.bankStatus.value,

      //CBS Details
      bdsTimeout: this.refs.bdsTimeout,
      cbsInterfaceIp: this.refs.cbsInterfaceIp.value,
      cbsInterfaceIp_1: this.refs.cbsInterfaceIp_1.value,

      cbsInterfacePort: this.refs.cbsInterfacePort.value,
      cbsInterfacePort_1: this.refs.cbsInterfacePort_1.value,
      cbsInterfaceUrl: this.refs.cbsInterfaceUrl.value,
      cvkAtm: this.refs.cvkAtm.value,
      cvkPos: this.refs.cvkPos.value,
      desAlg: this.refs.desAlg.value,

      //HSM Details
      hsmIp: this.refs.hsmIp.value,
      hsmPort: this.refs.hsmPort.value,
      hwHsmIp: this.refs.hwHsmIp.value,
      hwHsmPort: this.refs.hwHsmPort.value,
      isSafeNetHsm: this.refs.isSafeNetHsm.value,
      nfsIp: this.refs.nfsIp.value,
      nfsPort: this.refs.nfsPort.value,
      pinVerifyTimeout: this.refs.pinVerifyTimeout.value,
      posEcomIp: this.refs.posEcomIp.value,
      posEcomPort: this.refs.posEcomPort.value,
      pvk: this.refs.pvk.value,

      //Zonal Details
      zpkAtm: this.refs.zpkAtm.value,
      zpkPos: this.refs.zpkPos.value,
      isDke: this.refs.isDke.value,
      zmkAtm: this.refs.zmkAtm.value,
      zmkPos: this.refs.zmkPos.value,
      isOmniCbs: this.refs.isOmniCbs.value,
      isMac: this.refs.isMac.value,
      zakAtm: this.refs.zakAtm.value,
      zakPos: this.refs.zakPos.value,
      zak: this.refs.zak.value,
      hsmUrl: this.refs.hsmUrl.value,
      smsUrl: this.refs.smsUrl.value
    }
    console.log(json)
    updateBank(json)
      .then(res => {
        console.log(res)

        if (res.status === 200) {
          alert(res.data)
          this.setState({
            isPosted: true
          })
        }
        else {
          alert("Error Occurred")
        }
      })

  }

  yesno = () => {
    let items = [];
    items.push(<option value='Y'>Yes</option>)
    items.push(<option value='N'>No</option>)
    return items;
  }
  bankStat = () => {
    let items=[];
    items.push(<option>Select</option>)
    items.push(<option value="1">Active</option>);
    items.push(<option value="0">Inactive</option>);
    items.push(<option value="2">Out-Of-Service</option>);
    return items;
}

  pinverify() {
    let items = [];
    for (let i = 0; i <= 30; i++) {
      items.push(<option value={i}>{i} Seconds</option>);
    }
    return items;
  }

  render() {
    const bank = this.state.bank;
    return (
      <div>
        {this.state.isPosted && <Redirect to="/banks" />}
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
                                <button className="button float-right">Edit</button>   
                              </div> */}
                            {/* <div class="vspacer10"></div> */}
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
                                    <div className="ux-component ux-edit">
                                      <label className="field-active"><em>*</em>Acquire ID</label>
                                      <input type="text" required onChange={this.HandleChange} defaultValue={bank.acqId} id="acqId" name="acqId" ref="acqId" />
                                      <em className="field-message"> </em>
                                      {this.state.isRequiredacqId ? (
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
                                  <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                    <div className="ux-component ux-edit">
                                      <label className="field-active"><em>*</em>Acquire IP</label>
                                      <input type="text"  required onChange={this.HandleChange} defaultValue={bank.acqIp} id="acqIp" name="acqIp"  ref="acqIp" />
                                      <em className="field-message"> </em>
                                      <span id="validate_ip" style={{ color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem" }}></span>

                                      {this.state.isRequiredacqIp ? (
                                        <div id="validate_ip_acquirer"
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
                                  <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                    <div className="ux-component ux-edit">
                                      <label className="field-active"><em>*</em>Acquire Port</label>
                                      <input type="number" max="9999" required onChange={this.HandleChange} defaultValue={bank.acqPort} id="acqPort" name="acqPort" ref="acqPort" />
                                      <em className="field-message"> </em>
                                      {this.state.isRequiredacqPort ? (
                                        <div
                                          style={{
                                            color: "red",
                                            textAlign: "left",
                                            display: "block",
                                            fontSize: "0.8rem",
                                          }}
                                        >
                                         Only 4 Digits are Allowed
                                        </div>
                                      ) : null}
                                    </div>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                    <div className="ux-component ux-edit">
                                      <label className="field-active"><em>*</em>ATM D912 Port</label>
                                      <input type="number" max="9999" onChange={this.HandleChange} defaultValue={bank.atmD912Port} id="atmD912Port" name="atmD912Port" ref="atmD912Port" />
                                      <em className="field-message"> </em>
                                      {this.state.isRequiredatmD912Port ? (
                                        <div
                                          style={{
                                            color: "red",
                                            textAlign: "left",
                                            display: "block",
                                            fontSize: "0.8rem",
                                          }}
                                        >
                                         Only 4 Digits are Allowed
                                        </div>
                                      ) : null}
                                    </div>
                                  </div>
                                  <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                    <div className="ux-component ux-edit">
                                      <label className="field-active"><em>*</em>ATM NDC Port</label>
                                      <input type="number" max="9999" required onChange={this.HandleChange} defaultValue={bank.atmNdcPort} id="atmNdcPort" name="atmNdcPort" ref="atmNdcPort" />
                                      <em className="field-message"> </em>
                                      {this.state.isRequiredatmNdcPort ? (
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
                                  <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                    <div className="ux-component ux-edit ux-disabled1">
                                      <label className="field-active"><em>*</em>Tenant ID</label>
                                      <input className="atm" type="text"  defaultValue={bank.tenantId} disabled ref="tenantId" />
                                      <em className="field-message"> </em>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                    <div className="ux-component ux-edit ux-disabled1">
                                      <label className="field-active"><em>*</em>Bank Name</label>
                                      <input className="atm" type="text" defaultValue={bank.bankName} disabled ref="bankName" />
                                      <em className="field-message"> </em>
                                    </div>
                                  </div>
                                  <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                    <div className="ux-component ux-edit">
                                      <label className="field-active"><em>*</em>Bank Status</label>
                                      {/* <input type="text" required onChange={this.HandleChange} defaultValue={bank.bankStatus} id="bankStatus" name="bankStatus" ref="bankStatus" /> */}
                                      <select defaultValue={bank.bankStatus} onChange={this.HandleChange} id="bankStatus" name="bankStatus"  ref="bankStatus">
                                      {this.bankStat()}
                                      </select>
                                      <em className="field-message"> </em>
                                      {this.state.isRequiredbankStatus ? (
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

                                  <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                    <div className="ux-component ux-edit">
                                      <input type="text" hidden  defaultValue={bank.id} id="id" name="id" ref="id" />
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
                                    <div className="ux-component ux-edit">
                                      <label className="field-active"><em>*</em>CBS Interface Machine IP</label>
                                      <input type="text" required defaultValue={bank.cbsInterfaceIp} onChange={this.HandleChange} id="cbsInterfaceIp" name="cbsInterfaceIp" ref="cbsInterfaceIp" />
                                      <em className="field-message"> </em>
                                      <span id="validate_ip1" style={{ color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem" }}></span>

                                      {this.state.isRequiredcbsInterfaceIp ? (
                                        <div id="validate_ip_cbsinterfaceip"
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
                                  <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                    <div className="ux-component ux-edit">
                                      <label className="field-active"><em>*</em>CBS Reversal Interface Machine IP</label>
                                      <input type="text" required defaultValue={bank.cbsInterfaceIp_1} onChange={this.HandleChange} id="cbsInterfaceIp_1" name="cbsInterfaceIp_1" ref="cbsInterfaceIp_1" />
                                      <em className="field-message"> </em>
                                      <span id="validate_ip2" style={{ color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem" }}></span>
                                      {this.state.isRequiredcbsInterfaceIp_1 ? (
                                        <div
                                        id="validate_ip_cbsInterfaceIp_1"
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
                                  <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                    <div className="ux-component ux-edit">
                                      <label className="field-active"><em>*</em>CBS Interface Machine Port</label>
                                      <input type="number" max="9999" required defaultValue={bank.cbsInterfacePort} onChange={this.HandleChange} id="cbsInterfacePort" name="cbsInterfacePort" ref="cbsInterfacePort" />
                                      <em className="field-message"> </em>
                                    </div>
                                    {this.state.isRequiredcbsInterfacePort ? (
                                        <div
                                          style={{
                                            color: "red",
                                            textAlign: "left",
                                            display: "block",
                                            fontSize: "0.8rem",
                                          }}
                                        >
                                          Only 4 Digits are Allowed
                                        </div>
                                      ) : null}
                                  </div>
                                </div>
                                <div className="row">

                                  <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                    <div className="ux-component ux-edit">
                                      <label className="field-active"><em>*</em>CBS Reversal Interface Machine Port</label>
                                      <input type="number" max="9999" required defaultValue={bank.cbsInterfacePort_1} onChange={this.HandleChange} id="cbsInterfacePort_1" name="cbsInterfacePort_1" ref="cbsInterfacePort_1" />
                                      <em className="field-message"> </em>
                                    </div>
                                    {this.state.isRequiredcbsInterfacePort_1 ? (
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
                                  <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                    <div className="ux-component ux-edit">
                                      <label className="field-active"><em>*</em>CBS Interface Machine URL</label>
                                      <input type="text" required defaultValue={bank.cbsInterfaceUrl} ref="cbsInterfaceUrl" onChange={this.HandleChange} id="cbsInterfaceUrl" name="cbsInterfaceUrl" />
                                      <em className="field-message"> </em>
                                    </div>
                                    {this.state.isRequiredcbsInterfaceUrl ? (
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
                                  <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                    <div className="ux-component ux-edit">
                                      <label className="field-active"><em>*</em>Card Verification Key(CVK) For ATM</label>
                                      <input type="text" required defaultValue={bank.cvkAtm} ref="cvkAtm" onChange={this.HandleChange} id="cvkAtm" name="cvkAtm"/>
                                      <em className="field-message"> </em>
                                    </div>
                                    {this.state.isRequiredcvkAtm ? (
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
                                <div className="row">

                                  <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                    <div className="ux-component ux-edit">
                                      <label className="field-active"><em>*</em>Card Verification Key(CVK) For POS</label>
                                      <input type="text" required defaultValue={bank.cvkPos} ref="cvkPos" onChange={this.HandleChange} id="cvkPos" name="cvkPos" />
                                      <em className="field-message"> </em>
                                    </div>
                                    {this.state.isRequiredcvkPos ? (
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
                                  <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                    <div className="ux-component ux-edit">
                                      <label className="field-active"><em>(Optional)</em>Des Algorithm</label>
                                      <input type="number" max="2" required defaultValue={bank.desAlg} ref="desAlg" onChange={this.HandleChange} id="desAlg" name="desAlg" />
                                      <em className="field-message"> </em>
                                    </div>
                                     {/* {this.state.isRequireddesAlg ? (
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
                                      ) : null}  */}
                                  </div>
                                  <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                    <div className="ux-component ux-edit">
                                      <label className="field-active"><em>*</em>HSM Interface Application IP</label>
                                      <input type="text" required defaultValue={bank.hsmIp} ref="hsmIp" onChange={this.HandleChange} id="hsmIp" name="hsmIp" />
                                      <em className="field-message"> </em>
                                      <span id="validate_ip3" style={{ color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem" }}></span>
                                      {this.state.isRequiredhsmIp ? (
                                        <div
                                        id="validate_ip3_isRequiredFlaghsmIp"
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
                                  <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                    <div className="ux-component ux-edit">
                                      <label className="field-active"><em>*</em>HSM Interface Application Port</label>
                                      <input type="number" max="9999" required defaultValue={bank.hsmPort} ref="hsmPort" onChange={this.HandleChange} id="hsmPort" name="hsmPort" />
                                      <em className="field-message"> </em>
                                      {this.state.isRequiredhsmPort ? (
                                        <div
                                          style={{
                                            color: "red",
                                            textAlign: "left",
                                            display: "block",
                                            fontSize: "0.8rem",
                                          }}
                                        >
                                         Only 4 Digits are Allowed
                                        </div>
                                      ) : null}
                                    </div>
                                  </div>
                                  <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                    <div className="ux-component ux-edit">
                                      <label className="field-active"><em>*</em>HSM Interface H/W IP</label>
                                      <input type="text" required defaultValue={bank.hwHsmIp} ref="hwHsmIp" onChange={this.HandleChange} id="hwHsmIp" name="hwHsmIp" />
                                      <em className="field-message"> </em>
                                      <span id="validate_ip4" style={{ color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem" }}></span>
                                      {this.state.isRequiredhwHsmIp ? (
                                        <div
                                        id="validate_ip4_isRequiredFlaghwHsmIp"
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
                                  <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                    <div className="ux-component ux-edit">
                                      <label className="field-active"><em>*</em>HSM Interface H/W Port</label>
                                      <input type="number" max="9999" defaultValue={bank.hwHsmPort} ref="hwHsmPort" onChange={this.HandleChange} id="hwHsmPort" name="hwHsmPort" />
                                      <em className="field-message"> </em>
                                      {this.state.isRequiredhwHsmPort ? (
                                        <div
                                          style={{
                                            color: "red",
                                            textAlign: "left",
                                            display: "block",
                                            fontSize: "0.8rem",
                                          }}
                                        >
                                         Only 4 Digits are Allowed
                                        </div>
                                      ) : null}
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                    <div className="ux-component ux-edit">
                                      <label className="label-top"><em>*</em>HSM H/W is Safenet</label>
                                      <select defaultValue={bank.isSafeNetHsm} onChange={this.HandleChange} id="isSafeNetHsm" name="isSafeNetHsm"  ref="isSafeNetHsm">
                                        {this.yesno()}
                                      </select>
                                      <u />
                                      <em className="field-message"> </em>
                                      {this.state.isRequiredisSafeNetHsm ? (
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
                                  <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                    <div className="ux-component ux-edit">
                                      <label className="field-active"><em>*</em>ATM NPCI Connectivity IP</label>
                                      <input type="text" required defaultValue={bank.nfsIp}  onChange={this.HandleChange} id="nfsIp" name="nfsIp" ref="nfsIp" />
                                      <em className="field-message"> </em>
                                      <span id="validate_ip5" style={{ color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem" }}></span>
                                    </div>
                                    {this.state.isRequirednfsIp ? (
                                        <div
                                        id="validate_ip5_isRequiredFlagnfsIp"
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
                                  <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                    <div className="ux-component ux-edit">
                                      <label className="field-active"><em>*</em>ATM NPCI Connectivity Port</label>
                                      <input type="number" max="9999" required defaultValue={bank.nfsPort} onChange={this.HandleChange} id="nfsPort" name="nfsPort" ref="nfsPort" />
                                      <em className="field-message"> </em>
                                      {this.state.isRequirednfsPort ? (
                                        <div
                                          style={{
                                            color: "red",
                                            textAlign: "left",
                                            display: "block",
                                            fontSize: "0.8rem",
                                          }}
                                        >
                                        Only 4 Digits are Allowed
                                        </div>
                                      ) : null}
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                    <div className="ux-component ux-edit">
                                      <label className="field-active"><em>*</em>PIN Verification Timeout in Sec</label>
                                      {/* <input type="text" required defaultValue={bank.pinVerifyTimeout} disabled />  */}
                                      <select defaultValue={bank.pinVerifyTimeout} onChange={this.HandleChange} id="pinVerifyTimeout" name="pinVerifyTimeout" ref="pinVerifyTimeout">
                                        {this.pinverify()}
                                      </select>
                                      <em className="field-message"> </em>
                                      {this.state.isRequiredpinVerifyTimeout ? (
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
                                  <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                    <div className="ux-component ux-edit">
                                      <label className="field-active"><em>*</em>POS NPCI Connectivity IP</label>
                                      <input type="text" required defaultValue={bank.posEcomIp} onChange={this.HandleChange} id="posEcomIp" name="posEcomIp" ref="posEcomIp" />
                                      <em className="field-message"> </em>
                                      <span id="validate_ip6" style={{ color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem" }}></span>
                                      {this.state.isRequiredposEcomIp ? (
                                        <div
                                        id="validate_ip6_isRequiredFlagposEcomIp"
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
                                  <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                    <div className="ux-component ux-edit">
                                      <label className="field-active"><em>*</em>POS NPCI Connectivity Port</label>
                                      <input type="number" max="9999" required defaultValue={bank.posEcomPort} onChange={this.HandleChange} id="posEcomPort" name="posEcomPort" ref="posEcomPort" />
                                      <em className="field-message"> </em>
                                    </div>
                                    {this.state.isRequiredposEcomPort ? (
                                        <div
                                          style={{
                                            color: "red",
                                            textAlign: "left",
                                            display: "block",
                                            fontSize: "0.8rem",
                                          }}
                                        >
                                         Only 4 Digits are Allowed
                                        </div>
                                      ) : null}
                                  </div>
                                </div>
                                <div className="row">

                                  <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                    <div className="ux-component ux-edit">
                                      <label className="field-active"><em>*</em>PIN Verification Key (PVK) for Issue Card</label>
                                      <input type="text" required defaultValue={bank.pvk} ref="pvk" onChange={this.HandleChange} id="pvk" name="pvk" />
                                      <em className="field-message"> </em>
                                    </div>
                                    {this.state.isRequiredpvk ? (
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

                                <div className="vspacer20" />
                                <div className="row">
                                  <div className="col-12">
                                    <h4>Zonal Details</h4>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                    <div className="ux-component ux-edit">
                                      <label className="field-active"><em>*</em>Zonal PIN Verification Key(ZPK) for ATM</label>
                                      <input type="text" required defaultValue={bank.zpkAtm} ref="zpkAtm" onChange={this.HandleChange} id="zpkAtm" name="zpkAtm" />
                                      <em className="field-message"> </em>
                                      {this.state.isRequiredzpkAtm ? (
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
                                  <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                    <div className="ux-component ux-edit">
                                      <label className="field-active"><em>*</em>Zonal PIN Verification Key(ZPK) for POS</label>
                                      <input type="text" required defaultValue={bank.zpkPos} ref="zpkPos" onChange={this.HandleChange} id="zpkPos" name="zpkPos"/>
                                      <em className="field-message"> </em>
                                      {this.state.isRequiredzpkPos ? (
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
                                  <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                    <div className="ux-component ux-edit">
                                      <label className="label-top"><em>*</em>NPCI Dynamic Key Option</label>
                                      <select defaultValue={bank.isDke} onChange={this.HandleChange} id="isDke" name="isDke" ref="isDke">
                                        {this.yesno()}
                                      </select>
                                      <u />
                                      <em className="field-message"> </em>
                                      {this.state.isRequiredisDke ? (
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
                                  <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                    <div className="ux-component ux-edit">
                                      <label className="field-active"><em>*</em>Zonal Master Key(ZMK) for ATM</label>
                                      <input type="text" required defaultValue={bank.zmkAtm} ref="zmkAtm" onChange={this.HandleChange} id="zmkAtm" name="zmkAtm" />
                                      <em className="field-message"> </em>
                                      {this.state.isRequiredzmkAtm ? (
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
                                  <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                    <div className="ux-component ux-edit">
                                      <label className="field-active"><em>*</em>Zonal Master Key(ZMK) for POS</label>
                                      <input type="text" required defaultValue={bank.zmkPos} ref="zmkPos" onChange={this.HandleChange} id="zmkPos" name="zmkPos" />
                                      <em className="field-message"> </em>
                                      {this.state.isRequiredzmkPos ? (
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
                                  <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                    <div className="ux-component ux-edit">
                                      <label className="label-top"><em>*</em>OMNI as CBS</label>
                                      <select defaultValue={bank.isOmniCbs} ref="isOmniCbs" onChange={this.HandleChange} id="isOmniCbs" name="isOmniCbs">
                                        {this.yesno()}
                                      </select>
                                      <u />
                                      <em className="field-message"> </em>
                                      {this.state.isRequiredisOmniCbs ? (
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
                                  <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                    <div className="ux-component ux-edit">
                                      <label className="label-top"><em>*</em>NPCI Message Authentication Code(Mac Option)</label>
                                      <select defaultValue={bank.isMac} ref="isMac" onChange={this.HandleChange} id="isMac" name="isMac">
                                        {this.yesno()}
                                      </select>
                                      <u />
                                      <em className="field-message"> </em>
                                      {this.state.isRequiredisMac ? (
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
                                  <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                    <div className="ux-component ux-edit">
                                      <label className="field-active"><em>*</em>Zonal Authentication Key(ZAK) for ATM</label>
                                      <input type="text" required defaultValue={bank.zakAtm} ref="zakAtm" onChange={this.HandleChange} id="zakAtm" name="zakAtm"/>
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
                                  <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                    <div className="ux-component ux-edit">
                                      <label className="field-active"><em>*</em>Zonal Authentication Key(ZAK) for POS</label>
                                      <input type="text" required defaultValue={bank.zakPos} ref="zakPos" onChange={this.HandleChange} id="zakPos" name="zakPos" />
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
                                </div>
                                <div className="row">
                                  <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                    <div className="ux-component ux-edit">
                                      <label className="field-active"><em>*</em>Zonal Authentication Key(ZAK)</label>
                                      <input type="text" required defaultValue={bank.zak} ref="zak" onChange={this.HandleChange} id="zak" name="zak" />
                                      <em className="field-message"> </em>
                                      {this.state.isRequiredzak ? (
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
                                  <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                    <div className="ux-component ux-edit">
                                      <label className="label-top"><em>*</em>HSM URL</label>
                                      <input type="text" required defaultValue={bank.hsmUrl} ref="hsmUrl" onChange={this.HandleChange} id="hsmUrl" name="hsmUrl" />
                                      <u />
                                      <em className="field-message"> </em>
                                      {this.state.isRequiredhsmUrl ? (
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
                                  <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                    <div className="ux-component ux-edit">
                                      <label className="field-active"><em>*</em>SMS Vendor URL for OTP Message</label>
                                      <input type="text" required defaultValue={bank.smsUrl} ref="smsUrl" onChange={this.HandleChange} id="smsUrl" name="smsUrl" />
                                      <em className="field-message"> </em>
                                      {this.state.isRequiredsmsUrl ? (
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
                                  <button className="button float-right" onClick={this.submitLoginForm} >Update</button>
                                  {/* <button className="button secondary">Cancel</button> */}
                                  <Link to={{ pathname: "/bankdetails", state: { bank: this.state.bank } }} className="button secondary">Cancel</Link>
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

      </div>
    );
  }

}