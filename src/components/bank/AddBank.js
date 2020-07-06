import React, { Component } from 'react'
import HeadNavFoot from '../HeadNavFoot'
import {Link, Redirect} from 'react-router-dom'
import {addBank} from './BankCalls'
import { bankStat, pinVerifyTimeout, yesno } from './BankConstants';

export default class AddBank extends Component {

  constructor(props) {
    super(props);
    
    console.log("Edit Bank page")
    this.state = {
      isRequiredFlagacqId: false,

      isRequiredFlagacqIp: false,
      
      isRequiredFlagacqPort: false,
      isRequiredFlagatmD912Port: false,
      isRequiredFlagatmNdcPort: false,
      isRequiredFlagtenantId: false,
      isRequiredFlagbankName: false,
      isRequiredFlagbankStatus: false,

     // isRequiredFlagbdsTimeout: false,
      isRequiredFlagcbsInterfaceIp: false,
      isRequiredFlagcbsInterfaceIp_1: false,

      isRequiredFlagcbsInterfacePort: false,
      isRequiredFlagcbsInterfacePort_1: false,
      isRequiredFlagcbsInterfaceUrl: false,
      isRequiredFlagcvkAtm: false,
      isRequiredFlagcvkPos: false,
      //isRequiredFlagdesAlg: false,

      //HSM Details
      isRequiredFlaghsmIp: false,
      isRequiredFlaghsmPort: false,
      isRequiredFlaghwHsmIp: false,
      isRequiredFlaghwHsmPort: false,
      isRequiredFlagisSafeNetHsm: false,
      isRequiredFlagnfsIp: false,
      isRequiredFlagnfsPort: false,
      isRequiredFlagpinVerifyTimeout: false,
      isRequiredFlagposEcomIp: false,
      isRequiredFlagposEcomPort: false,
      isRequiredFlagpvk: false,

      //Zonal Details
      isRequiredFlagzpkAtm: false,
      isRequiredFlagzpkPos: false,
      isRequiredFlagisDke: false,
      isRequiredFlagzmkAtm: false,
      isRequiredFlagzmkPos: false,
      isRequiredFlagisOmniCbs: false,
      isRequiredFlagisMac: false,
      isRequiredFlagzakAtm: false,
      isRequiredFlagzakPos: false,
      isRequiredFlagzak: false,
      isRequiredFlaghsmUrl: false,
      isRequiredFlagsmsUrl: false,

      // bank: props.location.state.bank
      isRequiredacqId: false,

      isRequiredacqIp: false,
      
      isRequiredacqPort: false,
      isRequiredatmD912Port: false,
      isRequiredatmNdcPort: false,
      isRequiredtenantId: false,
      isRequiredbankName: false,
      isRequiredbankStatus: false,

     // isRequiredbdsTimeout: false,
      isRequiredcbsInterfaceIp: false,
      isRequiredcbsInterfaceIp_1: false,

      isRequiredcbsInterfacePort: false,
      isRequiredcbsInterfacePort_1: false,
      isRequiredcbsInterfaceUrl: false,
      isRequiredcvkAtm: false,
      isRequiredcvkPos: false,
      //isRequireddesAlg: false,

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
    }
    this.HandleChange = this.HandleChange.bind(this);
    this.submitLoginForm = this.submitLoginForm.bind(this);
  }


  componentDidMount(){
    const script = document.createElement("script");
    script.src = "js/newEffectScripts.js";
    script.async = true;
    document.body.appendChild(script);
  }

  HandleChange = async (e) => {
    const errorFlag = e.target.name;
    const check = e.target.value;

    console.log(errorFlag);


    console.log("Handle CHnage acqId-->",this.state.isRequiredacqId);
    console.log("Handle CHnage acqIp----->",this.state.isRequiredacqIp);

    if (errorFlag == "acqId") {
      console.log("Handle CHnage acqId-->",this.state.isRequiredacqId);
      console.log("Chekc value in acqId",check)
      if (check) {
        this.setState({ isRequiredacqId: true });

      } else {
        this.setState({ isRequiredacqId: false, })
      }
    }
    if (errorFlag == "acqIp") {
      //console.log(this.state.isRequired);
      console.log(" acqIp-->",this.state.isRequiredacqIp);
      if (check) {
        this.setState({ isRequiredacqIp: true });

      } else {
        this.setState({ isRequiredacqIp: false, })
      }
    }

    if (errorFlag == "acqPort") {
      //console.log(this.state.isRequired);
      if (check) {
        this.setState({ isRequiredacqPort: true });

      } else {
        this.setState({ isRequiredacqPort: false, })
      }
    }
    if (errorFlag == "atmD912Port") {
      //console.log(this.state.isRequired);
      if (check) {
        this.setState({ isRequiredatmD912Port: true });

      } else {
        this.setState({ isRequiredatmD912Port: false, })
      }
    }
    if (errorFlag == "atmNdcPort") {
      //console.log(this.state.isRequired);
      if (check) {
        this.setState({ isRequiredatmNdcPort: true });

      } else {
        this.setState({ isRequiredatmNdcPort: false, })
      }
    }
    if (errorFlag == "tenantId") {
      //console.log(this.state.isRequired);
      if (check) {
        this.setState({ isRequiredtenantId: true });

      } else {
        this.setState({ isRequiredtenantId: false, })
      }
    }
    if (errorFlag == "bankName") {
      //console.log(this.state.isRequired);
      if (check) {
        this.setState({ isRequiredbankName: true });

      } else {
        this.setState({ isRequiredbankName: false, })
      }
    }
    if (errorFlag == "bankStatus") {
      //console.log(this.state.isRequired);
      if (check) {
        this.setState({ isRequiredbankStatus: true });

      } else {
        this.setState({ isRequiredbankStatus: false, })
      }
    }
    // if (errorFlag == "bdsTimeout") {
    //   //console.log(this.state.isRequired);
    //   if (check) {
    //     this.setState({ isRequiredbdsTimeout: true });

    //   } else {
    //     this.setState({ isRequiredbdsTimeout: false, })
    //   }
    // }
    if (errorFlag == "cbsInterfaceIp") {
      //console.log(this.state.isRequired);
      if (check) {
        this.setState({ isRequiredcbsInterfaceIp: true });

      } else {
        this.setState({ isRequiredcbsInterfaceIp: false, })
      }
    }
    if (errorFlag == "cbsInterfaceIp_1") {
      //console.log(this.state.isRequired);
      if (check) {
        this.setState({ isRequiredcbsInterfaceIp_1: true });

      } else {
        this.setState({ isRequiredcbsInterfaceIp_1: false, })
      }
    }
    if (errorFlag == "cbsInterfacePort") {
      //console.log(this.state.isRequired);
      if (check) {
        this.setState({ isRequiredcbsInterfacePort: true });

      } else {
        this.setState({ isRequiredcbsInterfacePort: false, })
      }
    }
    if (errorFlag == "cbsInterfacePort_1") {
      //console.log(this.state.isRequired);
      if (check) {
        this.setState({ isRequiredcbsInterfacePort_1: true });

      } else {
        this.setState({ isRequiredcbsInterfacePort_1: false, })
      }
    }
    if (errorFlag == "cbsInterfaceUrl") {
      //console.log(this.state.isRequired);
      if (check) {
        this.setState({ isRequiredcbsInterfaceUrl: true });

      } else {
        this.setState({ isRequiredcbsInterfaceUrl: false, })
      }
    }
    if (errorFlag == "cvkAtm") {
      //console.log(this.state.isRequired);
      if (check) {
        this.setState({ isRequiredcvkAtm: true });

      } else {
        this.setState({ isRequiredcvkAtm: false, })
      }
    }

    if (errorFlag == "cvkPos") {
      //console.log(this.state.isRequired);
      if (check) {
        this.setState({ isRequiredcvkPos: true });

      } else {
        this.setState({ isRequiredcvkPos: false, })
      }
    }
    // if (errorFlag == "desAlg") {
    //   //console.log(this.state.isRequired);
    //   if (check) {
    //     this.setState({ isRequireddesAlg: true });

    //   } else {
    //     this.setState({ isRequireddesAlg: false, })
    //   }
    // }


    if (errorFlag == "hsmIp") {
      //console.log(this.state.isRequired);
      if (check) {
        this.setState({ isRequiredhsmIp: true });

      } else {
        this.setState({ isRequiredhsmIp: false, })
      }
    } if (errorFlag == "hsmPort") {
      //console.log(this.state.isRequired);
      if (check) {
        this.setState({ isRequiredhsmPort: true });

      } else {
        this.setState({ isRequiredhsmPort: false, })
      }
    } if (errorFlag == "hwHsmIp") {
      //console.log(this.state.isRequired);
      if (check) {
        this.setState({ isRequiredhwHsmIp: true });

      } else {
        this.setState({ isRequiredhwHsmIp: false, })
      }
    } if (errorFlag == "hwHsmPort") {
      //console.log(this.state.isRequired);
      if (check) {
        this.setState({ isRequiredhwHsmPort: true });

      } else {
        this.setState({ isRequiredhwHsmPort: false, })
      }
    }

    if (errorFlag == "isSafeNetHsm") {
      //console.log(this.state.isRequired);
      if (check) {
        this.setState({ isRequiredisSafeNetHsm: true });

      } else {
        this.setState({ isRequiredisSafeNetHsm: false, })
      }
    }

    
    


    if (errorFlag == "nfsIp") {
      //console.log(this.state.isRequired);
      if (check) {
        this.setState({ isRequirednfsIp: true });

      } else {
        this.setState({ isRequirednfsIp: false, })
      }
    }
    if (errorFlag == "nfsPort") {
      //console.log(this.state.isRequired);
      if (check) {
        this.setState({ isRequirednfsPort: true });

      } else {
        this.setState({ isRequirednfsPort: false, })
      }
    }if (errorFlag == "pinVerifyTimeout") {
      //console.log(this.state.isRequired);
      if (check) {
        this.setState({ isRequiredpinVerifyTimeout: true });

      } else {
        this.setState({ isRequiredpinVerifyTimeout: false, })
      }
    }if (errorFlag == "posEcomIp") {
      //console.log(this.state.isRequired);
      if (check) {
        this.setState({ isRequiredposEcomIp: true });

      } else {
        this.setState({ isRequiredposEcomIp: false, })
      }
    }if (errorFlag == "posEcomPort") {
      //console.log(this.state.isRequired);
      if (check) {
        this.setState({ isRequiredposEcomPort: true });

      } else {
        this.setState({ isRequiredposEcomPort: false, })
      }
    }if (errorFlag == "pvk") {
      //console.log(this.state.isRequired);
      if (check) {
        this.setState({ isRequiredpvk: true });

      } else {
        this.setState({ isRequiredpvk: false, })
      }
    }
    if (errorFlag == "zpkAtm") {
      //console.log(this.state.isRequired);
      if (check) {
        this.setState({ isRequiredzpkAtm: true });

      } else {
        this.setState({ isRequiredzpkAtm: false, })
      }
    } if (errorFlag == "zpkPos") {
      //console.log(this.state.isRequired);
      if (check) {
        this.setState({ isRequiredzpkPos: true });

      } else {
        this.setState({ isRequiredzpkPos: false, })
      }
    } if (errorFlag == "isDke") {
      //console.log(this.state.isRequired);
      if (check) {
        this.setState({ isRequiredisDke: true });

      } else {
        this.setState({ isRequiredisDke: false, })
      }
    } if (errorFlag == "zmkPos") {
      //console.log(this.state.isRequired);
      if (check) {
        this.setState({ isRequiredzmkPos: true });

      } else {
        this.setState({ isRequiredzmkPos: false, })
      }
    } if (errorFlag == "zmkAtm") {
      //console.log(this.state.isRequired);
      if (check) {
        this.setState({ isRequiredzmkAtm: true });

      } else {
        this.setState({ isRequiredzmkAtm: false, })
      }
    } if (errorFlag == "isOmniCbs") {
      //console.log(this.state.isRequired);
      if (check) {
        this.setState({ isRequiredisOmniCbs: true });

      } else {
        this.setState({ isRequiredisOmniCbs: false, })
      }
    } if (errorFlag == "isMac") {
      //console.log(this.state.isRequired);
      if (check) {
        this.setState({ isRequiredisMac: true });

      } else {
        this.setState({ isRequiredisMac: false, })
      }
    }
    if (errorFlag == "zakAtm") {
      //console.log(this.state.isRequired);
      if (check) {
        this.setState({ isRequiredzakAtm: true });

      } else {
        this.setState({ isRequiredzakAtm: false, })
      }
    } if (errorFlag == "zakPos") {
      //console.log(this.state.isRequired);
      if (check) {
        this.setState({ isRequiredzakPos: true });

      } else {
        this.setState({ isRequiredzakPos: false, })
      }
    } if (errorFlag == "zak") {
      //console.log(this.state.isRequired);
      if (check) {
        this.setState({ isRequiredzak: true });

      } else {
        this.setState({ isRequiredzak: false, })
      }
    } if (errorFlag == "hsmUrl") {
      //console.log(this.state.isRequired);
      if (check) {
        this.setState({ isRequiredhsmUrl: true });

      } else {
        this.setState({ isRequiredhsmUrl: false, })
      }
    } if (errorFlag == "smsUrl") {
      //console.log(this.state.isRequired);
      if (check) {
        this.setState({ isRequiredsmsUrl: true });

      } else {
        this.setState({ isRequiredsmsUrl: false, })
      }
    }




  }


  submitLoginForm(e) {

    e.preventDefault();
    
    let submitFlag = true;

    
    if(this.state.isRequiredacqId == false ){    submitFlag = false;
      this.setState({isRequiredFlagacqId: true})
      
    }else{ submitFlag = true;
      this.setState({isRequiredFlagacqId: false})
    }

    if(this.state.isRequiredacqIp == false ){    submitFlag = false;
      this.setState({isRequiredFlagacqIp: true})
    }else{ submitFlag = true;
      this.setState({isRequiredFlagacqIp: false})
    }

    if(this.state.isRequiredacqPort == false ){    submitFlag = false;
      
      this.setState({isRequiredFlagacqPort: true})
    }else{ submitFlag = true;
      this.setState({isRequiredFlagacqPort: false})

    }

    if(this.state.isRequiredatmD912Port == false ){    submitFlag = false;
      
      this.setState({isRequiredFlagatmD912Port: true})
    }else{ submitFlag = true;
      this.setState({isRequiredFlagatmD912Port: false})

    }
    
     
    if(this.state.isRequiredatmNdcPort == false ){    submitFlag = false;
      
      this.setState({isRequiredFlagatmNdcPort: true})
    }else{ submitFlag = true;
      this.setState({isRequiredFlagatmNdcPort: false})

    }

    
    if(this.state.isRequiredtenantId == false ){    submitFlag = false;
      
      this.setState({isRequiredFlagtenantId: true})
    }else{ submitFlag = true;
      this.setState({isRequiredFlagtenantId: false})

    }

     
    if(this.state.isRequiredbankName == false ){    submitFlag = false;
      
      this.setState({isRequiredFlagbankName: true})
    }else{ submitFlag = true;
      this.setState({isRequiredFlagbankName: false})

    }

     
    if(this.state.isRequiredbankStatus == false ){    submitFlag = false;
      
      this.setState({isRequiredFlagbankStatus: true})
    }else{ submitFlag = true;
      this.setState({isRequiredFlagbankStatus: false})

    }

    
     
    if(this.state.isRequiredcbsInterfaceIp == false ){    submitFlag = false;
      
      this.setState({isRequiredFlagcbsInterfaceIp: true})
    }else{ submitFlag = true;
      this.setState({isRequiredFlagcbsInterfaceIp: false})

    }

    
     
    if(this.state.isRequiredcbsInterfaceIp_1 == false ){    submitFlag = false;
      
      this.setState({isRequiredFlagcbsInterfaceIp_1: true})
    }else{ submitFlag = true;
      this.setState({isRequiredFlagcbsInterfaceIp_1: false})

    }


    
     
    if(this.state.isRequiredcbsInterfacePort == false ){    submitFlag = false;
      
      this.setState({isRequiredFlagcbsInterfacePort: true})
    }else{ submitFlag = true;
      this.setState({isRequiredFlagcbsInterfacePort: false})

    }

    if(this.state.isRequiredcbsInterfacePort_1 == false ){    submitFlag = false;
      
      this.setState({isRequiredFlagcbsInterfacePort_1: true})
    }else{ submitFlag = true;
      this.setState({isRequiredFlagcbsInterfacePort_1: false})

    }

    if(this.state.isRequiredcbsInterfaceUrl == false ){    submitFlag = false;
      
      this.setState({isRequiredFlagcbsInterfaceUrl: true})
    }else{ submitFlag = true;
      this.setState({isRequiredFlagcbsInterfaceUrl: false})

    }

    if(this.state.isRequiredcvkAtm == false ){    submitFlag = false;
      
      this.setState({isRequiredFlagcvkAtm: true})
    }else{ submitFlag = true;
      this.setState({isRequiredFlagcvkAtm: false})

    }

    if(this.state.isRequiredcvkPos == false ){    submitFlag = false;
      
      this.setState({isRequiredFlagcvkPos: true})
    }else{ submitFlag = true;
      this.setState({isRequiredFlagcvkPos: false})

    }

    // if(this.state.isRequireddesAlg == false ){    submitFlag = false;
      
    //   this.setState({isRequiredFlagdesAlg: true})
    // }else{ submitFlag = true;
    //   this.setState({isRequiredFlagdesAlg: false})

    // }

    if(this.state.isRequiredhsmIp == false ){    submitFlag = false;
      
      this.setState({isRequiredFlaghsmIp: true})
    }else{ submitFlag = true;
      this.setState({isRequiredFlaghsmIp: false})

    }

    if(this.state.isRequiredhsmPort == false ){    submitFlag = false;
      
      this.setState({isRequiredFlaghsmPort: true})
    }else{ submitFlag = true;
      this.setState({isRequiredFlaghsmPort: false})

    }

    if(this.state.isRequiredhwHsmIp == false ){    submitFlag = false;
      
      this.setState({isRequiredFlaghwHsmIp: true})
    }else{ submitFlag = true;
      this.setState({isRequiredFlaghwHsmIp: false})

    }

    if(this.state.isRequiredhwHsmPort == false ){    submitFlag = false;
      
      this.setState({isRequiredFlaghwHsmPort: true})
    }else{ submitFlag = true;
      this.setState({isRequiredFlaghwHsmPort: false})

    }

    if(this.state.isRequiredisSafeNetHsm == false ){    submitFlag = false;
      
      this.setState({isRequiredFlagisSafeNetHsm: true})
    }else{ submitFlag = true;
      this.setState({isRequiredFlagisSafeNetHsm: false})

    }


    if(this.state.isRequirednfsIp == false ){    submitFlag = false;
      
      this.setState({isRequiredFlagnfsIp: true})
    }else{ submitFlag = true;
      this.setState({isRequiredFlagnfsIp: false})

    }

    if(this.state.isRequirednfsPort == false ){    submitFlag = false;
      
      this.setState({isRequiredFlagnfsPort: true})
    }else{ submitFlag = true;
      this.setState({isRequiredFlagnfsPort: false})

    }

    if(this.state.isRequiredpinVerifyTimeout == false ){    submitFlag = false;
      
      this.setState({isRequiredFlagpinVerifyTimeout: true})
    }else{ submitFlag = true;
      this.setState({isRequiredFlagpinVerifyTimeout: false})

    }

    if(this.state.isRequiredposEcomIp == false ){    submitFlag = false;
      
      this.setState({isRequiredFlagposEcomIp: true})
    }else{ submitFlag = true;
      this.setState({isRequiredFlagposEcomIp: false})

    }
    
    
    if(this.state.isRequiredposEcomPort == false ){    submitFlag = false;
      
      this.setState({isRequiredFlagposEcomPort: true})
    }else{ submitFlag = true;
      this.setState({isRequiredFlagposEcomPort: false})

    }
    

    
    if(this.state.isRequiredpvk == false ){    submitFlag = false;
      
      this.setState({isRequiredFlagpvk: true})
    }else{ submitFlag = true;
      this.setState({isRequiredFlagpvk: false})

    }
    

    
    if(this.state.isRequiredzpkAtm == false ){    submitFlag = false;
      
      this.setState({isRequiredFlagzpkAtm: true})
    }else{ submitFlag = true;
      this.setState({isRequiredFlagzpkAtm: false})

    }
    
    if(this.state.isRequiredzpkPos == false ){    submitFlag = false;
      
      this.setState({isRequiredFlagzpkPos: true})
    }else{ submitFlag = true;
      this.setState({isRequiredFlagzpkPos: false})

    }
    

    if(this.state.isRequiredisDke == false ){    submitFlag = false;
      
      this.setState({isRequiredFlagisDke: true})
    }else{ submitFlag = true;
      this.setState({isRequiredFlagisDke: false})

    }

    if(this.state.isRequiredzmkAtm == false ){    submitFlag = false;
      
      this.setState({isRequiredFlagzmkAtm: true})
    }else{ submitFlag = true;
      this.setState({isRequiredFlagzmkAtm: false})

    }

    if(this.state.isRequiredzmkPos == false ){    submitFlag = false;
      
      this.setState({isRequiredFlagzmkPos: true})
    }else{ submitFlag = true;
      this.setState({isRequiredFlagzmkPos: false})

    }

    
    if(this.state.isRequiredisOmniCbs == false ){    submitFlag = false;
      
      this.setState({isRequiredFlagisOmniCbs: true})
    }else{ submitFlag = true;
      this.setState({isRequiredFlagisOmniCbs: false})

    }
    

    
    if(this.state.isRequiredisMac == false ){    submitFlag = false;
      
      this.setState({isRequiredFlagisMac: true})
    }else{ submitFlag = true;
      this.setState({isRequiredFlagisMac: false})

    }
    

    
    if(this.state.isRequiredzakAtm == false ){    submitFlag = false;
      
      this.setState({isRequiredFlagzakAtm: true})
    }else{ submitFlag = true;
      this.setState({isRequiredFlagzakAtm: false})

    }

    if(this.state.isRequiredzakPos == false ){    submitFlag = false;
      
      this.setState({isRequiredFlagzakPos: true})
    }else{ submitFlag = true;
      this.setState({isRequiredFlagzakPos: false})

    }

    if(this.state.isRequiredzak == false ){    submitFlag = false;
      
      this.setState({isRequiredFlagzak: true})
    }else{ submitFlag = true;
      this.setState({isRequiredFlagzak: false})

    }

    if(this.state.isRequiredhsmUrl == false ){    submitFlag = false;
      
      this.setState({isRequiredFlaghsmUrl: true})
    }else{ submitFlag = true;
      this.setState({isRequiredFlaghsmUrl: false})

    }

    if(this.state.isRequiredsmsUrl == false ){    submitFlag = false;
      
      this.setState({isRequiredFlagsmsUrl: true})
    }else{ submitFlag = true;
      this.setState({isRequiredFlagsmsUrl: false})

    }
    
    // alert(submitFlag)
    if(submitFlag){
      // alert("Form Submitted")
      this.processBank(e);
    }else{
      alert("Kindly fill all Required Fields")
    }
    

}

  processBank(e) {
    let json = {
      //General
      //id : this.refs.id.value,
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
    addBank(json).then(res=>{
      console.log(res)
      
      if(res.status===200){
        alert(res.data);
        this.setState({
          isPosted:true
        })
      }
      else{
        alert("Error Occurred")
      }
    })
  }



  render() {
    return (
      <div>
        {this.state.posted && <Redirect to="/banks"/>}
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
                                Add Bank
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
                                    <h2>Add Bank</h2>
                                  </div>
                                  <div className="col-sm-12 col-md-12">
                                  </div>
                                </div>
                              </div>
                              {/* .dt-header */}
                            </div>
                            <div className="role-container">
                              <div className="role-content">
                                <form action="#">
                                  <div className="row">
                                    <div className="col-12">
                                      <h4>General</h4>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                      <div className="ux-component">
                                        <label><em>*</em>Acquire ID</label>
                                        <input type="text" ref="acqId" name="acqId" id="acqId"
                                          onChange={this.HandleChange}
                                          required
                                          maxLength="6"
                                        />
                                        <em className="field-message"> </em>
                                      </div>
                                      {this.state.isRequiredFlagacqId ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>6 Characters are Allowed.</div> : null
                                      }
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                      <div className="ux-component">
                                        <label><em>*</em>Acquire IP</label>
                                        <input type="text" ref="acqIp" name="acqIp" id="acqIp"
                                          onChange={this.HandleChange}
                                          
                                          required />
                                        <em className="field-message"> </em>
                                      </div>
                                      <span id="validate_ip" style={{ color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem" }}></span>
                                      {this.state.isRequiredFlagacqIp ?

                                        <div id="validate_ip_acquirer" style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>This Field is Required</div> : null
                                      }
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                      <div className="ux-component">
                                        <label><em>*</em>Acquire Port</label>
                                        <input type="number" ref="acqPort" name="acqPort" id="acqPort"
                                          onChange={this.HandleChange}
                                          max="9999"
                                          required
                                        />
                                        <em className="field-message"> </em>
                                      </div>
                                      {this.state.isRequiredFlagacqPort ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>Only 4 Digits are Allowed</div> : null
                                      }
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                      <div className="ux-component">
                                        <label><em>*</em>ATM D912 Port</label>
                                        <input type="number" ref="atmD912Port" name="atmD912Port" id="atmD912Port"
                                          onChange={this.HandleChange}
                                          max="9999"
                                          required />
                                        <em className="field-message"> </em>
                                      </div>
                                      {this.state.isRequiredFlagatmD912Port ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>Only 4 Digits are Allowed</div> : null
                                      }
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                      <div className="ux-component">
                                        <label><em>*</em>ATM NDC Port</label>
                                        <input type="number" ref="atmNdcPort" name="atmNdcPort" id="atmNdcPort"
                                          onChange={this.HandleChange}
                                          max="9999"
                                          required />
                                        <em className="field-message"> </em>
                                      </div>
                                      {this.state.isRequiredFlagatmNdcPort ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>Only 4 Digits are Allowed</div> : null
                                      }
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                      <div className="ux-component">
                                        <label><em>*</em>Tenant ID</label>
                                        <input type="number" ref="tenantId" name="tenantId" id="tenantId"
                                          onChange={this.HandleChange}
                                          min="10000"
                                          max="99999"
                                          required />
                                        <em className="field-message"> </em>
                                      </div>
                                      {this.state.isRequiredFlagtenantId ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>Only 5 Digits are Allowed</div> : null
                                      }
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                      <div className="ux-component">
                                        <label><em>*</em>Bank Name</label>
                                        <input type="text" ref="bankName" name="bankName" id="bankName"
                                          onChange={this.HandleChange}
                                          maxLength="50"
                                          required />
                                        <em className="field-message"> </em>
                                      </div>
                                      {this.state.isRequiredFlagbankName ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>This Field is Required with 50 Characters</div> : null
                                      }
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6">
                                      {/* <div className="ux-component">
                                        <label  className="label-top" ><em>*</em>Bank Status</label>
                                        <select  ref="bankStatus" name="bankStatus" id="bankStatus"
                                          onChange={this.HandleChange}
                                          required >
                                            {bankStat()}
                                        </select>
                                        <em className="field-message"> </em>
                                      </div> */}
                                      <div className="ux-component">
                                        <label className="label-top"><em>*</em>Bank Status</label>
                                        <select ref="bankStatus" name="bankStatus" id="bankStatus"
                                          onChange={this.HandleChange}
                                          required>
                                          {bankStat()}
                                        </select>
                                        <u />
                                        <em className="field-message"> </em>
                                      </div>
                                      {this.state.isRequiredFlagbankStatus ?

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
                                      <h4>CBS &amp; HSM Details</h4>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                      <div className="ux-component">
                                        <label><em>*</em>CBS Interface Machine IP</label>
                                        <input type="text" ref="cbsInterfaceIp" name="cbsInterfaceIp" id="cbsInterfaceIp"
                                          onChange={this.HandleChange}
                                          maxLength="15"
                                          required />
                                        <em className="field-message"> </em>
                                      </div>
                                      <span id="validate_ip1" style={{ color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem" }}></span>

                                      {this.state.isRequiredFlagcbsInterfaceIp ?

                                        <div id="validate_ip_cbsinterfaceip" style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>This Field is Required</div> : null
                                      }
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                      <div className="ux-component">
                                        <label><em>*</em>CBS Reversal Interface Machine IP</label>
                                        <input type="text" ref="cbsInterfaceIp_1" name="cbsInterfaceIp_1" id="cbsInterfaceIp_1"
                                          maxLength="15"
                                          onChange={this.HandleChange}
                                          required />
                                        <em className="field-message"> </em>
                                      </div>
                                      <span id="validate_ip2" style={{ color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem" }}></span>
                                      {this.state.isRequiredFlagcbsInterfaceIp_1 ?

                                        <div id="validate_ip_cbsInterfaceIp_1" style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>This Field is Required</div> : null
                                      }
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                      <div className="ux-component">
                                        <label><em>*</em>CBS Interface Machine Port</label>
                                        <input type="number" ref="cbsInterfacePort" name="cbsInterfacePort" id="cbsInterfacePort"
                                          onChange={this.HandleChange}
                                          max="9999"
                                          required />
                                        <em className="field-message"> </em>
                                      </div>
                                      {this.state.isRequiredFlagcbsInterfacePort ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>Only 4 digits are Allowed</div> : null
                                      }
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                      <div className="ux-component">
                                        <label><em>*</em>CBS Reversal Interface Machine Port</label>
                                        <input type="number" ref="cbsInterfacePort_1" name="cbsInterfacePort_1" id="cbsInterfacePort_1"
                                          onChange={this.HandleChange}
                                          max="9999"
                                          required />
                                        <em className="field-message"> </em>
                                      </div>
                                      {this.state.isRequiredFlagcbsInterfacePort_1 ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>This Field is Required</div> : null
                                      }
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                      <div className="ux-component">
                                        <label><em>*</em>CBS Interface Machine URL</label>
                                        <input type="text" ref="cbsInterfaceUrl" name="cbsInterfaceUrl" id="cbsInterfaceUrl"
                                          onChange={this.HandleChange}
                                          maxLength="150"
                                          required />
                                        <em className="field-message"> </em>
                                      </div>
                                      {this.state.isRequiredFlagcbsInterfaceUrl ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>This Field is Required</div> : null
                                      }
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                      <div className="ux-component">
                                        <label><em>*</em>Card Verification Key(CVK) For ATM</label>
                                        <input type="text" ref="cvkAtm" name="cvkAtm" id="cvkAtm"
                                          onChange={this.HandleChange}
                                          maxLength="32"
                                          required />
                                        <em className="field-message"> </em>
                                      </div>
                                      {this.state.isRequiredFlagcvkAtm ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>32 Characters are Allowed</div> : null
                                      }
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                      <div className="ux-component">
                                        <label><em>*</em>Card Verification Key(CVK) For POS</label>
                                        <input type="text" ref="cvkPos" name="cvkPos" id="cvkPos"
                                          onChange={this.HandleChange}
                                          maxLength="32"
                                          required />
                                        <em className="field-message"> </em>
                                      </div>
                                      {this.state.isRequiredFlagcvkPos ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>32 Characters are Allowed</div> : null
                                      }
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                      <div className="ux-component">
                                        <label><em>(Optional)</em>Des Algorithm</label>
                                        <input type="number" ref="desAlg" name="desAlg" id="desAlg"
                                          onChange={this.HandleChange}
                                          min="1"
                                          max="9"
                                           />
                                        <em className="field-message"> </em>
                                      </div>
                                      {/* {this.state.isRequiredFlagdesAlg ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>(Optional)Only 1 Digit is Allowed</div> : null
                                      } */}
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                      <div className="ux-component">
                                        <label><em>*</em>HSM Interface Application IP</label>
                                        <input type="text" ref="hsmIp" name="hsmIp" id="hsmIp"
                                          onChange={this.HandleChange}
                                          maxLength="15"
                                          required />
                                        <em className="field-message"> </em>
                                      </div>
                                      <span id="validate_ip3" style={{ color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem" }}></span>
                                      {this.state.isRequiredFlaghsmIp ?

                                        <div id="validate_ip3_isRequiredFlaghsmIp" style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>This Field is Required</div> : null
                                      }
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                      <div className="ux-component">
                                        <label><em>*</em>HSM Interface Application Port</label>
                                        <input type="number" ref="hsmPort" name="hsmPort" id="hsmPort"
                                          onChange={this.HandleChange}
                                          max="9999"
                                          required />
                                        <em className="field-message"> </em>
                                      </div>
                                      {this.state.isRequiredFlaghsmPort ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>Only 4 digits are Allowed</div> : null
                                      }

                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                      <div className="ux-component">
                                        <label><em>*</em>HSM Interface H/W IP</label>
                                        <input type="text" ref="hwHsmIp" name="hwHsmIp" id="hwHsmIp"
                                          onChange={this.HandleChange}
                                          required />
                                        <em className="field-message"> </em>
                                      </div>
                                      <span id="validate_ip4" style={{ color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem" }}></span>
                                      {this.state.isRequiredFlaghwHsmIp ?

                                        <div id="validate_ip4_isRequiredFlaghwHsmIp" style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>This Field is Required</div> : null
                                      }
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                      <div className="ux-component">
                                        <label><em>*</em>HSM Interface H/W Port</label>
                                        <input type="number" ref="hwHsmPort" name="hwHsmPort" id="hwHsmPort"
                                          onChange={this.HandleChange}
                                          max="9999"
                                          required />
                                        <em className="field-message"> </em>
                                        {this.state.isRequiredFlaghwHsmPort ?

                                          <div style={{
                                            color: "red", textAlign: "left",
                                            display: "block",
                                            fontSize: "0.8rem"
                                          }}>This Field is Required</div> : null
                                        }
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                      <div className="ux-component">
                                        <label className="label-top"><em>*</em>HSM H/W is Safenet</label>
                                        <select ref="isSafeNetHsm" name="isSafeNetHsm" id="isSafeNetHsm"
                                          onChange={this.HandleChange}
                                          required>
                                          {yesno()}
                                        </select>
                                        <u />
                                        <em className="field-message"> </em>
                                      </div>
                                      {this.state.isRequiredFlagisSafeNetHsm ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>This Field is Required</div> : null
                                      }
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                      <div className="ux-component">
                                        <label><em>*</em>ATM NPCI Connectivity IP</label>
                                        <input type="text" ref="nfsIp" name="nfsIp" id="nfsIp"
                                          onChange={this.HandleChange}
                                          required />
                                        <em className="field-message"> </em>
                                      </div>
                                      <span id="validate_ip5" style={{ color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem" }}></span>

                                      {this.state.isRequiredFlagnfsIp ?

                                        <div id="validate_ip5_isRequiredFlagnfsIp" style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>This Field is Required</div> : null
                                      }
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                      <div className="ux-component">
                                        <label><em>*</em>ATM NPCI Connectivity Port</label>
                                        <input type="number" ref="nfsPort" name="nfsPort" id="nfsPort"
                                          onChange={this.HandleChange}
                                          max="9999"
                                          required />
                                        <em className="field-message"> </em>
                                      </div>
                                      {this.state.isRequiredFlagnfsPort ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>Only 4 digits are Allowed</div> : null
                                      }
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                      {/* <div className="ux-component">
                                        <label  className="label-top"><em>*</em>PIN Verification Timeout in Sec</label>
                                        <select ref="pinVerifyTimeout" name="pinVerifyTimeout" id="pinVerifyTimeout"
                                          onChange={this.HandleChange}
                                          required >
                                            {pinVerifyTimeout()}
                                        </select>
                                        <em className="field-message"> </em>
                                      </div> */}
                                      <div className="ux-component">
                                        <label className="label-top"><em>*</em>PIN Verification Timeout in Sec</label>
                                        <select ref="pinVerifyTimeout" name="pinVerifyTimeout" id="pinVerifyTimeout"
                                          onChange={this.HandleChange}
                                          required>
                                          {pinVerifyTimeout()}
                                        </select>
                                        <u />
                                        <em className="field-message"> </em>
                                      </div>
                                      {this.state.isRequiredFlagpinVerifyTimeout ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>This Field is Required</div> : null
                                      }
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                      <div className="ux-component">
                                        <label><em>*</em>POS NPCI Connectivity IP</label>
                                        <input type="text" ref="posEcomIp" name="posEcomIp" id="posEcomIp"
                                          onChange={this.HandleChange}
                                          required />
                                        <em className="field-message"> </em>
                                      </div>
                                      <span id="validate_ip6" style={{ color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem" }}></span>
                                      {this.state.isRequiredFlagposEcomIp ?

                                        <div id="validate_ip6_isRequiredFlagposEcomIp" style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>This Field is Required</div> : null
                                      }
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                      <div className="ux-component">
                                        <label><em>*</em>POS NPCI Connectivity Port</label>
                                        <input type="number" ref="posEcomPort" name="posEcomPort" id="posEcomPort"
                                          onChange={this.HandleChange}
                                          max="9999"
                                          required />
                                        <em className="field-message"> </em>
                                      </div>
                                      {this.state.isRequiredFlagposEcomPort ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>This Field is Required</div> : null
                                      }
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                      <div className="ux-component">
                                        <label><em>*</em>PIN Verification Key (PVK) for Issue Card</label>
                                        <input type="text" ref="pvk" name="pvk" id="pvk"
                                          onChange={this.HandleChange}
                                          maxLength="32"
                                          required />
                                        <em className="field-message"> </em>
                                      </div>
                                      {this.state.isRequiredFlagpvk ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>This Field is Required with 32 Characters</div> : null
                                      }
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
                                      <div className="ux-component">
                                        <label><em>*</em>Zonal PIN Verification Key(ZPK) for ATM</label>
                                        <input type="text" ref="zpkAtm" name="zpkAtm" id="zpkAtm"
                                          onChange={this.HandleChange}
                                          maxLength="32"
                                          required />
                                        <em className="field-message"> </em>
                                      </div>
                                      {this.state.isRequiredFlagzpkAtm ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>This Field is Required with 32 Characters</div> : null
                                      }
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                      <div className="ux-component">
                                        <label><em>*</em>Zonal PIN Verification Key(ZPK) for POS</label>
                                        <input type="text" ref="zpkPos" name="zpkPos" id="zpkPos"
                                          onChange={this.HandleChange}
                                          maxLength="32"
                                          required />
                                        <em className="field-message"> </em>
                                      </div>
                                      {this.state.isRequiredFlagzpkPos ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>This Field is Required with 32 Characters</div> : null
                                      }
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                      <div className="ux-component">
                                        <label className="label-top"><em>*</em>NPCI Dynamic Key Option</label>
                                        <select ref="isDke" name="isDke" id="isDke"
                                          onChange={this.HandleChange}
                                          
                                          required>
                                          {yesno()}
                                        </select>
                                        <u />
                                        <em className="field-message"> </em>
                                      </div>
                                      {this.state.isRequiredFlagisDke ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>This Field is Required.</div> : null
                                      }
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                      <div className="ux-component">
                                        <label><em>*</em>Zonal Master Key(ZMK) for ATM</label>
                                        <input type="text" ref="zmkAtm" name="zmkAtm" id="zmkAtm"
                                          onChange={this.HandleChange}
                                          maxLength="32"
                                          required />
                                        <em className="field-message"> </em>
                                      </div>
                                      {this.state.isRequiredFlagzmkAtm ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>This Field is Required with 32 Characters</div> : null
                                      }
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                      <div className="ux-component">
                                        <label><em>*</em>Zonal Master Key(ZMK) for POS</label>
                                        <input type="text" ref="zmkPos" name="zmkPos" id="zmkPos"
                                          onChange={this.HandleChange}
                                          maxLength="32"
                                          required />
                                        <em className="field-message"> </em>
                                      </div>
                                      {this.state.isRequiredFlagzmkPos ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>This Field is Required with 32 Characters</div> : null
                                      }
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                      <div className="ux-component">
                                        <label className="label-top"><em>*</em>OMNI as CBS</label>
                                        <select ref="isOmniCbs" name="isOmniCbs" id="isOmniCbs"
                                          onChange={this.HandleChange}
                                          required>
                                          {yesno()}
                                        </select>
                                        <u />
                                        <em className="field-message"> </em>
                                      </div>
                                      {this.state.isRequiredFlagisOmniCbs ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>This Field is Required</div> : null
                                      }
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                      <div className="ux-component">
                                        <label className="label-top"><em>*</em>NPCI Message Authentication Code(Mac Option)</label>
                                        <select ref="isMac" name="isMac" id="isMac"
                                          onChange={this.HandleChange}
                                          required>
                                          {yesno()}
                                        </select>
                                        <u />
                                        <em className="field-message"> </em>
                                      </div>
                                      {this.state.isRequiredFlagisMac ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>This Field is Required</div> : null
                                      }
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                      <div className="ux-component">
                                        <label><em>*</em>Zonal Authentication Key(ZAK) for ATM</label>
                                        <input type="text" ref="zakAtm" name="zakAtm" id="zakAtm"
                                          onChange={this.HandleChange}
                                          maxLength="32"
                                          required />
                                        <em className="field-message"> </em>
                                      </div>
                                      {this.state.isRequiredFlagzakAtm ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>This Field is Required with 32 Characters</div> : null
                                      }
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                      <div className="ux-component">
                                        <label><em>*</em>Zonal Authentication Key(ZAK) for POS</label>
                                        <input type="text" ref="zakPos" name="zakPos" id="zakPos"
                                          onChange={this.HandleChange}
                                          maxLength="32"
                                          required />
                                        <em className="field-message"> </em>
                                      </div>
                                      {this.state.isRequiredFlagzakPos ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>This Field is Required with 32 Characters</div> : null
                                      }
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                      <div className="ux-component">
                                        <label><em>*</em>Zonal Authentication Key(ZAK)</label>
                                        <input type="text" ref="zak" name="zak" id="zak"
                                          onChange={this.HandleChange}
                                          max="32"
                                          required />
                                        <em className="field-message"> </em>
                                      </div>
                                      {this.state.isRequiredFlagzak ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>This Field is Required with 32 Characters</div> : null
                                      }
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                      <div className="ux-component">
                                        <label><em>*</em>HSM URL</label>
                                        <input type="text" ref="hsmUrl" name="hsmUrl" id="hsmUrl"
                                          onChange={this.HandleChange}
                                          maxLength="150"
                                          required />
                                        <em className="field-message"> </em>
                                      </div>
                                      {this.state.isRequiredFlaghsmUrl ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>This Field is Required</div> : null
                                      }
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                      <div className="ux-component">
                                        <label><em>*</em>SMS Vendor URL for OTP Message</label>
                                        <input type="text" ref="smsUrl" name="smsUrl" id="smsUrl"
                                          onChange={this.HandleChange}
                                          maxLength="150"
                                          required />
                                        <em className="field-message"> </em>
                                      </div>
                                      {this.state.isRequiredFlagsmsUrl ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>This Field is Required</div> : null
                                      }
                                    </div>
                                  </div>
                                  <div className="grid-footer mar20 pb-0 mt-4">
                                    <button className="button float-right"  onClick={this.submitLoginForm} >Submit</button>
                                    <Link to="/banks" className="button secondary" >Cancel</Link>
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
